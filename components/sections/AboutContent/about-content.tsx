"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useMotion } from "@/hooks/use-motion/use-motion"
import { PROFILE } from "@/lib/site-config"
import { ButtonLink } from "@/components/ui/ButtonLink/button-link"
import { PageHeader } from "@/components/ui/PageHeader/page-header"
import { SectionRow } from "@/components/ui/SectionRow/section-row"
import { EducationCard } from "@/components/sections/EducationCard/education-card"
import { ExperienceCard } from "@/components/sections/ExperienceCard/experience-card"
import { SkillCard } from "@/components/sections/SkillCard/skill-card"
import { BioParagraphs } from "./bio-paragraphs"
import { EXPERIENCE_ITEMS, SKILL_GROUPS } from "./about-data"

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

  const resolveBullets = (key?: string) =>
    key ? (t.raw(key) as readonly string[]).slice(0, 4) : undefined

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <div className="flex max-w-3xl flex-col gap-5">
          <PageHeader eyebrow="Product / AI Engineer" title={t("about.title")} />
          <div className="flex max-w-2xl flex-col gap-4 text-base sm:text-lg">
            <BioParagraphs />
          </div>
          <p className="text-sm text-muted-foreground/75">{t("about.bio.availability")}</p>
        </div>

        <SectionRow label={t("about.experience.title")} sectionIndex={0}>
          <div className="flex max-w-3xl flex-col gap-10">
            {EXPERIENCE_ITEMS.map((item) => (
              <ExperienceCard
                key={item.id}
                title={t(item.titleKey)}
                date={t(item.dateKey)}
                summary={t(item.summaryKey)}
                summaryIsHtml={item.summaryIsHtml}
                bullets={resolveBullets(item.bulletsKey)}
                link={item.link}
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
