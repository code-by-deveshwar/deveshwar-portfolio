export const metadata = {
  title: "Blog",
}

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8 py-12">
      <article className="font-text">
        <h1 className="text-4xl font-extrabold tracking-tight">Blog is coming soon</h1>
        <p className="mt-4 text-muted-foreground">
          I’ll share detailed write‑ups of projects, postmortems, and how‑tos. This
          section uses the Inter typeface for comfortable long‑form reading.
        </p>
        <pre className="mt-6 rounded-lg bg-accent p-4 text-sm overflow-x-auto"><code>{`// code samples will render in mono
function hello() {
  console.log('Hello blog');
}`}</code></pre>
      </article>
    </main>
  )
}

