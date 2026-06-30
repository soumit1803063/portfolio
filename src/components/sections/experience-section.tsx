import { Briefcase } from "lucide-react";
import { experienceContent } from "@/content";
import { PageSection, SectionHeading } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function ExperienceSection() {
  return (
    <PageSection id="experience">
      <SectionHeading
        icon={Briefcase}
        title="Experience"
        subtitle="Production ML, backend systems, and healthcare AI"
      />

      <div className="grid gap-6">
        {experienceContent.map((job) => (
          <Card key={`${job.company}-${job.period}`} className="bg-card/50">
            <CardHeader className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                {job.current && <Badge>Current</Badge>}
                {job.employmentType && (
                  <Badge variant="secondary">{job.employmentType}</Badge>
                )}
                <Badge variant="outline">{job.period}</Badge>
              </div>
              <div>
                <CardTitle className="text-lg sm:text-xl">{job.role}</CardTitle>
                <CardDescription className="mt-1 text-sm sm:text-base">
                  {job.company} · {job.location}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Separator />
              <div className="flex flex-wrap gap-1.5">
                {job.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
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
