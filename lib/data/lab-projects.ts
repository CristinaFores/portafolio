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
    icon: "/images/dcb/logo-128.png",
    iconBg: "transparent",
    tagline: {
      es: 'Para que la IA "vea" tus diseños sin depender de imágenes. Pasa datos limpios de Figma (capas, espaciados, tokens) directo a tus agentes de IA a través de MCP.',
      en: 'So AI can "see" your designs without relying on images. Passes clean Figma data (layers, spacing, tokens) straight to your AI agents through MCP.',
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
    status: "active",
    icon: "/images/auralang/chrome-icon128.png",
    tagline: {
      es: "Traduce al vuelo el audio de cualquier pestaña. Es totalmente privado: Whisper se ejecuta directamente en tu máquina, sin enviar datos fuera.",
      en: "Translates any tab's audio on the fly. Fully private: Whisper runs directly on your machine, no data ever leaves it.",
    },
    whyBuilt: {
      es: "Millones de personas consumen contenido en idiomas que no dominan y pierden contexto cada vez que pausan para traducir. Quise resolver eso: traducción de audio en tiempo real, sin claves de API ni backend propio. La transcripción ocurre en el dispositivo con Whisper — solo el texto transcrito sale a red para traducirse.",
      en: "Millions of people consume content in languages they don't fully command and lose context every time they pause to translate. I set out to fix that: real-time audio translation, no API keys, no self-hosted backend. Transcription runs on-device with Whisper — only the transcribed text leaves the network to be translated.",
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
        es: "Elige idioma de origen y destino, y cambia de par cuando quieras.",
        en: "Pick source and target language, and switch pairs whenever you want.",
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
        href: "https://chromewebstore.google.com/detail/pakdegbkjgibdjkpdniabdocffiejolo",
      },
    ],
    techBadges: ["Chrome MV3", "React 18", "TypeScript", "Whisper", "Vite", "Tailwind CSS"],
    coverImage: "/images/auralang/hero-light.png",
  },
]

export function getLabProject(slug: string): LabProject | undefined {
  return LAB_PROJECTS.find((p) => p.slug === slug)
}
