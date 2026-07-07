import type { Locale } from "@/types/i18n"
import { en } from "./translations.en"
import { es } from "./translations.es"

export type { Locale }

/** Idioma por defecto cuando no hay preferencia guardada. */
export const defaultLocale: Locale = "es"

/** Diccionarios de traducción por idioma. */
export const translations = { es, en } as const
