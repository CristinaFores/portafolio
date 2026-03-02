import { Hero } from "@/components/hero"
import { FeaturedProjects } from "@/components/featured-projects"
import { ContactCTA } from "@/components/contact-cta"

export default function Page() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <div className="h-px bg-border/60" aria-hidden />
      <ContactCTA />
    </>
  )
}
