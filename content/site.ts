import { resolveSiteUrl } from "@/lib/siteUrl";
import type { SiteConfig } from "@/types/portfolio";

export const site = {
  name: "Niño Anthony Y. Bandalan",
  shortName: "Niño Bandalan",
  title: "Web Developer",
  url: resolveSiteUrl(process.env.NEXT_PUBLIC_SITE_URL, process.env.NODE_ENV),
  address: {
    locality: "Mandaue City",
    region: "Cebu",
    country: "Philippines",
    countryCode: "PH",
  },
  timeZone: "Asia/Manila",
  email: "hi@nino.dev",
  availability: "Available for projects",
  summary:
    "I build responsive, maintainable web applications using modern JavaScript technologies. I focus on delivering clean interfaces, fast interactions, and reliable engineering for real estate and enterprise clients.",

  hero: {
    headline:
      "I build responsive, maintainable web applications for real estate and enterprise clients.",
    lede: "I work across the stack with React, Next.js, TypeScript and Node.js, and focus on clean interfaces, fast interactions and reliable engineering.",
    cta: { label: "Start a project", href: "#contact" },
  },

  // Replace with real profile URLs; bare platform home pages are left out of structured data.
  socialLinks: [
    { platform: "github", label: "GitHub", href: "https://github.com" },
    { platform: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
    { platform: "x", label: "X", href: "https://x.com" },
    { platform: "youtube", label: "YouTube", href: "https://youtube.com" },
  ],

  strengths: [
    "Full Stack Web Development",
    "Frontend Architecture",
    "Backend Development",
    "Responsive Web Design",
    "Performance Optimization",
    "API Development",
    "CMS Development",
    "UI/UX Implementation",
    "Agile Collaboration",
    "Problem Solving",
  ],
} satisfies SiteConfig;
