import { LocalTime } from "@/components/ui/LocalTime";
import { experiences, sectionIds, site, skillCategories } from "@/content";
import { formatRegionAddress } from "@/lib/address";
import { computeKeyFacts } from "@/lib/facts";

export function HeroSection() {
  const { headline, lede, cta } = site.hero;
  const { yearsInPractice, companyCount, technologyCount } = computeKeyFacts(
    experiences,
    skillCategories,
  );

  return (
    <section aria-labelledby="hero-title" className="pt-20 pb-20 sm:pt-28 sm:pb-24">
      <p className="eyebrow">
        {site.title} · {formatRegionAddress(site.address)}
      </p>
      <h1
        id="hero-title"
        className="mt-5 max-w-[20ch] text-[clamp(2.1rem,5.4vw,3.4rem)] leading-[1.12] font-semibold tracking-tight"
      >
        {headline}
      </h1>
      <p className="mt-7 max-w-[60ch] text-lg leading-8 text-ink-soft">{lede}</p>

      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
        <li>{yearsInPractice}+ years building for the web</li>
        <li>{companyCount} companies</li>
        <li>{technologyCount} technologies</li>
      </ul>

      <div className="print-hidden mt-9 flex flex-wrap gap-3">
        <a href={cta.href} className="button button-primary">
          {cta.label}
        </a>
        <a href={`#${sectionIds.experience}`} className="button">
          See my experience
        </a>
      </div>

      <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink-soft">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
          {site.availability}
        </span>
        <span aria-hidden="true" className="text-rule">
          |
        </span>
        <span className="text-muted">
          <LocalTime timeZone={site.timeZone} /> in {site.address.region}
        </span>
      </p>
    </section>
  );
}
