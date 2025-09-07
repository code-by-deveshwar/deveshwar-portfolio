import { site } from "@/config/site"
import SectionHeader from "@/components/SectionHeader"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Reveal from "@/components/motion/Reveal"
import TiltCard from "@/components/motion/TiltCard"
import Link from "next/link"

export default function ExperienceTimeline() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 mt-10">
      <div className="flex flex-col md:flex-row items-start gap-6">
        <Reveal className="md:flex-1 rounded-2xl border bg-card p-4 md:p-6">
          <div className="mb-4"><SectionHeader label="My Experience" /></div>
          <ol className="relative ms-3">
            {site.experience.map((item, idx) => (
              <li key={idx} className="relative pb-6 last:pb-0">
                {/* Vertical track */}
                {idx !== site.experience.length - 1 && (
                  <div className="absolute -ms-[5px] mt-3 h-full w-px bg-border" />
                )}

                {/* Marker: logo avatar or dot */}
                {item.logo ? (
                  <Avatar className="absolute -ms-6 mt-0 size-6 border bg-background">
                    <AvatarImage src={item.logo} alt={item.org || "Company"} />
                    <AvatarFallback className="text-xs">
                      {(item.org?.[0] || "?").toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="absolute -ms-3 mt-1 size-2 rounded-full bg-foreground" />
                )}

                {/* Content */}
                <div className="ps-2">
                  <p className="text-sm md:text-base font-medium">
                    {item.title}{item.org ? ` at ${item.org}` : ""}
                  </p>
                  {item.meta && (
                    <p className="text-xs md:text-sm text-muted-foreground">{item.meta}</p>
                  )}
                  {item.badges && item.badges.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.badges.map((b, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center rounded-full border px-2.5 h-7 text-[11px] md:text-xs text-foreground/80 bg-background"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                  {item.details && item.details.length > 0 && (
                    <ul className="mt-2 list-disc ps-5 text-xs md:text-sm text-muted-foreground space-y-1">
                      {item.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="md:flex-1 space-y-4">
          <Reveal className="rounded-2xl border bg-card p-4 md:p-6">
            <div className="flex items-center justify-between">
              <SectionHeader label="My Work" />
              <Link href="/projects" className="text-xs md:text-sm underline-slide">View all</Link>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {site.projects.slice(0,4).map((p, i) => (
                <TiltCard key={i}>
                  <ProjectTile title={p.title} subtitle={p.subtitle} image={p.image} />
                </TiltCard>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ProjectTile({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  return (
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
}
