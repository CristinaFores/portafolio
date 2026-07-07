/** Translated content for each Lab project (es/en). Merged with lab base data in components. */

import type { Locale } from "@/types/i18n"
import type { LabProjectTranslation, LabProjectDetailTranslation } from "@/types/lab"

type LabProjectTranslations = Record<string, LabProjectTranslation>

export const labTranslations: Record<Locale, LabProjectTranslations> = {
  es: {
    "design-context-bridge": {
      tagline:
        'Para que la IA "vea" tus diseños sin depender de imágenes. Pasa datos limpios de Figma (capas, espaciados, tokens) directo a tus agentes de IA a través de MCP.',
      whyBuilt:
        "MCP (Model Context Protocol) es el protocolo que permite a los agentes de IA llamar a herramientas externas en lugar de interpretar capturas de pantalla. Cuando vi que nadie había conectado Figma con los agentes de forma que expusiera los tokens reales — no los píxeles — lo construí.",
      howItWorksSteps: [
        "El servidor MCP se conecta al archivo de Figma vía API y expone su estructura — nodos, estilos, variables — como herramientas que cualquier agente compatible puede invocar.",
        "Cuando un agente de IA (Cursor, Claude) necesita contexto de diseño, llama a esas herramientas en vez de pedir una captura de pantalla.",
        "El agente recibe datos estructurados — tokens, capas, espaciado — y los usa para generar código que respeta el sistema de diseño desde el primer prompt.",
      ],
      linkLabels: ["Ver en GitHub", "npm", "Figma Community"],
    },
    auralang: {
      tagline:
        "Traduce al vuelo el audio de cualquier pestaña. Es totalmente privado: Whisper se ejecuta directamente en tu máquina, sin enviar datos fuera.",
      whyBuilt:
        "Millones de personas consumen contenido en idiomas que no dominan y pierden contexto cada vez que pausan para traducir. Quise resolver eso: traducción de audio en tiempo real, sin claves de API ni backend propio. La transcripción ocurre en el dispositivo con Whisper — solo el texto transcrito sale a red para traducirse.",
      features: [
        "Cualquier pestaña con audio — vídeos, llamadas, podcasts, directos.",
        "Transcripción en el dispositivo — Whisper corre en local; el audio nunca sale de tu máquina.",
        "Traducción hablada — el audio original se silencia; solo escuchas la traducción.",
        "Elige idioma de origen y destino, y cambia de par cuando quieras.",
      ],
      privacy:
        "Sin backend, sin telemetría, sin cuenta. La transcripción ocurre en tu dispositivo; solo el texto transcrito se envía a Google Translate para obtener la traducción. La configuración (idiomas, tema) se almacena en chrome.storage.local en tu máquina.",
      linkLabels: ["Ver en GitHub", "Chrome Web Store"],
    },
  },
  en: {
    "design-context-bridge": {
      tagline:
        'So AI can "see" your designs without relying on images. Passes clean Figma data (layers, spacing, tokens) straight to your AI agents through MCP.',
      whyBuilt:
        "MCP (Model Context Protocol) is the protocol that lets AI agents call external tools instead of interpreting screenshots. When I saw that nobody had connected Figma to agents in a way that exposed the actual tokens — not the pixels — I built it.",
      howItWorksSteps: [
        "The MCP server connects to the Figma file via API and exposes its structure — nodes, styles, variables — as tools any compatible agent can call.",
        "When an AI agent (Cursor, Claude) needs design context, it calls those tools instead of asking for a screenshot.",
        "The agent receives structured data — tokens, layers, spacing — and uses it to generate code that respects the design system from the first prompt.",
      ],
      linkLabels: ["View on GitHub", "npm", "Figma Community"],
    },
    auralang: {
      tagline:
        "Translates any tab's audio on the fly. Fully private: Whisper runs directly on your machine, no data ever leaves it.",
      whyBuilt:
        "Millions of people consume content in languages they don't fully command and lose context every time they pause to translate. I set out to fix that: real-time audio translation, no API keys, no self-hosted backend. Transcription runs on-device with Whisper — only the transcribed text leaves the network to be translated.",
      features: [
        "Any tab with audio — videos, calls, podcasts, live streams.",
        "On-device transcription — Whisper runs locally; audio never leaves your machine.",
        "Spoken translation — the original tab audio is muted; you only hear the translation.",
        "Pick source and target language, and switch pairs whenever you want.",
      ],
      privacy:
        "No backend, no telemetry, no account. Transcription happens on your device; only the transcribed text is sent to Google Translate to get the translation back. Settings (languages, theme) are stored in chrome.storage.local on your machine.",
      linkLabels: ["View on GitHub", "Chrome Web Store"],
    },
  },
}

/**
 * Returns translated content for a given Lab project and locale.
 */
export function getLabTranslation(slug: string, locale: Locale): LabProjectTranslation | undefined {
  return labTranslations[locale][slug]
}

type LabProjectDetailTranslations = Record<string, LabProjectDetailTranslation>

export const labDetailTranslations: Record<Locale, LabProjectDetailTranslations> = {
  es: {
    "design-context-bridge": {
      quote:
        "Un servidor MCP que convierte a cualquier agente de IA en un frontend developer que puede leer un archivo de Figma de verdad — no adivinar a partir de una captura.",
      security:
        "El token de Figma se lee solo desde el entorno y se envía únicamente a api.figma.com — nunca se registra, cachea ni se escribe en disco.",
      modes: [
        {
          name: "Modo Plugin",
          description: "Envía la selección de Figma en tiempo real desde el plugin de escritorio.",
          status: "Pendiente de revisión en Figma Community",
        },
        {
          name: "Modo REST API",
          description: "Lee cualquier URL de Figma usando un token de acceso personal.",
          status: "Disponible",
        },
      ],
      toolGroupLabels: [
        "Lectura de selección",
        "Navegación del archivo",
        "Extracción del sistema de diseño",
        "Exportación de assets",
        "Análisis estructural",
      ],
    },
  },
  en: {
    "design-context-bridge": {
      quote:
        "An MCP server that turns any AI agent into a frontend developer who can actually read a Figma file — not guess from a screenshot.",
      security:
        "The Figma token is read only from the environment and sent only to api.figma.com — never logged, cached, or written to disk.",
      modes: [
        {
          name: "Plugin Mode",
          description: "Pushes the live Figma selection from the desktop plugin in real time.",
          status: "Pending Figma Community review",
        },
        {
          name: "REST API Mode",
          description: "Reads any Figma URL using a personal access token.",
          status: "Available",
        },
      ],
      toolGroupLabels: [
        "Selection reading",
        "File navigation",
        "Design system extraction",
        "Asset export",
        "Structural analysis",
      ],
    },
  },
}

/**
 * Returns translated detail content for a given Lab project and locale.
 */
export function getLabDetailTranslation(slug: string, locale: Locale): LabProjectDetailTranslation | undefined {
  return labDetailTranslations[locale][slug]
}
