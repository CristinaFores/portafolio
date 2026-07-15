"use client"

import { useTranslations } from "next-intl"

import { AnimatedList } from "@/components/ui/AnimatedList/animated-list"
import { ListRow } from "@/components/ui/ListRow/list-row"
import { ParallaxBlock } from "@/components/ui/ParallaxBlock/parallax-block"
import { SectionHeading } from "@/components/ui/SectionHeading/section-heading"
import { ViewAllLink } from "@/components/ui/ViewAllLink/view-all-link"
import { useLabProjects } from "@/hooks/use-lab-projects/use-lab-projects"
import { ROUTES } from "@/lib/routes"

/**
 * Home LAB
 */

export function LabTeaserSection() {
  const t = useTranslations()
  const labProjects = useLabProjects()

  return (
    <section className="home-section">
      <ParallaxBlock className="mx-auto w-full max-w-5xl" range={20}>
        <div className="flex flex-col gap-8 max-lg:gap-6">
          <div className="flex justify-between items-center">
            <SectionHeading
              eyebrow={t("lab.home.sectionIndex")}
              title={t("lab.home.headline")}
              subtitle={t("lab.home.subtitle")}
            />
            <ViewAllLink
              className="hidden md:flex self-start"
              href={ROUTES.lab}
              label={t("lab.home.viewLab")}
            />
          </div>

          <div className="flex flex-col">
            {labProjects.map((labProject, index) => (
              <AnimatedList key={labProject.slug} index={index}>
                <ListRow
                  href={labProject.href}
                  media={{
                    src: labProject.media.src,
                    alt: labProject.media.alt,
                  }}
                  title={labProject.title}
                  subtitle={labProject.subtitle}
                  badge={labProject.badge}
                  tags={labProject.tags}
                />
              </AnimatedList>
            ))}
          </div>

          <ViewAllLink
            className="md:hidden"
            href={ROUTES.lab}
            label={t("lab.home.viewLab")}
          />
        </div>
      </ParallaxBlock>
    </section>
  )
}
