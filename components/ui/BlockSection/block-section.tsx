interface BlockSectionProps {
  children: React.ReactNode
}

export function BlockSection({ children }: BlockSectionProps) {
  return (
    <section className="grid gap-4 py-8 md:grid-cols-[200px_1fr]">
      {children}
    </section>
  )
}
