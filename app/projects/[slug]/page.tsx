import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects, getProject } from "@/lib/data/projects"
import { getProjectTranslation } from "@/lib/data/project-translations"
import { ProjectDetail } from "@/components/sections/ProjectDetail/project-detail"
import { PROFILE } from "@/lib/site-config"
import { ROUTES } from "@/lib/routes"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  const translation = getProjectTranslation(slug, "en")
  return {
    title: `${translation?.title ?? slug} — ${PROFILE.name}`,
    description: translation?.subtitle,
    alternates: { canonical: ROUTES.project(slug) },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return <ProjectDetail slug={slug} />
}
