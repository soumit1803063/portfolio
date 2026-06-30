import { FolderKanban } from "lucide-react";
import { projectsContent } from "@/content";
import { PageSection, SectionHeading } from "@/components/layout";
import { ProjectCard } from "@/components/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProjectsSection() {
  return (
    <PageSection id="projects">
      <SectionHeading
        icon={FolderKanban}
        title="Projects"
        subtitle="Browse by category — tap a tab on mobile or desktop"
      />

      <Tabs defaultValue={projectsContent[0].category} className="w-full">
        <TabsList className="h-auto w-full justify-start overflow-x-auto">
          {projectsContent.map((group) => (
            <TabsTrigger key={group.category} value={group.category}>
              {group.category}
            </TabsTrigger>
          ))}
        </TabsList>

        {projectsContent.map((group) => (
          <TabsContent key={group.category} value={group.category}>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {group.projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </PageSection>
  );
}
