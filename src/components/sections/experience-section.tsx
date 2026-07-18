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
    <PageSection id="experience" muted>
      <SectionHeading icon={Briefcase} title="Experience" />

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

            <CardContent className="space-y-6">
              {job.metrics && (
                <div className="grid grid-cols-3 gap-2 rounded-lg border bg-background/40 p-3 sm:gap-4 sm:p-4">
                  {job.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="text-base font-bold text-primary sm:text-xl">
                        {metric.value}
                      </p>
                      <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground sm:text-xs">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="space-y-5">
                {job.projects.map((project) => (
                  <div key={project.name} className="space-y-2.5">
                    <h4 className="flex items-center gap-2 text-sm font-semibold sm:text-base">
                      <span className="h-4 w-1 rounded-full bg-primary" />
                      {project.name}
                    </h4>
                    <ul className="space-y-2 pl-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

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
