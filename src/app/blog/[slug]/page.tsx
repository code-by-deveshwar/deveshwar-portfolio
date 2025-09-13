import { notFound } from "next/navigation"
import { site } from "@/config/site"

export function generateStaticParams() {
  return site.posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = site.posts.find((p) => p.slug === params.slug)
  return {
    title: post ? post.title : "Post",
    description: post?.summary,
  }
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = site.posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 py-12 font-text">
      <h1 className="text-4xl font-extrabold tracking-tight">{post.title}</h1>
      <p className="text-sm text-muted-foreground mt-2">{new Date(post.date).toLocaleDateString()}</p>
      <div className="prose prose-neutral dark:prose-invert mt-6 max-w-none">
        <p>{post.content}</p>
      </div>
    </main>
  )
}

