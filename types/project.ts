export interface ProjectImage {
  src: string
  /** Screen/section description — "desktop" or "mobile". Do not include project name. */
  alt: string
  type: "mobile" | "desktop" | "terminal" | "wireframe"
}
export interface ProjectBase {
  slug: string
  title: string
  subtitle?: string
  company?: "Gyoza"
  featured?: boolean
  year: string
  stack: string[]
  tags: string[]
  images: ProjectImage[]
  icon: string
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
