"use client"

import { GyozaIcon } from "@/components/icons"
import { useLocale } from "@/lib/locale-context"

/**
 * Badge that indicates the project was done at Gyoza (company).
 * Matches the visual language of TechTag so it fits in the same row.
 */
export function GyozaProjectBadge() {
  const { t } = useLocale()

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1.5 text-xs leading-snug text-muted-foreground"
      title={t("work.companyBadge")}
    >
      <GyozaIcon className="h-3.5 w-3.5 shrink-0" />
      {t("work.companyBadge")}
    </span>
  )
}
