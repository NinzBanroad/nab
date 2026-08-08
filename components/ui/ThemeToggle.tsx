"use client";

import { useLayoutEffect } from "react";

import { activeTheme, applyTheme, resolvePreferredTheme } from "@/lib/theme";

export function ThemeToggle() {
  useLayoutEffect(() => {
    applyTheme(resolvePreferredTheme());
  }, []);

  const handleToggle = () => {
    applyTheme(activeTheme() === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      onClick={handleToggle}
      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-text transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      <span aria-hidden="true" className="theme-icon-dark">
        ☀️
      </span>
      <span aria-hidden="true" className="theme-icon-light">
        🌙
      </span>
    </button>
  );
}
