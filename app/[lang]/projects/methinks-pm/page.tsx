import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyHeader, Lesson, Section, Shot } from "@/components/CaseStudy";
import { methinksPm } from "@/content/methinks-pm";
import { ui } from "@/content/ui";
import { isLocale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/methinks-pm">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return {
    title: `methinks PM | ${lang === "ko" ? "강예빈" : "Yebeen (Bea) Kang"}`,
  };
}

export default async function MethinksPMPage({
  params,
}: PageProps<"/[lang]/projects/methinks-pm">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = methinksPm[lang];

  return (
    <div className="pb-24">
      <CaseStudyHeader
        eyebrow={t.eyebrow}
        title={t.title}
        meta={t.meta}
        intro={t.intro}
      />

      <Section title={t.ownedTitle} bullets={t.owned} />

      <Shot
        src="/images/methinks/pm-dashboard.png"
        alt={t.shot.alt}
        caption={t.shot.caption}
      />

      <Lesson label={ui[lang].lessonLabel} paragraphs={t.lessons} />
    </div>
  );
}
