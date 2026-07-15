"use client"

import Image from "next/image"

import { PageContentContainer } from "@/components/layout/PageContent/page-content"
import { Blockquote } from "@/components/ui/Blockquote/blockquote"
import { BulletList } from "@/components/ui/BulletList/bullet-list"
import { DescriptionSection } from "@/components/ui/DescriptionSection/description-section"
import { DetailHeader } from "@/components/ui/detail/detail-header"
import { DetailBlock } from "@/components/ui/DetailBlock/detail-block"
import { LinkExternalSection } from "@/components/ui/LinkExternalSection/link-external-section"
import { ListNumberSection } from "@/components/ui/ListNumberSection/list-number-section"
import { Tag } from "@/components/ui/Tag/tag"
import { TerminalSnippet } from "@/components/ui/TerminalSnippet/terminal-snippet"
import { useRawMessages } from "@/hooks/use-raw-messages/use-raw-messages"
import { getLabProject } from "@/lib/data/lab-projects"
import { ROUTES } from "@/lib/routes"
import { LabModeBase, LabToolGroupBase } from "@/types/lab"

interface LabDetailContentProps {
  slug: string
}

export function LabDetailContent({ slug }: LabDetailContentProps) {
  const { t, rawList, rawText } = useRawMessages()
  const project = getLabProject(slug)

  const features = rawList<string>(`lab.projects.${slug}.features`)
  const howItWorksSteps = rawList<string>(
    `lab.projects.${slug}.howItWorksSteps`,
  )
  const toolGroups = rawList<LabToolGroupBase>(
    `lab.projects.${slug}.toolGroups`,
  )
  const modes = rawList<LabModeBase>(`lab.projects.${slug}.modes`)
  const privacy = rawText(`lab.projects.${slug}.privacy`)
  const disclaimer = rawText(`lab.projects.${slug}.disclaimer`)

  if (!project) return null

  return (
    <PageContentContainer>
      <DetailHeader
        title={`lab.projects.${slug}.title`}
        subtitle={`lab.projects.${slug}.tagline`}
        backLabel="lab.back.label"
        href={ROUTES.lab}
        icon={{ src: project.icon, alt: project.name }}
        slug={slug}
        status={project.status}
      />

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
        <DetailBlock label={t(`lab.whyIBuiltThis.title`)}>
          <DescriptionSection
            description={t(`lab.projects.${slug}.whyBuilt`)}
          />
        </DetailBlock>

        {/* Qué hace — feature bullets (AuraLang) */}
        {features.length > 0 && (
          <DetailBlock label={t("lab.whatItDoes.title")}>
            <BulletList items={features} />
          </DetailBlock>
        )}

        {/* Cómo funciona */}
        {howItWorksSteps.length > 0 && (
          <DetailBlock label={t("lab.howItWorks.title")}>
            <ListNumberSection list={howItWorksSteps} />
          </DetailBlock>
        )}

        {/* Qué expone — DCB only */}
        {project?.isToolGroup && (
          <DetailBlock label={t("lab.capabilities.title")}>
            <div className="flex flex-col gap-3">
              {toolGroups.map((group) => (
                <div
                  key={group.name}
                  className="flex flex-col gap-0.5 sm:flex-row sm:gap-4"
                >
                  <span className="shrink-0 text-sm font-medium text-foreground sm:w-50">
                    {group.name}
                  </span>
                  <span className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                    {group.tools.join(" · ")}
                  </span>
                </div>
              ))}
            </div>
          </DetailBlock>
        )}

        {/* Modos de uso — DCB only */}
        {modes.length > 0 && (
          <DetailBlock label={t("lab.modes.title")}>
            <div className="grid gap-4">
              {modes.map((mode) => (
                <div key={mode.name} className="flex flex-col">
                  <span className="text-sm font-bold text-foreground mb-1 ">
                    {mode.name}
                  </span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    {mode.description}
                  </span>
                  {mode.status && <Blockquote text={mode.status} />}
                </div>
              ))}
            </div>
          </DetailBlock>
        )}
        {/* Privacidad — AuraLang */}
        {privacy.length > 0 && (
          <DetailBlock label={t("lab.security.title")}>
            <DescriptionSection
              description={t(`lab.projects.${slug}.privacy`)}
            />
          </DetailBlock>
        )}
        {/* Build y herramientas */}
        <DetailBlock label={t("about.skills.build")}>
          <div className="flex flex-wrap gap-1.5">
            {project.stack?.map((badge) => (
              <Tag key={badge} text={badge} variant="accent" />
            ))}
          </div>
        </DetailBlock>

        {/* Enlaces */}
        <DetailBlock label={t("lab.links")}>
          <div className="flex flex-col gap-3">
            {project.links.map((link) => (
              <LinkExternalSection
                key={link.href}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>
        </DetailBlock>
      </div>
      {disclaimer.length > 0 && (
        <p className="font-mono text-[11px] text-muted-foreground/55">
          {disclaimer}
        </p>
      )}
    </PageContentContainer>
  )
}
