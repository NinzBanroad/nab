import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { LOCAL_SITE_URL, resolveSiteUrl } from "@/lib/siteUrl";
import { isProfileUrl } from "@/lib/urls";

describe("resolveSiteUrl", () => {
  it("falls back to localhost in development when unset", () => {
    assert.equal(resolveSiteUrl(undefined, "development"), LOCAL_SITE_URL);
  });

  it("keeps only the origin, dropping paths and trailing slashes", () => {
    assert.equal(resolveSiteUrl("https://nino.dev/", "production"), "https://nino.dev");
    assert.equal(resolveSiteUrl("https://nino.dev/about", "production"), "https://nino.dev");
  });

  it("rejects non-http protocols and malformed values", () => {
    assert.throws(() => resolveSiteUrl("javascript:alert(1)", "production"), /http\(s\)/);
    assert.throws(() => resolveSiteUrl("not a url", "production"));
  });
});

describe("isProfileUrl", () => {
  it("accepts a specific profile", () => {
    assert.equal(isProfileUrl("https://github.com/someone"), true);
  });

  it("rejects bare platform home pages and garbage", () => {
    assert.equal(isProfileUrl("https://github.com"), false);
    assert.equal(isProfileUrl("https://github.com/"), false);
    assert.equal(isProfileUrl("nonsense"), false);
  });
});
