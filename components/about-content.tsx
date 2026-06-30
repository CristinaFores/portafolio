"use client"

import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"
import { PROFILE } from "@/lib/site-config"

const SKILL_TAGS: Record<string, string[]> = {
  programming: ["TypeScript", "React", "React Native", "Next.js", "Expo", "Vue 3"],
  state: ["Zustand", "TanStack Query", "TanStack Table", "Axios", "Firebase"],
  mobile: ["Expo Router", "Expo EAS", "React Navigation", "React Native Maps", "FCM"],
  automation: ["MCP", "Multi-tool Agents", "Vector DB (Chroma/Redis)", "Embeddings + RAG", "n8n", "Cursor"],
  ui: ["Sass", "BEM", "Responsive UI", "i18n", "UI/Logic separation"],
  quality: ["ESLint", "Testing Library", "Prettier", "Git", "Docker", "CI/CD"],
}

const SKILL_ORDER = [
  "programming",
  "state",
  "mobile",
  "automation",
  "ui",
  "quality",
] as const

type SectionProps = {
  label: string
  children: React.ReactNode
}

function Section({ label, children }: SectionProps) {
  return (
    <motion.section {...fadeUp} className="grid gap-4 border-t border-border py-8 md:grid-cols-[180px_1fr]">
      <h2 className="font-mono text-xs text-muted-foreground">{label}</h2>
      <div>{children}</div>
    </motion.section>
  )
}

/**
 * About page body with profile summary, experience, education and skills.
 */
export function AboutContent() {
  const { t, dict } = useLocale()
  const bullets = dict["about.experience.gyoza.bullets"] as readonly string[]
  const educationItems = dict["about.education.items"] as readonly {
    year: string
    label: string
  }[]

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <motion.header {...fadeUp} className="flex max-w-3xl flex-col gap-5">
          <p className="font-mono text-xs text-muted-foreground">Product / AI Engineer</p>
          <h1
            className="font-semibold leading-tight tracking-[-0.02em]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            {t("about.title")}
          </h1>
          <div className="flex max-w-2xl flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>{t("about.bio.1")}</p>
            <p>{t("about.bio.2")}</p>
            <p>{t("about.bio.3")}</p>
            <p>{t("about.bio.4")}</p>
          </div>
          <p className="text-sm text-muted-foreground/75">{t("about.bio.availability")}</p>
        </motion.header>

        <Section label={t("about.experience.title")}>
          <div className="flex max-w-3xl flex-col gap-10">
            <article className="flex flex-col gap-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-medium text-foreground">{t("about.experience.gyoza.title")}</h3>
                <span className="shrink-0 font-mono text-xs text-muted-foreground/70">
                  {t("about.experience.gyoza.date")}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed text-muted-foreground [&_strong]:font-medium [&_strong]:text-foreground"
                dangerouslySetInnerHTML={{ __html: t("about.experience.gyoza.summary") }}
              />
              <ul className="flex flex-col gap-2 pt-1">
                {bullets.slice(0, 4).map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-[9px] block h-px w-3 shrink-0 bg-muted-foreground/50" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>

            <article className="flex flex-col gap-3">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-medium text-foreground">{t("about.experience.freelance.title")}</h3>
                <span className="shrink-0 font-mono text-xs text-muted-foreground/70">
                  {t("about.experience.freelance.date")}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {t("about.experience.freelance.summary")}
              </p>
            </article>
          </div>
        </Section>

        <Section label={t("about.skills.title")}>
          <div className="grid max-w-3xl gap-x-8 gap-y-6 sm:grid-cols-2">
            {SKILL_ORDER.map((key) => (
              <div key={key} className="flex flex-col gap-2 border-t border-border pt-3">
                <h3 className="font-mono text-xs text-muted-foreground">
                  {t(`about.skills.${key}` as "about.skills.programming")}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/85">
                  {(SKILL_TAGS[key] ?? []).join(" · ")}
                </p>
              </div>
            ))}
            <div className="flex flex-col gap-2 border-t border-border pt-3">
              <h3 className="font-mono text-xs text-muted-foreground">
                {t("about.skills.languages")}
              </h3>
              <p className="text-sm leading-relaxed text-foreground/85">
                {t("about.skills.langs.native")} · {t("about.skills.langs.english")}
              </p>
            </div>
          </div>
        </Section>

        <Section label={t("about.education.title")}>
          <ul className="flex max-w-2xl flex-col gap-3">
            {educationItems.map((item, i) => (
              <li key={i} className="grid gap-2 sm:grid-cols-[72px_1fr]">
                <span className="font-mono text-xs text-muted-foreground/70">{item.year}</span>
                <span className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <motion.div {...fadeUp} className="border-t border-border pt-8">
          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center border border-border px-5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {t("nav.cv")}
          </a>
        </motion.div>
      </div>
    </div>
  )
}
