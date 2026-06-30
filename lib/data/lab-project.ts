import type { Locale } from "@/lib/translations"

interface ToolGroup {
  label: Record<Locale, string>
  tools: string[]
}

interface Mode {
  name: Record<Locale, string>
  description: Record<Locale, string>
  status: Record<Locale, string>
}

/**
 * Factual content for the design-context-bridge lab page, sourced from the
 * project's own README. Keep this in sync with the repo — do not invent
 * features, stats, or stars/forks counts that would need to be faked.
 */
export const LAB_PROJECT = {
  repoUrl: "https://github.com/CristinaFores/design-context-bridge",
  installCommand: "npx design-context-bridge",
  quote: {
    es: "Un servidor MCP que convierte a cualquier agente de IA en un frontend developer que puede leer un archivo de Figma de verdad — no adivinar a partir de una captura.",
    en: "An MCP server that turns any AI agent into a frontend developer who can actually read a Figma file — not guess from a screenshot.",
  },
  modes: [
    {
      name: { es: "Modo Plugin", en: "Plugin Mode" },
      description: {
        es: "Envía la selección de Figma en tiempo real desde el plugin de escritorio.",
        en: "Pushes the live Figma selection from the desktop plugin in real time.",
      },
      status: { es: "Pendiente de revisión en Figma Community", en: "Pending Figma Community review" },
    },
    {
      name: { es: "Modo REST API", en: "REST API Mode" },
      description: {
        es: "Lee cualquier URL de Figma usando un token de acceso personal.",
        en: "Reads any Figma URL using a personal access token.",
      },
      status: { es: "Disponible", en: "Available" },
    },
  ] satisfies Mode[],
  toolGroups: [
    {
      label: { es: "Lectura de selección", en: "Selection reading" },
      tools: ["get_current_selection", "get_selected_colors", "get_selected_texts"],
    },
    {
      label: { es: "Navegación del archivo", en: "File navigation" },
      tools: ["get_all_pages", "get_frame_by_name", "get_node_info"],
    },
    {
      label: { es: "Extracción del sistema de diseño", en: "Design system extraction" },
      tools: ["extract_design_system", "get_variables"],
    },
    {
      label: { es: "Exportación de assets", en: "Asset export" },
      tools: ["find_assets", "export_image"],
    },
    {
      label: { es: "Análisis estructural", en: "Structural analysis" },
      tools: ["analyze_structure", "get_component_variants"],
    },
  ] satisfies ToolGroup[],
  supportedClients: ["Claude Code", "Cursor", "Windsurf", "VS Code", "OpenCode"],
  techBadges: ["TypeScript", "Node ≥ 18", "MIT License"],
  security: {
    es: "El token de Figma se lee solo desde el entorno y se envía únicamente a api.figma.com — nunca se registra, cachea ni se escribe en disco.",
    en: "The Figma token is read only from the environment and sent only to api.figma.com — never logged, cached, or written to disk.",
  },
}
