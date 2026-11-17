/**
 * Content contract: the assumptions components make about content/. Editing content that breaks
 * one of these fails `npm test` instead of rendering a broken page.
 */
import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { experiences, navLinks, sectionIds, services, site, skillCategories } from "@/content";
import { compareYearMonths, toMonthIndex } from "@/lib/dates";

function assertUnique(values: readonly string[], what: string) {
  const duplicates = values.filter((value, index) => values.indexOf(value) !== index);
  assert.deepEqual(duplicates, [], `Duplicate ${what}: ${duplicates.join(", ")}`);
}

describe("experiences", () => {
  it("have valid dates that never end before they start", () => {
    for (const { company, start, end } of experiences) {
      const startIndex = toMonthIndex(start); // Throws on a malformed month.
      if (end) {
        assert.ok(toMonthIndex(end) >= startIndex, `${company} ends before it starts`);
      }
    }
  });

  it("are listed newest first", () => {
    const starts = experiences.map(({ start }) => start);
    assert.deepEqual(starts, [...starts].sort(compareYearMonths).reverse());
  });

  it("have at most one current role", () => {
    assert.ok(experiences.filter(({ end }) => !end).length <= 1);
  });

  it("use unique company names, which are React keys", () => {
    assertUnique(
      experiences.map(({ company }) => company),
      "company",
    );
  });

  it("have a role, duties and a stack", () => {
    for (const { company, role, responsibilities, techStack } of experiences) {
      assert.ok(role.trim(), `${company} has no role`);
      assert.ok(responsibilities.length > 0, `${company} has no responsibilities`);
      assert.ok(techStack.length > 0, `${company} has no tech stack`);
    }
  });
});

describe("services", () => {
  it("only cite companies that appear in the experience list", () => {
    const companies = new Set(experiences.map(({ company }) => company));
    for (const { title, provenAt } of services) {
      for (const company of provenAt) {
        assert.ok(companies.has(company), `"${title}" cites unknown company "${company}"`);
      }
    }
  });

  it("use unique titles", () => {
    assertUnique(
      services.map(({ title }) => title),
      "service title",
    );
  });
});

describe("skills", () => {
  it("have unique, non-empty categories with unique items", () => {
    assertUnique(
      skillCategories.map(({ title }) => title),
      "skill category",
    );
    for (const { title, items } of skillCategories) {
      assert.ok(items.length > 0, `${title} is empty`);
      assertUnique(items, `item in ${title}`);
    }
  });
});

describe("site", () => {
  it("links every nav item to a real section", () => {
    const ids = new Set<string>(Object.values(sectionIds));
    for (const { label, href } of navLinks) {
      assert.ok(ids.has(href.slice(1)), `Nav "${label}" points at missing section ${href}`);
    }
  });

  it("has a plausible email and https social links", () => {
    assert.match(site.email, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    for (const { label, href } of site.socialLinks) {
      assert.ok(href.startsWith("https://"), `${label} must use https`);
    }
  });

  it("names a valid IANA time zone", () => {
    assert.doesNotThrow(() => new Intl.DateTimeFormat("en", { timeZone: site.timeZone }));
  });
});
