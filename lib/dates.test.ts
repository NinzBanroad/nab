import assert from "node:assert/strict";
import { describe, it } from "node:test";

import {
  compareYearMonths,
  formatPeriod,
  formatTenure,
  formatYearMonth,
  parseYearMonth,
  tenureInMonths,
  toMonthIndex,
} from "@/lib/dates";
import type { YearMonth } from "@/types/portfolio";

const NOV_2026 = new Date(Date.UTC(2026, 10, 17));

describe("parseYearMonth", () => {
  it("splits a valid month into numbers", () => {
    assert.deepEqual(parseYearMonth("2025-08"), { year: 2025, month: 8 });
  });

  it("rejects months outside 01-12 and malformed values", () => {
    for (const invalid of ["2025-13", "2025-00", "2025-8", "25-08", "2025/08"]) {
      assert.throws(() => parseYearMonth(invalid as YearMonth), /YYYY-MM/);
    }
  });
});

describe("tenureInMonths", () => {
  it("counts both the first and last month", () => {
    assert.equal(tenureInMonths("2020-04", "2021-03"), 12);
  });

  it("counts a single-month role as one month", () => {
    assert.equal(tenureInMonths("2024-01", "2024-01"), 1);
  });

  it("runs an open role up to the current month", () => {
    assert.equal(tenureInMonths("2025-08", undefined, NOV_2026), 16);
  });
});

describe("compareYearMonths", () => {
  it("sorts the earliest month first across years", () => {
    const months: YearMonth[] = ["2021-05", "2019-07", "2020-12"];
    assert.deepEqual(months.sort(compareYearMonths), ["2019-07", "2020-12", "2021-05"]);
  });

  it("orders by month index", () => {
    assert.ok(toMonthIndex("2020-12") < toMonthIndex("2021-01"));
  });
});

describe("formatting", () => {
  it("formats a month as short month and year", () => {
    assert.equal(formatYearMonth("2025-08"), "Aug 2025");
  });

  it("shows an open period as Present", () => {
    assert.equal(formatPeriod("2025-08"), "Aug 2025 – Present");
    assert.equal(formatPeriod("2021-05", "2025-06"), "May 2021 – Jun 2025");
  });

  it("writes tenure with singular and plural units, omitting zero parts", () => {
    assert.equal(formatTenure(9), "9 mos");
    assert.equal(formatTenure(12), "1 yr");
    assert.equal(formatTenure(13), "1 yr 1 mo");
    assert.equal(formatTenure(50), "4 yrs 2 mos");
  });
});
