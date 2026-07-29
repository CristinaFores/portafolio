import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"

import { ContactCTA } from "@/components/sections/ContactCta/contact-cta"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects/featured-projects"
import { Hero } from "@/components/sections/Hero/hero"
import { HomeDollyEntrance } from "@/components/sections/HomeDollyEntrance/home-dolly-entrance"
import { LabTeaserSection } from "@/components/sections/LabTeaserSection/lab-teaser-section"
import { toLocale } from "@/i18n/locale"
import { localeAlternates } from "@/lib/seo"
import { CodeBlock } from "@/components/ui/CodeBlock/code-block"
import { Callout } from "@/components/ui/Callout/callout"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const locale = toLocale((await params).locale)
  return { alternates: localeAlternates(locale, "") }
}

export default async function Page({ params }: PageProps) {
  const locale = toLocale((await params).locale)
  setRequestLocale(locale)

  return (
    <>
      <HomeDollyEntrance hero={<Hero />} next={<LabTeaserSection />} />
      <FeaturedProjects />
      <div className="grid gap-4  ">
        <CodeBlock
          code={`
// index.js

const hello = 'Hello, world!';
console.log(hello);
        `}
          language="javascript"
          filename="index.js"
        />

        <Callout
          label="Hello, world!"
          content={"Example content"}
          variant="warm"
        />
      </div>
      <ContactCTA />
    </>
  )
}
