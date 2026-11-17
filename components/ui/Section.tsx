import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionProps = {
  /** Anchor id for in-page navigation. */
  id?: string;
  /** Id of the section's heading, for aria-labelledby. */
  labelledBy: string;
  className?: string;
  children: ReactNode;
};

/** A page section separated from the previous one by a hairline rule. */
export function Section({ id, labelledBy, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("scroll-mt-6 border-t border-rule py-16 sm:py-20", className)}
    >
      {children}
    </section>
  );
}
