"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type MouseGlowProps = {
  className?: string
  size?: number // px radius
  color?: string // rgba color
  fallbackOpacity?: number
}

export default function MouseGlow({
  className,
  size = 360,
  color = "rgba(255, 149, 0, 0.18)",
  fallbackOpacity = 0.06,
}: MouseGlowProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const reduce = typeof window !== "undefined" &&
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    if (!ref.current || reduce) return
    const parent = ref.current.parentElement as HTMLElement
    if (!parent) return

    let raf = 0
    const handle = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPos({ x, y }))
    }
    parent.addEventListener("mousemove", handle)
    parent.addEventListener("mouseleave", () => setPos({ x: -9999, y: -9999 }))
    return () => {
      parent.removeEventListener("mousemove", handle)
      cancelAnimationFrame(raf)
    }
  }, [reduce])

  const style: React.CSSProperties = reduce
    ? { background: `radial-gradient(${size}px circle at 20% 20%, ${color}, transparent 55%)`, opacity: fallbackOpacity }
    : { background: `radial-gradient(${size}px circle at ${pos.x}px ${pos.y}px, ${color}, transparent 55%)` }

  return <div ref={ref} className={cn("pointer-events-none absolute inset-0 -z-10 rounded-3xl", className)} style={style} />
}

