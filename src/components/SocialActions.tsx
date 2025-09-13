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
  return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="50" height="35" focusable="false">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
    </svg>
  )
}

export function SocialActions({ items, className }: { items: Item[]; className?: string }) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      {items.map(({ href, label, icon: Icon, className: itemClass }, i) =>
        i === 0 ? (
          <Link
            key={label || href}
            href={href}
            aria-label={label || "Email"}
            className={cn(
              "inline-flex items-center gap-3 rounded-full px-6 h-12 text-base font-semibold transition-transform",
              "bg-white border border-black/40 text-neutral-900",
              "hover:-translate-y-0.5 active:translate-y-0 dark:text-white dark:border-white/30",
              itemClass
            )}
          >
            <Icon className={cn("size-5", itemClass)} />
            <span className={cn(itemClass)}>{label}</span>
          </Link>
        ) : (
          <Link
            key={label || href}
            href={href}
            aria-label={label || "Open"}
            className={cn(
              // For LinkedIn, render just the blue brand icon with no circle wrapper
              label === "LinkedIn"
                ? "inline-flex items-center justify-center h-12 text-[#0A66C2] dark:text-[#4c9fff]"
                : "inline-flex items-center justify-center rounded-full size-12 transition-colors border border-black/40 bg-white hover:bg-accent/60 dark:border-white/30",
              itemClass
            )}
          >
            <Icon className={cn("size-6", label === "LinkedIn" && "size-")} />
          </Link>
        )
      )}
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
