import type { Locale } from "@/types/i18n"

export interface LabLink {
  label: Record<Locale, string>
  href: string
  pending?: boolean
}

export interface LabProject {
  slug: string
  name: string
  status: "wip" | "review" | "active"
  icon: string
  iconBg?: string
  tagline: Record<Locale, string>
  whyBuilt: Record<Locale, string>
  features?: Record<Locale, string>[]
  howItWorks: {
    steps?: Record<Locale, string>[]
    pipeline?: string[]
  }
  privacy?: Record<Locale, string>
  links: LabLink[]
  techBadges: string[]
  coverImage?: string
}
