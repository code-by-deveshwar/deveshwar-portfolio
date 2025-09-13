import { notFound } from "next/navigation"
import { site } from "@/config/site"
import Image from "next/image"
import Link from "next/link"
import Reveal from "@/components/motion/Reveal"
import SectionHeader from "@/components/SectionHeader"
import { ExternalLink } from "lucide-react"
import ProjectGallery from "@/components/ProjectGallery"

export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = site.projects.find((p) => p.slug === slug)
  return {
    title: project ? project.title : "Project",
    description: project?.description || project?.subtitle,
    openGraph: project?.image
      ? { images: [{ url: project.image, width: 1200, height: 1200 }] }
      : undefined,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = site.projects.find((p) => p.slug === slug)
  if (!project) return notFound()

  const imgSrc = project.image || "/projects/placeholder.svg"
  const aspect = project.aspect || "4 / 5"
  const fit = project.fit || "cover"

  const desc = project.description || "Description coming soon. I’ll add a full write‑up shortly."

  return (
    <main className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 py-10">
      <Reveal>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">{project.title}</h1>
        <p className="text-muted-foreground mt-2">{project.subtitle}</p>
      </Reveal>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Media: video > gallery > single image */}
        <Reveal className="rounded-2xl border bg-card p-3">
          {project.video ? (
            <div className="relative w-full overflow-hidden rounded-xl bg-accent/60" style={{ aspectRatio: aspect }}>
              <video
                src={project.video}
                controls
                playsInline
                className="size-full object-cover"
                poster={project.image}
              />
            </div>
          ) : project.images && project.images.length > 0 ? (
            <ProjectGallery images={project.images} aspect={aspect} fit={fit} alt={`${project.title} preview`} />
          ) : (
            <div className="relative w-full overflow-hidden rounded-xl bg-accent/60" style={{ aspectRatio: aspect }}>
              <Image
                src={imgSrc}
                alt={`${project.title} preview`}
                fill
                sizes={"(max-width: 1024px) 100vw, 50vw"}
                className={fit === "contain" ? "object-contain p-2" : "object-cover"}
                priority
              />
            </div>
          )}
        </Reveal>

        <Reveal className="rounded-2xl border bg-card p-5">
          <div className="font-text">
            <SectionHeader label="Overview" />
            <p className="mt-3 text-[15px] leading-7 text-foreground/90">{desc}</p>
          </div>
          {project.tech && project.tech.length > 0 && (
            <div className="mt-6">
              <SectionHeader label="Tech Stack" />
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border px-3 h-8 text-xs md:text-sm bg-background">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mt-6">
              <SectionHeader label="Highlights" />
              <ul className="mt-3 list-disc ps-5 text-[15px] text-foreground/90 space-y-1">
                {project.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4 flex flex-wrap gap-3">
            {project.href && (
              <span className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-amber-500 p-[1px]">
                <Link
                  href={project.href}
                  className="inline-flex items-center gap-2 rounded-full bg-background px-4 h-10 text-sm font-medium hover:bg-accent transition-colors"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open live site"
                >
                  <ExternalLink className="size-4" />
                  <span>Open live site</span>
                </Link>
              </span>
            )}
            {project.links?.map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center rounded-full border px-4 h-10 text-sm underline-slide" target="_blank" rel="noreferrer">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/projects" className="text-sm underline-slide">← Back to projects</Link>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
