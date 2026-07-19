import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Newspaper,
  BookOpen,
  CalendarDays,
  Flag,
  Languages,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/config";
import type { SocialIcon } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { assetUrl } from "@/lib/utils";

const socialIcons: Record<SocialIcon, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  blog: Newspaper,
};

const contactRows = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    external: false,
  },
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    external: false,
  },
  {
    icon: MapPin,
    label: "Location",
    value: siteConfig.location,
    href: siteConfig.locationUrl,
    external: true,
  },
];

export function HeroSection() {
  const blogUrl = siteConfig.social.find((link) => link.icon === "blog")?.href;

  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-24 sm:pt-28 md:pb-24 md:pt-32"
    >
      {/* Faint blueprint grid, the calm backdrop of the command-center look. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:40px_40px] opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_10%,transparent_70%)]"
      />

      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                {siteConfig.title}
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I&apos;m <span className="text-primary">{siteConfig.name}</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#featured">
                  View Projects
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              {blogUrl && (
                <Button asChild size="lg" variant="outline">
                  <a href={blogUrl} target="_blank" rel="noopener noreferrer">
                    <BookOpen className="size-4" />
                    Read My Blog
                  </a>
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 border-t border-border pt-6">
              {siteConfig.social.map((link) => {
                const Icon = socialIcons[link.icon];
                return (
                  <Button key={link.href} variant="outline" size="icon" asChild>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <Icon className="size-4" />
                    </a>
                  </Button>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="gap-1.5 px-3 py-1">
                <CalendarDays className="size-3.5 text-primary" />
                Born {siteConfig.dateOfBirth}
              </Badge>
              <Badge variant="secondary" className="gap-1.5 px-3 py-1">
                <Flag className="size-3.5 text-primary" />
                {siteConfig.nationality}
              </Badge>
              {siteConfig.languages.map((lang) => (
                <Badge
                  key={lang.name}
                  variant="secondary"
                  className="gap-1.5 px-3 py-1"
                >
                  <Languages className="size-3.5 text-primary" />
                  {lang.name} · {lang.level}
                </Badge>
              ))}
            </div>
          </div>

          {/* Profile panel: avatar, contact channels, and a terminal readout. */}
          <Card className="overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-auto font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                SD_PROFILE
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 p-5 text-center sm:flex-row sm:text-left">
              <Avatar className="size-24 shrink-0 rounded-full border border-border sm:size-28">
                <AvatarImage
                  src={assetUrl("soumit.jpeg")}
                  alt={siteConfig.name}
                  className="object-cover"
                />
                <AvatarFallback className="font-display text-2xl">
                  SD
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold">
                  {siteConfig.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {siteConfig.title}
                </p>
              </div>
            </div>

            <div className="divide-y divide-border border-t border-border">
              {contactRows.map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.external ? "_blank" : undefined}
                  rel={row.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 px-5 py-3 transition-colors hover:bg-muted"
                >
                  <row.icon className="size-4 shrink-0 text-primary" />
                  <span className="w-20 shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {row.label}
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm text-foreground group-hover:text-primary">
                    {row.value}
                  </span>
                  {row.external && (
                    <ExternalLink className="size-3.5 shrink-0 text-muted-foreground" />
                  )}
                </a>
              ))}
            </div>

            <div className="border-t border-border bg-terminal p-4">
              <div className="overflow-x-auto">
                <pre className="font-mono text-[11px] leading-relaxed text-terminal-foreground sm:text-xs">
                  <code>
                    <span className="text-muted-foreground">$</span> whoami
                    {"\n"}
                    <span className="text-[#7dd3fc]">soumit_das</span>
                    {"\n"}
                    <span className="text-muted-foreground">$</span> cat
                    role.txt{"\n"}
                    <span className="text-[#7dd3fc]">{siteConfig.title}</span>
                    {"\n"}
                    <span className="text-muted-foreground">$</span> location
                    {"\n"}
                    <span className="text-[#7dd3fc]">{siteConfig.location}</span>
                    {"\n"}
                    <span className="text-muted-foreground">$</span>{" "}
                    <span className="inline-block h-3 w-2 translate-y-0.5 animate-pulse bg-[#7dd3fc]" />
                  </code>
                </pre>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
