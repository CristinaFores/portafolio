"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useMotion } from "@/hooks/use-motion/use-motion"
import { PROFILE } from "@/lib/site-config"
import { ButtonLink } from "@/components/ui/ButtonLink/button-link"
import { SectionRow } from "@/components/ui/SectionRow/section-row"
import { EducationCard } from "@/components/sections/EducationCard/education-card"
import { ExperienceCard } from "@/components/sections/ExperienceCard/experience-card"
import { SkillCard } from "@/components/sections/SkillCard/skill-card"
import { BioParagraphs } from "./bio-paragraphs"
import { RICH_TAGS } from "./rich-tags"
import { EXPERIENCE_LINKS, SKILL_GROUPS } from "./about-data"
import { SectionHeading } from "@/components/ui/SectionHeading/section-heading"

/**
 * Cuerpo de la página About: bio, experiencia, skills y educación.
 * Los datos viven en `about-data.ts`; este componente solo compone.
 */
export function AboutContent() {
  const t = useTranslations()
  const { fadeUp } = useMotion()
  const educationItems = t.raw("about.education.items") as readonly {
    year: string
    label: string
  }[]

  const experience = t.raw("about.experience") as Record<string, unknown>
  const experienceIds = Object.keys(experience).filter(
    (id) => typeof experience[id] === "object" && experience[id] !== null,
  )

  const resolveBullets = (id: string) => {
    const entry = experience[id] as { bullets?: readonly string[] }
    return entry.bullets?.slice(0, 4)
  }

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex max-w-3xl flex-col gap-5">
          <SectionHeading eyebrow="Product / AI Engineer" title={t("about.title")} />
          <div className="flex max-w-2xl flex-col gap-4">
            <BioParagraphs />
          </div>
          <blockquote className="mt-2 max-w-2xl border-l-2 border-accent pl-5 font-display text-base font-semibold leading-snug tracking-tight text-foreground">
            {t("about.bio.motto")}
          </blockquote>
          <p className="text-sm text-muted-foreground/75">{t("about.bio.availability")}</p>
        </div>

        <SectionRow label={t("about.experience.title")} sectionIndex={0}>
          <div className="flex max-w-3xl flex-col gap-10">
            {experienceIds.map((id) => (
              <ExperienceCard
                key={id}
                title={t(`about.experience.${id}.title`)}
                date={t(`about.experience.${id}.date`)}
                summary={t.rich(`about.experience.${id}.summary`, RICH_TAGS)}
                bullets={resolveBullets(id)}
                link={EXPERIENCE_LINKS[id]}
              />
            ))}
          </div>
        </SectionRow>

        <SectionRow label={t("about.skills.title")} sectionIndex={1}>
          <div className="grid max-w-3xl gap-x-8 gap-y-6 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <SkillCard
                key={group.id}
                label={t(group.labelKey)}
                skills={group.tags ?? (group.tagKeys ?? []).map((key) => t(key))}
              />
            ))}
          </div>
        </SectionRow>

        <SectionRow label={t("about.education.title")} sectionIndex={2}>
          <div className="flex max-w-3xl flex-col gap-6">
            {educationItems.map((item) => (
              <EducationCard key={item.year} year={item.year} label={item.label} />
            ))}
          </div>
        </SectionRow>

        <motion.div {...fadeUp()} className="border-t border-border pt-8">
          <ButtonLink variant="outline" href={PROFILE.cvUrl}>
            {t("nav.cv")}
          </ButtonLink>
        </motion.div>
      </div>
    </div>
  )
}
