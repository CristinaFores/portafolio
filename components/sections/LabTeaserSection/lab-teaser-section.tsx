"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/SectionHeading/section-heading"
import { ParallaxBlock } from "@/components/ui/ParallaxBlock/parallax-block"
import { ViewAllLink } from "@/components/ui/ViewAllLink/view-all-link"
import { ListRow } from "@/components/ui/ListRow/list-row"
import { LAB_PROJECTS } from "@/lib/data/lab-projects"
import { useTranslations } from "next-intl"
import { useMotion } from "@/hooks/use-motion/use-motion"
import { ROUTES } from "@/lib/routes"

type LabTeaserRowProps = {
  project: {
    id: string
    slug: string
    href: string
    title: string
    subtitle: string
    media: { src: string, alt: string }
    tags: { label: string }[]
    badge: string
  }
  index: number
}


export function LabTeaserRow({ project, index  }: LabTeaserRowProps) {
  const t = useTranslations()
  const { staggerItem } = useMotion()

  return (
    <motion.article {...staggerItem(index, { step: 0.03, y: 12 })}>
      <ListRow 
        key={project.id}
        href={project.href}
        title={project.title}
        subtitle={project.subtitle}
        media={project.media}
        tags={project.tags}
        badge={project.badge}
       />
    </motion.article>
  )
}

/**
 * Home LAB
 */

export function LabTeaserSection() {
  const t = useTranslations()

    const labProjects = LAB_PROJECTS.map((project) => ({
    id: crypto.randomUUID(),
    slug: project.slug,
    href: ROUTES.labProject(project.slug),
    title: t(`lab.projects.${project.slug}.title`),
    subtitle: t(`lab.projects.${project.slug}.subtitle`),
    media: { src: project.icon, alt: project.name },
    tags: project.techBadges?.map((badge) => ({ label: badge })).slice(0, 3) ?? [],
    badge: `${t(`constants.status.${project.status}`)}`,
  }))

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
            <ViewAllLink className="hidden md:flex self-start"  href={ROUTES.lab} label={t("lab.home.viewLab")} />
            </div>

          <div className="flex flex-col">
            {labProjects.map((project, index) => (
              <LabTeaserRow project={project} index={index} key={project.id} />
            ))}
          </div>

         <ViewAllLink className="md:hidden" href={ROUTES.lab} label={t("lab.home.viewLab")} />
        </div>
      </ParallaxBlock>
    </section>
  )
}
