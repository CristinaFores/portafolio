import type { ReactNode } from "react"
import { NextIntlClientProvider, type Locale } from "next-intl"
import esMessages from "@/messages/es.json"
import enMessages from "@/messages/en.json"

const messagesByLocale = { es: esMessages, en: enMessages } as const

/** Builds a test wrapper that provides next-intl context for a locale. */
export function createI18nWrapper(locale: Locale) {
  return function Wrapper({ children }: { children: ReactNode }) {
    return (
      <NextIntlClientProvider locale={locale} messages={messagesByLocale[locale]}>
        {children}
      </NextIntlClientProvider>
    )
  }
}

/** Default wrapper with Spanish messages (the site's default locale). */
export const I18nWrapper = createI18nWrapper("es")
