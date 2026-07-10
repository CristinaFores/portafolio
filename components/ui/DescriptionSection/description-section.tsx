interface DescriptionSectionProps {
  description: string
}

export function DescriptionSection({ description }: DescriptionSectionProps) {
  return (
    <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground tracking-wider">{description}</p>
  )
}
