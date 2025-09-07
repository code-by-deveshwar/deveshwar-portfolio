"use client"
import Link from "next/link"
import { Mail, FileText, Linkedin } from "lucide-react"
import { cn } from "@/lib/utils"

type Item = {
  href: string
  label: string
  icon: React.ElementType
}

export function SocialActions({
  items,
  className,
}: { items: Item[]; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {items.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          aria-label={label}
          className="group inline-flex items-center gap-2 rounded-full border px-4 h-9 text-sm hover:bg-accent transition-all card-hover"
        >
          <Icon className="size-4 transition-transform duration-300 group-hover:-translate-y-[1px]" />
          <span className="hidden sm:inline underline-slide">{label}</span>
        </Link>
      ))}
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
    { href: `mailto:${email}`, label: "Email me", icon: Mail },
    { href: resume || "#", label: "Resume", icon: FileText },
    { href: linkedin, label: "LinkedIn", icon: Linkedin },
  ]
  return <SocialActions className={className} items={list} />
}
