import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { computeKeyFacts } from "@/lib/facts";
import type { Experience } from "@/types/portfolio";

const NOV_2026 = new Date(Date.UTC(2026, 10, 17));

function makeExperience(overrides: Partial<Experience>): Experience {
  return {
    company: "Example Co",
    role: "Developer",
    start: "2020-01",
    end: "2020-12",
    responsibilities: ["Built things."],
    techStack: ["React"],
    ...overrides,
  };
}

describe("computeKeyFacts", () => {
  it("counts full years from the earliest start, whatever the list order", () => {
    const facts = computeKeyFacts(
      [
        makeExperience({ company: "Later", start: "2022-01", end: undefined }),
        makeExperience({ company: "Earliest", start: "2019-07", end: "2020-03" }),
      ],
      [],
      NOV_2026,
    );
    assert.equal(facts.yearsInPractice, 7);
  });

  it("counts each technology once across skills and experience", () => {
    const facts = computeKeyFacts(
      [makeExperience({ techStack: ["React", "Node.js"] })],
      [{ title: "Frontend", items: ["React", "CSS3"] }],
      NOV_2026,
    );
    assert.equal(facts.technologyCount, 3);
  });

  it("finds the role without an end date as the current role", () => {
    const current = makeExperience({ company: "Now", start: "2025-08", end: undefined });
    const facts = computeKeyFacts([makeExperience({}), current], [], NOV_2026);
    assert.equal(facts.currentRole, current);
  });

  it("returns zeros and no current role for empty content instead of throwing", () => {
    assert.deepEqual(computeKeyFacts([], [], NOV_2026), {
      yearsInPractice: 0,
      companyCount: 0,
      technologyCount: 0,
      currentRole: undefined,
    });
  });
});
