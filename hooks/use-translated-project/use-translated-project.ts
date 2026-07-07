"use client"

import { useMemo } from "react"
import { getProject } from "@/lib/data/projects"
import { getProjectTranslation } from "@/lib/data/project-translations"
import { useLocale } from "next-intl"
import type { Project } from "@/types/project"

/**
 * Returns a project with all user-facing text in the current locale.
 * Falls back to original project content when translation is missing.
 */
export function useTranslatedProject(slug: string): Project | null {
  const locale = useLocale()
  const project = getProject(slug)
  const translation = getProjectTranslation(slug, locale)

  return useMemo(() => {
    if (!project) return null

    const images = translation
      ? project.images.map((img, i) => ({
          ...img,
          alt: translation.imageAlts[i] ?? img.alt,
        }))
      : project.images

    return {
      ...project,
      title: translation?.title ?? "",
      subtitle: translation?.subtitle ?? "",
      challenge: translation?.challenge ?? "",
      myRole: translation?.myRole ?? "",
      features: translation?.features ?? [],
      results: translation?.results ?? [],
      imageAlts: translation?.imageAlts ?? [],
      images,
      ...(translation?.howItWorks != null && { howItWorks: translation.howItWorks }),
    }
  }, [project, translation])
}
