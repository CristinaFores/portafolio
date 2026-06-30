import { Hero } from "@/components/hero"
import { NowSection } from "@/components/now-section"
import { McpEdgeSection } from "@/components/mcp-edge-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { ContactCTA } from "@/components/contact-cta"
import { HomeScrollSnap } from "@/components/home-scroll-snap"

export default function Page() {
  return (
    <HomeScrollSnap>
      <Hero />
      <NowSection />
      <McpEdgeSection />
      <FeaturedProjects />
      <ContactCTA />
    </HomeScrollSnap>
  )
}
