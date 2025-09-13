import { NextRequest } from "next/server"

// Use a numeric literal so Next can statically analyze the value
export const revalidate = 86400 // 24h

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const url = searchParams.get("url")
  if (!url) {
    return new Response(JSON.stringify({ error: "Missing url" }), { status: 400 })
  }

  try {
    const res = await fetch(url, { next: { revalidate } })
    const html = await res.text()

    const getMeta = (name: string) => {
      const pattern = new RegExp(
        `<meta[^>]+(?:property|name)=\"${name.replace(/[-:]/g, (m) => `\\${m}`)}\"[^>]+content=\"([^\"]+)\"[^>]*>`,
        "i"
      )
      const match = html.match(pattern)
      return match?.[1] || null
    }

    const title =
      getMeta("og:title") || getMeta("twitter:title") || html.match(/<title>([^<]+)<\/title>/i)?.[1] || null
    const description =
      getMeta("og:description") || getMeta("twitter:description") || null
    let image = getMeta("og:image") || getMeta("twitter:image") || null
    let favicon = html.match(/<link[^>]*rel=[\"'](?:shortcut icon|icon)[\"'][^>]*href=[\"']([^\"']+)[\"'][^>]*>/i)?.[1] || null

    // Resolve relative URLs
    const base = new URL(url)
    if (image && !/^https?:\/\//i.test(image)) image = new URL(image, base).toString()
    if (favicon && !/^https?:\/\//i.test(favicon)) favicon = new URL(favicon, base).toString()

    // Fallback screenshot provider (anonymous). Comment out if undesired.
    const screenshot = `https://image.thum.io/get/width/1200/crop/800/${encodeURIComponent(url)}`

    const data = { url, title, description, image, favicon, screenshot }
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": `public, s-maxage=${revalidate}, stale-while-revalidate=${revalidate}`,
      },
    })
  } catch {
    return new Response(JSON.stringify({ error: "Failed to fetch preview" }), { status: 500 })
  }
}
