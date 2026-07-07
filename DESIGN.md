# Design System

How the visual system is encoded. Future visual changes should touch tokens here, not inline values in components.

## Architecture: three presentational layers

```
components/
  ui/         Pure primitives. No message keys, no data. Props in, markup out.
  sections/   Own data, i18n (useTranslations), motion, and behavior. Compose ui/ primitives.
  layout/     Global chrome (Navbar, Footer, ThemeProvider, MainShell).
```

**Invariant:** `ui/` never imports `useTranslations`, message dictionaries, or data hooks. Strings and callbacks flow down from `sections/` as props. The one i18n import allowed is the locale-aware `Link` from `@/i18n/navigation` (routing, not content) — primitives that render internal links are tested with the shared `test-utils/i18n-wrapper.tsx` provider.

**Why not feature folders:** this is a ~25-component presentational portfolio — pages share UI, not bounded contexts with state or services. A `features/*` split would produce a `shared/misc` dumping ground for components like `Hero` or `ContactCTA` that don't belong to any single feature. The three-layer split matches the actual shape of the code.

## Color tokens — "Bone & Sienna"

Defined as CSS custom properties in `app/globals.css` (`@layer base :root`), mapped into Tailwind via `tailwind.config.ts theme.extend.colors` using relative color syntax (`rgb(from var(--x) r g b / <alpha-value>)`) so opacity modifiers like `bg-accent/40` keep working.

Two palettes, selected by the `.light` / `.dark` class on `<html>` (via `next-themes`):

| Semantic token | Light source | Dark source |
|---|---|---|
| `background` | `--light-bone` (`#f5f1ea`) | `--dark-espresso` (`#17120e`) |
| `foreground` | `--light-ink` (`#1a1816`) | `--dark-cream` (`#f5f1ea`) |
| `card` | `--light-panel` | `--dark-panel` |
| `secondary` / `muted` | `--light-surface` | `--dark-surface` |
| `muted-foreground` | `--light-taupe` | `--dark-mist` |
| `border` / `input` | `--light-sand` | `--dark-cocoa-border` |
| `accent` / `primary` / `ring` | `--light-sienna` (`#b82848`) | `--dark-sienna` (`#e05878`) |

Do not introduce new hex values in components — add a token to `globals.css` and map it in `tailwind.config.ts` instead.

## Typography scale

Three heading sizes are Tailwind `fontSize` tokens (`tailwind.config.ts theme.extend.fontSize`), not inline `style={{ fontSize: ... }}`:

| Token | Value |
|---|---|
| `text-heading-lg` | `clamp(2rem, 5vw, 3.5rem)` |
| `text-heading-md` | `clamp(1.75rem, 4vw, 2.5rem)` |
| `text-heading-sm` | `clamp(1.5rem, 3.5vw, 2.25rem)` |

Rationale: `fontSize` is a first-class Tailwind theme axis — it gives reusable utility classes instead of duplicating the same `clamp()` expression inline at every call site. If a new heading size is needed, add it here rather than reaching for an inline style.

## Layout utility contracts

Defined in `app/globals.css @layer utilities`:

- **`.link-underline`** — animated underline that must wrap only the label text of a link, never an icon sibling. Apply it to a `<span>` around the text, not to the `<Link>` itself (a flex `<Link>` would stretch the underline `::after` across the icon too). See `components/ui/view-all-link.tsx` for the reference implementation.
- **`.home-section`** — full-viewport-height section wrapper used by the homepage's stacked sections (`min-h-svh`, top border, responsive padding). Modifiers: `.home-section-vcenter` (vertical centering on desktop), `.home-section-muted` (muted background).

## Component API contracts

### `Tag` (`components/ui/tag.tsx`)

```ts
type TagProps = {
  children: React.ReactNode
  variant?: "default" | "status"
}
```

Single source for pill-shaped labels (stack/tech badges, status badges). `default` renders full-contrast text (`text-foreground`); `status` is a deliberately secondary, uppercase accent badge (e.g. lab project status). No `className` escape hatch — add one only if a real need appears, to avoid style drift across usages.

### `ListRow` (`components/ui/list-row.tsx`)

```ts
type ListRowProps = {
  href: string
  title: ReactNode
  subtitle: ReactNode
  media?: { src: string; alt?: string; fit?: "cover" | "contain" }
  tags?: { label: string; variant?: TagProps["variant"] }[]
  onClick?: MouseEventHandler<HTMLAnchorElement>
}
```

The shared row markup for project/lab listings: thumbnail, title, subtitle, tag row, trailing arrow. Behavior (e.g. hash-navigation on the homepage) is passed in via `onClick` from the composing section — the primitive itself has no router or i18n awareness. Motion (stagger, `motion.article` wrapper) also stays in the section; `ListRow` renders only the inner link content, which keeps it testable with plain React Testing Library.

## Why not a bigger design system

No `className` prop threading, no variant explosion, no Storybook. At this component count, the cost of a generalized system exceeds its payoff — primitives grow an API only when a second real consumer needs it, not speculatively.
