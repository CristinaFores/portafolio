import { Hero } from "@/components/hero"
import { McpEdgeSection } from "@/components/mcp-edge-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { ContactCTA } from "@/components/contact-cta"

export default function Page() {
  return (
    <>
      <Hero />
      <McpEdgeSection />
      <FeaturedProjects />
      <ContactCTA />
    </>
  )
}
