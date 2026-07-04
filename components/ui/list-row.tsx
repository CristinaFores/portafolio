import type { MouseEventHandler, ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Tag, type TagProps } from "@/components/ui/tag"

type ListRowTag = {
  label: string
  variant?: TagProps["variant"]
}

type ListRowMedia = {
  src: string
  alt?: string
  fit?: "cover" | "contain"
}

export type ListRowProps = {
  href: string
  title: ReactNode
  subtitle: ReactNode
  media?: ListRowMedia
  tags?: ListRowTag[]
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

/**
 * Shared list row: thumbnail, title, subtitle, tags, and trailing arrow.
 * Pure/presentational — data, i18n, motion, and click behavior live in the
 * section that composes this primitive (see design ADR-2).
 */
export function ListRow({ href, title, subtitle, media, tags, onClick }: ListRowProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="group flex items-start gap-5 border-b border-border/50 py-8 transition-colors hover:border-border md:gap-6 md:py-10"
    >
      {media && (
        <div className="relative hidden h-12 w-12 shrink-0 overflow-hidden rounded-md md:block">
          <Image
            src={media.src}
            alt={media.alt ?? ""}
            width={96}
            height={96}
            sizes="48px"
            className={`h-full w-full opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 ${
              media.fit === "cover" ? "object-cover object-center" : "object-contain"
            }`}
          />
        </div>
      )}

      <div className="flex min-w-0 flex-1 flex-col gap-2.5">
        <h3 className="text-base font-medium leading-snug text-foreground transition-colors group-hover:text-accent">
          {title}
        </h3>

        <p className="line-clamp-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {subtitle}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {tags.map((tag) => (
              <Tag key={tag.label} variant={tag.variant}>
                {tag.label}
              </Tag>
            ))}
          </div>
        )}
      </div>

      <ArrowUpRight
        className="mt-1 hidden h-4 w-4 shrink-0 translate-x-0 text-accent/0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-accent md:block"
        aria-hidden
      />
    </Link>
  )
}
