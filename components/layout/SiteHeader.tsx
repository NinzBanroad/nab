import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navLinks, site } from "@/content";

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 pt-8 sm:pt-12">
      <a href="#main" className="flex min-h-11 flex-col justify-center">
        <span className="font-semibold">{site.name}</span>
        <span className="text-sm text-ink-soft">{site.title}</span>
      </a>

      <div className="print-hidden flex items-center gap-2 max-sm:w-full max-sm:justify-between">
        <nav aria-label="Sections">
          <ul className="flex gap-x-4 sm:gap-x-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-11 items-center text-sm text-ink-soft transition-colors hover:text-ink sm:text-[0.9375rem]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle className="-mr-3" />
      </div>
    </header>
  );
}
