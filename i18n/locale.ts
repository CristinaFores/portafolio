import { notFound } from "next/navigation"
import { hasLocale, type Locale } from "next-intl"
import { routing } from "./routing"

/**
 * Narrows the raw route param to a supported locale, rendering the 404
 * page for anything else. Pages receive `locale` as plain string because
 * Next's generated route types do not know the locale union.
 */
export function toLocale(value: string): Locale {
  if (!hasLocale(routing.locales, value)) notFound()
  return value
}
