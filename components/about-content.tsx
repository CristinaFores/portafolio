"use client"

import { motion } from "framer-motion"
import { useLocale } from "@/lib/locale-context"
import { fadeUp } from "@/lib/motion"
import { GyozaIcon } from "@/components/icons"
import { PROFILE } from "@/lib/site-config"

const SKILL_TAGS: Record<string, string[]> = {
  programming: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Expo",
    "Vite",
  ],
  state: [
    "Zustand",
    "TanStack Query",
    "TanStack Table",
    "React Context",
    "Redux",
    "REST APIs",
    "Firebase",
    "Axios",
  ],
  forms: ["Formik", "Yup"],
  mobile: [
    "Expo Router",
    "React Navigation",
    "React Native Maps",
    "Async Storage",
    "Firebase Auth",
    "WebView",
    "Push Notifications",
  ],
  automation: ["n8n", "OpenAI", "Claude Code", "MCP", "RAG Systems", "Pinecone", "ChromaDB", "Cursor"],
  ui: [
    "HTML5",
    "CSS3",
    "Sass (SCSS)",
    "Responsive Design",
    "React Select",
    "i18n / i18next",
  ],
  build: [
    "Vite",
    "Expo EAS",
    "Storybook",
    "CI/CD",
    "Git",
    "GitHub",
    "Bitbucket",
    "Jira",
    "Babel",
    "SWC",
  ],
  quality: ["ESLint", "Testing Library", "Prettier"],
}

const SKILL_ORDER = [
  "programming",
  "state",
  "forms",
  "mobile",
  "automation",
  "ui",
  "build",
  "quality",
  "languages",
] as const

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
      <div className="mx-auto flex max-w-3xl flex-col gap-12">
        <motion.h1
          {...fadeUp}
          className="font-semibold tracking-[-0.02em]"
          style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          {t("about.title")}
        </motion.h1>

        <motion.div {...fadeUp} className="flex flex-col gap-5">
          <p className="text-base leading-relaxed text-muted-foreground">
            {t("about.bio.1")}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {t("about.bio.2")}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {t("about.bio.3")}
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            {t("about.bio.4")}
          </p>
          <p className="text-sm italic text-muted-foreground/75">
            {t("about.bio.availability")}
          </p>
        </motion.div>

        <div className="h-px bg-border/60" aria-hidden />

        <motion.div {...fadeUp} className="flex flex-col gap-6">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("about.experience.title")}
          </h2>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="flex items-center gap-2 font-medium text-foreground">
                <GyozaIcon className="h-5 w-5 shrink-0 text-[#FA2F2F]" aria-hidden />
                {t("about.experience.gyoza.title")}
              </h3>
              <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground/60">
                {t("about.experience.gyoza.date")}
              </span>
            </div>
            <p
              className="text-sm leading-relaxed text-muted-foreground [&_strong]:font-semibold [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: t("about.experience.gyoza.summary") }}
            />
            <ul className="flex flex-col gap-2 pt-1 text-sm text-muted-foreground">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 block h-1 w-1 shrink-0 rounded-full bg-muted-foreground/40" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="font-medium text-foreground">
                {t("about.experience.freelance.title")}
              </h3>
              <span className="shrink-0 font-mono text-xs tabular-nums text-muted-foreground/60">
                {t("about.experience.freelance.date")}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {t("about.experience.freelance.summary")}
            </p>
          </div>
        </motion.div>

        <div className="h-px bg-border/60" aria-hidden />

        <motion.div {...fadeUp} className="flex flex-col gap-5">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("about.education.title")}
          </h2>
          <ul className="flex flex-col gap-0">
            {educationItems.map((item, i) => (
              <li
                key={i}
                className="flex items-baseline gap-5 py-2.5 last:pb-0 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-border/60"
              >
                <span className="w-20 shrink-0 font-mono text-xs tabular-nums text-muted-foreground/60">
                  {item.year}
                </span>
                <span className="text-sm text-muted-foreground">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="h-px bg-border/60" aria-hidden />

        <motion.div {...fadeUp} className="flex flex-col gap-5">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("about.skills.title")}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {SKILL_ORDER.map((key) => (
              <div
                key={key}
                className="rounded-lg border border-border/60 bg-muted/20 px-4 py-3"
              >
                <h3 className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-foreground/70">
                  {key === "languages"
                    ? t("about.skills.languages")
                    : t(`about.skills.${key}` as "about.skills.programming")}
                </h3>
                {key === "languages" ? (
                  <p className="text-sm text-muted-foreground">
                    {t("about.skills.langs.native")} ·{" "}
                    {t("about.skills.langs.english")}
                  </p>
                ) : (
                  <div className="flex flex-wrap gap-1.5">
                    {(SKILL_TAGS[key] ?? []).map((skill) => (
                      <span
                        key={skill}
                        className="rounded bg-foreground/[0.06] px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="h-px bg-border/60" aria-hidden />

        <motion.div {...fadeUp} className="flex flex-col gap-3">
          <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {t("about.coreStack.title")}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("about.coreStack.text")}
          </p>
        </motion.div>

        <div className="h-px bg-border/60" aria-hidden />

        <motion.div {...fadeUp} className="flex flex-col items-start gap-3">
          <a
            href={PROFILE.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center rounded-lg border border-border px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {t("nav.cv")}
          </a>
        </motion.div>
      </div>
    </div>
  )
}
