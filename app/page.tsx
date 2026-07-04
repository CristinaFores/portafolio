import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { LabTeaserSection } from "@/components/lab-teaser-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { ContactCTA } from "@/components/contact-cta"
import { HomeDollyEntrance } from "@/components/home-dolly-entrance"

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
