import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/ProjectCard";
import { RichText } from "@/components/RichText";
import { home } from "@/content/home";
import { isLocale } from "@/lib/i18n";
import { EMAIL, LINKEDIN_LABEL, LINKEDIN_URL } from "@/lib/profile";

const linkStyle =
  "underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-950 hover:decoration-neutral-950";

/** Experience / education column. The period sits under the role rather
 * than opposite it, because at half width the long org + role strings
 * would otherwise wrap around a right-aligned date. */
function CredentialList({
  label,
  items,
}: {
  label: string;
  items: { org: string; role: string; period: string; note?: string }[];
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
            {item.note && (
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {item.note}
              </p>
            )}
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
  // "Vancouver, Canada · Open to relocation" → two stacked lines in the sidebar.
  const [city, relocation] = t.availability.split(" · ");

  return (
    <div>
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-12 sm:pt-16">
        <div className="grid gap-10 sm:grid-cols-[240px_1fr] sm:gap-16">
          <aside className="text-sm">
            <h1 className="text-3xl font-bold tracking-tight">{t.name}</h1>
            <p className="mt-1 text-neutral-500">{t.eyebrow}</p>
            <div className="mt-6 space-y-1 text-neutral-600">
              <p>{city}</p>
              <p className="text-neutral-400">{relocation}</p>
            </div>
            <div className="mt-6 flex flex-col items-start gap-1.5">
              <a href={`mailto:${EMAIL}`} className={`text-neutral-600 ${linkStyle}`}>
                {EMAIL}
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-neutral-600 ${linkStyle}`}
              >
                {LINKEDIN_LABEL} ↗
              </a>
            </div>
          </aside>
          <div>
            <div className="space-y-3 text-xl leading-relaxed text-neutral-800">
              {t.intro.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <div className="mt-10 space-y-5">
              {t.competencies.map((c) => (
                <div key={c.title} className="border-l-2 border-neutral-950 pl-4">
                  <h2 className="font-semibold">{c.title}</h2>
                  <p className="mt-1 text-sm text-neutral-500">
                    <RichText text={c.body} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-8 pt-2"
      >
        <div className="grid gap-12 sm:grid-cols-2">
          <CredentialList label={t.experienceLabel} items={t.experience} />
          <div className="space-y-12">
            <CredentialList label={t.educationLabel} items={t.education} />
            <CredentialList label={t.abroadLabel} items={t.abroad} />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-16 pt-8 sm:pb-24"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
          {t.projectsLabel}
        </h2>
        <div className="mt-6 space-y-4">
          {t.projects.map((p) => (
            <ProjectCard
              key={p.href}
              href={`/${lang}${p.href}`}
              eyebrow={p.eyebrow}
              title={p.title}
              period={p.period}
              blurb={p.blurb}
              cta={p.cta}
              image={p.image}
            />
          ))}
        </div>
      </section>

      <section
        id="side-projects"
        className="mx-auto max-w-5xl scroll-mt-24 px-6 pb-16 sm:pb-24"
      >
        <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
          {t.sideProjectsLabel}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.sideProjects.map((p) => (
            <ProjectCard
              key={p.href}
              href={`/${lang}${p.href}`}
              eyebrow={p.eyebrow}
              title={p.title}
              period={p.period}
              blurb={p.blurb}
              cta={p.cta}
              image={p.image}
              compact
            />
          ))}
        </div>
      </section>
    </div>
  );
}
