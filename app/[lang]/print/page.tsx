import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "../page";
import MethinksPMPage from "../projects/methinks-pm/page";
import MethinksResearchPage from "../projects/methinks-research/page";
import PiyonnaPage from "../projects/piyonna/page";
import ZigzagPage from "../projects/zigzag/page";
import { isLocale, locales } from "@/lib/i18n";

/** Every page of the site, stacked into one document, so that printing it
 * (or running `npm run pdf`) produces a single portfolio PDF for the
 * applications that take a file upload but no link. Not linked from the
 * nav: the header's PDF button hands out the pre-rendered file instead. */

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/print">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: lang === "ko" ? "강예빈 포트폴리오" : "Yebeen (Bea) Kang | Portfolio",
    robots: { index: false, follow: false },
  };
}

export default async function PrintPage({ params }: PageProps<"/[lang]/print">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  // The stacked pages are async server components with their own route
  // props; hand each one the same params this route was called with.
  const pageProps = {
    params: Promise.resolve({ lang }),
    searchParams: Promise.resolve({}),
  };

  return (
    <div className="print-doc">
      <Home {...pageProps} />
      <div className="break-before-page">
        <ZigzagPage {...pageProps} />
      </div>
      <div className="break-before-page">
        <PiyonnaPage {...pageProps} />
      </div>
      <div className="break-before-page">
        <MethinksPMPage {...pageProps} />
      </div>
      <div className="break-before-page">
        <MethinksResearchPage {...pageProps} />
      </div>
    </div>
  );
}
