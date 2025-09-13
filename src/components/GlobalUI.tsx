"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import ThemeToggle from "@/components/ThemeToggle"

export default function GlobalUI() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.2 })

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 z-50"
        style={{ scaleX }}
      />

      {/* Floating theme toggle */}
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle />
      </div>
    </>
  )
}

