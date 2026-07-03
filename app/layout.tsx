import React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"

import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MainShell } from "@/components/main-shell"
import { ScrollProgress } from "@/components/scroll-progress"
import { ThemeProvider } from "@/components/theme-provider"
import { LocaleProvider } from "@/lib/locale-context"
import { inter, syne, ibmPlexMono } from "@/lib/fonts"
import { PROFILE, SITE_URL } from "@/lib/site-config"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${PROFILE.name} — ${PROFILE.role}`,
  description: PROFILE.tagline,
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  jobTitle: PROFILE.role,
  url: SITE_URL,
  email: `mailto:${PROFILE.email}`,
  sameAs: [PROFILE.linkedInUrl, PROFILE.gitHubUrl],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Barcelona",
    addressCountry: "ES",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#17120e" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${syne.variable} ${ibmPlexMono.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          // Dark mode disabled for now — forcing light. Remove forcedTheme
          // and uncomment the toggle in navbar.tsx to bring it back.
          forcedTheme="light"
        >
          <LocaleProvider>
            <Navbar />
            <ScrollProgress />
            <MainShell>{children}</MainShell>
            <Footer />
            <Analytics />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
