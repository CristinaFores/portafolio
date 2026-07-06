import type { ProjectImage } from "@/types/project"
import { IPhoneFrame, MacBookFrame, TerminalFrame, WireframeFrame } from "@/components/ui/DeviceFrame/device-frame"

export type DeviceImageProps = {
  image: ProjectImage
}

export function DeviceImage({ image }: DeviceImageProps) {
  const portraitClass = "[zoom:0.8] sm:[zoom:1]"

  if (image.type === "terminal") {
    return (
      <div className={portraitClass}>
        <TerminalFrame src={image.src} alt={image.alt} />
      </div>
    )
  }
  if (image.type === "mobile") {
    return (
      <div className={portraitClass}>
        <IPhoneFrame src={image.src} alt={image.alt} />
      </div>
    )
  }
  if (image.type === "wireframe") {
    return <WireframeFrame src={image.src} alt={image.alt} />
  }
  return <MacBookFrame src={image.src} alt={image.alt} />
}
