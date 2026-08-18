import Link from "next/link";
import { ui } from "@/content/ui";
import type { Locale } from "@/lib/i18n";

export function Nav({ lang }: { lang: Locale }) {
  const t = ui[lang].nav;

  return (
    <nav className="hidden items-center gap-6 text-sm text-neutral-500 sm:flex">
      <Link
        href={`/${lang}/projects/piyonna`}
        className="transition-colors hover:text-neutral-950"
      >
        {t.piyonna}
      </Link>
      <Link
        href={`/${lang}/projects/zigzag`}
        className="transition-colors hover:text-neutral-950"
      >
        {t.zigzag}
      </Link>

      {/* CSS-only disclosure: opens on hover and on keyboard focus, so the
      submenu needs no client-side state. */}
      <div className="group relative">
        <span className="inline-flex cursor-default items-center gap-1 transition-colors group-hover:text-neutral-950 group-focus-within:text-neutral-950">
          {t.methinks}
          <span aria-hidden className="text-[10px] leading-none">
            ▾
          </span>
        </span>
        <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
          <div className="min-w-56 rounded-xl border border-neutral-200 bg-white p-1.5 shadow-lg">
            <Link
              href={`/${lang}/projects/methinks-pm`}
              className="block rounded-lg px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-950"
            >
              {t.methinksPm}
            </Link>
            <Link
              href={`/${lang}/projects/methinks-research`}
              className="block rounded-lg px-3 py-2 text-sm text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-950"
            >
              {t.methinksResearch}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
