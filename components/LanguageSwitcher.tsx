"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, localeLabels, type Locale } from "@/lib/i18n";
import { setLocaleCookie } from "@/lib/setLocaleCookie";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchTo(locale: Locale) {
    if (locale === current) return;
    setLocaleCookie(locale);
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${locale}${rest ? `/${rest}` : ""}`);
  }

  return (
    <div className="flex items-center gap-1 rounded-full border border-neutral-200 p-0.5 text-xs font-medium">
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchTo(locale)}
          aria-current={locale === current}
          className={`rounded-full px-2.5 py-1 transition-colors ${
            locale === current
              ? "bg-neutral-950 text-white"
              : "text-neutral-500 hover:text-neutral-950"
          }`}
        >
          {localeLabels[locale]}
        </button>
      ))}
    </div>
  );
}
