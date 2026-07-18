import { Sparkles } from "lucide-react";
import { featuredContent } from "@/content";
import { PageSection, SectionHeading } from "@/components/layout";
import { FeaturedCard } from "@/components/featured";

export function FeaturedSection() {
  return (
    <PageSection id="featured">
      <SectionHeading icon={Sparkles} title="Featured Work" />

      <div className="grid gap-6 lg:grid-cols-3">
        {featuredContent.map((project) => (
          <FeaturedCard key={project.name} project={project} />
        ))}
      </div>
    </PageSection>
  );
}
