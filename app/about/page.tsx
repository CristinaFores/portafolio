import type { Metadata } from "next"
import { AboutContent } from "@/components/sections/AboutContent/about-content"
import { PROFILE } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Sobre mí — ${PROFILE.name}`,
  description:
    "Product / AI Engineer especializada en React, React Native, Next.js, arquitectura de interfaz, Zustand, TanStack Query y herramientas MCP.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return <AboutContent />
}
