import type { Locale } from "@/lib/translations"

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

export const LAB_PROJECTS: LabProject[] = [
  {
    slug: "design-context-bridge",
    name: "design-context-bridge",
    status: "active",
    icon: "/images/dcb/01-plugin-icon-128.png",
    iconBg: "#0f0e1a",
    tagline: {
      es: "Servidor MCP que expone Figma a agentes de IA: tokens, capas y espaciado, sin capturas de pantalla.",
      en: "MCP server that exposes Figma to AI agents: tokens, layers and spacing — no screenshots.",
    },
    whyBuilt: {
      es: "MCP (Model Context Protocol) es el protocolo que permite a los agentes de IA llamar a herramientas externas en lugar de interpretar capturas de pantalla. Cuando vi que nadie había conectado Figma con los agentes de forma que expusiera los tokens reales — no los píxeles — lo construí.",
      en: "MCP (Model Context Protocol) is the protocol that lets AI agents call external tools instead of interpreting screenshots. When I saw that nobody had connected Figma to agents in a way that exposed the actual tokens — not the pixels — I built it.",
    },
    howItWorks: {
      steps: [
        {
          es: "El servidor MCP se conecta al archivo de Figma vía API y expone su estructura — nodos, estilos, variables — como herramientas que cualquier agente compatible puede invocar.",
          en: "The MCP server connects to the Figma file via API and exposes its structure — nodes, styles, variables — as tools any compatible agent can call.",
        },
        {
          es: "Cuando un agente de IA (Cursor, Claude) necesita contexto de diseño, llama a esas herramientas en vez de pedir una captura de pantalla.",
          en: "When an AI agent (Cursor, Claude) needs design context, it calls those tools instead of asking for a screenshot.",
        },
        {
          es: "El agente recibe datos estructurados — tokens, capas, espaciado — y los usa para generar código que respeta el sistema de diseño desde el primer prompt.",
          en: "The agent receives structured data — tokens, layers, spacing — and uses it to generate code that respects the design system from the first prompt.",
        },
      ],
    },
    links: [
      {
        label: { es: "Ver en GitHub", en: "View on GitHub" },
        href: "https://github.com/CristinaFores/design-context-bridge",
      },
      {
        label: { es: "npm", en: "npm" },
        href: "https://www.npmjs.com/package/design-context-bridge",
      },
      {
        label: { es: "Figma Community", en: "Figma Community" },
        href: "https://www.figma.com/community",
        pending: true,
      },
    ],
    techBadges: ["TypeScript", "Node ≥ 18", "MIT License", "Claude Code", "Cursor", "Windsurf", "VS Code", "OpenCode"],
    coverImage: "/images/dcb/02-thumbnail-1920x1080.png",
  },
  {
    slug: "auralang",
    name: "AuraLang",
    status: "review",
    icon: "/images/auralang/chrome-icon128.png",
    tagline: {
      es: "Extensión de Chrome que traduce el audio de cualquier pestaña en tiempo real — Whisper local, sin clave de API.",
      en: "Chrome extension that translates any tab's audio in real time — local Whisper, no API key.",
    },
    whyBuilt: {
      es: "Usaba herramientas de IA y recursos técnicos en inglés constantemente y perdía contexto cada vez que tenía que pausar y traducir manualmente. Quería escuchar el audio traducido en tiempo real, sin depender de claves de API ni de un backend propio. La transcripción ocurre en el dispositivo con Whisper — solo el texto transcrito sale a red para traducirse.",
      en: "I constantly used AI tools and technical content in English and kept losing context whenever I had to pause and translate manually. I wanted to hear translated audio in real time, without depending on API keys or a backend of my own. Transcription happens on-device with Whisper — only the transcribed text goes out over the network to be translated.",
    },
    features: [
      {
        es: "Cualquier pestaña con audio — vídeos, llamadas, podcasts, directos.",
        en: "Any tab with audio — videos, calls, podcasts, live streams.",
      },
      {
        es: "Transcripción en el dispositivo — Whisper corre en local; el audio nunca sale de tu máquina.",
        en: "On-device transcription — Whisper runs locally; audio never leaves your machine.",
      },
      {
        es: "Traducción hablada — el audio original se silencia; solo escuchas la traducción.",
        en: "Spoken translation — the original tab audio is muted; you only hear the translation.",
      },
      {
        es: "Sin clave, sin cuenta, sin backend — la configuración vive solo en tu navegador.",
        en: "No key, no account, no backend — settings live only in your browser.",
      },
    ],
    howItWorks: {
      pipeline: ["Tab audio", "Whisper (local)", "Google Translate", "Web Speech API"],
    },
    privacy: {
      es: "Sin backend, sin telemetría, sin cuenta. La transcripción ocurre en tu dispositivo; solo el texto transcrito se envía a Google Translate para obtener la traducción. La configuración (idiomas, tema) se almacena en chrome.storage.local en tu máquina.",
      en: "No backend, no telemetry, no account. Transcription happens on your device; only the transcribed text is sent to Google Translate to get the translation back. Settings (languages, theme) are stored in chrome.storage.local on your machine.",
    },
    links: [
      {
        label: { es: "Ver en GitHub", en: "View on GitHub" },
        href: "https://github.com/CristinaFores/auralang",
      },
      {
        label: { es: "Chrome Web Store", en: "Chrome Web Store" },
        href: "https://chromewebstore.google.com",
        pending: true,
      },
    ],
    techBadges: ["Chrome MV3", "React 18", "TypeScript", "Whisper", "Vite", "Tailwind CSS"],
    coverImage: "/images/auralang/chrome-captura-dark-resize.jpg",
  },
]

export function getLabProject(slug: string): LabProject | undefined {
  return LAB_PROJECTS.find((p) => p.slug === slug)
}
