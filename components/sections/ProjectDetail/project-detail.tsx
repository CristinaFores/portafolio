"use client"

import { Link } from "@/i18n/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react"
import { getAdjacentProjects } from "@/lib/data/projects"
import { getProjectTranslation } from "@/lib/data/project-translations"
import { ImageCarousel } from "@/components/sections/ImageCarousel/image-carousel"
import { useTranslatedProject } from "@/hooks/use-translated-project/use-translated-project"
import { useLocale, useTranslations } from "next-intl"
import { useMotion } from "@/hooks/use-motion/use-motion"
import { cn } from "@/lib/class-names"
import { TextLink } from "@/components/ui/TextLink/text-link"
import { ROUTES } from "@/lib/routes"

/** Splits "Project Name — Description" into parts for styling; returns null if no separator. */
function splitProjectTitle(title: string): { name: string; description: string } | null {
  const sep = " — "
  const i = title.indexOf(sep)
  if (i === -1) return null
  return {
    name: title.slice(0, i).trim(),
    description: title.slice(i + sep.length).trim(),
  }
}

/** Renders project title with name emphasized and description in italic (for nav links). */
function ProjectNavLabel({ title, align = "left" }: { title: string; align?: "left" | "right" }) {
  const parts = splitProjectTitle(title)
  if (!parts) return <span className="font-medium">{title}</span>
  return (
    <>
      <span className="hidden sm:inline">
        <span className="font-medium">{parts.name}</span>
        <span className="p-1.5">—</span>
        <span className="italic">{parts.description}</span>
      </span>

      <span className={cn("flex flex-col sm:hidden", align === "right" && "items-end")}>
        <span className="font-medium">{parts.name}</span>
        <span className="text-xs italic opacity-60">{parts.description}</span>
      </span>
    </>
  )
}

type SectionProps = {
  label: string
  children: React.ReactNode
  sectionIndex?: number
}

type BulletItemProps = {
  text: string
}

type ProjectDetailProps = {
  slug: string
}

function Section({ label, children, sectionIndex = 0 }: SectionProps) {
  const { fadeUp } = useMotion()
  return (
    <motion.section
      {...fadeUp({ delay: sectionIndex * 0.04, y: 16 })}
      className="grid gap-4 border-t border-border py-8 md:grid-cols-[180px_1fr]"
    >
      <h2 className="font-mono text-xs text-muted-foreground">
        {label}
      </h2>
      <div>{children}</div>
    </motion.section>
  )
}

function BulletItem({ text }: BulletItemProps) {
  return (
    <li className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
      <span className="mt-[9px] block h-px w-3 shrink-0 bg-muted-foreground/50" />
      {text}
    </li>
  )
}

/**
 * Renders full information for a single project with translated content.
 */
export function ProjectDetail({ slug }: ProjectDetailProps) {
  const project = useTranslatedProject(slug)
  const t = useTranslations()
  const locale = useLocale()
  const { fadeUp } = useMotion()

  if (!project) return null

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <header className="flex flex-col gap-8">
          <div>
            <Link
              href={ROUTES.homeProjects}
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
              {t("project.allProjects")}
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-[1fr_280px] md:items-end">
            <div className="flex max-w-3xl flex-col gap-4">
              <h1
                className="font-semibold leading-tight tracking-[-0.025em]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
              >
                {project.title}
              </h1>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {project.subtitle}
              </p>
              {(project.url || project.figmaUrl) && (
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  {project.url && (
                    <TextLink
                      href={project.url}
                      className="inline-flex items-center gap-1 text-sm text-foreground hover:text-accent"
                    >
                      {t("project.visitProject")}
                      <ArrowUpRight className="h-3 w-3" />
                    </TextLink>
                  )}
                  {project.figmaUrl && (
                    <TextLink
                      href={project.figmaUrl}
                      className="inline-flex items-center gap-1 text-sm text-foreground hover:text-accent"
                    >
                      {t("project.viewInFigma")}
                      <ArrowUpRight className="h-3 w-3" />
                    </TextLink>
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 border-t border-border pt-4 md:border-t-0 md:pt-0">
              <p className="font-mono text-xs text-muted-foreground">
                {project.stack.slice(0, 6).join(" · ")}
              </p>
            </div>
          </div>
        </header>

        <div className="flex flex-col">
          <Section label={t("project.theChallenge")} sectionIndex={0}>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.challenge}
            </p>
          </Section>

          <Section label={t("project.myRole")} sectionIndex={1}>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.myRole}
            </p>
          </Section>

          <Section label={t("project.keyFeatures")} sectionIndex={2}>
            <ul className="flex max-w-2xl flex-col gap-2">
              {project.features.map((feature, i) => (
                <BulletItem key={i} text={feature} />
              ))}
            </ul>
          </Section>

          <Section label={t("project.theOutcome")} sectionIndex={3}>
            <ul className="flex max-w-2xl flex-col gap-2">
              {project.results.map((result, i) => (
                <BulletItem key={i} text={result} />
              ))}
            </ul>
          </Section>

          {project.howItWorks && (
            <Section label={t("project.howItWorks")} sectionIndex={4}>
              <ol className="flex max-w-2xl flex-col gap-2">
                {project.howItWorks.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Section>
          )}

          {project.whyBuilt && (
            <Section label={t("project.whyIBuiltThis")} sectionIndex={5}>
              <ul className="flex max-w-2xl flex-col gap-2">
                {project.whyBuilt.map((reason, i) => (
                  <BulletItem key={i} text={reason} />
                ))}
              </ul>
            </Section>
          )}

          {project.uxProcess && (
            <Section label={t("project.uxProcess")} sectionIndex={6}>
              <div className="grid max-w-3xl gap-5 sm:grid-cols-2">
                {project.uxProcess.map((step, i) => (
                  <div key={i} className="flex flex-col gap-1 border-t border-border pt-3">
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-sm font-medium text-foreground">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {project.userTestInsights && (
            <Section label={t("project.userTestInsights")} sectionIndex={7}>
              <div className="flex max-w-2xl flex-col gap-4">
                {project.userTestInsights.map((insight, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-muted-foreground/60">
                      {insight.area}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">{insight.finding}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {project.keyFindings && (
            <Section label={t("project.keyFindings")} sectionIndex={8}>
              <ul className="flex max-w-2xl flex-col gap-2">
                {project.keyFindings.map((finding, i) => (
                  <BulletItem key={i} text={finding} />
                ))}
              </ul>
            </Section>
          )}
        </div>

        {project.images.length > 0 && (
          <motion.div {...fadeUp()} className="flex flex-col gap-4 border-t border-border pt-8">
            <h2 className="font-mono text-xs text-muted-foreground">
              {t("project.gallery")}
            </h2>
            <ImageCarousel images={project.images} />
          </motion.div>
        )}

        <motion.div
          {...fadeUp({ delay: 0.06 })}
          className={`flex items-center justify-between ${project.images.length > 0 ? "border-t border-border pt-6" : ""}`}
        >
          {prev ? (
            <Link
              href={ROUTES.project(prev.slug)}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />
              <ProjectNavLabel title={getProjectTranslation(prev.slug, locale)?.title ?? prev.slug} />
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={ROUTES.project(next.slug)}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ProjectNavLabel title={getProjectTranslation(next.slug, locale)?.title ?? next.slug} align="right" />
              <ArrowRight className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          ) : (
            <span />
          )}
        </motion.div>
      </div>
    </div>
  )
}
