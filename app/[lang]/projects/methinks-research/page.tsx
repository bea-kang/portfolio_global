import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHeader, Lesson, Section, Shot } from "@/components/CaseStudy";
import { methinksResearch } from "@/content/methinks-research";
import { ui } from "@/content/ui";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/methinks-research">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: `methinks Research | ${lang === "ko" ? "강예빈" : "Yebeen (Bea) Kang"}`,
  };
}

export default async function MethinksResearchPage({
  params,
}: PageProps<"/[lang]/projects/methinks-research">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = methinksResearch[lang];

  return (
    <div className="pb-24">
      <CaseStudyHeader
        eyebrow={t.eyebrow}
        title={t.title}
        meta={t.meta}
        intro={t.intro}
      />

      <Section title={t.didTitle} bullets={t.did} />

      {t.shots.map((shot, i) => (
        <Shot
          key={shot.alt}
          src={`/images/methinks/research-${i + 1}.png`}
          alt={shot.alt}
          caption={shot.caption}
        />
      ))}

      <Lesson label={ui[lang].lessonLabel} paragraphs={t.lessons} />
    </div>
  );
}
