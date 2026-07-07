export interface LabLinkBase {
  href: string
  pending?: boolean
}

export interface LabLink extends LabLinkBase {
  label: string
}

export interface LabHowItWorksBase {
  /** Untranslated pipeline step labels (technical terms, same in every locale). */
  pipeline?: string[]
}

export interface LabProjectBase {
  slug: string
  name: string
  status: "wip" | "review" | "active"
  icon: string
  iconBg?: string
  links: LabLinkBase[]
  techBadges: string[]
  coverImage?: string
  howItWorks: LabHowItWorksBase
}

export interface LabProjectTranslation {
  tagline: string
  whyBuilt: string
  features?: string[]
  howItWorksSteps?: string[]
  privacy?: string
  /** Positional — matches LabProjectBase.links by index. */
  linkLabels: string[]
}

export type LabProject = Omit<LabProjectBase, "links" | "howItWorks"> & {
  tagline: string
  whyBuilt: string
  features?: string[]
  privacy?: string
  links: LabLink[]
  howItWorks: {
    steps?: string[]
    pipeline?: string[]
  }
}

export interface LabToolGroupBase {
  /** Untranslated tool/command names exposed by the MCP server. */
  tools: string[]
}

export interface LabToolGroup extends LabToolGroupBase {
  label: string
}

export interface LabMode {
  name: string
  description: string
  status: string
}

export interface LabProjectDetailBase {
  repoUrl: string
  installCommand: string
  toolGroups: LabToolGroupBase[]
  supportedClients: string[]
  techBadges: string[]
}

export interface LabProjectDetailTranslation {
  quote: string
  security: string
  modes: LabMode[]
  /** Positional — matches LabProjectDetailBase.toolGroups by index. */
  toolGroupLabels: string[]
}

export type LabProjectDetail = Omit<LabProjectDetailBase, "toolGroups"> & {
  quote: string
  security: string
  modes: LabMode[]
  toolGroups: LabToolGroup[]
}
