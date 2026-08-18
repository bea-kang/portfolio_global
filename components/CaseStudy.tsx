import { RichText } from "@/components/RichText";

export function CaseStudyHeader({
  eyebrow,
  title,
  meta,
  intro,
}: {
  eyebrow: string;
  title: string;
  meta: string;
  /** Optional: some cases say everything in the title and bullets. */
  intro?: string;
}) {
  return (
    <header
      className={`mx-auto max-w-3xl px-6 pt-20 sm:pt-28 ${intro ? "pb-16" : "pb-8"}`}
    >
      <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-sm text-neutral-400">{meta}</p>
      {intro && (
        <p className="mt-6 text-lg leading-relaxed text-neutral-600">{intro}</p>
      )}
    </header>
  );
}

/** A bullet is either a plain line, or a line with its own nested points. */
export type BulletItem = string | { text: string; sub: string[] };

export type SectionBlock = { p: string } | { ul: BulletItem[] };

/** A section is a heading plus an ordered mix of paragraphs and bullet
 * lists. Passing `paragraphs`/`bullets` is shorthand for the common
 * single-paragraph-block, single-list case; pass `blocks` directly when a
 * section needs paragraph → list → paragraph (etc.) in a specific order. */
export function Section({
  title,
  paragraphs,
  bullets,
  blocks,
}: {
  title: string;
  paragraphs?: string[];
  bullets?: BulletItem[];
  blocks?: SectionBlock[];
}) {
  const resolved: SectionBlock[] =
    blocks ??
    [
      ...(paragraphs?.map((p) => ({ p })) ?? []),
      ...(bullets ? [{ ul: bullets }] : []),
    ];

  return (
    <section className="mx-auto max-w-3xl px-6 py-6">
      {title && (
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
          {title}
        </h2>
      )}
      <div className="mt-4 space-y-4 text-[17px] leading-relaxed text-neutral-800">
        {resolved.map((block, i) =>
          "ul" in block ? (
            <Bullets key={i} items={block.ul} />
          ) : (
            <p key={i}>
              <RichText text={block.p} />
            </p>
          ),
        )}
      </div>
    </section>
  );
}

export function Bullets({ items }: { items: BulletItem[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-neutral-300">
      {items.map((item, i) =>
        typeof item === "string" ? (
          <li key={i}>
            <RichText text={item} />
          </li>
        ) : (
          <li key={i}>
            <RichText text={item.text} />
            <ul className="mt-2 list-[circle] space-y-1.5 pl-5 marker:text-neutral-300">
              {item.sub.map((s, j) => (
                <li key={j} className="text-neutral-600">
                  <RichText text={s} />
                </li>
              ))}
            </ul>
          </li>
        ),
      )}
    </ul>
  );
}

export function StatGrid({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="text-sm text-neutral-500">{stat.label}</dt>
          <dd className="mt-1 text-2xl font-semibold tracking-tight">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Lesson({
  label,
  paragraphs,
}: {
  label: string;
  paragraphs: string[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-6">
      <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
          {label}
        </p>
        <div className="mt-3 space-y-5 text-[17px] leading-relaxed text-neutral-800">
          {paragraphs.map((p, i) => {
            // A lesson that opens with a bold headline reads better with the
            // headline on its own line, above the explanation.
            const lead = /^\*\*(.+?)\*\*\s*([\s\S]*)$/.exec(p);
            if (!lead) {
              return (
                <p key={i}>
                  <RichText text={p} />
                </p>
              );
            }
            const [, headline, body] = lead;
            return (
              <div key={i}>
                {/* Headlines read as titles, so drop a trailing period
                    (question/exclamation marks are left alone). */}
                <p className="font-semibold">{headline.replace(/\.$/, "")}</p>
                {body && (
                  <p className="mt-1.5">
                    <RichText text={body} />
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function Shot({
  src,
  alt,
  caption,
  variant = "wide",
}: {
  src: string;
  alt: string;
  caption?: string;
  /** "wide" for landscape composites, "phone" for tall narrow mobile mockups.
   * Phone shots stay near their native width instead of being stretched
   * to the full content column, which would upscale them to an extreme
   * rendered height. */
  variant?: "wide" | "phone";
}) {
  return (
    <figure
      className={`mx-auto px-6 py-6 ${variant === "phone" ? "max-w-xs" : "max-w-4xl"}`}
    >
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
        {/* eslint-disable-next-line @next/next/no-img-element -- local
        screenshots have wildly varying aspect ratios; plain img renders each
        at its real intrinsic size instead of the fixed box next/image needs. */}
        <img src={src} alt={alt} className="block h-auto w-full" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function LiveGallery({
  images,
  caption,
  cta,
  href,
}: {
  images: { src: string; alt: string }[];
  caption: string;
  cta: string;
  href: string;
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-6">
      <div className="grid gap-4 sm:grid-cols-3">
        {images.map((img) => (
          <div
            key={img.src}
            className="overflow-hidden rounded-2xl border border-neutral-200"
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- see Shot above */}
            <img src={img.src} alt={img.alt} className="block h-auto w-full" />
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-col items-center gap-3 text-center">
        <p className="text-sm text-neutral-400">{caption}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

/** Supporting screenshots, sized as reference material: they follow the
 * results rather than interrupting them. Capped at two per row — these are
 * dense admin/app captures, and three across is too small to read. */
export function RefShots({
  shots,
}: {
  shots: { src: string; alt: string; caption?: string }[];
}) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-4">
      <div
        className={
          shots.length === 1
            ? "mx-auto max-w-2xl"
            : "grid gap-4 sm:grid-cols-2"
        }
      >
        {shots.map((shot) => (
          <figure key={shot.src}>
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
              {/* eslint-disable-next-line @next/next/no-img-element -- see Shot above */}
              <img src={shot.src} alt={shot.alt} className="block h-auto w-full" />
            </div>
            {shot.caption && (
              <figcaption className="mt-2 text-xs leading-snug text-neutral-400">
                {shot.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </div>
  );
}

/** External coverage, listed as quiet links rather than screenshots. */
export function RefLinks({
  label,
  links,
}: {
  label: string;
  links: { source: string; title: string; href: string }[];
}) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-4">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
        {label}
      </h3>
      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex flex-wrap items-baseline gap-x-2 text-[15px]"
            >
              <span className="text-neutral-400">{link.source}</span>
              <span className="text-neutral-700 underline decoration-neutral-300 underline-offset-4 transition-colors group-hover:text-neutral-950 group-hover:decoration-neutral-950">
                {link.title} ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Divider() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <hr className="my-16 border-neutral-200" />
    </div>
  );
}
