import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { sectionIds, site } from "@/content";

export function ContactSection() {
  return (
    <Section id={sectionIds.contact}>
      <Card>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-3 text-3xl font-semibold text-text">
              Ready to discuss your next web project.
            </h2>
          </div>
          <Button href={`mailto:${site.email}`}>Say hello</Button>
        </div>
        <p className="mt-6 max-w-3xl text-sm leading-7 text-muted">
          I&rsquo;m available for frontend consulting, product collaboration, and web application
          development with a focus on performance and maintainability.
        </p>
      </Card>
    </Section>
  );
}
