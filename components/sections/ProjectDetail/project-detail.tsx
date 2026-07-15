"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { BulletList } from "@/components/ui/BulletList/bullet-list"
import { DescriptionSection } from "@/components/ui/DescriptionSection/description-section"
import { DetailHeader } from "@/components/ui/detail/detail-header"
import { DetailBlock } from "@/components/ui/DetailBlock/detail-block"
import { LinkExternalSection } from "@/components/ui/LinkExternalSection/link-external-section"
import { ListNumberSection } from "@/components/ui/ListNumberSection/list-number-section"
import { Tag } from "@/components/ui/Tag/tag"
import { useMotion } from "@/hooks/use-motion/use-motion"
import { useRawMessages } from "@/hooks/use-raw-messages/use-raw-messages"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/class-names"
import { getAdjacentProjects, getProject } from "@/lib/data/projects"
import { ROUTES } from "@/lib/routes"

import { ImageCarousel } from "../ImageCarousel/image-carousel"

/** Splits "Project Name — Description" into parts for styling; returns null if no separator. */
function splitProjectTitle(
  title: string,
): { name: string; description: string } | null {
  const sep = " — "
  const i = title.indexOf(sep)
  if (i === -1) return null
  return {
    name: title.slice(0, i).trim(),
    description: title.slice(i + sep.length).trim(),
  }
}

/** Renders project title with name emphasized and description in italic (for nav links). */
function ProjectNavLabel({
  title,
  align = "left",
}: {
  title: string
  align?: "left" | "right"
}) {
  const parts = splitProjectTitle(title)

  if (!parts) return <span className="font-medium">{title}</span>
  return (
    <>
      <span className="hidden sm:inline">
        <span className="font-medium">{parts.name}</span>
        <span className="p-1.5">—</span>
        <span className="italic">{parts.description}</span>
      </span>

      <span
        className={cn(
          "flex flex-col sm:hidden",
          align === "right" && "items-end",
        )}
      >
        <span className="font-medium">{parts.name}</span>
        <span className="text-xs italic opacity-60">{parts.description}</span>
      </span>
    </>
  )
}

interface ProjectDetailProps {
  slug: string
}
/**
 * Renders full information for a single project with translated content.
 */
export function ProjectDetail({ slug }: ProjectDetailProps) {
  const { t, rawList, rawText } = useRawMessages()

  const findProject = getProject(slug)

  const project = {
    features: rawList<string>(`project.items.${slug}.features`),
    results: rawList<string>(`project.items.${slug}.results`),
    howItWorks: rawList<string>(`project.items.${slug}.howItWorks`),
    challenge: rawText(`project.items.${slug}.challenge`),
    myRole: rawText(`project.items.${slug}.myRole`),
    status: rawText(`project.items.${slug}.status`),
    title: rawText(`project.items.${slug}.title`),
    ...findProject,
  }

  const {
    title,
    icon,
    myRole,
    challenge,
    images = [],
    features,
    results,
    howItWorks,
  } = project

  const projectTitle = (projectSlug: string) => {
    const key = `project.items.${projectSlug}.title`
    return t.has(key) ? t(key) : projectSlug
  }
  const { fadeUp } = useMotion()

  if (!project) return null

  const { prev, next } = getAdjacentProjects(slug)

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <DetailHeader
          title={`project.items.${slug}.title`}
          subtitle={`project.items.${slug}.subtitle`}
          backLabel="project.backToProject"
          href={ROUTES.lab}
          icon={{ src: icon, alt: title }}
          slug={slug}
        />

        <div className="flex flex-col divide-y divide-border">
          {/* El reto */}
          <DetailBlock label={t("project.theChallenge")}>
            <DescriptionSection description={challenge} />
          </DetailBlock>

          {/* Mi rol */}
          <DetailBlock label={t("project.myRole")}>
            <DescriptionSection description={myRole} />
          </DetailBlock>

          {/* Características clave */}
          <DetailBlock label={t("project.keyFeatures")}>
            <BulletList items={features} />
          </DetailBlock>

          {/* Qué hace */}
          <DetailBlock label={t("project.theOutcome")}>
            <BulletList items={results} />
          </DetailBlock>

          {/* Cómo funciona */}
          {howItWorks && (
            <DetailBlock label={t("project.howItWorks")}>
              <ListNumberSection list={howItWorks} />
            </DetailBlock>
          )}

          {/* Stack */}
          <DetailBlock label={t("project.stack")}>
            <div className="flex flex-wrap gap-1.5">
              {project.stack?.map((badge) => (
                <Tag key={badge} text={badge} variant="accent" />
              ))}
            </div>
          </DetailBlock>

          {/* Enlace al proyecto */}
          {project.url && (
            <DetailBlock label={t("project.projectUrl")}>
              <LinkExternalSection href={project.url} label={project.url} />
            </DetailBlock>
          )}

          {/* Galería */}
          {images.length > 0 && (
            <motion.div
              {...fadeUp()}
              className="flex flex-col gap-4  pt-8 mt-8 mb-8"
            >
              <h2 className="font-mono text-xs text-muted-foreground">
                {t("project.gallery")}
              </h2>
              <ImageCarousel images={images} />
            </motion.div>
          )}
        </div>

        <motion.div
          {...fadeUp({ delay: 0.06 })}
          className="flex items-center justify-between"
        >
          {prev ? (
            <Link
              href={ROUTES.project(prev.slug)}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5" />
              <ProjectNavLabel title={projectTitle(prev.slug)} />
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={ROUTES.project(next.slug)}
              className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ProjectNavLabel title={projectTitle(next.slug)} align="right" />
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
