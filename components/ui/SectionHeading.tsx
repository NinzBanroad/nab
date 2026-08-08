import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeading({ label, title, description, className }: SectionHeadingProps) {
  return (
    <div className={cn("space-y-3", className)}>
      <Eyebrow>{label}</Eyebrow>
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <p className={cn("text-xs font-bold uppercase tracking-[0.28em] text-accent", className)}>
      {children}
    </p>
  );
}
