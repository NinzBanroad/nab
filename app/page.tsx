import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ContactSection } from "@/components/sections/ContactSection";
import { CurrentRoleSection } from "@/components/sections/CurrentRoleSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";

export default function Home() {
  return (
    <div className="mx-auto max-w-[54rem] px-6 sm:px-8">
      <PersonJsonLd />
      <SiteHeader />
      <main id="main" className="scroll-mt-6">
        <HeroSection />
        <CurrentRoleSection />
        <ServicesSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
