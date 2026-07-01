import type { Locale } from "@/lib/translations"

export type NowStatus = "active" | "wip"

interface NowRow {
  status: NowStatus
  label: Record<Locale, string>
  title: Record<Locale, string>
  description: Record<Locale, string>
  href?: string
}

export const NOW_ROWS: NowRow[] = [
  {
    status: "wip",
    label: { es: "Construyendo", en: "Building" },
    title: { es: "design-context-bridge", en: "design-context-bridge" },
    description: {
      es: "Servidor MCP que expone Figma a agentes de IA — tokens, capas y espaciado, sin capturas de pantalla.",
      en: "MCP server exposing Figma to AI agents — tokens, layers and spacing, no screenshots.",
    },
    href: "/lab/design-context-bridge",
  },
  {
    status: "wip",
    label: { es: "Construyendo", en: "Building" },
    title: { es: "AuraLang", en: "AuraLang" },
    description: {
      es: "Extensión de Chrome que traduce el audio de cualquier pestaña en tiempo real — Whisper local, sin clave de API.",
      en: "Chrome extension that translates any tab's audio in real time — local Whisper, no API key.",
    },
    href: "/lab/auralang",
  },
]

export const NOW_UPDATED: Record<Locale, string> = {
  es: "Actualizado jun. 2026",
  en: "Updated Jun 2026",
}
