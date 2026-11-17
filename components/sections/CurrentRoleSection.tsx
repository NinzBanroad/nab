import { Section } from "@/components/ui/Section";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { experiences, sectionIds, skillCategories } from "@/content";
import { formatYearMonth } from "@/lib/dates";
import { computeKeyFacts } from "@/lib/facts";

/** Number of responsibilities quoted from the current role. */
const SUMMARY_RESPONSIBILITY_COUNT = 2;

/** The role held now, presented like a featured project. Renders nothing between roles. */
export function CurrentRoleSection() {
  const { currentRole } = computeKeyFacts(experiences, skillCategories);
  if (!currentRole) return null;

  return (
    <Section labelledBy="current-title">
      <SectionIntro label="Currently" title={currentRole.company} headingId="current-title" />
      <p className="mt-2 font-semibold">
        {currentRole.role} · since {formatYearMonth(currentRole.start)}
      </p>
      <p className="mt-5 max-w-[60ch] leading-7 text-ink-soft">
        {currentRole.responsibilities.slice(0, SUMMARY_RESPONSIBILITY_COUNT).join(" ")}
      </p>
      <div className="print-hidden mt-8 flex flex-wrap gap-3">
        <a href={`#${sectionIds.experience}`} className="button button-primary">
          Full experience
        </a>
        <a href={`#${sectionIds.contact}`} className="button">
          Work with me
        </a>
      </div>
    </Section>
  );
}
