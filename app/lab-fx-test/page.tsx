import { ScrollDollyTunnel } from "@/components/scroll-dolly-tunnel"

/**
 * Isolated test route for the scroll-driven 3D dolly zoom prototype.
 * Not linked from navigation — visit /lab-fx-test directly to try it.
 */
export default function LabFxTestPage() {
  return (
    <main>
      <div className="flex h-screen items-center justify-center bg-background">
        <p className="font-mono text-sm text-muted-foreground">Scroll down ↓</p>
      </div>
      <ScrollDollyTunnel />
      <div className="flex h-screen items-center justify-center bg-background">
        <p className="font-mono text-sm text-muted-foreground">End ↑ scroll back up</p>
      </div>
    </main>
  )
}
