import { SocialIcon } from "@/components/ui/icons";
import { site } from "@/content";
import { cn } from "@/lib/cn";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      {site.socialLinks.map((link) => (
        <li key={link.platform}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="block rounded-full text-muted transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <SocialIcon platform={link.platform} />
          </a>
        </li>
      ))}
    </ul>
  );
}
