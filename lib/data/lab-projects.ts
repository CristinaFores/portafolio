import type { LabProjectBase } from "@/types/lab"

export const LAB_PROJECTS: LabProjectBase[] = [
  {
    slug: "design-context-bridge",
    name: "design-context-bridge",
    status: "active",
    icon: "/images/dcb/logo-128.png",
    iconBg: "transparent",
    howItWorks: {},
    links: [
      { href: "https://github.com/CristinaFores/design-context-bridge" },
      { href: "https://www.npmjs.com/package/design-context-bridge" },
      { href: "https://www.figma.com/community", pending: true },
    ],
    techBadges: ["TypeScript", "Node ≥ 18", "MIT License", "Claude Code", "Cursor", "Windsurf", "VS Code", "OpenCode"],
    coverImage: "/images/dcb/02-thumbnail-1920x1080.png",
  },
  {
    slug: "auralang",
    name: "AuraLang",
    status: "active",
    icon: "/images/auralang/chrome-icon128.png",
    howItWorks: {
      pipeline: ["Tab audio", "Whisper (local)", "Google Translate", "Web Speech API"],
    },
    links: [
      { href: "https://github.com/CristinaFores/auralang" },
      { href: "https://chromewebstore.google.com/detail/pakdegbkjgibdjkpdniabdocffiejolo" },
    ],
    techBadges: ["Chrome MV3", "React 18", "TypeScript", "Whisper", "Vite", "Tailwind CSS"],
    coverImage: "/images/auralang/hero-light.png",
  },
]

export function getLabProject(slug: string): LabProjectBase | undefined {
  return LAB_PROJECTS.find((p) => p.slug === slug)
}
