import Link from "next/link";

type CardImage = { src: string; alt: string; dim?: boolean };

function Cover({ image, className }: { image: CardImage; className: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- static thumbnails, same as the case study images
    <img
      src={image.src}
      alt={image.alt}
      className={`object-cover ${className} ${
        image.dim
          ? "brightness-90 saturate-[0.85] transition-[filter] duration-300 group-hover:brightness-100 group-hover:saturate-100"
          : ""
      }`}
    />
  );
}

function Cta({ cta }: { cta: string }) {
  return (
    <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-neutral-950 print:hidden">
      {cta}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </span>
  );
}

export function ProjectCard({
  href,
  eyebrow,
  title,
  period,
  blurb,
  cta,
  image,
  compact = false,
}: {
  href: string;
  eyebrow: string;
  title: string;
  period: string;
  blurb: string;
  cta: string;
  image?: CardImage;
  /** Smaller card, without the eyebrow, for the three-up side project gallery.
   * Without it the card is a wide row: cover on the left (muted until hover),
   * text on the right. */
  compact?: boolean;
}) {
  if (compact) {
    return (
      <Link
        href={href}
        className="group flex flex-col justify-between rounded-2xl border border-neutral-200 p-5 transition-colors hover:border-neutral-950"
      >
        <div>
          {image && (
            <Cover
              image={image}
              className="mb-4 aspect-[16/10] w-full rounded-lg border border-neutral-100"
            />
          )}
          <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
          <p className="mt-1 text-sm text-neutral-400">{period}</p>
          <p className="mt-3 text-sm text-neutral-600">{blurb}</p>
        </div>
        <Cta cta={cta} />
      </Link>
    );
  }

  if (!image) {
    return (
      <Link
        href={href}
        className="group grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-6 gap-y-2 rounded-2xl border border-neutral-200 px-6 py-5 transition-colors hover:border-neutral-950 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)_auto] sm:gap-x-12 sm:px-8"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
            {eyebrow} · {period}
          </p>
          <h3 className="mt-1 text-2xl font-semibold tracking-tight">{title}</h3>
        </div>
        <p className="col-start-1 text-neutral-600 sm:col-start-auto">{blurb}</p>
        {/* Arrow only; the CTA wording stays for screen readers. */}
        <span className="col-start-2 row-span-2 row-start-1 text-xl text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-950 sm:col-start-auto sm:row-span-1 print:hidden">
          <span aria-hidden>→</span>
          <span className="sr-only">{cta}</span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group grid overflow-hidden rounded-2xl border border-neutral-200 transition-colors hover:border-neutral-950 sm:h-48 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
    >
      {image && (
        <div className="aspect-[16/10] overflow-hidden border-b border-neutral-200 bg-neutral-50 sm:aspect-auto sm:border-b-0 sm:border-r">
          <Cover
            image={image}
            className="h-full w-full brightness-95 saturate-[0.55] transition duration-500 group-hover:scale-[1.03] group-hover:brightness-100 group-hover:saturate-100"
          />
        </div>
      )}
      <div className="flex flex-col justify-center p-6 sm:px-8 sm:py-5">
        <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
          {eyebrow} · {period}
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-neutral-600">{blurb}</p>
        <Cta cta={cta} />
      </div>
    </Link>
  );
}
