import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { defaultLocale, isLocale, locales, localeCookieName } from "@/lib/i18n";

function detectLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage?.toLowerCase().includes("ko")) return "ko";

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
  // This redirect is per-visitor (cookie, then Accept-Language). On a CDN it
  // would otherwise be cached and pin every later visitor to one locale.
  response.headers.set("Cache-Control", "no-store");
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|images/|favicon.ico|.*\\.png$|.*\\.svg$).*)",
  ],
};
