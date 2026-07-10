interface LabelSectionProps {
  label: string
}

export function LabelSection({ label }: LabelSectionProps) {
  return (
    <h2 className="font-mono text-xs text-muted-foreground tracking-wider">{label}</h2>
  )
}
