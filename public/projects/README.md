Project preview images
======================

Put your project preview images in this folder and reference them from
`src/config/site.ts` via `projects[].image`, for example:

  image: "/projects/jamme.png"

Recommended sizes
- Aspect ratio: 4:5 (e.g., 800x1000 or 1200x1500)
- Format: PNG or JPG (optimize to keep < 400 KB if possible)

Fallback
- If an entry has no image, the UI falls back to `/projects/placeholder.svg`.
