import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { navigationItems, siteConfig } from "@/config";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-card/90 shadow-hover backdrop-blur-xl"
          : "border-transparent bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container flex h-14 items-center justify-between gap-4 sm:h-16">
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-7 shrink-0 items-center justify-center rounded bg-primary font-display text-xs font-bold text-primary-foreground">
            SD
          </span>
          <span className="truncate font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
            {siteConfig.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <Button key={item.href} variant="ghost" size="sm" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[min(100vw-2rem,320px)]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  className="h-11 w-full justify-start text-base"
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
