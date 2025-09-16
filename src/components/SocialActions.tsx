"use client"
import Link from "next/link"
import { MailIcon, FileTextIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Item = {
  href: string
  label: string
  icon: React.ElementType
  className?: string
}

// Exact LinkedIn brand square icon (blue square with white "in")
function LinkedInSquareIcon(props: React.SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className} {...rest}>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
      <path d="M7.04 9.25H5.1V18h1.94V9.25ZM6.07 5.99a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26ZM18.9 18h-1.94v-4.64c0-1.11-.02-2.54-1.55-2.54-1.56 0-1.8 1.21-1.8 2.46V18h-1.93V9.25h1.85v1.19h.03c.26-.49.89-1.2 2.3-1.2 2.46 0 2.91 1.62 2.91 3.72V18Z" fill="#fff" />
    </svg>
  )
}

export function SocialActions({ items, className }: { items: Item[]; className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {items.map(({ href, label, icon: Icon, className: itemClass }, i) => {
        const isExternal = href?.startsWith("http://") || href?.startsWith("https://")

        // Primary pill (first item)
        if (i === 0) {
          return (
            <Link
              key={label || href}
              href={href}
              aria-label={label || "Email"}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className={cn(
                "inline-flex items-center gap-3 rounded-full px-6 h-12 text-base font-semibold transition-transform",
                "bg-white dark:bg-transparent border border-black/40 text-neutral-900",
                "hover:-translate-y-0.5 active:translate-y-0 dark:text-white dark:border-white/30",
                itemClass
              )}
            >
              <Icon className={cn("size-5", itemClass)} />
              <span className={cn(itemClass)}>{label}</span>
            </Link>
          )
        }

        // Icon-only buttons (LinkedIn special case)
        return (
          <Link
            key={label || href}
            href={href}
            aria-label={label || "Open"}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={cn(
              label === "LinkedIn"
                ? "inline-flex items-center justify-center h-12 text-[#0A66C2] dark:text-[#4c9fff]"
                : "inline-flex items-center justify-center rounded-full size-12 transition-colors border border-black/40 bg-white dark:bg-transparent hover:bg-accent/60 dark:border-white/30",
              itemClass
            )}
          >
            <Icon className={cn("size-6")} />
          </Link>
        )
      })}
    </div>
  )
}

export const DefaultSocialActions = ({
  email,
  linkedin,
  resume,
  className,
}: {
  email: string
  linkedin: string
  resume?: string
  className?: string
}) => {
  const list: Item[] = [
    { href: `mailto:${email}`, label: "Email me", icon: MailIcon },
    { href: resume || "#", label: "Resume", icon: FileTextIcon },
    { href: linkedin, label: "LinkedIn", icon: LinkedInSquareIcon },
  ]
  return <SocialActions className={className} items={list} />
}
