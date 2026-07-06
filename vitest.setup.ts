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
