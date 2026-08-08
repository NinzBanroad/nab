import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { Experience } from "@/types/portfolio";

export function ExperienceCard({ experience }: { experience: Experience }) {
  const { role, period, company, location, responsibilities, techStack, tools } = experience;

  return (
    <Card>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <p className="font-semibold text-text">{role}</p>
          <Badge variant="outline">{period}</Badge>
        </div>
        <h3 className="text-2xl font-semibold text-text">{company}</h3>
        {location ? <p className="text-sm text-muted">{location}</p> : null}
      </div>

      <ul className="mt-6 space-y-4 text-sm leading-7 text-muted">
        {responsibilities.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden="true" className="text-accent">
              •
            </span>
            {item}
          </li>
        ))}
      </ul>

      <TagList label="Tech stack" items={techStack} />
      {tools?.length ? <TagList label="Tools" items={tools} /> : null}
    </Card>
  );
}

function TagList({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div className="mt-6">
      <p className="sr-only">{label}</p>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item}>
            <Badge>{item}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
