import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-config"
import { routing } from "@/i18n/routing"
import { PROJECTS } from "@/lib/data/projects"
import { LAB_PROJECTS } from "@/lib/data/lab-projects"

type RouteDef = {
  path: string
  changeFrequency: "monthly"
  priority: number
}

const routes: RouteDef[] = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.6 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.9 },
  { path: "/lab", changeFrequency: "monthly", priority: 0.7 },
  ...PROJECTS.map((project) => ({
    path: `/projects/${project.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  })),
  ...LAB_PROJECTS.map((labProject) => ({
    path: `/lab/${labProject.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  })),
]

/** One entry per locale and route, each carrying its hreflang alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap(({ path, changeFrequency, priority }) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [locale, `${SITE_URL}/${locale}${path}`]),
    )
    return routing.locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      changeFrequency,
      priority,
      alternates: { languages },
    }))
  })
}
