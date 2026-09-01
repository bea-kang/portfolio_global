import Link from "next/link";

export function ProjectCard({
  href,
  eyebrow,
  title,
  period,
  blurb,
  cta,
}: {
  href: string;
  eyebrow: string;
  title: string;
  period: string;
  blurb: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col justify-between rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-neutral-950 sm:p-8"
    >
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h3>
        <p className="mt-1 text-sm text-neutral-400">{period}</p>
        <p className="mt-4 text-neutral-600">{blurb}</p>
      </div>
      <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-neutral-950 print:hidden">
        {cta}
        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
