import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { education, sectionIds, site, skillCategories } from "@/content";

export function SkillsSection() {
  const groups = [...skillCategories, { title: "Strengths", items: site.strengths }];

  return (
    <Section id={sectionIds.skills} labelledBy="skills-title">
      <SectionIntro
        label="Toolkit"
        title="Skills, strengths and education"
        headingId="skills-title"
      />

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ title, items }) => (
          <li key={title} className="border-t border-rule pt-5">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 leading-7 text-ink-soft">{items.join(", ")}</p>
          </li>
        ))}
      </ul>

      <div className="mt-12 border-t border-rule pt-5">
        <h3 className="font-semibold">Education</h3>
        <p className="mt-2 text-ink-soft">
          {education.qualification}, {education.specialization} · {education.institution}
        </p>
        <p className="mt-1 text-sm text-muted">{education.period}</p>
      </div>
    </Section>
  );
}
