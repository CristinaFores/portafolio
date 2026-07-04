import type { Metadata } from "next"
import { LabContent } from "@/components/sections/lab-content"
import { PROFILE } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Lab — ${PROFILE.name}`,
  description:
    "Proyectos open source en producción: design-context-bridge (servidor MCP que expone Figma a agentes de IA) y AuraLang (traducción de audio en tiempo real con Whisper local).",
  alternates: { canonical: "/lab" },
}

export default function LabPage() {
  return <LabContent />
}
