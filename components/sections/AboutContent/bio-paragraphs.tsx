"use client"

import { useTranslations } from "next-intl"

import { Paragraph } from "@/components/ui/Paragraph/paragraph"

import { RICH_TAGS, RICH_TEXT_CLASSES } from "./rich-tags"

/**
 * Renders every numbered `about.bio.*` paragraph from the messages file,
 * in order, with rich text support. Adding a new paragraph to the JSON
 * (both locales) is enough for it to appear here.
 */
export function BioParagraphs() {
  const t = useTranslations()
  const keys = Object.keys(t.raw("about.bio")).filter((key) => /^\d+$/.test(key))

  return keys.map((key) => (
    <Paragraph key={key} className={RICH_TEXT_CLASSES}>
      {t.rich(`about.bio.${key}`, RICH_TAGS)}
    </Paragraph>
  ))
}
