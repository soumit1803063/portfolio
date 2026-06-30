import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  muted?: boolean;
}

export function PageSection({
  id,
  children,
  className,
  muted = false,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24", muted && "bg-muted/30", className)}
    >
      <div className="container">{children}</div>
    </section>
  );
}
