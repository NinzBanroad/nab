import type { Service } from "@/types/portfolio";

/**
 * What a client can hire for. Every line is drawn from duties already listed in experience.ts;
 * `provenAt` names the roles where it was done.
 */
export const services = [
  {
    title: "Real estate websites",
    description:
      "Marketing sites and property pages for developers and agencies, built with Next.js, React, TypeScript and Tailwind CSS.",
    provenAt: ["Outworx IT Consultancy"],
  },
  {
    title: "Digital presentations & print previews",
    description:
      "Responsive sales presentations and print-preview websites that stay faithful on screen and on paper.",
    provenAt: ["Outworx IT Consultancy"],
  },
  {
    title: "Web applications & APIs",
    description:
      "React front ends backed by Node.js and Express REST APIs, from database design to the UI.",
    provenAt: ["Beautitag Limited", "Nerubia"],
  },
  {
    title: "Revamps, performance & support",
    description:
      "Rebuilding existing pages, reusable components, faster load times and calm troubleshooting of live sites.",
    provenAt: ["Accenture", "Outworx IT Consultancy"],
  },
] satisfies readonly Service[];
