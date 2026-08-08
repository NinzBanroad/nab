export type Theme = "light" | "dark";

export type SocialPlatform = "github" | "linkedin" | "x" | "youtube";

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  href: string;
}

export interface CallToAction {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  items: readonly string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  responsibilities: readonly string[];
  techStack: readonly string[];
  tools?: readonly string[];
}

export interface Education {
  institution: string;
  qualification: string;
  specialization: string;
  period: string;
  focus?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  location: string;
  email: string;
  summary: string;
  hero: {
    eyebrow: string;
    headline: string;
    cta: CallToAction;
  };
  socialLinks: readonly SocialLink[];
  strengths: readonly string[];
}
