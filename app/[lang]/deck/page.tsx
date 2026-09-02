import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import {
  Block,
  DeckBullets,
  DeckLesson,
  DeckLinks,
  DeckShot,
  DeckStats,
  Para,
  Slide,
  SlideBody,
  SlideHead,
} from "@/components/Deck";
import type { SectionBlock } from "@/components/CaseStudy";
import { RichText } from "@/components/RichText";
import { deck } from "@/content/deck";
import { home } from "@/content/home";
import { methinksPm } from "@/content/methinks-pm";
import { piyonna } from "@/content/piyonna";
import { ui } from "@/content/ui";
import { zigzagCases, zigzagHeader } from "@/content/zigzag";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { EMAIL, LINKEDIN_URL } from "@/lib/profile";

/** The portfolio as a 16:9 deck, which is what an application that takes a
 * file upload instead of a link expects to receive. `npm run pdf` prints
 * this route at 1920x1080 per page; see components/Deck.tsx for why the
 * slides are sized in raw px. */

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/deck">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: lang === "ko" ? "강예빈 포트폴리오" : "Yebeen (Bea) Kang Portfolio",
    robots: { index: false, follow: false },
  };
}

/** A slide knows its own page number only once the deck is assembled, so
 * each one is declared as a function of it. `id` lets the index cite a
 * slide's number without anyone counting by hand. */
type Entry = { id?: string; render: (page: number) => ReactNode };

const LIVE_IMAGES = [
  { src: "/images/piyonna/live-2.jpg", alt: "Piyonna storefront: multi-buy offer" },
  { src: "/images/piyonna/live-1.jpg", alt: "Piyonna storefront: free shipping offer" },
  { src: "/images/piyonna/live-3.jpg", alt: "Piyonna storefront: hero SKU brand deal" },
];

/** Piyonna's sections in the order content/piyonna.ts declares them. */
const PY = { background: 0, research: 1, selling: 2, pmWork: 3, results: 4 };

function Blocks({ blocks }: { blocks: readonly unknown[] }) {
  return (
    <>
      {(blocks as SectionBlock[]).map((block, i) =>
        "ul" in block ? (
          <DeckBullets key={i} items={block.ul} />
        ) : "p" in block ? (
          <Para key={i} text={block.p} />
        ) : null,
      )}
    </>
  );
}

export default async function DeckPage({ params }: PageProps<"/[lang]/deck">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  const d = deck[locale];
  const t = ui[locale];
  const h = home[locale];
  const py = piyonna[locale];
  const zh = zigzagHeader[locale];
  const mpm = methinksPm[locale];
  const cases = zigzagCases[locale].filter((c) =>
    d.zigzagCases.includes(c.number),
  );

  const entries: Entry[] = [];
  const push = (entry: Entry) => entries.push(entry);
  const pageOf = (id: string) => entries.findIndex((e) => e.id === id) + 1;

  // ── Cover ───────────────────────────────────────────────────────────
  push({
    render: () => (
      <Slide key="cover">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-[136px] font-bold leading-none tracking-tight">
            {d.coverTitle}
          </h1>
          <p className="mt-[36px] text-[38px] text-neutral-800">{d.coverRole}</p>
          <p className="mt-[18px] text-[26px] text-neutral-400">
            {EMAIL} | {LINKEDIN_URL.replace("https://www.", "")}
          </p>
          <p className="mt-[6px] text-[26px] text-neutral-400">
            {h.availability}
          </p>
        </div>
      </Slide>
    ),
  });

  // ── Index ───────────────────────────────────────────────────────────
  push({
    render: () => (
      <Slide key="index">
        <SlideHead eyebrow={d.coverTitle} title={d.indexLabel} />
        <div className="mt-[100px] flex max-w-[1420px] flex-col gap-[42px]">
          {[
            { n: "1", label: d.resumeLabel, id: "resume" },
            { n: "2", label: d.strengthsLabel, id: "strengths" },
            { n: "3", label: `${d.projectLabel} : ${py.title}`, id: "piyonna" },
            { n: "4", label: `${d.projectLabel} : ${zh.title}`, id: "zigzag" },
            { n: "5", label: `${d.projectLabel} : ${mpm.title}`, id: "methinks" },
          ].map((row) => (
            <div key={row.n} className="flex items-baseline gap-[28px]">
              <span className="text-[34px] font-medium">
                {row.n}. {row.label}
              </span>
              <span className="h-px flex-1 bg-neutral-300" />
              <span className="text-[26px] tabular-nums text-neutral-400">
                {pageOf(row.id)}
              </span>
            </div>
          ))}
        </div>
      </Slide>
    ),
  });

  // ── Resume ──────────────────────────────────────────────────────────
  push({
    id: "resume",
    render: (page) => (
      <Slide key="resume" page={page}>
        <SlideHead eyebrow={h.eyebrow} title={h.name} />
        <div className="mt-[44px] max-w-[1500px] space-y-[12px] text-[27px] leading-[1.65] text-neutral-600">
          {h.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-[62px] grid flex-1 grid-cols-2 gap-[88px]">
          {[
            { label: h.experienceLabel, items: h.experience },
            { label: h.educationLabel, items: h.education },
          ].map((col) => (
            <div key={col.label}>
              <h3 className="text-[22px] font-semibold uppercase tracking-[0.16em] text-neutral-400">
                {col.label}
              </h3>
              <div className="mt-[24px] divide-y divide-neutral-200 border-t border-neutral-200">
                {col.items.map((item) => (
                  <div key={item.org + item.role} className="py-[22px]">
                    <p className="text-[27px]">
                      <span className="font-medium">{item.org}</span>
                      <span className="text-neutral-500"> · {item.role}</span>
                    </p>
                    <p className="mt-[4px] text-[22px] text-neutral-400">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Slide>
    ),
  });

  // ── Strengths ───────────────────────────────────────────────────────
  push({
    id: "strengths",
    render: (page) => (
      <Slide key="strengths" page={page}>
        <SlideHead eyebrow={d.coverTitle} title={d.strengthsLabel} />
        <div className="mt-[80px] grid flex-1 grid-cols-2 gap-[88px]">
          {h.competencies.map((c) => (
            <div key={c.title}>
              <h3 className="text-[34px] font-bold leading-snug tracking-tight">
                {c.title}
              </h3>
              <p className="mt-[24px] text-[25px] leading-[1.75] text-neutral-700">
                <RichText text={c.body} />
              </p>
            </div>
          ))}
        </div>
      </Slide>
    ),
  });

  /** Section opener: the project's own title slide, carrying the intro the
   * site shows above its case study. */
  const opener = (
    id: string,
    n: string,
    p: { eyebrow: string; title: string; meta: string; intro: string },
  ) =>
    push({
      id,
      render: () => (
        <Slide key={id}>
          <div className="flex flex-1 flex-col justify-center">
            <p className="text-[26px] font-medium uppercase tracking-[0.16em] text-neutral-400">
              {n}. {deck[locale].projectLabel} · {p.eyebrow}
            </p>
            <h2 className="mt-[24px] max-w-[1500px] text-[76px] font-bold leading-[1.15] tracking-tight">
              {p.title}
            </h2>
            <p className="mt-[20px] text-[28px] text-neutral-400">{p.meta}</p>
            <p className="mt-[44px] max-w-[1320px] text-[27px] leading-[1.7] text-neutral-600">
              {p.intro}
            </p>
          </div>
        </Slide>
      ),
    });

  // ── 2. Piyonna ──────────────────────────────────────────────────────
  opener("piyonna", "3", py);

  push({
    render: (page) => (
      <Slide key="py-1" page={page}>
        <SlideHead eyebrow={py.eyebrow} title={py.title} period={py.meta} />
        <SlideBody
          asideAlign="start"
          aside={
            <Block label={py.sections[PY.selling].title}>
              <Blocks blocks={py.sections[PY.selling].blocks} />
            </Block>
          }
        >
          <Block label={py.sections[PY.background].title}>
            <Blocks blocks={py.sections[PY.background].blocks} />
          </Block>
          <Block label={py.sections[PY.research].title}>
            <Blocks blocks={py.sections[PY.research].blocks} />
          </Block>
        </SlideBody>
      </Slide>
    ),
  });

  push({
    render: (page) => (
      <Slide key="py-2" page={page}>
        <SlideHead eyebrow={py.eyebrow} title={py.title} period={py.meta} />
        <SlideBody
          aside={
            <div className="flex min-h-0 flex-1 flex-col justify-center gap-[18px]">
              <div className="grid grid-cols-3 gap-[16px]">
                {LIVE_IMAGES.map((img) => (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className="w-full rounded-[14px] border border-neutral-200 object-contain"
                  />
                ))}
              </div>
              <p className="text-center text-[19px] text-neutral-400">
                {py.liveCaption}
              </p>
            </div>
          }
        >
          <Block label={py.sections[PY.pmWork].title}>
            <Blocks blocks={py.sections[PY.pmWork].blocks} />
          </Block>
        </SlideBody>
      </Slide>
    ),
  });

  push({
    render: (page) => (
      <Slide key="py-3" page={page}>
        <SlideHead eyebrow={py.eyebrow} title={py.title} period={py.meta} />
        <SlideBody>
          <Block label={py.sections[PY.results].title}>
            <Blocks blocks={py.sections[PY.results].blocks} />
          </Block>
          <DeckLesson label={py.lessonLabel} paragraphs={py.lesson} />
        </SlideBody>
      </Slide>
    ),
  });

  // ── 3. Zigzag ───────────────────────────────────────────────────────
  opener("zigzag", "4", zh);

  for (const c of cases) {
    const heading = `${c.number}. ${c.title}`;
    const shot = (i: number) =>
      c.media[i] && <DeckShot src={c.media[i].src} alt={c.media[i].alt} />;
    const head = (
      <SlideHead eyebrow={zh.eyebrow} title={heading} period={c.period} />
    );
    // Background and action share a slide unless the case has too much to
    // say for one; the seeding programme ran for two years and does.
    const split = c.background.length + c.action.length > 3;

    const background = (
      <Block label={t.backgroundLabel}>
        {c.background.map((p, i) => (
          <Para key={i} text={p} />
        ))}
      </Block>
    );
    const action = (
      <Block label={t.actionLabel}>
        {c.action.map((p, i) => (
          <Para key={i} text={p} />
        ))}
      </Block>
    );

    if (split) {
      push({
        render: (page) => (
          <Slide key={`zz-${c.number}-bg`} page={page}>
            {head}
            <SlideBody aside={shot(0)}>{background}</SlideBody>
          </Slide>
        ),
      });
      push({
        render: (page) => (
          <Slide key={`zz-${c.number}-ac`} page={page}>
            {head}
            <SlideBody aside={shot(1)}>{action}</SlideBody>
          </Slide>
        ),
      });
    } else {
      push({
        render: (page) => (
          <Slide key={`zz-${c.number}-a`} page={page}>
            {head}
            <SlideBody aside={shot(0)}>
              {background}
              {action}
            </SlideBody>
          </Slide>
        ),
      });
    }

    push({
      render: (page) => (
        <Slide key={`zz-${c.number}-b`} page={page}>
          {head}
          <SlideBody aside={split ? undefined : shot(1)}>
            <DeckStats
              label={t.resultsLabel}
              stats={c.results}
              note={c.resultsNote}
            />
            {c.links && <DeckLinks label={t.referencesLabel} links={c.links} />}
            <DeckLesson label={t.lessonLabel} paragraphs={c.lesson} />
          </SlideBody>
        </Slide>
      ),
    });
  }

  // ── 4. methinks ─────────────────────────────────────────────────────
  opener("methinks", "5", mpm);

  push({
    render: (page) => (
      <Slide key="mpm-1" page={page}>
        <SlideHead eyebrow={mpm.eyebrow} title={mpm.title} period={mpm.meta} />
        <SlideBody
          aside={
            <DeckShot
              src="/images/methinks/pm-dashboard.png"
              alt={mpm.shot.alt}
              caption={mpm.shot.caption}
            />
          }
        >
          <Block label={mpm.ownedTitle}>
            <DeckBullets items={[...mpm.owned]} />
          </Block>
        </SlideBody>
      </Slide>
    ),
  });

  push({
    render: (page) => (
      <Slide key="mpm-2" page={page}>
        <SlideHead eyebrow={mpm.eyebrow} title={mpm.title} period={mpm.meta} />
        <SlideBody>
          <DeckLesson label={t.lessonLabel} paragraphs={[...mpm.lessons]} />
        </SlideBody>
      </Slide>
    ),
  });

  // ── Closing ─────────────────────────────────────────────────────────
  push({
    render: () => (
      <Slide key="closing">
        <div className="flex flex-1 flex-col justify-center">
          <h2 className="text-[92px] font-bold leading-none tracking-tight">
            {d.closingLabel}
          </h2>
          <p className="mt-[32px] text-[28px] text-neutral-500">
            {d.closingNote}
          </p>
          <p className="mt-[40px] text-[30px] text-neutral-800">{EMAIL}</p>
          <p className="mt-[6px] text-[30px] text-neutral-800">
            {LINKEDIN_URL.replace("https://www.", "")}
          </p>
        </div>
      </Slide>
    ),
  });

  return (
    <>
      {/* The deck is its own artefact: no site header, no footer, and a page
          box the size of a slide so printing it needs no scaling. */}
      <style>{`
        body > header, body > footer { display: none !important; }
        body { background: #e5e5e5; }
        @page { size: 1920px 1080px; margin: 0; }
        @media print { body { background: #fff; } .deck-slide { break-after: page; } }
      `}</style>
      <div className="deck flex flex-col items-center gap-[24px] print:gap-0">
        {entries.map((entry, i) => entry.render(i + 1))}
      </div>
    </>
  );
}
