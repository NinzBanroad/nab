import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl px-6 py-8 lg:px-10">
      <SiteHeader />
      <main className="flex flex-col gap-20 py-10">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
