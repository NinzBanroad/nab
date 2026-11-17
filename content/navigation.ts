import type { NavLink } from "@/types/portfolio";

export const sectionIds = {
  services: "services",
  experience: "experience",
  skills: "skills",
  contact: "contact",
} as const;

export const navLinks = [
  { label: "Services", href: `#${sectionIds.services}` },
  { label: "Experience", href: `#${sectionIds.experience}` },
  { label: "Skills", href: `#${sectionIds.skills}` },
  { label: "Contact", href: `#${sectionIds.contact}` },
] satisfies readonly NavLink[];
