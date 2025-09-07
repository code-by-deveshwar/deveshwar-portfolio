"use client"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
  variant?: "fade-up" | "fade" | "zoom"
}

export default function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  variant = "fade-up",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current as HTMLElement | null
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("reveal-show")
            if (once) obs.disconnect()
          } else if (!once) {
            el.classList.remove("reveal-show")
          }
        })
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [once])

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "reveal-base",
        variant === "fade-up" && "reveal-fade-up",
        variant === "fade" && "reveal-fade",
        variant === "zoom" && "reveal-zoom",
        className
      )}
    >
      {children}
    </div>
  )
}
