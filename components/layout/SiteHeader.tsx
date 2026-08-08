import { Eyebrow } from "@/components/ui/SectionHeading";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks, site } from "@/content";

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-6 pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <Eyebrow>{site.title}</Eyebrow>
        <p className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">{site.name}</p>
        <p className="text-sm text-muted">{site.location}</p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <nav aria-label="Page sections" className="flex flex-wrap gap-4 text-sm text-muted">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-accent">
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
