import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { RichText } from "@/components/RichText";
import { home } from "@/content/home";
import { isLocale } from "@/lib/i18n";
import { EMAIL, LINKEDIN_LABEL, LINKEDIN_URL } from "@/lib/profile";

/** Experience / education column. The period sits under the role rather
 * than opposite it, because at half width the long org + role strings
 * would otherwise wrap around a right-aligned date. */
function CredentialList({
  label,
  items,
}: {
  label: string;
  items: { org: string; role: string; period: string }[];
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
        {label}
      </h2>
      <div className="mt-6 divide-y divide-neutral-200 border-t border-neutral-200">
        {items.map((item) => (
          <div key={item.org + item.role} className="py-4">
            <div>
              <span className="font-medium">{item.org}</span>
              <span className="text-neutral-500"> · {item.role}</span>
            </div>
            <span className="mt-0.5 block text-sm text-neutral-400">
              {item.period}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function Home({
  params,
}: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const t = home[lang];

  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pb-10 pt-16 sm:pb-14 sm:pt-24">
        <p className="text-sm font-medium uppercase tracking-wider text-neutral-400">
          {t.eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl">
          {t.name}
        </h1>
        <div className="mt-8 max-w-4xl space-y-3 text-xl leading-relaxed text-neutral-600">
          {t.intro.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href={`mailto:${EMAIL}`}
            className="text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-950 hover:decoration-neutral-950"
          >
            {EMAIL}
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-950 hover:decoration-neutral-950"
          >
            {LINKEDIN_LABEL} ↗
          </a>
        </div>
        <p className="mt-3 text-sm text-neutral-400">{t.availability}</p>

        {/* The header nav is quiet by design, so the hero states outright
            that work sits further down and links straight to it. */}
        <a
          href="#projects"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-950"
        >
          {t.jumpToProjects}
          <span className="transition-transform group-hover:translate-y-0.5">
            ↓
          </span>
        </a>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-4">
        <div className="grid gap-12 sm:grid-cols-2">
          {t.competencies.map((c) => (
            <div key={c.title}>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                {c.title}
              </h2>
              <p className="mt-4 text-[17px] leading-relaxed text-neutral-700">
                <RichText text={c.body} />
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-8">
        <div className="grid gap-12 sm:grid-cols-2">
          <CredentialList label={t.experienceLabel} items={t.experience} />
          <CredentialList label={t.educationLabel} items={t.education} />
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-16 pt-8 sm:pb-24"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
          {t.projectsLabel}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {t.projects.map((p) => (
            <ProjectCard
              key={p.href}
              href={`/${lang}${p.href}`}
              eyebrow={p.eyebrow}
              title={p.title}
              period={p.period}
              blurb={p.blurb}
              cta={p.cta}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
