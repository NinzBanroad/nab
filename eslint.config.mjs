import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** Readability rules from docs/standards.md. */
const readabilityRules = {
  "no-var": "error",
  "prefer-const": "error",
  "one-var": ["error", "never"],
  "no-nested-ternary": "error",
  "no-console": ["error", { allow: ["warn", "error"] }],
  "id-length": ["error", { min: 2, exceptions: ["i", "j", "x", "y", "_"], properties: "never" }],
  complexity: ["error", 10],
  "max-lines": ["error", { max: 250, skipBlankLines: true, skipComments: true }],
  "max-lines-per-function": ["error", { max: 90, skipBlankLines: true, skipComments: true }],
  "no-shadow": "off",
  "@typescript-eslint/no-shadow": "error",
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-non-null-assertion": "error",
  "@typescript-eslint/consistent-type-definitions": ["error", "type"],
  "@typescript-eslint/consistent-type-imports": ["error", { fixStyle: "separate-type-imports" }],
};

/** Module boundaries: named exports, no cycles, a predictable import order. */
const moduleRules = {
  "import/no-default-export": "error",
  "import/no-cycle": "error",
  "import/order": [
    "error",
    {
      groups: [["builtin", "external"], "internal", ["parent", "sibling", "index"]],
      pathGroups: [{ pattern: "@/**", group: "internal" }],
      pathGroupsExcludedImportTypes: ["builtin"],
      "newlines-between": "always",
      alphabetize: { order: "asc", caseInsensitive: true },
    },
  ],
};

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  { rules: { ...readabilityRules, ...moduleRules } },
  {
    // Next.js special files and tool configs must default-export.
    files: [
      "app/**/{page,layout,not-found,error,loading,opengraph-image,twitter-image,icon}.tsx",
      "app/**/{sitemap,robots,manifest}.ts",
      "*.config.{ts,mjs,js}",
    ],
    rules: { "import/no-default-export": "off" },
  },
  {
    files: ["**/*.test.ts"],
    rules: { "max-lines-per-function": "off" },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
