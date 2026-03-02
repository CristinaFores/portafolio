import type { Metadata } from "next"
import { AboutContent } from "@/components/about-content"
import { PROFILE } from "@/lib/site-config"

export const metadata: Metadata = {
  title: `About — ${PROFILE.name}`,
  description:
    "Frontend Developer. React, React Native, Next.js. Experience in web and mobile applications.",
}

export default function AboutPage() {
  return <AboutContent />
}
