import { PROFILE } from "@/lib/site-config"

/**
 * Metadatos no traducibles por experiencia (enlaces externos). Las entradas
 * de experiencia viven en `messages/*.json` bajo `about.experience.*`;
 * añadir una entrada allí (en ambos idiomas) basta para que se renderice.
 */
export const EXPERIENCE_LINKS: Record<string, { href: string; label: string }> = {
  gyoza: { href: PROFILE.gyozaUrl, label: "gyoza.es" },
}

export type SkillGroupItem = {
  id: string
  labelKey: string
  /** Tags técnicos literales (no se traducen). */
  tags?: readonly string[]
  /** Claves i18n para tags que sí se traducen (p. ej. idiomas). */
  tagKeys?: readonly string[]
}

/** Grupos de skills por categoría. Añadir un grupo aquí basta para que se renderice. */
export const SKILL_GROUPS: readonly SkillGroupItem[] = [
  {
    id: "programming",
    labelKey: "about.skills.programming",
    tags: ["TypeScript", "React", "React Native", "Next.js", "Expo", "Vue 3"],
  },
  {
    id: "state",
    labelKey: "about.skills.state",
    tags: ["Zustand", "TanStack Query", "TanStack Table", "Axios", "Firebase"],
  },
  {
    id: "mobile",
    labelKey: "about.skills.mobile",
    tags: ["Expo Router", "Expo EAS", "React Navigation", "React Native Maps", "FCM"],
  },
  {
    id: "automation",
    labelKey: "about.skills.automation",
    tags: ["MCP", "Multi-tool Agents", "Vector DB (Chroma/Redis)", "Embeddings + RAG", "n8n", "Cursor"],
  },
  {
    id: "ui",
    labelKey: "about.skills.ui",
    tags: ["Sass", "BEM", "Responsive UI", "i18n", "UI/Logic separation"],
  },
  {
    id: "quality",
    labelKey: "about.skills.quality",
    tags: ["ESLint", "Testing Library", "Prettier", "Git", "Docker", "CI/CD"],
  },
  {
    id: "languages",
    labelKey: "about.skills.languages",
    tagKeys: ["about.skills.langs.native", "about.skills.langs.english"],
  },
]
