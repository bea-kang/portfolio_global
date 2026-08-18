export const locales = ["en", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

export const localeCookieName = "locale";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  ko: "KO",
};
