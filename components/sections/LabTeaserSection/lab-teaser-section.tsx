"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading/section-heading"
import { ParallaxBlock } from "@/components/ui/ParallaxBlock/parallax-block"
import { ViewAllLink } from "@/components/ui/ViewAllLink/view-all-link"
import { ListRow } from "@/components/ui/ListRow/list-row"
import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { useLocale } from "@/lib/i18n/locale-context"
import { useMotion } from "@/hooks/use-motion"
import { ROUTES } from "@/lib/routes"

/**
 * Home teaser for the Lab. Same row pattern as FeaturedProjects/ProjectCaseRow
 * so both list sections on the home page share one visual language.
 */
export function LabTeaserSection() {
  const { t, locale } = useLocale()
  const { staggerItem } = useMotion()

  return (
    <section className="home-section">
      <ParallaxBlock className="mx-auto w-full max-w-5xl" range={20}>
        <div className="flex flex-col gap-8 max-lg:gap-6">
          <SectionHeading
            index={t("lab.home.sectionIndex")}
            title={t("lab.home.headline")}
            subtitle={t("lab.home.subhead")}
          />

          <div className="flex flex-col">
            {LAB_PROJECTS.map((project, i) => (
              <motion.article key={project.slug} {...staggerItem(i, { step: 0.03, y: 12 })}>
                <ListRow
                  href={ROUTES.labProject(project.slug)}
                  title={project.name}
                  subtitle={project.tagline[locale]}
                  media={{ src: project.icon, fit: "contain" }}
                  tags={[{ label: t(`lab.status.${project.status}`) }]}
                />
              </motion.article>
            ))}
          </div>

          <ViewAllLink href={ROUTES.lab} label={t("lab.home.viewLab")} />
        </div>
      </ParallaxBlock>
    </section>
  )
}
