import { site } from "@/config/site"
import { MailIcon, GithubIcon, MapPin } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function LinkedInBrandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden="true" focusable="false" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="3" fill="#0A66C2" />
      <path d="M7.04 9.25H5.1V18h1.94V9.25ZM6.07 5.99a1.13 1.13 0 1 0 0 2.26 1.13 1.13 0 0 0 0-2.26ZM18.9 18h-1.94v-4.64c0-1.11-.02-2.54-1.55-2.54-1.56 0-1.8 1.21-1.8 2.46V18h-1.93V9.25h1.85v1.19h.03c.26-.49.89-1.2 2.3-1.2 2.46 0 2.91 1.62 2.91 3.72V18Z" fill="#fff" />
    </svg>
  )
}

export default function FooterProfile() {
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 mt-12 mb-10">
      <div className="relative overflow-hidden rounded-[32px] bg-neutral-900 text-neutral-100 p-6 md:p-8">
        {/* Decorative map/pattern on the right */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden md:block w-1/3"
          style={{
            background:
              "radial-gradient(400px 400px at 80% 50%, rgba(255,149,0,.25), transparent 60%), radial-gradient(200px 200px at 90% 20%, rgba(255,149,0,.12), transparent 60%)",
            maskImage: "linear-gradient(90deg, transparent 0%, black 10%, black 100%)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6">
          {/* Left: Avatar */}
          <div className="flex items-start">
            <div className="rounded-[28px] p-1 bg-white/15">
              <div className="rounded-[24px] p-1 bg-black/30">
                <Avatar className="size-28 md:size-32 rounded-[20px]">
                  <AvatarImage src={site.avatar} alt={site.name} />
                  <AvatarFallback className="rounded-[20px] text-lg font-semibold">
                    {initials(site.name)}
                  </AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>

          {/* Right: Text + Pills */}
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-2xl md:text-[28px] font-semibold tracking-tight">{site.name}</h3>
              <p className="text-sm md:text-base text-neutral-300 mt-1">
                {site.email}
              </p>
              <p className="text-sm md:text-base text-neutral-300 mt-3">
                {site.role} based in {site.location}.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
            <Pill href={site.socials.github} icon={<GithubIcon className="size-4" />} label="GitHub" />
            <Pill href={site.socials.linkedin} icon={<LinkedInBrandIcon className="size-4 text-[#0A66C2] dark:text-[#4c9fff]" />} label="LinkedIn" />
            <Pill href={`mailto:${site.email}`} icon={<MailIcon className="size-4" />} label={site.email} wide />
            </div>
          </div>
        </div>

        {/* Location marker on the right */}
        <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-2 text-sm text-neutral-200/90">
          <span className="relative inline-flex items-center justify-center">
            <span className="absolute inline-block size-3 rounded-full bg-orange-500 blur-[1px]" />
            <span className="relative inline-block size-1.5 rounded-full bg-white" />
          </span>
          <MapPin className="size-4 opacity-80" />
          <span>{site.location}</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">PS: Built with ❤️ in Next.js</p>
    </footer>
  )
}

function Pill({ href, icon, label, wide }: { href: string; icon: React.ReactNode; label: string; wide?: boolean }) {
  return (
    <span className="bg-gradient-to-r from-neutral-100/10 to-white/10 rounded-full p-[1px]">
      <Link
        href={href}
        className={`inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 ${wide ? "h-11" : "h-10"} text-sm hover:bg-neutral-800 transition-colors`}
      >
        {icon}
        <span className="font-medium">{label}</span>
      </Link>
    </span>
  )
}

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase()
}
