import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLabProject, LAB_PROJECTS } from "@/lib/data/lab-projects"
import { getLabTranslation } from "@/lib/data/lab-translations"
import { LabDetailContent } from "@/components/sections/LabDetailContent/lab-detail-content"
import { PROFILE } from "@/lib/site-config"
import { ROUTES } from "@/lib/routes"

export function generateStaticParams() {
  return LAB_PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getLabProject(slug)
  if (!project) return {}
  const translation = getLabTranslation(slug, "es")
  return {
    title: `${project.name} — Lab — ${PROFILE.name}`,
    description: translation?.tagline,
    alternates: { canonical: ROUTES.labProject(slug) },
  }
}

export default async function LabProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getLabProject(slug)
  if (!project) notFound()

  return <LabDetailContent slug={slug} />
}
