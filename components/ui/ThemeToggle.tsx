"use client";

import { useLayoutEffect } from "react";

import { cn } from "@/lib/cn";
import { activeTheme, applyTheme, resolvePreferredTheme } from "@/lib/theme";

export function ThemeToggle({ className }: { className?: string }) {
  useLayoutEffect(() => {
    applyTheme(resolvePreferredTheme());
  }, []);

  const handleToggle = () => {
    applyTheme(activeTheme() === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="Toggle light and dark mode"
      onClick={handleToggle}
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center text-muted transition-colors hover:text-ink",
        className,
      )}
    >
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="theme-icon-dark size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="theme-icon-light size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
    </button>
  );
}
