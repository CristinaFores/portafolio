"use client"

import { useLocale } from "@/lib/locale-context"
import { TextLink } from "@/components/ui/text-link"

export default function NotFound() {
  const { t } = useLocale()

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-sm tracking-widest text-muted-foreground">404</p>
      <h1 className="font-semibold leading-tight tracking-[-0.03em] text-foreground text-[clamp(2rem,6vw,3.5rem)]">
        {t("notFound.title")}
      </h1>
      <p className="max-w-md text-muted-foreground">{t("notFound.description")}</p>
      <div className="flex flex-wrap items-center justify-center gap-6">
        <TextLink href="/" className="text-foreground hover:text-accent">
          {t("notFound.backHome")}
        </TextLink>
        <TextLink href="/projects" className="text-foreground hover:text-accent">
          {t("notFound.viewProjects")}
        </TextLink>
      </div>
    </section>
  )
}
