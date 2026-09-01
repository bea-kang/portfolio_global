/**
 * Renders /<lang>/print to a PDF, so the portfolio can be attached to
 * applications that only take a file upload.
 *
 *   npm run pdf            # needs the site running on PORT (default 3000)
 *
 * Drives the installed Chrome over the DevTools protocol rather than
 * pulling in Puppeteer: the only thing this needs beyond `--print-to-pdf`
 * is control over paper size and background printing, and CDP gives that
 * for the cost of one WebSocket.
 */
import { spawn } from "node:child_process";
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const CHROME =
  process.env.CHROME_PATH ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const ORIGIN = `http://127.0.0.1:${process.env.PORT ?? 3000}`;
const PORT = 9333;

const TARGETS = [
  { lang: "ko", file: "public/Yebeen-Kang-Portfolio-KO.pdf" },
  { lang: "en", file: "public/Yebeen-Kang-Portfolio-EN.pdf" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForDevTools() {
  for (let i = 0; i < 100; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/version`);
      if (res.ok) return;
    } catch {}
    await sleep(200);
  }
  throw new Error("Chrome never opened its debugging port");
}

/** Minimal CDP client: send a command, resolve on the matching id. */
function connect(url) {
  const ws = new WebSocket(url);
  const pending = new Map();
  const waiters = [];
  let nextId = 1;

  ws.addEventListener("message", (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      const { resolve, reject } = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) reject(new Error(msg.error.message));
      else resolve(msg.result);
      return;
    }
    for (const w of waiters.splice(0)) {
      if (w.method === msg.method) w.resolve(msg.params);
      else waiters.push(w);
    }
  });

  return {
    ready: new Promise((resolve, reject) => {
      ws.addEventListener("open", () => resolve());
      ws.addEventListener("error", () => reject(new Error("CDP socket failed")));
    }),
    send: (method, params = {}) =>
      new Promise((resolve, reject) => {
        const id = nextId++;
        pending.set(id, { resolve, reject });
        ws.send(JSON.stringify({ id, method, params }));
      }),
    once: (method) => new Promise((resolve) => waiters.push({ method, resolve })),
    close: () => ws.close(),
  };
}

async function render(target, lang, file) {
  const cdp = connect(target.webSocketDebuggerUrl);
  await cdp.ready;
  await cdp.send("Page.enable");

  const loaded = cdp.once("Page.loadEventFired");
  await cdp.send("Page.navigate", { url: `${ORIGIN}/${lang}/print` });
  await loaded;

  // The load event fires before webfonts swap in and before lazily
  // decoded screenshots have pixels, either of which would print blank.
  await cdp.send("Runtime.evaluate", {
    awaitPromise: true,
    expression: `Promise.all([
      document.fonts.ready,
      ...[...document.images].map(img =>
        img.complete ? null : new Promise(r => { img.onload = img.onerror = r })
      ),
    ])`,
  });
  await sleep(500);

  const { data } = await cdp.send("Page.printToPDF", {
    printBackground: true,
    preferCSSPageSize: true,
    generateDocumentOutline: true,
  });
  await writeFile(file, Buffer.from(data, "base64"));
  cdp.close();
}

const profile = await mkdtemp(join(tmpdir(), "portfolio-pdf-"));
const chrome = spawn(
  CHROME,
  [
    "--headless=new",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-gpu",
    "--hide-scrollbars",
    "about:blank",
  ],
  { stdio: "ignore" },
);

try {
  await waitForDevTools();
  for (const { lang, file } of TARGETS) {
    const res = await fetch(`http://127.0.0.1:${PORT}/json/new?about:blank`, {
      method: "PUT",
    });
    const target = await res.json();
    await render(target, lang, file);
    console.log(`wrote ${file}`);
  }
} finally {
  chrome.kill();
  // Chrome keeps flushing its profile for a moment after SIGTERM, so give
  // it that moment and treat a leftover temp dir as not worth failing over.
  await sleep(500);
  await rm(profile, { recursive: true, force: true }).catch(() => {});
}
