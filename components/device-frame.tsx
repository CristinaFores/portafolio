"use client"

import Image from "next/image"

const FALLBACK_IMAGE_SRC = "/placeholder.svg"

/**
 * Shared props used by all framed screenshot components.
 */
type DeviceFrameProps = {
  src: string
  alt: string
  className?: string
}

type FillFrameImageProps = Pick<DeviceFrameProps, "src" | "alt"> & {
  sizes: string
  className: string
}

/**
 * Renders a responsive image that fully fills a frame viewport.
 */
function FillFrameImage({ src, alt, sizes, className }: FillFrameImageProps) {
  return (
    <Image
      src={src || FALLBACK_IMAGE_SRC}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      quality={75}
    />
  )
}

/**
 * Renders a mobile screenshot inside an iPhone-style frame.
 * Height adapts to the image's natural aspect ratio (capped at 607px).
 */
export function IPhoneFrame({
  src,
  alt,
  className = "",
}: DeviceFrameProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <div className="relative rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#1a1a1a]">
        <div className="w-[280px] overflow-hidden rounded-[2rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src || FALLBACK_IMAGE_SRC}
            alt={alt}
            className="block h-auto w-full"
            style={{ maxHeight: 607 }}
            loading="lazy"
          />
        </div>
        <div className="absolute bottom-2 left-1/2 h-[4px] w-[100px] -translate-x-1/2 rounded-full bg-white/20" />
      </div>
    </div>
  )
}

/**
 * Renders a desktop screenshot inside a MacBook-style frame.
 * Frame viewport matches standard desktop ratio (1512×945, 16:10); image uses object-contain so it fits without cropping.
 * On mobile, the frame scales to fit the viewport (max-w-full) so it is fully visible.
 */
export function MacBookFrame({
  src,
  alt,
  className = "",
}: DeviceFrameProps) {
  return (
    <div
      className={`relative flex w-full max-w-[720px] flex-col items-center ${className}`}
    >
      <div className="relative w-full rounded-t-xl border-[8px] border-[#1a1a1a] bg-[#1a1a1a]">
        <div
          className="relative w-full overflow-hidden rounded-[4px]"
          style={{ aspectRatio: `${1512}/${945}` }}
        >
          <FillFrameImage
            src={src}
            alt={alt}
            sizes="(max-width: 720px) 100vw, 720px"
            className="object-contain object-center"
          />
        </div>
      </div>
      <div className="h-[14px] w-[105%] rounded-b-lg bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a]" />
      <div className="h-[4px] w-[115%] rounded-b-xl bg-[#1a1a1a]" />
    </div>
  )
}

/**
 * Renders a screenshot in a lightweight wireframe container.
 */
export function WireframeFrame({
  src,
  alt,
  className = "",
}: DeviceFrameProps) {
  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      <div className="relative overflow-hidden rounded-xl border-2 border-dashed border-muted-foreground/30 bg-secondary/30 p-2">
        <Image
          src={src || FALLBACK_IMAGE_SRC}
          alt={alt}
          width={800}
          height={500}
          className="block h-auto max-w-full rounded-lg"
          style={{ height: "auto" }}
          quality={75}
        />
      </div>
    </div>
  )
}

/**
 * Renders a vertical screenshot inside a kiosk terminal frame.
 * Viewport height matches the phone frame (same as IPhoneFrame content area) so it fits in the carousel;
 * width grows to match the image aspect ratio.
 */
export function TerminalFrame({
  src,
  alt,
  className = "",
}: DeviceFrameProps) {
  // Same height as IPhoneFrame image area: 280 * (2556/1179) ≈ 607px
  const viewportHeight = 607

  return (
    <div
      className={`relative inline-flex flex-col items-center ${className}`}
    >
      <div className="relative rounded-2xl border-[10px] border-[#2c2c2c] bg-[#2c2c2c]">
        <div
          className="relative inline-block overflow-hidden rounded-lg ring-1 ring-white/5"
          style={{ height: viewportHeight }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src || FALLBACK_IMAGE_SRC}
            alt={alt}
            className="block h-full w-auto max-h-full object-contain object-top"
            style={{ height: viewportHeight, width: "auto" }}
            loading="lazy"
          />
        </div>
      </div>
      <div className="mt-0 h-[6px] w-[70%] rounded-b-md bg-gradient-to-b from-[#2c2c2c] to-[#1f1f1f]" />
      <div className="h-[20px] w-[16px] bg-[#1f1f1f]" />
      <div className="h-[6px] w-[50px] rounded-sm bg-[#252525] shadow-sm shadow-black/10" />
    </div>
  )
}
