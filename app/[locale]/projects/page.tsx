import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { ProjectsContent } from "@/components/sections/ProjectsContent/projects-content"
import { PROFILE } from "@/lib/site-config"
import { localeAlternates } from "@/lib/seo"
import { toLocale } from "@/i18n/locale"
import { ROUTES } from "@/lib/routes"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = toLocale((await params).locale)
  const t = await getTranslations({ locale, namespace: "meta.projects" })
  return {
    title: `${t("title")} — ${PROFILE.name}`,
    description: t("description"),
    alternates: localeAlternates(locale, ROUTES.projects),
  }
}

export default async function ProjectsPage({ params }: PageProps) {
  const locale = toLocale((await params).locale)
  setRequestLocale(locale)
  return <ProjectsContent />
}
