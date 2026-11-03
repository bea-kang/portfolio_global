export type ZigzagCase = {
  number: string;
  title: string;
  period: string;
  background: string[];
  action: string[];
  results: { label: string; value: string }[];
  resultsNote?: string;
  /** Results are a sentence on where the project stands, not numbers,
   * so they render at body size instead of as big stats. */
  resultsAsText?: boolean;
  lesson: string[];
  media: { src: string; alt: string; caption?: string }[];
  /** One demo clip, shown above the background. */
  video?: { src: string; caption?: string };
  /** External coverage / write-ups about the project. */
  links?: { source: string; title: string; href: string }[];
};

export type UiDict = {
  nav: {
    piyonna: string;
    zigzag: string;
    methinks: string;
    methinksPm: string;
    methinksResearch: string;
    side: string;
  };
  backgroundLabel: string;
  actionLabel: string;
  resultsLabel: string;
  referencesLabel: string;
  lessonLabel: string;
  emailCta: string;
};
