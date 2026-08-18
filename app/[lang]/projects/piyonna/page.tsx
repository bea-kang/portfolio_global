import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CaseStudyHeader,
  Lesson,
  LiveGallery,
  Section,
  type SectionBlock,
} from "@/components/CaseStudy";
import { piyonna } from "@/content/piyonna";
import { isLocale } from "@/lib/i18n";

const LIVE_IMAGES = [
  {
    src: "/images/piyonna/live-2.jpg",
    alt: "Piyonna storefront campaign banner: Buy 2 or more, pay less each",
  },
  {
    src: "/images/piyonna/live-1.jpg",
    alt: "Piyonna storefront campaign banner: free shipping offer",
  },
  {
    src: "/images/piyonna/live-3.jpg",
    alt: "Piyonna storefront campaign banner: Hero SKU brand deal",
  },
];

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/piyonna">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return { title: `Piyonna | ${lang === "ko" ? "강예빈" : "Yebeen (Bea) Kang"}` };
}

export default async function PiyonnaPage({
  params,
}: PageProps<"/[lang]/projects/piyonna">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = piyonna[lang];

  return (
    <div className="pb-24">
      <CaseStudyHeader
        eyebrow={t.eyebrow}
        title={t.title}
        meta={t.meta}
        intro={t.intro}
      />

      {t.sections.map((section) => {
        const hasGallery = section.blocks.some((b) => "gallery" in b);
        const flow = section.blocks.filter(
          (b): b is SectionBlock => !("gallery" in b),
        );

        return (
          <div key={section.title}>
            <Section title={section.title} blocks={flow} />
            {hasGallery && (
              <LiveGallery
                images={LIVE_IMAGES}
                caption={t.liveCaption}
                cta={t.liveCta}
                href="https://piyonna.com"
              />
            )}
          </div>
        );
      })}

      <Lesson label={t.lessonLabel} paragraphs={t.lesson} />
    </div>
  );
}
