import React from "react"
import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider, type Locale } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import { Analytics } from "@vercel/analytics/next"

import "../globals.css"
import { routing } from "@/i18n/routing"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { MainShell } from "@/components/layout/main-shell"
import { ScrollProgress } from "@/components/layout/scroll-progress"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { geist, syne, geistMono } from "@/styles/fonts"
import { PROFILE, SITE_URL } from "@/lib/site-config"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const otherLocales = routing.locales.filter((l) => l !== locale)

  return {
    metadataBase: new URL(SITE_URL),
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description: PROFILE.tagline,
    openGraph: {
      type: "website",
      siteName: `${PROFILE.name} — ${PROFILE.role}`,
      locale,
      alternateLocale: otherLocales,
    },
    twitter: {
      card: "summary_large_image",
    },
  }
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) notFound()
  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geist.variable} ${syne.variable} ${geistMono.variable} font-sans antialiased`}
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
          <NextIntlClientProvider>
            <Navbar />
            <ScrollProgress />
            <MainShell>{children}</MainShell>
            <Footer />
            <Analytics />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
