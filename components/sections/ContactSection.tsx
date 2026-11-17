import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { PrintButton } from "@/components/ui/PrintButton";
import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { sectionIds, site } from "@/content";

export function ContactSection() {
  return (
    <Section id={sectionIds.contact} labelledBy="contact-title">
      <SectionIntro
        label="Availability"
        title="Open to web projects and frontend consulting."
        headingId="contact-title"
      />
      <p className="mt-5 max-w-[60ch] leading-7 text-ink-soft">
        I&rsquo;m available for frontend consulting, product collaboration, and web application
        development with a focus on performance and maintainability.
      </p>

      <a
        href={`mailto:${site.email}`}
        className="underlined mt-6 inline-flex min-h-11 items-center text-lg font-semibold"
      >
        Start a conversation — {site.email}
      </a>

      <div className="print-hidden mt-4 flex flex-wrap gap-3">
        <CopyEmailButton email={site.email} className="button" />
        <PrintButton className="button">Print as CV</PrintButton>
      </div>
    </Section>
  );
}
