import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { getLabProject, LAB_PROJECTS } from "@/lib/data/lab-projects"
import { getLabTranslation } from "@/lib/data/lab-translations"
import { LabDetailContent } from "@/components/sections/LabDetailContent/lab-detail-content"
import { PROFILE, SITE_URL } from "@/lib/site-config"
import { ROUTES } from "@/lib/routes"
import { localeAlternates } from "@/lib/seo"
import { toLocale } from "@/i18n/locale"

type PageProps = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return LAB_PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params
  const locale = toLocale(rawLocale)
  const project = getLabProject(slug)
  if (!project) return {}
  const translation = getLabTranslation(slug, locale)
  return {
    title: `${project.name} — Lab — ${PROFILE.name}`,
    description: translation?.tagline,
    alternates: localeAlternates(locale, ROUTES.labProject(slug)),
  }
}

export default async function LabProjectPage({ params }: PageProps) {
  const { locale: rawLocale, slug } = await params
  const locale = toLocale(rawLocale)
  setRequestLocale(locale)
  const project = getLabProject(slug)
  if (!project) notFound()

  const translation = getLabTranslation(slug, locale)
  const repoUrl = project.links.find((link) => link.href.includes("github.com"))?.href
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: translation?.tagline,
    url: `${SITE_URL}/${locale}${ROUTES.labProject(slug)}`,
    ...(repoUrl ? { sameAs: [repoUrl] } : {}),
    applicationCategory: "DeveloperApplication",
    author: { "@type": "Person", name: PROFILE.name, url: SITE_URL },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LabDetailContent slug={slug} />
    </>
  )
}
