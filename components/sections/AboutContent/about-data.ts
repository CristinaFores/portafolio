import { PROFILE } from "@/lib/site-config"

/** Claves i18n de los párrafos de la bio, en orden de lectura. */
export const BIO_PARAGRAPH_KEYS = [
  "about.bio.1",
  "about.bio.2",
  "about.bio.3",
  "about.bio.4",
] as const

export type ExperienceItem = {
  id: string
  titleKey: string
  dateKey: string
  summaryKey: string
  /** El summary contiene HTML (strong) y se renderiza como tal. */
  summaryIsHtml?: boolean
  /** Clave i18n de la lista de bullets asociada a la experiencia. */
  bulletsKey?: string
  link?: { href: string; label: string }
}

/** Experiencia profesional. Añadir una entrada aquí basta para que se renderice. */
export const EXPERIENCE_ITEMS: readonly ExperienceItem[] = [
  {
    id: "gyoza",
    titleKey: "about.experience.gyoza.title",
    dateKey: "about.experience.gyoza.date",
    summaryKey: "about.experience.gyoza.summary",
    summaryIsHtml: true,
    bulletsKey: "about.experience.gyoza.bullets",
    link: { href: PROFILE.gyozaUrl, label: "gyoza.es" },
  },
  {
    id: "freelance",
    titleKey: "about.experience.freelance.title",
    dateKey: "about.experience.freelance.date",
    summaryKey: "about.experience.freelance.summary",
  },
]

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
