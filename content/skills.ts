import type { SkillCategory } from "@/types/portfolio";

export const skillCategories = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Semantic UI React",
      "Redux",
      "jQuery",
      "Angular",
    ],
  },
  {
    title: "Backend",
    items: ["Laravel Blade", "Node.js", "Express.js", "Koa"],
  },
  {
    title: "Databases",
    items: ["MySQL", "Microsoft SQL Server", "MongoDB"],
  },
  {
    title: "Platforms",
    items: ["Adobe Experience Manager", "Sitecore", "Azure"],
  },
  {
    title: "Workflow",
    items: ["Git", "Bitbucket", "Jira", "Confluence", "Slides.com", "Claude Code"],
  },
] satisfies readonly SkillCategory[];
