import Hero from "@/components/Hero"
// import SkillsSection from "@/components/SkillsSection"
import BlogPreview from "@/components/BlogPreview"
import ExperienceTimeline from "@/components/ExperienceTimeline"
import FooterProfile from "@/components/FooterProfile"

export default function Home() {
  return (
    <main>
      <Hero />
      <BlogPreview />
      <ExperienceTimeline />
      <FooterProfile />
    </main>
  )
}
