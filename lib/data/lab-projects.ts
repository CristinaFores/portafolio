import type { LabProjectBase } from "@/types/lab"

export const LAB_PROJECTS: LabProjectBase[] = [
  {
    slug: "design-context-bridge",
    name: "design-context-bridge",
    status: "active",
    icon: "/images/dcb/logo-128.png",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/CristinaFores/design-context-bridge",
      },
      {
        label: "npm",
        href: "https://www.npmjs.com/package/design-context-bridge",
      },
    ],
    stack: [
      "TypeScript",
      "MCP",
      "Claude Code",
      "Node ≥ 18",
      "MIT License",
      "Cursor",
      "Windsurf",
      "VS Code",
      "OpenCode",
    ],
    coverImage: "/images/dcb/02-thumbnail-1920x1080.png",
    repoUrl: "https://github.com/CristinaFores/design-context-bridge",
    installCommand: "npx design-context-bridge",
    supportedClients: [
      "Claude Code",
      "Cursor",
      "Windsurf",
      "VS Code",
      "OpenCode",
    ],
    isToolGroup: true,
  },
  {
    slug: "auralang",
    name: "AuraLang",
    status: "active",
    icon: "/images/auralang/chrome-icon128.png",
    links: [
      { label: "GitHub", href: "https://github.com/CristinaFores/auralang" },
      {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/pakdegbkjgibdjkpdniabdocffiejolo",
      },
    ],
    stack: [
      "Chrome MV3",
      "React 18",
      "Whisper",
      "Google Translate",
      "MIT License",
      "Web Speech API",
    ],
    coverImage: "/images/auralang/hero-light.png",
    repoUrl: "https://github.com/CristinaFores/auralang",
  },
]

export function getLabProject(slug: string): LabProjectBase | undefined {
  return LAB_PROJECTS.find((p) => p.slug === slug)
}
