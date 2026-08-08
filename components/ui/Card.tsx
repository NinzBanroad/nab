import type { HTMLAttributes } from "react";

import { cn } from "@/lib/cn";

type CardProps = HTMLAttributes<HTMLElement>;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-card border border-border bg-surface p-8 shadow-card-soft",
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
