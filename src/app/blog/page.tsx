import Link from "next/link"
import { site } from "@/config/site"

export const metadata = { title: "Blog" }

export default function BlogPage() {
  const posts = site.posts
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight">Blog</h1>
      <p className="text-muted-foreground mt-2">Long‑form posts about building products, UI, and DX.</p>
      <div className="mt-8 space-y-8 font-text">
        {posts.map((p) => (
          <article key={p.slug} className="group">
            <h2 className="text-2xl font-semibold tracking-tight">
              <Link className="underline-slide" href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="text-sm text-muted-foreground mt-1">{formatDate(p.date)} • {p.tags?.join(" · ")}</p>
            <p className="mt-2 text-[15px] text-foreground/90">{p.summary}</p>
          </article>
        ))}
      </div>
    </main>
  )
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" })
}
