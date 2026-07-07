import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { projects, getProject } from "@/lib/data/projects"
import { getProjectTranslation } from "@/lib/data/project-translations"
import { ProjectDetail } from "@/components/sections/ProjectDetail/project-detail"
import { PROFILE } from "@/lib/site-config"
import { ROUTES } from "@/lib/routes"
import { localeAlternates } from "@/lib/seo"
import { toLocale } from "@/i18n/locale"

type PageProps = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  const locale = toLocale(rawLocale)
  const project = getProject(slug)
  if (!project) return {}
  const translation = getProjectTranslation(slug, locale)
  return {
    title: `${translation?.title ?? slug} — ${PROFILE.name}`,
    description: translation?.subtitle,
    alternates: localeAlternates(locale, ROUTES.project(slug)),
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params
  const locale = toLocale(rawLocale)
  setRequestLocale(locale)
  const project = getProject(slug)
  if (!project) notFound()

  return <ProjectDetail slug={slug} />
}
