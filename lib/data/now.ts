import type { Locale } from "@/lib/translations"

export type NowStatus = "active" | "wip"

interface NowRow {
  status: NowStatus
  label: Record<Locale, string>
  title: Record<Locale, string>
  description: Record<Locale, string>
}

/**
 * Live snapshot rows for the home "Now" section. Update when the current
 * role or build focus changes — this is the single source of truth, the
 * navbar status dot and the Now section both read from it indirectly via
 * translations for now (no shared runtime state yet).
 */
export const NOW_ROWS: NowRow[] = [
  {
    status: "active",
    label: { es: "Enfoque", en: "Focus" },
    title: {
      es: "Frontend con foco en IA aplicada",
      en: "Frontend focused on applied AI",
    },
    description: {
      es: "Agentes multi-tool, MCP y automatización con n8n en el desarrollo del día a día — con RAG y bases vectoriales cuando el problema lo pide.",
      en: "Multi-tool agents, MCP and n8n automation in day-to-day development — with RAG and vector databases when the problem calls for it.",
    },
  },
  {
    status: "wip",
    label: { es: "Construyendo", en: "Building" },
    title: {
      es: "design-context-bridge",
      en: "design-context-bridge",
    },
    description: {
      es: "Servidor MCP que expone Figma a agentes de IA — tokens, capas y espaciado, sin capturas de pantalla.",
      en: "MCP server exposing Figma to AI agents — tokens, layers and spacing, no screenshots.",
    },
  },
]

export const NOW_UPDATED: Record<Locale, string> = {
  es: "Actualizado jun. 2026",
  en: "Updated Jun 2026",
}
