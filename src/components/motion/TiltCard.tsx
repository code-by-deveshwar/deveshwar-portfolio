"use client"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  maxTilt?: number // degrees
  scale?: number
}

export default function TiltCard({ children, className, maxTilt = 8, scale = 1.01 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduce = typeof window !== "undefined" &&
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const rx = ((y / rect.height) - 0.5) * -2 * maxTilt
      const ry = ((x / rect.width) - 0.5) * 2 * maxTilt
      el.style.transform = `perspective(800px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`
    }
    const onLeave = () => {
      el.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)"
    }
    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [maxTilt, scale, reduce])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-transform duration-200 will-change-transform [transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  )
}

