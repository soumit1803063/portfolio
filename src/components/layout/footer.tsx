import { siteConfig } from "@/config";

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-10">
      <div className="container text-center text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
