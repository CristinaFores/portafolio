import { describe, expect, it } from "vitest"

import { enterProps, fadeUpProps, pageEnterProps, staggerItemProps } from "./motion"

describe("motion prop factories", () => {
  describe("fadeUpProps", () => {
    it("animates from an offset when motion is allowed", () => {
      const props = fadeUpProps(false, { y: 20, delay: 0.1 })

      expect(props.initial).toEqual({ opacity: 0, y: 20 })
      expect(props.whileInView).toEqual({ opacity: 1, y: 0 })
      expect(props.transition).toMatchObject({ delay: 0.1 })
    })

    it("collapses to a no-op when reduced motion is requested", () => {
      const props = fadeUpProps(true)

      expect(props.initial).toEqual({ opacity: 1, y: 0 })
      expect(props.transition).toEqual({ duration: 0 })
    })
  })

  describe("enterProps", () => {
    it("animates on mount when motion is allowed", () => {
      expect(enterProps(false).initial).toEqual({ opacity: 0, y: 12 })
    })

    it("is instant under reduced motion", () => {
      expect(enterProps(true).transition).toEqual({ duration: 0 })
    })
  })

  describe("pageEnterProps", () => {
    it("is instant under reduced motion", () => {
      expect(pageEnterProps(true).initial).toEqual({ opacity: 1, y: 0 })
    })
  })

  describe("staggerItemProps", () => {
    it("delays each item by its index", () => {
      const first = staggerItemProps(false, 0)
      const third = staggerItemProps(false, 2, { step: 0.05 })

      expect(first.transition).toMatchObject({ delay: 0 })
      expect(third.transition).toMatchObject({ delay: 0.1 })
    })
  })
})
