/**
 * Single source of truth for internal routes and home anchors.
 * Values must match the app/ directory segments exactly — components must
 * never hardcode an internal path.
 */
export const ROUTES = {
  home: "/",
  about: "/about",
  projects: "/projects",
  lab: "/lab",
  project: (slug: string) => `/projects/${slug}`,
  labProject: (slug: string) => `/lab/${slug}`,
  homeProjects: "/#projects",
  homeConnect: "/#connect",
} as const
