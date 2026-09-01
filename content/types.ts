export type ZigzagCase = {
  number: string;
  title: string;
  period: string;
  background: string[];
  action: string[];
  results: { label: string; value: string }[];
  resultsNote?: string;
  lesson: string[];
  media: { src: string; alt: string; caption?: string }[];
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
  };
  backgroundLabel: string;
  actionLabel: string;
  resultsLabel: string;
  referencesLabel: string;
  lessonLabel: string;
  emailCta: string;
  pdfCta: string;
};
