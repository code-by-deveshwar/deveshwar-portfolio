import { site } from "@/config/site"
import SectionHeader from "@/components/SectionHeader"
import { Button } from "@/components/ui/button"
import { DefaultSocialActions } from "@/components/SocialActions"
import Reveal from "@/components/motion/Reveal"
import ShimmerText from "@/components/motion/ShimmerText"
import MouseGlow from "@/components/motion/MouseGlow"

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 pt-12 md:pt-16 relative">
      <MouseGlow />
      <Reveal><SectionHeader label="Hey!" /></Reveal>

      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-3xl">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Hi, I&apos;m <span className="align-middle">{site.name}</span>!
            </h1>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-2 text-2xl md:text-3xl font-semibold text-muted-foreground">
              I&apos;m a <ShimmerText>{site.role}</ShimmerText>
              <span className="text-muted-foreground"> based at</span>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-2xl md:text-3xl font-semibold">{site.location}<span className="text-orange-600">.</span></p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-6 flex items-center gap-6">
              {/* <Button className="rounded-full bg-neutral-900 text-white px-5 py-2.5 hover:bg-neutral-800 transition-transform will-change-transform active:scale-[0.98]">
                Book a call
              </Button> */}
              <p className="max-w-[34ch] text-sm md:text-base text-muted-foreground">
                Feel free to explore my portfolio and reach out — I&apos;d love to connect!
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={260}>
          <DefaultSocialActions
            className="md:mt-2"
            email={site.email}
            linkedin={site.socials.linkedin}
            resume={site.socials.resume}
          />
        </Reveal>
      </div>
    </section>
  )
}
