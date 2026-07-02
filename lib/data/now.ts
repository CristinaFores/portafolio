import type { Locale } from "@/lib/translations"

export type NowStatus = "active" | "review" | "wip"

interface NowRow {
  status: NowStatus
  label: Record<Locale, string>
  title: Record<Locale, string>
  href?: string
}

export const NOW_ROWS: NowRow[] = [
  {
    status: "active",
    label: { es: "En producción", en: "Live" },
    title: { es: "design-context-bridge", en: "design-context-bridge" },
    href: "/lab/design-context-bridge",
  },
  {
    status: "review",
    label: { es: "En revisión", en: "In review" },
    title: { es: "AuraLang", en: "AuraLang" },
    href: "/lab/auralang",
  },
]

/** Bump this whenever NOW_ROWS changes — formatted per locale below. */
const NOW_UPDATED_DATE = "2026-07-02"

const NOW_UPDATED_FORMAT: Record<Locale, Intl.DateTimeFormatOptions> = {
  es: { year: "numeric", month: "short" },
  en: { year: "numeric", month: "short" },
}

export const NOW_UPDATED: Record<Locale, string> = {
  es: `Actualizado ${new Intl.DateTimeFormat("es-ES", NOW_UPDATED_FORMAT.es).format(new Date(NOW_UPDATED_DATE))}`,
  en: `Updated ${new Intl.DateTimeFormat("en-US", NOW_UPDATED_FORMAT.en).format(new Date(NOW_UPDATED_DATE))}`,
}
