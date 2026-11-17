import type { YearMonth } from "@/types/portfolio";

export const MONTHS_PER_YEAR = 12;

const YEAR_MONTH_PATTERN = /^(\d{4})-(0[1-9]|1[0-2])$/;

const monthYearFormat = new Intl.DateTimeFormat("en", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** Splits "YYYY-MM" into numbers; throws on anything else so bad content fails the build. */
export function parseYearMonth(value: YearMonth): { year: number; month: number } {
  const match = YEAR_MONTH_PATTERN.exec(value);
  if (!match?.[1] || !match[2]) {
    throw new Error(`Expected a "YYYY-MM" month, received "${value}".`);
  }
  return { year: Number(match[1]), month: Number(match[2]) };
}

/** Months since year 0, so two months can be subtracted. */
export function toMonthIndex(value: YearMonth): number {
  const { year, month } = parseYearMonth(value);
  return year * MONTHS_PER_YEAR + (month - 1);
}

/** Comparator for Array.sort: earliest month first. */
export function compareYearMonths(earlier: YearMonth, later: YearMonth): number {
  return toMonthIndex(earlier) - toMonthIndex(later);
}

export function currentMonthIndex(now: Date = new Date()): number {
  return now.getUTCFullYear() * MONTHS_PER_YEAR + now.getUTCMonth();
}

/** Inclusive month count: a role from 2020-04 to 2021-03 lasted 12 months. */
export function tenureInMonths(start: YearMonth, end?: YearMonth, now?: Date): number {
  const endIndex = end ? toMonthIndex(end) : currentMonthIndex(now);
  return endIndex - toMonthIndex(start) + 1;
}

/** "Aug 2025". */
export function formatYearMonth(value: YearMonth): string {
  const { year, month } = parseYearMonth(value);
  return monthYearFormat.format(new Date(Date.UTC(year, month - 1, 1)));
}

/** "Aug 2025 – Present" or "May 2021 – Jun 2025". */
export function formatPeriod(start: YearMonth, end?: YearMonth): string {
  return `${formatYearMonth(start)} – ${end ? formatYearMonth(end) : "Present"}`;
}

/** "4 yrs 2 mos", "9 mos", "1 yr". */
export function formatTenure(totalMonths: number): string {
  const years = Math.floor(totalMonths / MONTHS_PER_YEAR);
  const months = totalMonths % MONTHS_PER_YEAR;
  const yearPart = years > 0 ? `${years} ${years === 1 ? "yr" : "yrs"}` : "";
  const monthPart = months > 0 ? `${months} ${months === 1 ? "mo" : "mos"}` : "";
  return [yearPart, monthPart].filter(Boolean).join(" ");
}
