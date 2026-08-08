import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { sectionIds, skillCategories } from "@/content";

export function SkillsSection() {
  return (
    <Section id={sectionIds.skills}>
      <SectionHeading
        label="Skills"
        title="Technical capabilities"
        description="A broad toolset for frontend and backend development, CMS implementation, and modern delivery workflows."
      />

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {skillCategories.map((category) => (
          <Card key={category.title} className="p-6">
            <h3 className="text-lg font-semibold text-text">{category.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {category.items.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
