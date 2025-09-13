export type ExperienceItem = {
  title: string
  org?: string
  meta?: string
  details?: string[]
  logo?: string
  badges?: string[]
}

export type ProjectItem = {
  title: string
  slug: string
  subtitle?: string
  description?: string
  image?: string
  images?: string[]
  href?: string
  links?: { label: string; href: string }[]
  fit?: "cover" | "contain"
  aspect?: string // CSS aspect-ratio value, e.g. "16 / 10" or "4 / 5"
  tech?: string[]
  highlights?: string[]
  status?: "live" | "private" | "internal" | "archived" | "prototype"
  video?: string // youtube/vimeo link or mp4 path in public
}

export type SkillCategory = {
  title: string
  items: string[]
}

export type PostItem = {
  title: string
  slug: string
  date: string
  summary: string
  tags?: string[]
  content?: string
}

export const site = {
  name: "Deveshwar Zard",
  role: "Full‑Stack Developer",
  location: "Bengaluru, India",
  email: "deveshwarzard@gmail.com",
  phone: "+91-9541080795",
  avatar: "",
  socials: {
    github: "https://github.com/your-handle",
    linkedin: "https://www.linkedin.com/in/deveshwar-zard/",
    resume: "/resume.pdf",
  },
  experience: [
    {
      title: "Full‑Stack Developer",
      org: "Voiaxis Ltd",
      meta: "June 2024 – August 2025 • Hyderabad, India",
      logo: "/logos/voiaxis.svg",
      badges: ["React.js", "Node.js", "Supabase", "Docker"],
      details: [
        "Built an advertisement management platform (ads.jamme.app) from scratch, scalable for 10K+ advertisers",
        "Developed the frontend in React.js with shadcn UI and TanStack Query, optimizing API calls and reducing dashboard render time by 30%",
        "Contributed to backend with Node.js/Express and Supabase; defined API contracts, data models, and authentication",
        "Containerized the platform with Docker for consistent local dev and streamlined deployments",
        "Delivered campaign dashboards and reporting modules enabling real-time performance tracking and monetization",
      ],
    },
    {
      title: "Full‑Stack Developer Intern",
      org: "Avisoft",
      meta: "Jan 2024 – May 2024 • Chandigarh, India",
      logo: "/logos/avisoft.svg",
      badges: ["React.js", "Node.js", "Express.js"],
      details: [
        "Contributed to live client-facing projects using React.js, Node.js, Express.js, and JavaScript",
        "Assisted in designing and optimizing responsive frontend interfaces with React.js",
        "Supported development of RESTful APIs with Node.js/Express for reliable integration",
        "Collaborated in an agile environment with sprints and code reviews to enhance quality and speed",
      ],
    },
  ] as ExperienceItem[],
  projects: [
    {
      title: "Jamme",
      slug: "jamme",
      subtitle: "Social Media App",
      image: "/projects/jamme.png",
      images: ["/projects/jamme.png"],
      href: "https://jamme.app/",
      description: "A clean marketing site for a social media app, focused on speed and typography.",
      fit: "cover",
      aspect: "16 / 10",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      highlights: ["Responsive layout", "Accessible UI", "Optimized images"],
      status: "live",
    },
    {
      title: "Ads Platform",
      slug: "ads-jamme",
      subtitle: "Advertisement Management",
      image: "/projects/ads.jamme.app.png",
      images: ["/projects/ads.jamme.app.png"],
      href: "https://ads.jamme.app/",
      description: "Campaign manager for advertisers with dashboards and reporting.",
      fit: "cover",
      aspect: "16 / 10",
      tech: ["React", "Node.js", "Supabase", "Docker"],
      highlights: ["Real-time metrics", "Auth + RBAC", "Containerized dev"],
      status: "internal",
    },
    {
      title: "Oligarch Holdings",
      slug: "oligarch-holdings",
      subtitle: "Corporate Website",
      image: "/projects/oligarch.png",
      images: ["/projects/oligarch.png"],
      href: "https://oligarch.holdings/",
      description: "Corporate presence site with a refined, minimal aesthetic.",
      fit: "cover",
      aspect: "16 / 10",
      tech: ["Next.js", "Tailwind"],
      highlights: ["Brand-accurate theme", "SEO meta + OG"],
      status: "live",
    },
    {
      title: "Cocoon Salon",
      slug: "cocoon-salon",
      subtitle: "Salon website",
      image: "/projects/cocoon-salon.png",
      images: ["/projects/cocoon-salon.png"],
      video: "/projects/cocoon-salon.mp4",
      href: undefined,
      description: "Website for a salon showcasing services, booking info, and branding visuals.",
      fit: "cover",
      aspect: "16 / 9",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      highlights: ["Clean marketing page", "Responsive design", "Brand-focused layout"],
      status: "prototype",
    },
    {
      title: "Emiratea",
      slug: "emiratea",
      subtitle: "Real‑estate website",
      image: "/projects/emiratea.png",
      images: ["/projects/emiratea.png"],
      video: "/projects/emiratea.mp4",
      description: "Real‑estate brand site with rich visuals and smooth motion.",
      fit: "cover",
      aspect: "16 / 9",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      highlights: ["Hero animation", "Gallery sections", "Responsive layout"],
      status: "prototype",
    },
    { title: "Project One", slug: "project-one", subtitle: "Web App", image: "/projects/placeholder.svg", description: "Web application skeleton with clean architecture.", tech: ["Next.js"], highlights: ["SSR", "API routes"] },
    { title: "Project Two", slug: "project-two", subtitle: "Mobile App", image: "/projects/placeholder.svg", description: "Cross‑platform prototype.", tech: ["React Native"], highlights: ["Offline first"] },
    { title: "Project Three", slug: "project-three", subtitle: "API", image: "/projects/placeholder.svg", description: "REST API with auth and caching.", tech: ["Node.js", "Express"], highlights: ["JWT", "Rate limiting"] },
    { title: "Project Four", slug: "project-four", subtitle: "Tooling", image: "/projects/placeholder.svg", description: "DX tooling to speed up workflows.", tech: ["TypeScript"], highlights: ["CLI", "Configurable"] },
    { title: "Project Five", slug: "project-five", subtitle: "Dashboard", image: "/projects/placeholder.svg", description: "Analytics dashboard with charts.", tech: ["React", "Chart.js"], highlights: ["Filters", "Export"] },
    { title: "Project Six", slug: "project-six", subtitle: "CLI", image: "/projects/placeholder.svg", description: "Automation utility for routine tasks.", tech: ["Node.js"], highlights: ["Fast", "DX focus"] },
    { title: "Project Seven", slug: "project-seven", subtitle: "Service", image: "/projects/placeholder.svg", description: "Background service with queue.", tech: ["Node.js", "BullMQ"], highlights: ["Retries", "Metrics"] },
    { title: "Project Eight", slug: "project-eight", subtitle: "Lib", image: "/projects/placeholder.svg", description: "Reusable component library.", tech: ["React", "Tailwind"], highlights: ["Theming", "Docs"] },
    { title: "Project Nine", slug: "project-nine", subtitle: "SaaS", image: "/projects/placeholder.svg", description: "Subscription MVP with billing.", tech: ["Next.js", "Stripe"], highlights: ["Subscriptions", "Auth"] },
    { title: "Project Ten", slug: "project-ten", subtitle: "Experiment", image: "/projects/placeholder.svg", description: "Exploration of a new API/pattern.", tech: ["TypeScript"], highlights: ["POC", "Notes"] },
  ] as ProjectItem[],
  skills: [
    { title: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
    { title: "Frontend", items: ["React", "Next.js", "Tailwind", "shadcn/ui"] },
    { title: "Backend", items: ["Node.js", "Express", "Supabase", "REST"] },
    { title: "Databases", items: ["PostgreSQL", "MongoDB"] },
    { title: "DevOps", items: ["Docker", "Vercel", "GitHub Actions"] },
    { title: "Tools", items: ["Git", "Zod", "TanStack Query"] },
  ] as SkillCategory[],
  posts: [
    {
      title: "Designing a Minimal, Fast Portfolio with Next.js 15",
      slug: "minimal-fast-portfolio-next15",
      date: "2025-09-01",
      summary:
        "How I structured routes, typography, and motion for a crisp developer portfolio without bloat.",
      tags: ["Next.js", "UX", "Performance"],
      content:
        "I walk through page structure, App Router decisions, and motion utilities that keep interactions delightful without hurting performance.",
    },
    {
      title: "From Brief to Build: Shipping Production UI Quickly",
      slug: "brief-to-build-ui",
      date: "2025-08-15",
      summary:
        "My process for turning a design reference into a working, responsive UI with reusable components.",
      tags: ["UI", "Process"],
      content: "This post covers component composition, theming, and keeping variants sane.",
    },
  ] as PostItem[],
}

export type Site = typeof site
