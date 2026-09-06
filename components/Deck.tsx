import type { ReactNode } from "react";
import { RichText } from "@/components/RichText";
import type { BulletItem } from "@/components/CaseStudy";

/** 16:9 slide primitives for the PDF portfolio.
 *
 * The deck is a second reading of the same content in `content/*.ts`: the
 * site scrolls, the deck is dealt one idea per page, because that is the
 * shape a hiring team expects an attached portfolio to have. Slides are
 * laid out at exactly 1920x1080 CSS px, which is the paper size
 * `npm run pdf` asks Chrome for, so one slide is one page with no scaling.
 *
 * Everything here is sized in px rather than rem or Tailwind's scale: the
 * page is a fixed canvas, so type that is "24px on a 1920px slide" is a
 * real, checkable measurement in a way that `text-lg` is not. */

export const SLIDE_W = 1920;
export const SLIDE_H = 1080;

export function Slide({
  children,
  page,
  tone = "light",
}: {
  children: ReactNode;
  /** Printed bottom-right. The cover and dividers pass nothing. */
  page?: number;
  tone?: "light" | "fill";
}) {
  return (
    <section
      className={`deck-slide relative flex h-[1080px] w-[1920px] shrink-0 flex-col overflow-hidden px-[120px] py-[68px] ${
        tone === "fill" ? "bg-neutral-950 text-white" : "bg-white text-neutral-950"
      }`}
    >
      {children}
      {page !== undefined && (
        <span className="absolute bottom-[60px] right-[120px] text-[22px] tabular-nums text-neutral-300">
          {page}
        </span>
      )}
    </section>
  );
}

export function SlideHead({
  eyebrow,
  title,
  period,
}: {
  eyebrow?: string;
  title: string;
  period?: string;
}) {
  return (
    <header className="shrink-0">
      {eyebrow && (
        <p className="text-[23px] font-medium uppercase tracking-[0.16em] text-neutral-400">
          {eyebrow}
        </p>
      )}
      <div className="mt-[10px] flex flex-wrap items-baseline gap-x-[20px]">
        <h2 className="text-[58px] font-bold leading-[1.15] tracking-tight">
          {title}
        </h2>
        {period && (
          <span className="text-[25px] text-neutral-400">{period}</span>
        )}
      </div>
    </header>
  );
}

/** Text left, screenshots right — the split the original deck used, and the
 * one that keeps a dense admin capture legible at slide scale. Pass no
 * media and the text runs the full width instead. */
export function SlideBody({
  children,
  aside,
  asideAlign = "center",
}: {
  children: ReactNode;
  /** Right column: screenshots, or a block of copy that earns its own
   * side of the slide (Piyonna's two selling points, for instance). */
  aside?: ReactNode;
  /** Screenshots sit centred in whatever room is left; copy starts at the
   * top so it lines up with the column beside it. */
  asideAlign?: "center" | "start";
}) {
  if (!aside) {
    return (
      <div className="mt-[44px] flex min-h-0 w-full max-w-[1180px] flex-1 flex-col gap-[40px]">
        {children}
      </div>
    );
  }
  return (
    <div className="mt-[44px] grid min-h-0 flex-1 grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-[88px]">
      <div className="flex min-w-0 flex-col gap-[40px]">{children}</div>
      <div
        className={`flex min-h-0 min-w-0 flex-col gap-[28px] ${
          asideAlign === "center" ? "justify-center" : "justify-start"
        }`}
      >
        {aside}
      </div>
    </div>
  );
}

/** A labelled run of copy: 배경 / 액션 / 결과 / 담당 업무. */
export function Block({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <section className="min-w-0">
      {label && (
        <h3 className="text-[29px] font-bold tracking-tight">{label}</h3>
      )}
      <div className="mt-[18px] space-y-[26px] text-[23px] leading-[1.85] text-neutral-700">
        {children}
      </div>
    </section>
  );
}

/** A paragraph that opens with a bold clause leads with it on its own line.
 * The content is written that way throughout (`**가설:** …`, `**체험단 주문
 * 성공률 하락:** …`), and on a slide that reads as the headline it is. */
export function Para({ text }: { text: string }) {
  const lead = /^\*\*(.+?)\*\*\s*([\s\S]*)$/.exec(text);
  if (!lead) {
    return (
      <p>
        <RichText text={text} />
      </p>
    );
  }
  const [, headline, body] = lead;
  return (
    <div className="border-l-[3px] border-neutral-200 pl-[24px]">
      <p className="text-[25px] font-semibold leading-snug text-neutral-950">
        {headline.replace(/[.:]$/, "")}
      </p>
      {body && (
        <p className="mt-[10px]">
          <RichText text={body} />
        </p>
      )}
    </div>
  );
}

export function DeckBullets({ items }: { items: BulletItem[] }) {
  return (
    <ul className="list-disc space-y-[12px] pl-[26px] marker:text-neutral-300">
      {items.map((item, i) =>
        typeof item === "string" ? (
          <li key={i}>
            <RichText text={item} />
          </li>
        ) : (
          <li key={i}>
            <RichText text={item.text} />
            <ul className="mt-[8px] list-[circle] space-y-[6px] pl-[24px] text-[21px] text-neutral-500 marker:text-neutral-300">
              {item.sub.map((s, j) => (
                <li key={j}>
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

export function DeckStats({
  label,
  stats,
  note,
}: {
  label: string;
  stats: { label: string; value: string }[];
  note?: string;
}) {
  return (
    <section className="min-w-0">
      <h3 className="text-[29px] font-bold tracking-tight">{label}</h3>
      <dl
        className={`mt-[22px] grid gap-x-[48px] gap-y-[26px] ${
          stats.length === 1 ? "grid-cols-1" : "grid-cols-2"
        }`}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-[20px] leading-snug text-neutral-500">
              {stat.label}
            </dt>
            <dd className="mt-[4px] text-[38px] font-semibold leading-tight tracking-tight">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
      {note && (
        <p className="mt-[22px] text-[20px] leading-[1.65] text-neutral-500">
          {note}
        </p>
      )}
    </section>
  );
}

export function DeckLesson({
  label,
  paragraphs,
}: {
  label: string;
  paragraphs: string[];
}) {
  return (
    <div className="rounded-[20px] border border-neutral-200 bg-neutral-50 p-[32px]">
      <p className="text-[20px] font-medium uppercase tracking-[0.16em] text-neutral-400">
        {label}
      </p>
      <div className="mt-[14px] space-y-[14px] text-[22px] leading-[1.8] text-neutral-800">
        {paragraphs.map((p, i) => (
          <Para key={i} text={p} />
        ))}
      </div>
    </div>
  );
}

/** Screenshots scale to whatever room the media column has left rather than
 * to a fixed width: the captures range from wide dashboards to tall phone
 * mockups, and a slide has a hard ceiling either way. */
export function DeckShot({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  return (
    <figure className="flex min-h-0 flex-1 flex-col items-center justify-center gap-[14px]">
      {/* eslint-disable-next-line @next/next/no-img-element -- intrinsic
      sizing; see the same call in CaseStudy.tsx */}
      <img
        src={src}
        alt={alt}
        className="max-h-full max-w-full rounded-[16px] border border-neutral-200 object-contain"
      />
      {caption && (
        <figcaption className="shrink-0 text-center text-[19px] leading-snug text-neutral-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function DeckLinks({
  label,
  links,
}: {
  label: string;
  links: { source: string; title: string; href: string }[];
}) {
  return (
    <section className="min-w-0">
      <h3 className="text-[20px] font-medium uppercase tracking-[0.16em] text-neutral-400">
        {label}
      </h3>
      <ul className="mt-[12px] space-y-[8px] text-[21px]">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} className="inline-flex flex-wrap items-baseline gap-x-[10px]">
              <span className="text-neutral-400">{link.source}</span>
              <span className="text-neutral-700 underline decoration-neutral-300 underline-offset-4">
                {link.title} ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
