import type { ReactNode } from "react"

import { ParallaxBlock } from "@/components/ui/ParallaxBlock/parallax-block"
import { SectionHeading } from "@/components/ui/SectionHeading/section-heading"
import { ViewAllLink } from "@/components/ui/ViewAllLink/view-all-link"
import { cn } from "@/lib/class-names"

type HomeListSectionProps = {
  eyebrow: string
  title: string
  subtitle: string
  viewAll: { href: string; label: string }
  children: ReactNode
  id?: string
  className?: string
  /** Wrap the content in a subtle scroll parallax (desktop only). */
  parallax?: boolean
}

/**
 * Shared home-page list section: heading with a desktop "view all" link, the
 * list, and a mobile "view all" link. Presentational — the composing section
 * resolves i18n and passes the final strings.
 */
export function HomeListSection({
  eyebrow,
  title,
  subtitle,
  viewAll,
  children,
  id,
  className,
  parallax = false,
}: HomeListSectionProps) {
  const content = (
    <>
      <div className="flex items-center justify-between">
        <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />
        <ViewAllLink
          className="hidden self-start md:flex"
          href={viewAll.href}
          label={viewAll.label}
        />
      </div>
      {children}
      <ViewAllLink
        className="md:hidden"
        href={viewAll.href}
        label={viewAll.label}
      />
    </>
  )

  return (
    <section id={id} className={cn("home-section", className)}>
      {parallax ? (
        <ParallaxBlock className="mx-auto w-full max-w-5xl" range={20}>
          <div className="flex flex-col gap-8 max-lg:gap-6">{content}</div>
        </ParallaxBlock>
      ) : (
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 max-lg:gap-6">
          {content}
        </div>
      )}
    </section>
  )
}
