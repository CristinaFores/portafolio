interface ListNumberSectionProps {
  list: string[]
}

export function ListNumberSection({ list }: ListNumberSectionProps) {
  return (
    <ol className="flex flex-col gap-4 max-w-3xl">
      {list.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="shrink-0 font-mono text-xs text-muted-foreground/50 relative top-1">
            {String(i + 1).padStart(2, "0")}
          </span>
          <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
        </li>
      ))}
    </ol>
  )
}
