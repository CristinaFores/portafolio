# Cristina Forés Campos Portfolio

Portfolio personal de Product / AI Engineer. Next.js App Router, i18n ES/EN, animaciones con Framer Motion y despliegue en Vercel.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel Analytics

## Requisitos

- Node.js 20+
- pnpm

## Desarrollo local

```bash
pnpm install
pnpm dev
```

App en `http://localhost:3000`.

## Scripts

| Comando       | Descripción              |
| ------------- | ------------------------ |
| `pnpm dev`    | Servidor de desarrollo   |
| `pnpm build`  | Build de producción      |
| `pnpm start`  | Servidor de producción   |
| `pnpm lint`   | ESLint                   |

## Rutas

| Ruta                 | Descripción                          |
| -------------------- | ------------------------------------ |
| `/`                  | Home — hero, Now, Lab, proyectos     |
| `/about`             | Sobre mí                             |
| `/lab`               | design-context-bridge (MCP)          |
| `/projects`          | Listado completo de proyectos      |
| `/projects/[slug]`   | Detalle de cada case study           |

## Estructura

```
app/              Rutas y layout global
components/       UI (hero, navbar, project-detail, page-template…)
hooks/            use-motion, use-translated-project
lib/
  data/           projects, lab-project, now, traducciones
  motion.ts       Variantes compartidas de animación
  site-config.ts  Perfil, links, metadata
  translations.ts Diccionario i18n ES/EN
public/images/    Capturas de proyectos
```

## Personalización

| Qué                    | Dónde                                      |
| ---------------------- | ------------------------------------------ |
| Perfil y links         | `lib/site-config.ts`                       |
| Proyectos              | `lib/data/projects.ts`                     |
| Traducciones proyectos | `lib/data/project-translations.ts`         |
| Textos UI              | `lib/translations.ts`                      |
| Sección Now            | `lib/data/now.ts`                          |
| Lab / MCP              | `lib/data/lab-project.ts`                  |
| Home                   | `components/hero.tsx`, `featured-projects.tsx`, `contact-cta.tsx` |
| About                  | `components/about-content.tsx`             |
| Nav / footer           | `components/navbar.tsx`, `components/footer.tsx` |

## Animaciones

- Transición entre páginas: `components/page-template.tsx` (curtain fade)
- Scroll / entrada: `hooks/use-motion.ts` + `lib/motion.ts`
- Respeta `prefers-reduced-motion`

## Build de producción

```bash
pnpm build
pnpm start
```

## Deploy

Configurado para Vercel (`vercel.json` usa `pnpm install`).
