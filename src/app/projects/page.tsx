import Link from "next/link"
import { site } from "@/config/site"
import SectionHeader from "@/components/SectionHeader"
import TiltCard from "@/components/motion/TiltCard"
import Reveal from "@/components/motion/Reveal"

export const metadata = { title: "Projects" }

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-12">
      <Reveal><SectionHeader label="My Work" /></Reveal>
      <div className="mt-4 flex items-end justify-between">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h1>
        <Link href="/" className="text-sm underline-slide">Back home</Link>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {site.projects.map((p, i) => (
          <Reveal key={i} delay={i * 40}>
            <TiltCard>
              <ProjectCard title={p.title} subtitle={p.subtitle} image={p.image} href={p.href} />
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </main>
  )
}

function ProjectCard({ title, subtitle, image, href }: { title: string; subtitle?: string; image?: string; href?: string }) {
  const inner = (
    <div className="rounded-xl border bg-card p-4 card-hover">
      <div className="aspect-[4/5] rounded-lg bg-accent/70 border flex items-center justify-center text-muted-foreground overflow-hidden">
        <span className="text-xs">{image ? "Preview" : "Image"}</span>
      </div>
      <div className="mt-3">
        <p className="font-semibold underline-slide inline-block">{title}</p>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  )

  return href ? (
    <Link href={href} className="block">{inner}</Link>
  ) : (
    inner
  )
}

