import type { FeaturedProject, FeaturedLinkIcon } from "@/types";
import {
  ArrowUpRight,
  Github,
  Radio,
  TerminalSquare,
  Info,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const linkIcons: Record<FeaturedLinkIcon, LucideIcon> = {
  live: Radio,
  github: Github,
  api: TerminalSquare,
  external: ArrowUpRight,
};

interface FeaturedCardProps {
  project: FeaturedProject;
}

export function FeaturedCard({ project }: FeaturedCardProps) {
  return (
    <Card className="flex h-full flex-col transition-all hover:border-primary/40 hover:shadow-hover">
      <CardHeader className="space-y-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          {project.recent && (
            <Badge className="gap-1.5">
              <span className="size-1.5 rounded-full bg-primary-foreground" />
              Recent
            </Badge>
          )}
          {project.status && <Badge variant="accent">{project.status}</Badge>}
        </div>

        <div className="space-y-2">
          <p className="label-mono">{project.context}</p>
          <CardTitle className="font-display text-xl sm:text-2xl">
            {project.name}
          </CardTitle>
          <CardDescription className="text-sm leading-relaxed">
            {project.tagline}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-5 p-5 pt-0">
        {project.metrics && (
          <div className="grid grid-cols-3 gap-2 rounded-md border border-border bg-muted p-3">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="font-display text-base font-bold text-primary sm:text-lg">
                  {metric.value}
                </p>
                <p className="mt-0.5 text-[10px] leading-tight text-muted-foreground sm:text-xs">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        <ul className="space-y-2.5 text-sm leading-relaxed text-muted-foreground">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto space-y-4">
          <Separator />
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {project.links && (
            <div className="flex flex-wrap gap-2">
              {project.links.map((link) => {
                const Icon = linkIcons[link.icon];
                return (
                  <Button
                    key={link.href}
                    variant={link.icon === "live" ? "default" : "outline"}
                    size="sm"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <Icon className="size-3.5" />
                      {link.label}
                    </a>
                  </Button>
                );
              })}
            </div>
          )}

          {project.note && (
            <p className="flex items-start gap-1.5 text-xs text-muted-foreground">
              <Info className="mt-0.5 size-3 shrink-0" />
              <span>{project.note}</span>
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
