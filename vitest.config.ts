import path from "node:path"
import { fileURLToPath } from "node:url"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vitest/config"

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
    server: {
      deps: {
        // Process next-intl through Vite so the "next/navigation" alias
        // below applies (Node alone cannot resolve that bare ESM import).
        inline: ["next-intl"],
      },
    },
    coverage: {
      provider: "v8",
      include: ["components/**", "hooks/**", "lib/**", "i18n/**"],
      exclude: ["**/*.test.{ts,tsx}", "**/*.d.ts"],
    },
  },
  resolve: {
    alias: {
      "@": dirname,
      // next-intl imports "next/navigation" as bare ESM; point it at the
      // real file so Vitest can resolve it through pnpm's symlinks.
      "next/navigation": path.resolve(dirname, "node_modules/next/navigation.js"),
    },
  },
})
