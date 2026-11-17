import type { Experience } from "@/types/portfolio";

export const experiences = [
  {
    company: "Outworx IT Consultancy",
    role: "Front-End Developer",
    start: "2025-08",
    location: "Remote / Cebu, Philippines",
    responsibilities: [
      "Develop and maintain websites for real estate clients using React, Next.js, TypeScript, Tailwind CSS, PHP Blade, and modern frontend patterns.",
      "Create responsive digital presentations and maintain print preview websites with clean, reusable code.",
      "Support and troubleshoot existing client websites while implementing requested product updates.",
      "Collaborate with designers, developers, and project managers to deliver client requirements and improve developer workflows.",
      "Manage source code using Git and Bitbucket, and track work with Jira and Confluence.",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "PHP Blade",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    tools: ["Slides.com", "Jira", "Confluence", "Bitbucket", "Git", "Claude Code", "Claude CLI"],
  },
  {
    company: "Accenture",
    role: "Web Developer / Marketing Analyst",
    start: "2021-05",
    end: "2025-06",
    responsibilities: [
      "Developed, modified, tested, and maintained web applications and marketing websites.",
      "Revamped existing pages and implemented client-requested features to improve performance and usability.",
      "Built reusable web components and optimized loading speed across multiple applications.",
      "Participated in Agile development, daily stand-ups, and company hackathons.",
      "Investigated and resolved application issues while collaborating with cross-functional teams.",
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "React", "jQuery"],
    tools: ["Jira", "Confluence", "Azure", "ServiceNow", "Outlook", "Microsoft Teams"],
  },
  {
    company: "Beautitag Limited",
    role: "Full Stack Web Developer",
    start: "2020-04",
    end: "2021-03",
    responsibilities: [
      "Developed REST APIs using Node.js and Express and maintained web application features.",
      "Implemented responsive user interfaces with React, Redux, Bootstrap, Material UI, and Semantic UI React.",
      "Designed application architecture covering databases, backend endpoints, and frontend UI components.",
    ],
    techStack: ["Node.js", "Express.js", "React", "Redux", "Bootstrap", "Material UI"],
  },
  {
    company: "Nerubia",
    role: "Web Developer Intern",
    start: "2019-07",
    end: "2020-03",
    responsibilities: [
      "Assisted in developing and maintaining web applications across frontend and backend implementations.",
      "Collaborated with senior developers on feature development and bug fixes.",
      "Performed manual testing of features and cross-browser checks to ensure quality and usability.",
    ],
    techStack: ["JavaScript", "React", "Redux", "HTML", "CSS", "Manual Testing"],
  },
] satisfies readonly Experience[];
