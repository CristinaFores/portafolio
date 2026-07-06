import type { Metadata } from "next"
import { Hero } from "@/components/sections/Hero/hero"
import { LabTeaserSection } from "@/components/sections/LabTeaserSection/lab-teaser-section"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { ContactCTA } from "@/components/sections/ContactCta/contact-cta"
import { HomeDollyEntrance } from "@/components/sections/HomeDollyEntrance/home-dolly-entrance"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default function Page() {
  return (
    <>
      <HomeDollyEntrance hero={<Hero />} next={<LabTeaserSection />} />
      <FeaturedProjects />
      <ContactCTA />
    </>
  )
}
