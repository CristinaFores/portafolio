"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { TechTag } from "@/components/tech-tag"
import { GyozaProjectBadge } from "@/components/company-badge"
import { useTranslatedProject } from "@/hooks/use-translated-project"
import { cn } from "@/lib/utils"
import { EASE } from "@/lib/motion"
import { getProjectCoverScaleClass } from "@/lib/project-cover"

type ProjectCardProps = {
  slug: string
  index: number
}

/**
 * Compact project preview card used in listings.
 */
export function ProjectCard({
  slug,
  index,
}: ProjectCardProps) {
  const project = useTranslatedProject(slug)
  const pathname = usePathname()
  const router = useRouter()
  if (!project) return null

  const href = `/projects/${project.slug}`

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return
    const currentHash = typeof window !== "undefined" ? window.location.hash : ""
    if (currentHash === "#projects") return
    e.preventDefault()
    history.pushState(null, "", "/#projects")
    router.push(href)
  }

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: EASE }}
    >
      <Link
        href={href}
        onClick={handleClick}
        className="group flex h-full min-h-[140px] items-start gap-5 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/[0.04]"
      >
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-border/80 sm:h-24 sm:w-24">
          <Image
            src={project.cover || "/placeholder.svg"}
            alt={`${project.title} cover`}
            width={400}
            height={400}
            className={cn(
              "h-full w-full object-cover object-center transition-transform duration-300",
              getProjectCoverScaleClass(project.slug, true)
            )}
          />
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-2 self-stretch">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-base font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-xs tabular-nums text-muted-foreground/70">
                {project.year}
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/0 transition-all duration-300 group-hover:text-muted-foreground/60" />
            </div>
          </div>
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.subtitle}
          </p>
          <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
            {project.company === "Gyoza" && <GyozaProjectBadge />}
            {project.tags.map((tag) => (
              <TechTag key={tag} tag={tag} />
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
