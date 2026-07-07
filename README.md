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
app/[locale]/           Routes and layout per locale (App Router, /es and /en)
components/
  ui/                   Pure presentational primitives (Tag, ListRow, SectionHeading...)
                        No message keys, no data fetching — props in, markup out.
  sections/             Page-composed sections (Hero, FeaturedProjects, LabContent...)
                        Own data, i18n (useTranslations), motion, and behavior; compose ui/ primitives.
  layout/               Global chrome (Navbar, Footer, ThemeProvider, MainShell)
hooks/                  use-motion, use-parallax-y, use-translated-project
i18n/                   next-intl setup: routing, request config, locale-aware navigation
messages/               es.json / en.json translation dictionaries
lib/
  data/                 projects, lab-projects, project translations, now
  motion.ts             Shared Framer Motion variants
  site-config.ts        Profile, links, site metadata
proxy.ts                next-intl middleware: locale detection and redirects
public/images/           Project screenshots
```

## Internationalization

ES/EN via [next-intl](https://next-intl.dev) with locale-prefixed routing (`/es/...`, `/en/...`; `/` redirects to the detected locale). Every page prerenders statically in both languages with localized metadata, `hreflang` alternates, and a per-locale sitemap. Messages live in `messages/{locale}.json`; components read them with `useTranslations()`, and rich text (e.g. `<strong>` in the About bios) renders through `t.rich()`. Internal navigation uses the locale-aware `Link`/`useRouter` from `i18n/navigation.ts` so the prefix is preserved; static file hrefs (like the CV PDF) render as plain anchors.

## Testing

Vitest + React Testing Library + jsdom. `ui/` primitives take strings as props, but the ones that render internal links use the locale-aware `Link`, so tests wrap renders with `test-utils/i18n-wrapper.tsx` (a `NextIntlClientProvider` preloaded with the JSON messages). Tests live next to the component they cover (e.g. `components/ui/tag.test.tsx`).

## Deploy

Deployed on Vercel. `vercel.json` forces a clean install (`rm -rf node_modules && pnpm install`) to avoid stale `node_modules` on redeploys.

## More docs

- [`DESIGN.md`](./DESIGN.md) — design tokens, typography scale, component API contracts
- [`AGENTS.md`](./AGENTS.md) — conventions and guardrails for AI agents working in this repo
