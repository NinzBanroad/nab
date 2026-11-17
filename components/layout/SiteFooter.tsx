import { SocialLinks } from "@/components/layout/SocialLinks";
import { site } from "@/content";

export function SiteFooter() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-rule py-6 text-sm text-ink-soft">
      <p>
        © {new Date().getFullYear()} {site.name}
      </p>
      <SocialLinks className="print-hidden" linkClassName="text-ink-soft hover:text-ink" />
      <a href={`mailto:${site.email}`} className="flex min-h-11 items-center hover:text-ink">
        {site.email}
      </a>
    </footer>
  );
}
