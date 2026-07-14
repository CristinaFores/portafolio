import { ImageResponse } from "next/og"
import { getTranslations } from "next-intl/server"

import { toLocale } from "@/i18n/locale"
import { PROFILE, SITE_URL } from "@/lib/site-config"

export const alt = `${PROFILE.name} — ${PROFILE.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const BONE = "#f5f1ea"
const INK = "#1a1816"
const SIENNA = "#b82848"
const TAUPE = "#6b635a"

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const locale = toLocale((await params).locale)
  const t = await getTranslations({ locale, namespace: "meta.home" })

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BONE,
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, backgroundColor: SIENNA }} />
          <div style={{ fontSize: 28, letterSpacing: 4, color: TAUPE, textTransform: "uppercase" }}>
            {PROFILE.role}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 96, fontWeight: 700, color: INK, lineHeight: 1.05 }}>
            {PROFILE.name}
          </div>
          <div style={{ fontSize: 36, color: TAUPE, lineHeight: 1.4, maxWidth: 980 }}>
            {t("description")}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: 28, color: SIENNA, fontWeight: 600 }}>
            {SITE_URL.replace("https://", "")}
          </div>
          <div style={{ fontSize: 24, color: TAUPE }}>Barcelona</div>
        </div>
      </div>
    ),
    size,
  )
}
