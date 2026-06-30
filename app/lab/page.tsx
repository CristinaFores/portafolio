import type { Metadata } from "next"
import { LabContent } from "@/components/lab-content"
import { PROFILE } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Lab — ${PROFILE.name}`,
  description: "design-context-bridge — servidor MCP que expone Figma a agentes de IA.",
}

export default function LabPage() {
  return <LabContent />
}
