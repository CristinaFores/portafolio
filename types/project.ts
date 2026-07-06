export interface ProjectImage {
  src: string
  /** Screen/section description — "desktop" or "mobile". Do not include project name. */
  alt: string
  type: "mobile" | "desktop" | "terminal" | "wireframe"
}

export interface UxProcess {
  title: string
  description: string
}

export interface UserTestInsight {
  area: string
  finding: string
}

export interface ProjectBase {
  slug: string
  /** When set (e.g. "Gyoza"), a company badge is shown on the card and detail. */
  company?: "Gyoza"
  /** When true, shown on the home page featured section (one per client). */
  featured?: boolean
  year: string
  stack: string[]
  tags: string[]
  figmaUrl?: string
  images: ProjectImage[]
  cover: string
  url?: string
}

export interface ProjectTranslation {
  title: string
  subtitle: string
  challenge: string
  myRole: string
  features: string[]
  results: string[]
  imageAlts: string[]
  howItWorks?: string[]
}

export type Project = ProjectBase &
  ProjectTranslation & {
    whyBuilt?: string[]
    uxProcess?: UxProcess[]
    userTestInsights?: UserTestInsight[]
    keyFindings?: string[]
  }
