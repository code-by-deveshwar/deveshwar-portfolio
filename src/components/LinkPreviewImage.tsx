"use client"
import { useEffect, useMemo, useState } from "react"

export default function LinkPreviewImage({ url, className = "", alt = "Preview" }: { url: string; className?: string; alt?: string }) {
  const [primary, setPrimary] = useState<string | null>(null)
  const [idx, setIdx] = useState(0)
  const [loading, setLoading] = useState(true)

  // Fallback screenshot sources
  const fallbacks = useMemo(
    () => [
      `https://image.thum.io/get/width/1200/crop/800/${encodeURIComponent(url)}`,
      `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`,
    ],
    [url]
  )

  useEffect(() => {
    let active = true
    setLoading(true)
    setPrimary(null)
    setIdx(0)
    async function run() {
      try {
        const res = await fetch(`/api/preview?url=${encodeURIComponent(url)}`)
        const data = await res.json()
        if (!active) return
        if (data && (data.image || data.screenshot)) {
          setPrimary(data.image || data.screenshot)
        }
      } catch (_) {
        // ignore network/API errors; we will use fallbacks
      } finally {
        if (active) setLoading(false)
      }
    }
    run()
    return () => { active = false }
  }, [url])

  const sources = primary ? [primary, ...fallbacks] : fallbacks
  const src = sources[Math.min(idx, sources.length - 1)]

  if (loading && !src) {
    return <div className={`w-full h-full animate-pulse bg-accent/70`} />
  }
  if (!src) {
    return <div className={`w-full h-full bg-accent/70 flex items-center justify-center text-muted-foreground`}>No preview</div>
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      onError={() => setIdx((i) => i + 1)}
    />
  )
}
