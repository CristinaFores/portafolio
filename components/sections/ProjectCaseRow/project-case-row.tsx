"use client"

import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useTranslatedProject } from "@/hooks/use-translated-project/use-translated-project"
import { useMotion } from "@/hooks/use-motion/use-motion"
import { ListRow } from "@/components/ui/ListRow/list-row"
import { ROUTES } from "@/lib/routes"

type ProjectCaseRowProps = {
  slug: string
  index: number
}

/**
 * Minimal project row — text-first, small thumbnail on desktop.
 */
export function ProjectCaseRow({ slug, index }: ProjectCaseRowProps) {
  const project = useTranslatedProject(slug)
  const pathname = usePathname()
  const router = useRouter()
  const { staggerItem } = useMotion()

  if (!project) return null

  const href = ROUTES.project(project.slug)
  const stackTags = project.stack.slice(0, 4)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return
    const currentHash = typeof window !== "undefined" ? window.location.hash : ""
    if (currentHash === "#projects") return
    e.preventDefault()
    history.pushState(null, "", ROUTES.homeProjects)
    router.push(href)
  }

  return (
    <motion.article {...staggerItem(index, { step: 0.03, y: 12 })}>
      <ListRow
        href={href}
        onClick={handleClick}
        title={project.title}
        subtitle={project.subtitle}
        media={{ src: project.cover || "/placeholder.svg", fit: "cover" }}
        tags={stackTags.map((tech) => ({ label: tech }))}
      />
    </motion.article>
  )
}
