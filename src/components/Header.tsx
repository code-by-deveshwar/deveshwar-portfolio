"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "@/components/ThemeToggle"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { useEffect, useState } from "react"
import { site } from "@/config/site"

const nav = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
]

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.2 })
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.div className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 z-50" style={{ scaleX }} />
      <header className="sticky top-0 z-40">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 py-2">
          <div
            className={cn(
              "relative flex h-12 items-center justify-between rounded-2xl px-3 sm:px-4",
              "bg-background/65 backdrop-blur supports-[backdrop-filter]:bg-background/55",
              scrolled ? "shadow-none" : "shadow-none"
            )}
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="inline-block size-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400" />
              <span className="font-semibold tracking-tight">{site.name || "Portfolio"}</span>
            </Link>

            <nav className="hidden md:flex items-center gap-2 text-sm">
              {nav.map((n) => {
                const active = pathname === n.href
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={cn("relative px-3 py-1.5 rounded-full text-foreground/80 hover:text-foreground transition-colors")}
                    aria-current={active ? "page" : undefined}
                  >
                    {active && (
                      <motion.span
                        layoutId="active-pill"
                        className="absolute inset-0 rounded-full bg-foreground/8 border"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{n.label}</span>
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block bg-gradient-to-r from-orange-500 to-amber-500 p-[1px] rounded-full">
                <Link href={`mailto:${site.email}`} className="inline-flex items-center rounded-full bg-background px-3 h-8 text-xs font-medium hover:bg-accent transition-colors">
                  Hire me
                </Link>
              </div>
              <div className="hidden md:block"><ThemeToggle /></div>
              <button className="md:hidden inline-flex items-center justify-center rounded-full border size-9" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
                {open ? <X className="size-4" /> : <Menu className="size-4" />}
              </button>
            </div>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-2 right-2 top-14 rounded-xl bg-background/95 backdrop-blur p-2 shadow-lg md:hidden"
                >
                  <div className="flex flex-col gap-1">
                    {nav.map((n) => (
                      <Link key={n.href} href={n.href} className="rounded-lg px-3 py-2 hover:bg-accent" onClick={() => setOpen(false)}>
                        {n.label}
                      </Link>
                    ))}
                    <div className="px-3 py-1">
                      <ThemeToggle />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </header>
    </>
  )
}
