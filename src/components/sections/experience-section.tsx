import { Briefcase, CheckCircle2 } from "lucide-react";
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

      {/* Timeline rail: vertical spine with a node per role, desktop only. */}
      <div className="relative">
        <span
          aria-hidden
          className="absolute bottom-6 left-[7px] top-6 hidden w-px bg-border sm:block"
        />

        <div className="grid gap-6">
          {experienceContent.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="relative sm:pl-10"
            >
              <span
                aria-hidden
                className="absolute left-0 top-6 hidden size-4 rounded-full border-2 border-card bg-primary sm:block"
              />

              <Card>
                <CardHeader className="space-y-3 p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    {job.current && <Badge>Current</Badge>}
                    {job.employmentType && (
                      <Badge variant="secondary">{job.employmentType}</Badge>
                    )}
                    <Badge variant="outline" className="font-mono">
                      {job.period}
                    </Badge>
                  </div>
                  <div>
                    <CardTitle className="font-display text-lg sm:text-xl">
                      {job.role}
                    </CardTitle>
                    <CardDescription className="mt-1 text-sm font-medium text-primary sm:text-base">
                      {job.company} · {job.location}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 p-5 pt-0">
                  {job.metrics && (
                    <div className="grid grid-cols-3 gap-2 rounded-md border border-border bg-muted p-3 sm:gap-4 sm:p-4">
                      {job.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <p className="font-display text-base font-bold text-primary sm:text-xl">
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
                        <h4 className="label-mono">{project.name}</h4>
                        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                          {project.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-2.5">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
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
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
