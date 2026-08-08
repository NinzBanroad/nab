import { SocialLinks } from "@/components/layout/SocialLinks";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/ui/icons";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Section } from "@/components/ui/Section";
import { site } from "@/content";

export function HeroSection() {
  const { eyebrow, headline, cta } = site.hero;

  return (
    <Section className="space-y-8">
      <div className="space-y-5">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          {headline}
        </h1>
        <p className="max-w-2xl text-base leading-8 text-muted">{site.summary}</p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <SocialLinks />
        <div aria-hidden="true" className="h-4 w-px bg-border" />
        <Button href={cta.href} size="sm">
          {cta.label}
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Button>
      </div>
    </Section>
  );
}
