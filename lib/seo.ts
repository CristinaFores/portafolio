import type { Metadata } from "next"
import type { Locale } from "next-intl"

import { routing } from "@/i18n/routing"

/**
 * Builds canonical + hreflang alternates for a route path ("" for home).
 * Paths are locale-prefixed because routing uses localePrefix "always".
 */
export function localeAlternates(locale: Locale, path: string): Metadata["alternates"] {
  const languages = Object.fromEntries(routing.locales.map((l) => [l, `/${l}${path}`]))
  return {
    canonical: `/${locale}${path}`,
    languages: { ...languages, "x-default": `/${routing.defaultLocale}${path}` },
  }
}
