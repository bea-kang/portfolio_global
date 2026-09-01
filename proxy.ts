import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, localeCookieName } from "@/lib/i18n";

function detectLocale(request: NextRequest): string {
  // English is the front door: this portfolio is aimed at an international
  // audience, so a first-time visitor always lands on /en regardless of
  // browser language. Only an explicit choice via the switcher (stored as a
  // cookie) sends someone somewhere else.
  const cookieLocale = request.cookies.get(localeCookieName)?.value;
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale;

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (pathnameHasLocale) return NextResponse.next();

  const locale = detectLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  const response = NextResponse.redirect(url);
  // This redirect depends on the visitor's cookie. On a CDN it would
  // otherwise be cached and pin every later visitor to one locale.
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Pages only. Anything with a file extension is an asset served straight
  // from /public — screenshots, the favicon, the portfolio PDFs — and a
  // locale prefix would send it to a route that does not exist.
  matcher: ["/((?!_next/|.*\\.[a-zA-Z0-9]+$).*)"],
};
