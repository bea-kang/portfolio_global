import type { Locale } from "@/lib/i18n";

/** Copy that exists only in the PDF deck: the cover, the index, and the
 * section openers. Everything else on a slide is read from the same
 * `content/*.ts` the site renders, so the two never drift. */

export type DeckDict = {
  coverTitle: string;
  coverRole: string;
  indexLabel: string;
  resumeLabel: string;
  strengthsLabel: string;
  projectLabel: string;
  closingLabel: string;
  closingNote: string;
  /** Which Zigzag cases the deck carries, by `number` in content/zigzag.ts.
   * The site shows all seven; a deck that a hiring team reads end to end
   * is better off with the three strongest. */
  zigzagCases: string[];
};

const shared = {
  zigzagCases: ["01", "02", "03", "04"],
};

export const deck: Record<Locale, DeckDict> = {
  en: {
    ...shared,
    coverTitle: "Portfolio",
    coverRole: "Yebeen (Bea) Kang | Product Manager",
    indexLabel: "Index",
    resumeLabel: "Resume",
    strengthsLabel: "Strengths",
    projectLabel: "Project",
    closingLabel: "Thank you",
    closingNote: "Happy to walk through any of this in more detail.",
  },
  ko: {
    ...shared,
    coverTitle: "Portfolio",
    coverRole: "강예빈 | Product Manager",
    indexLabel: "Index",
    resumeLabel: "Resume",
    strengthsLabel: "강점",
    projectLabel: "Project",
    closingLabel: "감사합니다",
    closingNote: "어떤 프로젝트든 더 자세히 말씀드릴 수 있습니다.",
  },
};
