"use client"

import { useEffect } from "react"

type HomeScrollSnapProps = {
  children: React.ReactNode
}

/** Enables viewport scroll-snap between home sections. */
export function HomeScrollSnap({ children }: HomeScrollSnapProps) {
  useEffect(() => {
    document.documentElement.classList.add("home-snap")
    return () => document.documentElement.classList.remove("home-snap")
  }, [])

  return <div className="home-snap-container">{children}</div>
}
