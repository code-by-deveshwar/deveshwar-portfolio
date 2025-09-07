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
  subtitle?: string
  image?: string
  href?: string
}

export const site = {
  name: "Deveshwar Zard",
  role: "Full‑Stack Developer",
  location: "Bengaluru, India",
  email: "deveshwarzard@gmail.com",
  phone: "+91-9541080795",
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
    { title: "Project One", subtitle: "Web App", image: "/placeholder.svg" },
    { title: "Project Two", subtitle: "Mobile App", image: "/placeholder.svg" },
    { title: "Project Three", subtitle: "API", image: "/placeholder.svg" },
    { title: "Project Four", subtitle: "Tooling", image: "/placeholder.svg" },
    { title: "Project Five", subtitle: "Dashboard", image: "/placeholder.svg" },
    { title: "Project Six", subtitle: "CLI", image: "/placeholder.svg" },
    { title: "Project Seven", subtitle: "Service", image: "/placeholder.svg" },
    { title: "Project Eight", subtitle: "Lib", image: "/placeholder.svg" },
    { title: "Project Nine", subtitle: "SaaS", image: "/placeholder.svg" },
    { title: "Project Ten", subtitle: "Experiment", image: "/placeholder.svg" },
  ] as ProjectItem[],
}

export type Site = typeof site
