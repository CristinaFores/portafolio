"use client"

import { useMemo } from "react"
import { getLabProject } from "@/lib/data/lab-projects"
import { getLabTranslation, getLabDetailTranslation } from "@/lib/data/lab-translations"
import { LAB_PROJECT } from "@/lib/data/lab-project"
import { useLocale } from "@/i18n/locale-context"
import type { LabProject, LabProjectDetail } from "@/types/lab"

/**
 * Returns a Lab project with all user-facing text in the current locale.
 * Falls back to empty strings when translation is missing.
 */
export function useTranslatedLabProject(slug: string): LabProject | null {
  const { locale } = useLocale()
  const project = getLabProject(slug)
  const translation = getLabTranslation(slug, locale)

  return useMemo(() => {
    if (!project) return null

    const links = project.links.map((link, i) => ({
      ...link,
      label: translation?.linkLabels[i] ?? "",
    }))

    return {
      ...project,
      tagline: translation?.tagline ?? "",
      whyBuilt: translation?.whyBuilt ?? "",
      features: translation?.features,
      privacy: translation?.privacy,
      links,
      howItWorks: {
        pipeline: project.howItWorks.pipeline,
        steps: translation?.howItWorksSteps,
      },
    }
  }, [project, translation])
}

/**
 * Returns the design-context-bridge detail content (quote, modes, tool groups)
 * with all user-facing text in the current locale.
 */
export function useTranslatedLabProjectDetail(slug: string): LabProjectDetail | null {
  const { locale } = useLocale()
  const translation = getLabDetailTranslation(slug, locale)

  return useMemo(() => {
    if (slug !== "design-context-bridge") return null

    const toolGroups = LAB_PROJECT.toolGroups.map((group, i) => ({
      ...group,
      label: translation?.toolGroupLabels[i] ?? "",
    }))

    return {
      ...LAB_PROJECT,
      quote: translation?.quote ?? "",
      security: translation?.security ?? "",
      modes: translation?.modes ?? [],
      toolGroups,
    }
  }, [slug, translation])
}
