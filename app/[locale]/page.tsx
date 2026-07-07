import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { Hero } from "@/components/sections/Hero/hero"
import { LabTeaserSection } from "@/components/sections/LabTeaserSection/lab-teaser-section"
import { FeaturedProjects } from "@/components/sections/FeaturedProjects/featured-projects"
import { ContactCTA } from "@/components/sections/ContactCta/contact-cta"
import { HomeDollyEntrance } from "@/components/sections/HomeDollyEntrance/home-dolly-entrance"
import { localeAlternates } from "@/lib/seo"
import { toLocale } from "@/i18n/locale"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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
      <ContactCTA />
    </>
  )
}
