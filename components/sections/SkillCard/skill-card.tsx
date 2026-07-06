export type SkillCardProps = {
  label: string
  skills: readonly string[]
}

/**
 * Card de una categoría de skills: etiqueta en monoespaciada
 * y lista de tecnologías separadas por punto medio.
 */
export function SkillCard({ label, skills }: SkillCardProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-mono text-xs text-muted-foreground">{label}</h3>
      <p className="text-sm leading-relaxed text-foreground/85">{skills.join(" · ")}</p>
    </div>
  )
}
