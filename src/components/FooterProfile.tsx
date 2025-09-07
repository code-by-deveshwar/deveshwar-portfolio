import { site } from "@/config/site"
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function FooterProfile() {
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 mt-10 mb-16">
      <div className="rounded-3xl bg-neutral-900 text-neutral-100 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">{site.name}</h3>
            <p className="text-sm md:text-base text-neutral-300">{site.role} based in {site.location}.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Pill href={site.socials.github} icon={<Github className="size-4" />} label="GitHub" />
            <Pill href={site.socials.linkedin} icon={<Linkedin className="size-4" />} label="LinkedIn" />
            <Pill href={`mailto:${site.email}`} icon={<Mail className="size-4" />} label={site.email} />
          </div>
        </div>
      </div>
    </footer>
  )
}

function Pill({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 h-10 text-sm hover:bg-white/10"
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

