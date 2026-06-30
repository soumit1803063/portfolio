import { Cpu } from "lucide-react";
import { skillsContent } from "@/content";
import { PageSection, SectionHeading } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <PageSection id="skills">
      <SectionHeading
        icon={Cpu}
        title="Skills & Technologies"
        subtitle="Tools and domains I work with"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {skillsContent.map((group) => (
          <Card key={group.title} className="bg-card/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-primary sm:text-base">
                {group.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}
