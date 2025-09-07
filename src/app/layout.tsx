import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono, Inter } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import PageTransition from "@/components/motion/PageTransition";
import Script from "next/script";
import { site } from "@/config/site";
import Header from "@/components/Header";
import "./globals.css";

const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const geistMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interText = Inter({
  variable: "--font-text",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Deveshwar • Portfolio",
    template: "%s • Deveshwar",
  },
  description: "Full‑stack developer portfolio, projects, and blog.",
  keywords: ["Full‑stack", "MERN", "Next.js", "React", "Node"],
  openGraph: {
    type: "website",
    title: "Deveshwar — Full‑Stack Developer",
    description: "Projects, experience, and write‑ups.",
    url: "https://example.com",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "Portfolio" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deveshwar — Full‑Stack Developer",
    description: "Projects, experience, and write‑ups.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${interText.variable} antialiased`}>
        <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:m-4 focus:rounded focus:border focus:bg-background focus:px-3 focus:py-2">Skip to content</a>
        <ThemeProvider>
          <Header />
          <PageTransition>
            <main id="content">{children}</main>
          </PageTransition>
        </ThemeProvider>
        <Script id="ld-person" type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: site.name,
              email: site.email,
              telephone: site.phone,
              url: "https://example.com",
              jobTitle: site.role,
              sameAs: [site.socials.github, site.socials.linkedin],
            }),
          }}
        />
      </body>
    </html>
  );
}
