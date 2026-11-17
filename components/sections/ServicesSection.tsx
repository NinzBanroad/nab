import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { sectionIds, services } from "@/content";

export function ServicesSection() {
  return (
    <Section id={sectionIds.services} labelledBy="services-title">
      <SectionIntro
        label="What I do"
        title="Responsive, maintainable websites and web apps, from the API to the last pixel."
        headingId="services-title"
      />

      <ul className="mt-10 grid gap-8 sm:grid-cols-2">
        {services.map(({ title, description, provenAt }) => (
          <li key={title} className="border-t border-rule pt-5">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 leading-7 text-ink-soft">{description}</p>
            <p className="mt-2 text-sm text-muted">Delivered at {provenAt.join(" and ")}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
