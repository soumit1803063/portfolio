import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  FeaturedSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  ResearchSection,
  SkillsSection,
} from "@/components/sections";

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ResearchSection />
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
