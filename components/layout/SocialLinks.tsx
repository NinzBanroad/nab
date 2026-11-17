import { site } from "@/content";
import { cn } from "@/lib/cn";

export function SocialLinks({
  className,
  linkClassName,
}: {
  className?: string;
  linkClassName?: string;
}) {
  return (
    <ul className={cn("flex flex-wrap gap-x-5", className)}>
      {site.socialLinks.map((link) => (
        <li key={link.platform}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex min-h-11 items-center gap-1 text-sm transition-colors",
              linkClassName,
            )}
          >
            {link.label}
            <span aria-hidden="true">↗</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
