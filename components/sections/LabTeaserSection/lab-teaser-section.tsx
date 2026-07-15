"use client"

import { useTranslations } from "next-intl"

import { AnimatedList } from "@/components/ui/AnimatedList/animated-list"
import { HomeListSection } from "@/components/ui/HomeListSection/home-list-section"
import { ListRow } from "@/components/ui/ListRow/list-row"
import { useLabProjects } from "@/hooks/use-lab-projects/use-lab-projects"
import { ROUTES } from "@/lib/routes"

/**
 * Home LAB
 */

export function LabTeaserSection() {
  const t = useTranslations()
  const labProjects = useLabProjects()

  return (
    <HomeListSection
      parallax
      eyebrow={t("lab.home.sectionIndex")}
      title={t("lab.home.headline")}
      subtitle={t("lab.home.subtitle")}
      viewAll={{ href: ROUTES.lab, label: t("lab.home.viewLab") }}
    >
      <div className="flex flex-col">
        {labProjects.map((labProject, index) => (
          <AnimatedList key={labProject.slug} index={index}>
            <ListRow
              href={labProject.href}
              media={{ src: labProject.media.src, alt: labProject.media.alt }}
              title={labProject.title}
              subtitle={labProject.subtitle}
              badge={labProject.badge}
              tags={labProject.tags}
            />
          </AnimatedList>
        ))}
      </div>
    </HomeListSection>
  )
}
