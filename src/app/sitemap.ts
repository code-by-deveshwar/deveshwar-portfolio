import { site } from "@/config/site"

export default function sitemap() {
  const base = "https://example.com"
  const core = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
  ]

  const projects = site.projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
  }))

  return [...core, ...projects]
}
