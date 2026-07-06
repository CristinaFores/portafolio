export type EducationCardProps = {
  year: string
  /**
   * Texto multilínea: la primera línea es el título
   * y el resto se muestra como descripción.
   */
  label: string
}

/**
 * Card de educación alineada con las cards de experiencia:
 * título a la izquierda, año a la derecha y descripción debajo.
 */
export function EducationCard({ year, label }: EducationCardProps) {
  const [title, ...details] = label.split("\n")

  return (
    <article className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="font-medium text-foreground">{title}</h3>
        <span className="shrink-0 font-mono text-xs text-muted-foreground/70">{year}</span>
      </div>
      {details.length > 0 ? (
        <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
          {details.join("\n")}
        </p>
      ) : null}
    </article>
  )
}
