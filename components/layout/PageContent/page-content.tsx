import { useTranslations } from "next-intl"

import { SectionHeading } from "@/components/ui/SectionHeading/section-heading"

export const PageContentContainer = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <main className="px-6 pb-24 pt-28">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:gap-12">
        {children}
      </div>
    </main>
  )
}

interface PageContentProps {
  eyebrow: string
  title: string
  subtitle: string
  children?: React.ReactNode
}

export default function PageContent({
  eyebrow,
  title,
  subtitle,
  children,
}: PageContentProps) {
  const t = useTranslations()
  return (
    <PageContentContainer>
      <SectionHeading
        eyebrow={t(eyebrow)}
        title={t(title)}
        subtitle={t(subtitle)}
        headingLevel="h1"
      />

      <section className="flex flex-col">{children}</section>
    </PageContentContainer>
  )
}
