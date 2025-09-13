import { site } from "@/config/site"
import SectionHeader from "@/components/SectionHeader"
import Reveal from "@/components/motion/Reveal"
import Link from "next/link"

export default function BlogPreview() {
  const posts = site.posts.slice(0, 2)
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 mt-10">
      <Reveal className="rounded-2xl border bg-card p-4 md:p-6">
        <div className="flex items-center justify-between">
          <SectionHeader label="Latest Posts" />
          <Link className="text-xs md:text-sm underline-slide" href="/blog">View all</Link>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 font-text">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="rounded-xl border bg-background p-4 card-hover">
              <p className="text-sm text-muted-foreground">{new Date(p.date).toLocaleDateString()}</p>
              <h3 className="mt-1 text-lg font-semibold underline-slide inline-block">{p.title}</h3>
              <p className="mt-1 text-foreground/90">{p.summary}</p>
            </Link>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

