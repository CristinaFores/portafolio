import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-config"
import { projects } from "@/lib/data/projects"
import { LAB_PROJECTS } from "@/lib/data/lab-projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/lab`, changeFrequency: "monthly", priority: 0.7 },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  const labRoutes: MetadataRoute.Sitemap = LAB_PROJECTS.map((labProject) => ({
    url: `${SITE_URL}/lab/${labProject.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes, ...labRoutes]
}
