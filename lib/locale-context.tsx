"use client"

import React, { createContext, useCallback, useContext, useEffect, useState, useSyncExternalStore } from "react"
import type { Locale } from "./translations"
import { defaultLocale, translations } from "./translations"

const STORAGE_KEY = "portfolio-locale"

/**
 * Resolves locale preference from local storage or browser language.
 *
 * @returns The locale to use on the client.
 */
function getPreferredLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  if (stored === "es" || stored === "en") return stored
  const browser = navigator.language?.toLowerCase()
  if (browser?.startsWith("es")) return "es"
  return defaultLocale
}

type LocaleContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  dict: (typeof translations)[Locale]
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

/**
 * Provides locale state and translation helpers to the app tree.
 *
 * @param props - Component props.
 * @param props.children - Descendant nodes that consume locale context.
 */
export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [userLocale, setUserLocale] = useState<Locale | null>(null)
  const preferredLocale = useSyncExternalStore(
    () => () => {},
    getPreferredLocale,
    () => defaultLocale
  )
  const locale = userLocale ?? preferredLocale

  const setLocale = useCallback((next: Locale) => {
    setUserLocale(next)
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, next)
    }
  }, [])

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = locale
  }, [locale])

  const t = useCallback(
    (key: string): string => {
      const value = translations[locale][key as keyof (typeof translations)["en"]]
      return typeof value === "string" ? value : ""
    },
    [locale],
  )

  const dict = translations[locale]

  const value: LocaleContextValue = { locale, setLocale, t, dict }

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

/**
 * Returns locale state and translation helpers from context.
 *
 * @returns Locale context value.
 */
export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider")
  return ctx
}
