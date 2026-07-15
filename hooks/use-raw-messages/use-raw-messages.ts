"use client"

import { useTranslations } from "next-intl"

/**
 * Reads raw (non-formatted) i18n values with a presence guard, alongside the
 * regular translator. Returns empty defaults when a key is missing so detail
 * pages can render optional sections without extra guards.
 */
export function useRawMessages() {
  const t = useTranslations()

  const rawList = <T,>(key: string): T[] =>
    t.has(key) ? (t.raw(key) as unknown as T[]) : []
  const rawText = (key: string): string =>
    t.has(key) ? (t.raw(key) as unknown as string) : ""

  return { t, rawList, rawText }
}
