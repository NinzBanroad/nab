import type { Address } from "@/types/portfolio";

/** "Mandaue City, Cebu, Philippines". */
export function formatFullAddress({ locality, region, country }: Address): string {
  return `${locality}, ${region}, ${country}`;
}

/** "Cebu, Philippines": the short form used in headings. */
export function formatRegionAddress({ region, country }: Address): string {
  return `${region}, ${country}`;
}
