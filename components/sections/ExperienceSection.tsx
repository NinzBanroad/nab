import { ExperienceCard } from "@/components/experience/ExperienceCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { experiences, sectionIds } from "@/content";

export function ExperienceSection() {
  return (
    <Section id={sectionIds.experience}>
      <SectionHeading
        label="Experience"
        title="Professional background"
        description="Experience delivering client-facing products and enterprise solutions across consultancy, marketing, and startup environments."
      />

      <div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </Section>
  );
}
