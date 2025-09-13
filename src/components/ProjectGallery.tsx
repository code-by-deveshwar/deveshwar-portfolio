"use client"
import Image from "next/image"
import { useState } from "react"

export default function ProjectGallery({
  images,
  aspect = "4 / 5",
  fit = "cover",
  alt,
}: {
  images: string[]
  aspect?: string
  fit?: "cover" | "contain"
  alt: string
}) {
  const [i, setI] = useState(0)
  const src = images[i]
  return (
    <div>
      <div className="relative w-full overflow-hidden rounded-xl bg-accent/60" style={{ aspectRatio: aspect }}>
        <Image src={src} alt={alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className={fit === "contain" ? "object-contain p-2" : "object-cover"} />
      </div>
      {images.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {images.map((im, idx) => (
            <button
              key={im}
              type="button"
              aria-label={`View image ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`relative h-16 w-16 overflow-hidden rounded-md border ${i === idx ? "ring-2 ring-orange-500" : ""}`}
            >
              <Image src={im} alt="" fill sizes="64px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

