export interface LabLinkBase {
  href: string
  pending?: boolean
  label: string
}

export interface LabLink extends LabLinkBase {
  label: string
}

export interface LabModeBase {
  name: string
  description: string
  status: string
}

export interface LabToolGroupBase {
  tools: string[]
  name: string
}

export interface LabProjectBase {
  slug: string
  name: string
  status: "wip" | "review" | "active"
  icon: string
  links: LabLinkBase[]
  techBadges?: string[]
  coverImage?: string
  howItWorks?: string[]
  installCommand?: string
  repoUrl?: string
  toolGroups?: LabToolGroupBase[]
  supportedClients?: string[]
  isToolGroup?: boolean
}