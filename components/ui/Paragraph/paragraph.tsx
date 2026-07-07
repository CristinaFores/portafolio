import { cn } from "@/lib/class-names"


export type ParagraphProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Párrafo de texto base con interlineado relajado y color atenuado.
 * Centraliza el estilo tipográfico de los bloques de texto largos.
 */
export function Paragraph({ children, className }: ParagraphProps) {
  return <p className={cn("max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg", className)}>{children}</p>
}
