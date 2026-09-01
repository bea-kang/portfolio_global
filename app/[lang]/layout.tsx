import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Nav } from "@/components/Nav";
import { ui } from "@/content/ui";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { EMAIL, LINKEDIN_LABEL, LINKEDIN_URL } from "@/lib/profile";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Written by `npm run pdf`; the filename is what a recruiter sees on the
 * downloaded file, so it carries the name rather than the route. */
const PDF_HREF: Record<Locale, string> = {
  en: "/Yebeen-Kang-Portfolio-EN.pdf",
  ko: "/Yebeen-Kang-Portfolio-KO.pdf",
};

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isLocale(lang) ? lang : "en";
  return {
    title:
      locale === "ko"
        ? "강예빈 | Product Manager"
        : "Yebeen (Bea) Kang | Product Manager",
    description:
      locale === "ko"
        ? "강예빈 PM/PO 포트폴리오: 지그재그, 피어나, methinks 커머스·플랫폼 제품 작업"
        : "Portfolio of Yebeen (Bea) Kang, Product Manager / Product Owner: commerce and platform products for Zigzag, Piyonna, and methinks.",
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-950">
        <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
            <Link href={`/${lang}`} className="text-sm font-semibold tracking-tight">
              {lang === "ko" ? "강예빈" : "Yebeen (Bea) Kang"}
            </Link>
            <div className="flex items-center gap-6">
              <Nav lang={lang} />
              {/* Some applications take a file but no link, so the whole
                  site is also kept as a pre-rendered PDF (`npm run pdf`). */}
              <a
                href={PDF_HREF[lang]}
                download
                title={ui[lang].pdfCta}
                className="text-sm text-neutral-500 transition-colors hover:text-neutral-950"
              >
                PDF
              </a>
              <LanguageSwitcher current={lang} />
            </div>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
            <span>
              © {new Date().getFullYear()}{" "}
              {lang === "ko" ? "강예빈" : "Yebeen (Bea) Kang"}
            </span>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <a
                href={`mailto:${EMAIL}`}
                className="transition-colors hover:text-neutral-950"
              >
                {EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-neutral-950"
              >
                {LINKEDIN_LABEL} ↗
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
