import { siteConfig } from "@/config";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8 md:py-10">
      <div className="container flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex items-center gap-2.5">
          <span className="flex size-6 shrink-0 items-center justify-center rounded bg-primary font-display text-[10px] font-bold text-primary-foreground">
            SD
          </span>
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {siteConfig.brand}
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {siteConfig.social.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
