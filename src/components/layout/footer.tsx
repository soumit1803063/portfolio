import { siteConfig } from "@/config";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. Built with React &
          shadcn/ui.
        </p>
        <Button
          variant="link"
          className="h-auto p-0 text-muted-foreground"
          asChild
        >
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </Button>
      </div>
    </footer>
  );
}
