import type { SiteConfig } from "@/types/portfolio";

export const site = {
  name: "Niño Anthony Y. Bandalan",
  title: "Full Stack Web Developer",
  location: "Mandaue City, Cebu, Philippines",
  email: "hi@nino.dev",
  summary:
    "I build responsive, maintainable web applications using modern JavaScript technologies. I focus on delivering clean interfaces, fast interactions, and reliable engineering for real estate and enterprise clients.",

  hero: {
    eyebrow: "Crafting modern web applications",
    headline:
      "I build responsive, maintainable web applications for real estate and enterprise clients.",
    cta: { label: "Projects", href: "/projects" },
  },

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
