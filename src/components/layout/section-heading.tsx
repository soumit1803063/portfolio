import type { LucideIcon } from "lucide-react";

interface SectionHeadingProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
}

export function SectionHeading({
  icon: Icon,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-3 text-center md:mb-12">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 md:size-14">
        <Icon className="size-5 text-primary md:size-6" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
