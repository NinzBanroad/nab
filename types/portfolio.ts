/** Shapes of the editable content in content/. Components read only these types. */

export type Theme = "light" | "dark";

export type SocialPlatform = "github" | "linkedin" | "x" | "youtube";

/** A calendar month as "YYYY-MM", e.g. "2025-08". Validated by parseYearMonth. */
export type YearMonth = `${number}-${number}`;

export type NavLink = {
  label: string;
  href: `#${string}`;
};

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string;
};

export type CallToAction = {
  label: string;
  href: string;
};

export type Address = {
  locality: string;
  region: string;
  country: string;
  /** ISO 3166-1 alpha-2, e.g. "PH". */
  countryCode: string;
};

export type SkillCategory = {
  title: string;
  items: readonly string[];
};

export type Experience = {
  company: string;
  role: string;
  /** First month in the role. */
  start: YearMonth;
  /** Last month in the role; omitted while the role is current. */
  end?: YearMonth;
  location?: string;
  responsibilities: readonly string[];
  techStack: readonly string[];
  tools?: readonly string[];
};

export type Education = {
  institution: string;
  qualification: string;
  specialization: string;
  period: string;
  focus?: string;
};

export type Service = {
  title: string;
  description: string;
  /** Companies (matching Experience.company) where this work was done. */
  provenAt: readonly string[];
};

export type SiteConfig = {
  name: string;
  shortName: string;
  title: string;
  /** Public origin, without a trailing slash. */
  url: string;
  address: Address;
  /** IANA time zone used for the live local-time readout. */
  timeZone: string;
  email: string;
  availability: string;
  summary: string;
  hero: {
    headline: string;
    lede: string;
    cta: CallToAction;
  };
  socialLinks: readonly SocialLink[];
  strengths: readonly string[];
};
