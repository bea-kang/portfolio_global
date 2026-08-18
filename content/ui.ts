import type { Locale } from "@/lib/i18n";
import type { UiDict } from "./types";

export const ui: Record<Locale, UiDict> = {
  en: {
    nav: {
      piyonna: "Piyonna",
      zigzag: "Zigzag",
      methinks: "methinks",
      methinksPm: "PM (SaaS)",
      methinksResearch: "UX research",
    },
    backgroundLabel: "Background",
    actionLabel: "Action",
    resultsLabel: "Results",
    referencesLabel: "Coverage",
    lessonLabel: "Lesson learned",
    emailCta: "garding3@gmail.com",
  },
  ko: {
    nav: {
      piyonna: "피어나",
      zigzag: "지그재그",
      methinks: "methinks",
      methinksPm: "PM (SaaS)",
      methinksResearch: "UX research",
    },
    backgroundLabel: "배경",
    actionLabel: "액션",
    resultsLabel: "결과",
    referencesLabel: "관련 링크",
    lessonLabel: "레슨런",
    emailCta: "garding3@gmail.com",
  },
};
