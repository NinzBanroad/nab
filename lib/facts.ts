import { compareYearMonths, MONTHS_PER_YEAR, tenureInMonths } from "@/lib/dates";
import type { Experience, SkillCategory } from "@/types/portfolio";

export type KeyFacts = {
  yearsInPractice: number;
  companyCount: number;
  technologyCount: number;
  currentRole: Experience | undefined;
};

/**
 * Headline numbers derived from the content, so they never drift from the experience list.
 * Pure: pass `now` to make it deterministic in tests.
 */
export function computeKeyFacts(
  experiences: readonly Experience[],
  skillCategories: readonly SkillCategory[],
  now?: Date,
): KeyFacts {
  const earliestStart = experiences.map(({ start }) => start).sort(compareYearMonths)[0];
  const yearsInPractice = earliestStart
    ? Math.floor(tenureInMonths(earliestStart, undefined, now) / MONTHS_PER_YEAR)
    : 0;

  const technologies = new Set([
    ...skillCategories.flatMap(({ items }) => items),
    ...experiences.flatMap(({ techStack }) => techStack),
  ]);

  return {
    yearsInPractice,
    companyCount: new Set(experiences.map(({ company }) => company)).size,
    technologyCount: technologies.size,
    currentRole: experiences.find(({ end }) => !end),
  };
}
