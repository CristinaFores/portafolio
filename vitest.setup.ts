import "@testing-library/jest-dom/vitest"
import { vi } from "vitest"

// jsdom has no IntersectionObserver; framer-motion's whileInView needs it.
// Stub it so motion components (SectionHeading, PageHeader, ...) render in tests.
class IntersectionObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return []
  }
}

vi.stubGlobal("IntersectionObserver", IntersectionObserverStub)

// jsdom has no matchMedia; framer-motion's useReducedMotion and our
// useParallaxY read it. Default: no media query matches (motion enabled,
// desktop breakpoint not matched). Tests override window.matchMedia when they
// need a specific query to match.
vi.stubGlobal(
  "matchMedia",
  (query: string): MediaQueryList =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as unknown as MediaQueryList,
)
