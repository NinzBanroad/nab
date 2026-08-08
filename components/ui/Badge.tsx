import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

const badgeVariants = {
  subtle: "border-border bg-surface text-muted",
  outline: "border-border text-text",
  accent: "border-transparent bg-accent text-on-accent",
} as const;

export type BadgeVariant = keyof typeof badgeVariants;

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "subtle", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        badgeVariants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
