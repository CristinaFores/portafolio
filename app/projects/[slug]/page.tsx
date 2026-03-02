import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { projects, getProject } from "@/lib/data/projects"
import { ProjectDetail } from "@/components/project-detail"
import { PROFILE } from "@/lib/site-config"

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
  return {
    title: `${project.title} — ${PROFILE.name}`,
    description: project.subtitle,
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
