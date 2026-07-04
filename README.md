# Cristina Forés Campos — Portfolio

Personal portfolio for a Product / AI Engineer. Built with Next.js App Router, bilingual (ES/EN), animated with Framer Motion, deployed on Vercel.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v3
- Framer Motion
- Vitest + React Testing Library
- pnpm (sole package manager)

## Getting started

```bash
pnpm install
pnpm dev
```

App runs at `http://localhost:3000`.

## Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm test` | Run the Vitest suite once |
| `pnpm test:watch` | Vitest in watch mode |

CI (`.github/workflows/ci.yml`) runs lint → typecheck → test → build on every PR and push to `main`.

## Project structure

Components are split by responsibility, not by page/feature — this is a presentational site, not a set of bounded contexts. See [`DESIGN.md`](./DESIGN.md) for the full rationale.

```
app/                    Routes and global layout (App Router)
components/
  ui/                   Pure presentational primitives (Tag, ListRow, SectionHeading...)
                        No i18n, no data fetching, no route knowledge — props in, markup out.
  sections/             Page-composed sections (Hero, FeaturedProjects, LabContent...)
                        Own data, i18n (useLocale), motion, and behavior; compose ui/ primitives.
  layout/               Global chrome (Navbar, Footer, ThemeProvider, MainShell)
hooks/                  use-motion, use-parallax-y, use-translated-project
lib/
  data/                 projects, lab-projects, project translations, now
  translations.ts       ES/EN dictionary
  locale-context.tsx    Locale provider + t() helper (client-side, localStorage-persisted)
  motion.ts             Shared Framer Motion variants
  site-config.ts        Profile, links, site metadata
public/images/           Project screenshots
```

## Internationalization

ES/EN via a client-side `LocaleProvider` (`lib/locale-context.tsx`): locale is resolved from `localStorage` or the browser's `navigator.language`, exposed through a `useLocale()` hook returning `{ locale, setLocale, t, dict }`. There is no locale-prefixed routing — the same URL renders both languages.

## Testing

Vitest + React Testing Library + jsdom. `ui/` primitives are pure (no hooks/context), so they're tested without providers. Tests live next to the component they cover (e.g. `components/ui/tag.test.tsx`).

## Deploy

Deployed on Vercel. `vercel.json` forces a clean install (`rm -rf node_modules && pnpm install`) to avoid stale `node_modules` on redeploys.

## More docs

- [`DESIGN.md`](./DESIGN.md) — design tokens, typography scale, component API contracts
- [`AGENTS.md`](./AGENTS.md) — conventions and guardrails for AI agents working in this repo
