# AGENTS.md

Guidance for AI agents working in this repository.

## Key resources

| Resource | Where |
|---|---|
| README | [`README.md`](./README.md) |
| Design tokens & component contracts | [`DESIGN.md`](./DESIGN.md) |
| CI pipeline | `.github/workflows/ci.yml` |

## Project context

Personal portfolio site (Next.js App Router, React 19, TypeScript, Tailwind v3). Presentational, bilingual (ES/EN), deployed on Vercel. No backend, no database, no auth — the only "data" is TypeScript literals in `lib/data/`.

## Commands

pnpm is the **only** package manager for this repo. Do not use npm or yarn — do not commit `package-lock.json` or `yarn.lock`.

```bash
pnpm install       # install dependencies
pnpm dev           # dev server
pnpm lint          # ESLint — must be 0 errors before commit
pnpm typecheck     # tsc --noEmit — must pass before commit
pnpm test          # Vitest — must pass before commit
pnpm build         # production build — must succeed before commit
```

If `pnpm <script>` fails locally with `ERR_PNPM_IGNORED_BUILDS` (postinstall scripts for `sharp`/`unrs-resolver` blocked), either accept the interactive prompt or fall back to invoking the binary directly via `node_modules/.bin/<tool>`. CI approves these builds non-interactively via `pnpm-workspace.yaml` (`onlyBuiltDependencies` + `allowBuilds`) — do not remove that file.

## Architecture invariants (do not violate)

The component tree is split into three layers — see [`DESIGN.md`](./DESIGN.md) for full rationale:

```
components/ui/       Pure primitives. No i18n, no data fetching, no route knowledge.
components/sections/  Own data, i18n (useLocale), motion, behavior. Compose ui/ primitives.
components/layout/    Global chrome (Navbar, Footer, ThemeProvider, MainShell).
```

- **`components/ui/*` must never import `useLocale`, `lib/translations.ts`, or any `lib/data/*` module.** Strings and callbacks flow down from `sections/` as props. Breaking this invariant is the single most common way to regress this codebase's structure.
- Do not create a `features/*` or `shared/*` folder structure. At this component count, feature folders create dumping grounds for cross-cutting components (Hero, ContactCTA). Keep the three-layer split.
- Before adding a new component, decide its layer using the tie-breaker: does it own data/i18n/behavior? → `sections/`. Is it pure/presentational only? → `ui/`. Is it global site chrome? → `layout/`.

## Next.js / App Router conventions

- Routes live under `app/`; route-level composition (page assembly) belongs in the page file, not in a component.
- `next/image` is required for all raster images — always pass an accurate `sizes` prop matching the rendered box, not a viewport-relative default.
- No new client-only state library — locale state uses a single `LocaleProvider` (`lib/locale-context.tsx`); don't add a second context/store for similar concerns without discussing scope first.

## TypeScript rules

- `strict: true` is on — do not weaken it.
- Path alias `@/*` maps to repo root (`tsconfig.json`). Use it instead of relative `../../..` imports.
- Exported component prop types are named `<Component>Props` and exported alongside the component (see `TagProps`, `ListRowProps`) so composing sections can reference them.

## Styling rules

- Tailwind v3 only. Do not add `@tailwindcss/postcss` (v4) or mix v3/v4 syntax.
- Prefer existing design tokens (`bg-accent`, `text-heading-md`, etc.) over arbitrary values or inline `style={{ ... }}`. If a new token is needed, add it to `tailwind.config.ts` / `app/globals.css` per [`DESIGN.md`](./DESIGN.md), don't hardcode a one-off value in a component.
- No inline `clamp()` in `style` props — use or extend the `heading-lg/md/sm` `fontSize` tokens instead.

## Testing rules

- Vitest + React Testing Library + jsdom. No Jest, no Playwright, no MSW — don't introduce them without a concrete need (e.g. real API calls, e2e flows) that doesn't exist today.
- Tests are colocated with the component they cover (`component.tsx` + `component.test.tsx` in the same folder).
- Any `ui/` primitive you add or modify must have a test. Test behavior/output (rendered text, attributes, fired callbacks), not implementation classes — except where a fix has a structural regression to guard (e.g. `view-all-link.test.tsx` asserts the underline span wraps only the label).
- `ui/` primitives are pure by design, so they render in tests without any provider wrapper. If a test needs a provider, that's a signal the component belongs in `sections/`, not `ui/`.

## Accessibility

- Decorative icons get `aria-hidden`.
- Respect `prefers-reduced-motion` — animation/transition rules in `globals.css` already gate on it; new animations must too.
- Interactive elements are real `<a>`/`<button>` elements (via `next/link`/native tags), not `<div onClick>`.

## Coding style

- Conventional Commits only (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `ci:`, `test:`...). Never add `Co-Authored-By` or any AI-attribution trailer to commits.
- English for all code, comments, and identifiers.
- Small, single-purpose commits and PRs. This repo ships structural changes as chained PRs directly to `main` (no long-lived feature branches) — prefer the smallest reviewable unit over one large diff.
- CI (`.github/workflows/ci.yml`) runs lint → typecheck → test → build on every PR and push to `main`. All four must pass before merge.
