import { GraduationCap } from "lucide-react";
import { educationContent } from "@/content";
import { PageSection, SectionHeading } from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function EducationSection() {
  return (
    <PageSection id="education">
      <SectionHeading
        icon={GraduationCap}
        title="Education"
        subtitle="Academic background and achievements"
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {educationContent.map((item) => (
          <Card
            key={item.degree}
            className="bg-card/50 transition-colors hover:border-primary/40"
          >
            <CardHeader>
              {item.highlight && <Badge className="w-fit">RUET</Badge>}
              <CardTitle className="text-base leading-snug sm:text-lg">
                {item.degree}
              </CardTitle>
              <CardDescription>{item.institution}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-1 text-sm">
              <p>
                <span className="text-muted-foreground">CGPA: </span>
                <span className="font-semibold text-primary">{item.gpa}</span>
              </p>
              {item.period && (
                <p className="text-muted-foreground">{item.period}</p>
              )}
              {item.year && (
                <p className="text-muted-foreground">
                  Passing Year: {item.year}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </PageSection>
  );
}
