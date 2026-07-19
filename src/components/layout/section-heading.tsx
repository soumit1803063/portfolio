import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

/** Derives the monospace kicker, e.g. "Featured Work" -> "FEATURED_WORK". */
function toKicker(title: string) {
  return title.trim().toUpperCase().replace(/\s+/g, "_");
}

export function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-3 md:mb-12">
      <div className="flex items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-card">
          <Icon className="size-4 text-primary" />
        </div>
        <span className="label-mono">{toKicker(title)}</span>
      </div>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
