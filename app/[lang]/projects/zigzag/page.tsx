import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CaseStudyHeader,
  Divider,
  Lesson,
  RefLinks,
  RefShots,
  Section,
  StatGrid,
} from "@/components/CaseStudy";
import { CaseNav } from "@/components/CaseNav";
import { zigzagCases, zigzagHeader } from "@/content/zigzag";
import { ui } from "@/content/ui";
import { isLocale } from "@/lib/i18n";

const caseId = (number: string) => `case-${number}`;

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/projects/zigzag">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  return { title: `Zigzag | ${lang === "ko" ? "강예빈" : "Yebeen (Bea) Kang"}` };
}

export default async function ZigzagPage({
  params,
}: PageProps<"/[lang]/projects/zigzag">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const header = zigzagHeader[lang];
  const cases = zigzagCases[lang];
  const t = ui[lang];

  return (
    <div className="pb-24">
      <CaseStudyHeader
        eyebrow={header.eyebrow}
        title={header.title}
        meta={header.meta}
        intro={header.intro}
      />

      <CaseNav
        items={cases.map((c) => ({
          id: caseId(c.number),
          number: c.number,
          title: c.title,
        }))}
      />

      {cases.map((c, i) => (
        <div key={c.number}>
          <div
            id={caseId(c.number)}
            className="mx-auto max-w-3xl scroll-mt-32 px-6 pt-8"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
              {c.number} · {c.period}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {c.title}
            </h2>
          </div>

          <Section title={t.backgroundLabel} paragraphs={c.background} />
          <Section title={t.actionLabel} paragraphs={c.action} />

          <div className="mx-auto max-w-3xl px-6 py-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              {t.resultsLabel}
            </h3>
            <div className="mt-4">
              <StatGrid stats={c.results} />
              {c.resultsNote && (
                <p className="mt-4 text-sm text-neutral-500">
                  {c.resultsNote}
                </p>
              )}
            </div>
          </div>

          <RefShots shots={c.media} />

          {c.links && (
            <RefLinks label={t.referencesLabel} links={c.links} />
          )}

          <Lesson label={t.lessonLabel} paragraphs={c.lesson} />

          {i < cases.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
}
