# Cristina Forés Campos Portfolio

Portfolio personal construido con Next.js, TypeScript, Tailwind CSS y Framer Motion.

## Stack

- `Next.js 16` (App Router)
- `React 19`
- `TypeScript`
- `Tailwind CSS`
- `Framer Motion`
- `next-themes`

## Requisitos

- `Node.js 20+`
- `pnpm`

## Desarrollo local

```bash
pnpm install
pnpm dev
```

App disponible en `http://localhost:3000`.

## Scripts

```bash
pnpm dev    # entorno de desarrollo
pnpm build  # build de producción
pnpm start  # servidor de producción
pnpm lint   # análisis estático
```

## Estructura del proyecto

- `app/`: rutas y layout global.
- `components/`: componentes de UI reutilizables.
- `hooks/`: hooks de aplicación.
- `lib/`: configuración, utilidades, i18n y datos de proyectos.
- `public/images/`: imágenes usadas por las cards y detalles de proyectos.

## Personalización rápida

- Perfil principal: `lib/site-config.ts`.
- Página home: `components/hero.tsx`, `components/featured-projects.tsx`, `components/contact-cta.tsx`.
- Página about: `components/about-content.tsx`.
- Navbar y footer: `components/navbar.tsx`, `components/footer.tsx`.
- Proyectos base: `lib/data/projects.ts`.
- Traducciones de proyectos: `lib/data/project-translations.ts`.
- Diccionario general i18n: `lib/translations.ts`.

## Convenciones de documentación

- El código público (componentes y utilidades exportadas) usa comentarios `JSDoc/TSDoc` breves.
- Se han eliminado comentarios decorativos o redundantes para mantener foco en comportamiento y contratos.

## Build de producción

```bash
pnpm build
pnpm start
```
# porfolio
# porfolio
# porfolio
