import Link from "next/link";

export function ProjectCard({
  href,
  eyebrow,
  title,
  period,
  blurb,
  cta,
  compact = false,
}: {
  href: string;
  eyebrow: string;
  title: string;
  period: string;
  blurb: string;
  cta: string;
  /** Smaller card, without the eyebrow, for the three-up side project gallery. */
  compact?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group flex flex-col justify-between rounded-2xl border border-neutral-200 transition-colors hover:border-neutral-950 ${
        compact ? "p-5" : "p-6 sm:p-8"
      }`}
    >
      <div>
        {!compact && (
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
            {eyebrow}
          </p>
        )}
        <h3
          className={`${compact ? "" : "mt-3 "}font-semibold tracking-tight ${
            compact ? "text-lg" : "text-2xl sm:text-3xl"
          }`}
        >
          {title}
        </h3>
        <p className="mt-1 text-sm text-neutral-400">{period}</p>
        <p
          className={`text-neutral-600 ${compact ? "mt-3 text-sm" : "mt-4"}`}
        >
          {blurb}
        </p>
      </div>
      <span
        className={`${
          compact ? "mt-5" : "mt-8"
        } inline-flex items-center gap-1 text-sm font-medium text-neutral-950 print:hidden`}
      >
        {cta}
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
