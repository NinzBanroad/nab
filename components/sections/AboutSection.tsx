import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { education, sectionIds, site } from "@/content";

export function AboutSection() {
  return (
    <Section id={sectionIds.about} className="grid gap-6 space-y-0 lg:grid-cols-[1.1fr_0.9fr]">
      <Card>
        <Eyebrow>Strengths</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold text-text">What I bring to the team</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {site.strengths.map((strength) => (
            <li
              key={strength}
              className="rounded-card border border-border bg-bg p-4 text-sm text-muted"
            >
              {strength}
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <Eyebrow>Education</Eyebrow>
        <h2 className="mt-4 text-3xl font-semibold text-text">Formal training</h2>
        <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
          <div>
            <p className="font-semibold text-text">{education.institution}</p>
            <p>
              {education.qualification} — {education.specialization}
            </p>
            <p>{education.period}</p>
          </div>
          {education.focus ? (
            <div>
              <p className="font-semibold text-text">Professional focus</p>
              <p>{education.focus}</p>
            </div>
          ) : null}
        </div>
      </Card>
    </Section>
  );
}
