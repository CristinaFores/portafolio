"use client"

import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react"
import { TerminalSnippet } from "@/components/ui/TerminalSnippet/terminal-snippet"
import { useTranslations } from "next-intl"
import { Tag } from "@/components/ui/Tag/tag"
import { ROUTES } from "@/lib/routes"
import { getLabProject } from "@/lib/data/lab-projects"
import { LabModeBase, LabToolGroupBase } from "@/types/lab"
interface LabelSectionProps {
  label: string
}

const LabelSection = ({ label }: LabelSectionProps) => {
  return (
    <h2 className="font-mono text-xs text-muted-foreground tracking-wider">{label}</h2>
  )
}

interface DescriptionSectionProps {
  description: string
}

const DescriptionSection = ({ description }: DescriptionSectionProps) => {
  return (
    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground tracking-wider">{description}</p>
  )
}
interface ListNumberSectionProps {
  list: string[]
}

const ListNumberSection = ({ list }: ListNumberSectionProps) => {
  return (
    <ol className="flex flex-col gap-4 max-w-3xl">
      {list.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="shrink-0 font-mono text-xs text-muted-foreground/50 relative top-1">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
        </li>
      ))}
    </ol>
  )
}

interface LinkExternalSectionProps {
  href: string
  label: string
}

const LinkExternalSection = ({ href, label }: LinkExternalSectionProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent">
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}

interface BlockSectionProps {
  children: React.ReactNode
}

const BlockSection = ({ children }: BlockSectionProps) => {
  return (
    <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">{children}</section>
  )
}

interface BackButtonProps {
  href: string
  label: string
}

const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <ArrowLeft className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
      {label}
    </Link>
  )
}
interface LabDetailContentProps {
  slug: string
}

export function LabDetailContent({ slug }: LabDetailContentProps) {
  const t = useTranslations()
  const project = getLabProject(slug)

  const features = t.raw(`lab.projects.${slug}.features`) as unknown as string[]
  const howItWorksSteps = t.raw(`lab.projects.${slug}.howItWorksSteps`) as unknown as string[]
  const toolGroups = t.raw(`lab.projects.${slug}.toolGroups`) as unknown as LabToolGroupBase[]
  const modes = t.raw(`lab.projects.${slug}.modes`) as unknown as LabModeBase[]
  const privacy = t.raw(`lab.projects.${slug}.privacy`) as unknown as string[]
  const disclaimer = t.raw(`lab.projects.${slug}.disclaimer`) as unknown as string[]

  if (!project) return null

  return (
    <div className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-12">
        <header className="flex flex-col gap-6">
           <BackButton href={ROUTES.lab} label={t("lab.back.label")} />

          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden"  >
              <Image
                src={project.icon}
                alt={t(`lab.projects.${slug}.title`)}
                width={56}
                height={56}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-heading-md font-semibold leading-tight tracking-[-0.025em]">
                  {t(`lab.projects.${slug}.title`)}
                </h1>
                <Tag variant="status">{t(`lab.projects.${slug}.status`)}</Tag>
              </div>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                {t(`lab.projects.${slug}.tagline`)}
              </p>
            </div>
          </div>
        </header>

       {/* Cover image */}
        {project.coverImage && (
          <div className="overflow-hidden border border-border max-h-[520px]">
            <Image
              src={project.coverImage}
              alt={project.name}
              width={1200}
              height={800}
              className="w-full object-cover object-top"
            />
          </div>
        )}

        {/* Install command — DCB only */}
        {project.installCommand && (
          <TerminalSnippet
            command={project.installCommand}
            output={[
              "✓ MCP server ready",
              `✓ ${project.supportedClients?.length || 0} compatible clients detected`,
              "→ listening on stdio",
            ]}
          />
        )}

      <div className="flex flex-col divide-y divide-border">
          {/* Por qué lo construí */}
          <BlockSection>
            <LabelSection label={t("project.whyIBuiltThis")} />
            <DescriptionSection description={t(`lab.projects.${slug}.whyBuilt`)} />
          </BlockSection>

          {/* Qué hace — feature bullets (AuraLang) */}
          {features.length > 0 && (
            <BlockSection>
              <LabelSection label={t("lab.whatItDoes.title")} />
              <ul className="flex flex-col gap-3">
                {features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted-foreground/40" aria-hidden />
                    {feat}
                  </li>
                ))}
              </ul>
            </BlockSection>
          )}

          {/* Cómo funciona */}
          {howItWorksSteps.length > 0 && (
          <BlockSection>
            <LabelSection label={t("lab.howItWorks.title")} />
            <div>
              {howItWorksSteps.length > 0 && (
                <ListNumberSection list={howItWorksSteps} />
              )}
            </div>
          </BlockSection>
          )}
          {/* Qué expone — DCB only */}
          {project?.isToolGroup && (
            <BlockSection>
              <LabelSection label={t("lab.capabilities.title")} />
              <div className="flex flex-col gap-3">
                {toolGroups.map((group) => (
                  <div key={group.name} className="flex flex-col gap-0.5 sm:flex-row sm:gap-4">
                    <span className="shrink-0 text-sm font-medium text-foreground sm:w-50">{group.name}</span>
                    <span className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                      {group.tools.join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            </BlockSection>
          )}

          {/* Modos de uso — DCB only */}
          {modes.length > 0 && (
            <BlockSection>
              <LabelSection label={t("lab.modes.title")} />
              <div className="grid gap-6">
                {modes.map((mode) => (
                  <div key={mode.name} className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{mode.name}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground">{mode.description}</span>
                    <span className="font-mono text-[12px] text-muted-foreground">{mode.status}</span>
                    <blockquote className="mt-2 border-l-2 border-accent pl-3 font-display text-sm font-medium leading-snug tracking-tight text-foreground">
                      {mode.status}
                    </blockquote>
                  </div>
                ))}
              </div>
            </BlockSection>
          )}
          {/* Privacidad — AuraLang */}
          {privacy.length > 0 && (
            <BlockSection>
              <LabelSection label={t("lab.security.title")} />
              <DescriptionSection description={t(`lab.projects.${slug}.privacy`)} />
            </BlockSection>
          )}
          {/* Build y herramientas */}
          <BlockSection>
            <LabelSection label={t("about.skills.build")} />
            <div className="flex flex-wrap gap-1.5">
              {project.techBadges?.map((badge) => (
                <Tag key={badge} variant="muted">
                  {badge}
                </Tag>
              ))}
            </div>
          </BlockSection>

          {/* Enlaces */}
          <BlockSection>
            <LabelSection label={t("lab.links")} />
            <div className="flex flex-col gap-3">
              {project.links.map((link) => (
               <LinkExternalSection key={link.href} href={link.href} label={link.label} />
              ))}
            </div>
          </BlockSection>
        </div>
        {disclaimer.length > 0 && (
          <p className="font-mono text-[11px] text-muted-foreground/55">{disclaimer}</p>
        )}
      </div>
    </div>
  )
}
