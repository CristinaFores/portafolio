import { cn } from "@/lib/utils"

export type ParagraphProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Párrafo de texto base con interlineado relajado y color atenuado.
 * Centraliza el estilo tipográfico de los bloques de texto largos.
 */
export function Paragraph({ children, className }: ParagraphProps) {
  return <p className={cn("leading-relaxed text-muted-foreground", className)}>{children}</p>
}
