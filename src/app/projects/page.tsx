import Link from "next/link"
import { site } from "@/config/site"
import SectionHeader from "@/components/SectionHeader"
import TiltCard from "@/components/motion/TiltCard"
import Reveal from "@/components/motion/Reveal"
import Image from "next/image"

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
              <ProjectCard title={p.title} subtitle={p.subtitle} image={p.image} href={p.href} slug={p.slug} fit={p.fit} aspect={p.aspect} />
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </main>
  )
}

function ProjectCard({ title, subtitle, image, href, slug, fit = "cover", aspect = "4 / 5" }: { title: string; subtitle?: string; image?: string; href?: string; slug?: string; fit?: "cover" | "contain"; aspect?: string }) {
  const inner = (
    <div className="rounded-xl border bg-card p-4 card-hover">
      <div className="relative rounded-lg bg-accent/70 border overflow-hidden" style={{ aspectRatio: aspect }}>
        <Image
          src={image || "/projects/placeholder.svg"}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 1024px) 50vw, 33vw"
          className={fit === "contain" ? "object-contain p-2" : "object-cover"}
        />
      </div>
      <div className="mt-3">
        <p className="font-semibold underline-slide inline-block">{title}</p>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  )

  const link = slug ? `/projects/${slug}` : href
  return link ? (
    <Link href={link} className="block">{inner}</Link>
  ) : (
    inner
  )
}
