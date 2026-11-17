import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { experiences, sectionIds } from "@/content";
import { formatPeriod, formatTenure, tenureInMonths } from "@/lib/dates";
import type { Experience } from "@/types/portfolio";

export function ExperienceSection() {
  return (
    <Section id={sectionIds.experience} labelledBy="experience-title">
      <SectionIntro label="Experience" title="Where I've worked" headingId="experience-title" />

      <ol className="mt-10 border-t border-rule">
        {experiences.map((experience) => (
          <ExperienceEntry key={experience.company} experience={experience} />
        ))}
      </ol>
    </Section>
  );
}

function ExperienceEntry({ experience }: { experience: Experience }) {
  const {
    company,
    role,
    start,
    end,
    location,
    responsibilities,
    techStack,
    tools = [],
  } = experience;
  const isCurrent = !end;

  return (
    <li className="border-b border-rule py-8">
      <h3 className="text-lg font-semibold">
        {role} <span className="font-normal text-muted">·</span> {company}
      </h3>
      <p className="mt-1 flex flex-wrap gap-x-3 text-sm text-muted">
        <span>{formatPeriod(start, end)}</span>
        <span>{formatTenure(tenureInMonths(start, end))}</span>
        {location ? <span>{location}</span> : null}
        {isCurrent ? <span className="font-semibold text-accent">Current</span> : null}
      </p>

      <ul className="mt-4 max-w-[64ch] space-y-2 leading-7 text-ink-soft">
        {responsibilities.map((responsibility) => (
          <li key={responsibility} className="flex gap-3">
            <span aria-hidden="true" className="text-muted">
              –
            </span>
            {responsibility}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm text-muted">{[...techStack, ...tools].join(", ")}</p>
    </li>
  );
}
