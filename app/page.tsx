import { Hero } from "@/components/hero"
import { McpEdgeSection } from "@/components/mcp-edge-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { WritingSection } from "@/components/writing-section"
import { ContactCTA } from "@/components/contact-cta"

export default function Page() {
  return (
    <>
      <Hero />
      <McpEdgeSection />
      <FeaturedProjects />
      <WritingSection />
      <ContactCTA />
    </>
  )
}
