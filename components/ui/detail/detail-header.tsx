import Image from "next/image"
import { useTranslations } from "next-intl"

import { BackButton } from "@/components/ui/BackButton/back-button"
import { Tag } from "@/components/ui/Tag/tag"

interface DetailHeaderProps {
  eyebrow?: string
  title?: string
  subtitle?: string
  status?: string
  children?: React.ReactNode
  href?: string
  backLabel: string
  icon?: {
    src?: string
    alt?: string
  }
  slug: string
}

export const DetailHeader = ({
  title,
  subtitle,
  status,
  href,
  backLabel,
  icon,
  slug,
}: DetailHeaderProps) => {
  const t = useTranslations()

  return (
    <header className="flex flex-col gap-6">
      <BackButton href={href || "/"} label={t(backLabel)} />
      <div className="flex items-start gap-4">
        <div className="shrink-0 items-center justify-center overflow-hidden rounded-md sm:h-[74px] sm:w-[74px] hidden sm:flex">
          {icon?.src && (
            <Image
              src={icon.src}
              alt={icon.alt || ""}
              width={56}
              height={56}
              className="h-full w-full object-contain"
            />
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            {title && (
              <h1 className="text-heading-md font-semibold leading-tight tracking-[-0.025em]">
                {t(title)}
              </h1>
            )}

            {status && (
              <Tag text={t(`lab.projects.${slug}.status`)} variant="badge" />
            )}
          </div>
          {subtitle && (
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t(subtitle)}
            </p>
          )}
        </div>
      </div>
    </header>
  )
}
