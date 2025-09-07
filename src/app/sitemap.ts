export default function sitemap() {
  const base = "https://example.com"
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/projects`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
  ]
}

