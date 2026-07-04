import type { Metadata } from "next"
import { AllProjects } from "@/components/sections/all-projects"
import { PROFILE } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `Proyectos — ${PROFILE.name}`,
  description:
    "Proyectos web y móvil en producción con React, React Native, Next.js y Vue.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage() {
  return <AllProjects />
}
