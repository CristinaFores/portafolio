"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { useTranslatedProject } from "@/hooks/use-translated-project"
import { useMotion } from "@/hooks/use-motion"
import { Tag } from "@/components/ui/tag"

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

  const href = `/projects/${project.slug}`
  const stackTags = project.stack.slice(0, 4)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return
    const currentHash = typeof window !== "undefined" ? window.location.hash : ""
    if (currentHash === "#projects") return
    e.preventDefault()
    history.pushState(null, "", "/#projects")
    router.push(href)
  }

  return (
    <motion.article {...staggerItem(index, { step: 0.03, y: 12 })}>
      <Link
        href={href}
        onClick={handleClick}
        className="group flex items-start gap-5 border-b border-border/50 py-8 transition-colors hover:border-border md:gap-6 md:py-10"
      >
        <div className="relative hidden h-12 w-12 shrink-0 overflow-hidden md:block">
          <Image
            src={project.cover || "/placeholder.svg"}
            alt=""
            width={96}
            height={96}
            className="h-full w-full object-cover object-center opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-2.5">
          <div className="flex items-start justify-between gap-6">
            <h3 className="text-base font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
              {project.title}
            </h3>
          </div>

          <p className="line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {project.subtitle}
          </p>

          {stackTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {stackTags.map((tech) => (
                <Tag key={tech}>{tech}</Tag>
              ))}
            </div>
          )}
        </div>

        <ArrowUpRight
          className="mt-1 hidden h-4 w-4 shrink-0 translate-x-0 text-muted-foreground/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-muted-foreground/60 md:block"
          aria-hidden
        />
      </Link>
    </motion.article>
  )
}
