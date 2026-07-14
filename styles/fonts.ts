import { Geist, Geist_Mono, Syne } from "next/font/google"

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
})

export const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700"],
  display: "swap",
})

export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
  display: "swap",
})
