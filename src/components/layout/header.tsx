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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-card/60 shadow-lg backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-14 items-center justify-between sm:h-16">
        <a
          href="#top"
          className="bg-gradient-to-r from-primary via-violet-400 to-accent bg-clip-text text-base font-bold tracking-tight text-transparent sm:text-lg"
        >
          {siteConfig.name}
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
