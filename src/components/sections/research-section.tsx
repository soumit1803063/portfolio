import { FlaskConical, ExternalLink, Github } from "lucide-react";
import { researchContent } from "@/content";
import { PageSection, SectionHeading } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function ResearchSection() {
  return (
    <PageSection id="research" muted>
      <SectionHeading
        icon={FlaskConical}
        title="Research Work"
        subtitle="Published and accepted conference papers"
      />

      <div className="grid gap-4 md:gap-6">
        {researchContent.map((paper) => (
          <Card key={paper.title} className="bg-card/50">
            <CardHeader className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {paper.year && <Badge variant="accent">{paper.year}</Badge>}
                {paper.publisher && (
                  <Badge variant="default">{paper.publisher}</Badge>
                )}
              </div>
              <CardTitle className="text-base leading-snug sm:text-lg">
                {paper.title}
              </CardTitle>
              <CardDescription className="text-sm leading-relaxed">
                {paper.publication}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {paper.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {paper.duration && (
                  <Badge variant="outline">Duration: {paper.duration}</Badge>
                )}
                {paper.doi && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      DOI
                      <ExternalLink className="size-3" />
                    </a>
                  </Button>
                )}
                {paper.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={paper.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="size-3.5" />
                      GitHub
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}
