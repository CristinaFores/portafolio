/** True when the href points at a static file in /public (has an extension). */
export function isStaticFileHref(href: string): boolean {
  return /\.[a-z0-9]+$/i.test(href)
}
