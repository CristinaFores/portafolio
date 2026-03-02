import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          fontWeight: 600,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fafafa",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        CF
      </div>
    ),
    { ...size }
  )
}
