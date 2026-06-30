import type { Project } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col bg-card/50 transition-colors hover:border-primary/40">
      <CardHeader className="space-y-3">
        <CardTitle className="text-base leading-snug">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2">
          {project.href && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-3.5" />
                Code
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button variant="secondary" size="sm" asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="size-3.5" />
                Live demo
              </a>
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="mt-auto space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <Badge key={tool} variant="secondary">
              {tool}
            </Badge>
          ))}
        </div>
        <Separator />
        <div className="flex flex-wrap gap-1.5">
          {project.keywords.map((keyword) => (
            <Badge key={keyword} variant="outline" className="text-xs font-normal">
              {keyword}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
