import type { NavLink } from "@/types/portfolio";

export const sectionIds = {
  skills: "skills",
  experience: "experience",
  about: "about",
  contact: "contact",
} as const;

export const navLinks = [
  { label: "Skills", href: `#${sectionIds.skills}` },
  { label: "Experience", href: `#${sectionIds.experience}` },
  { label: "About", href: `#${sectionIds.about}` },
  { label: "Contact", href: `#${sectionIds.contact}` },
] satisfies readonly NavLink[];
