import { ArrowUpRight } from "lucide-react"

import { BulletList } from "@/components/ui/BulletList/bullet-list"
import { TextLink } from "@/components/ui/TextLink/text-link"

export type ExperienceCardProps = {
  title: string
  date: string
  summary: React.ReactNode
  bullets?: readonly string[]
  link?: { href: string; label: string }
}

/**
 * Card de experiencia profesional: título y enlace a la izquierda,
 * fecha alineada a la derecha, summary y bullets debajo.
 */
export function ExperienceCard({ title, date, summary, bullets, link }: ExperienceCardProps) {
  return (
    <article className="flex flex-col gap-3">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-medium text-foreground">{title}</h3>
          {link ? (
            <TextLink
              href={link.href}
              className="inline-flex w-fit items-center gap-1 font-mono text-xs text-accent"
            >
              {link.label}
              <ArrowUpRight className="h-3 w-3" aria-hidden />
            </TextLink>
          ) : null}
        </div>
        <span className="shrink-0 font-mono text-xs text-muted-foreground/70">{date}</span>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground [&_strong]:font-medium [&_strong]:text-foreground [&_em]:italic">
        {summary}
      </p>
      {bullets && bullets.length > 0 ? (
        <BulletList items={bullets} variant="dash" className="gap-2 pt-1" />
      ) : null}
    </article>
  )
}
