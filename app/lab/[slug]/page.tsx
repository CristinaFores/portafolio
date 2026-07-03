import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getLabProject, LAB_PROJECTS } from "@/lib/data/lab-projects"
import { LabDetailContent } from "@/components/lab-detail-content"
import { PROFILE } from "@/lib/site-config"

export function generateStaticParams() {
  return LAB_PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getLabProject(slug)
  if (!project) return {}
  return {
    title: `${project.name} — Lab — ${PROFILE.name}`,
    description: project.tagline.es,
    alternates: { canonical: `/lab/${slug}` },
  }
}

export default async function LabProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getLabProject(slug)
  if (!project) notFound()

  return <LabDetailContent slug={slug} />
}
