import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale, getTranslations } from "next-intl/server"
import { projects, getProject } from "@/lib/data/projects"
import { ProjectDetail } from "@/components/sections/ProjectDetail/project-detail"
import type { ProjectTranslation } from "@/types/project"
import { PROFILE, SITE_URL } from "@/lib/site-config"
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
  const t = await getTranslations({ locale })
  const key = `project.items.${slug}`
  const translation = t.has(key) ? (t.raw(key) as ProjectTranslation) : undefined
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

  const t = await getTranslations({ locale })
  const key = `project.items.${slug}`
  const translation = t.has(key) ? (t.raw(key) as ProjectTranslation) : undefined
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: translation?.title ?? slug,
    description: translation?.subtitle,
    url: `${SITE_URL}/${locale}${ROUTES.project(slug)}`,
    author: { "@type": "Person", name: PROFILE.name, url: SITE_URL },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectDetail slug={slug} />
    </>
  )
}
