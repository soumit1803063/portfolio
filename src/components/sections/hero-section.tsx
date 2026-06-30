import {
  Github,
  Linkedin,
  Facebook,
  Instagram,
  Rss,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/config";
import type { SocialIcon } from "@/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { assetUrl } from "@/lib/utils";

const socialIcons: Record<SocialIcon, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  instagram: Instagram,
  blog: Rss,
};

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-24 sm:pt-28 md:pb-24 md:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]"
      />

      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <div className="mx-auto flex flex-col items-center gap-6 lg:mx-0">
            <Avatar className="size-32 border-4 border-primary/30 shadow-2xl shadow-primary/20 sm:size-40 md:size-44">
              <AvatarImage
                src={assetUrl("soumit.jpeg")}
                alt={siteConfig.name}
                className="object-cover"
              />
              <AvatarFallback className="text-3xl">SD</AvatarFallback>
            </Avatar>

            <div className="flex flex-wrap justify-center gap-2">
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
          </div>

          <div className="space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <Badge variant="accent">Kaz Software · Associate Software Engineer</Badge>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary via-violet-400 to-accent bg-clip-text text-transparent">
                  {siteConfig.name}
                </span>
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base md:text-lg lg:mx-0">
                {siteConfig.tagline}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="size-4" />
                  Contact Me
                </a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <Card className="bg-card/50 sm:col-span-2 lg:col-span-1">
                <CardHeader className="flex-row items-center gap-3 space-y-0 p-4">
                  <Mail className="size-4 shrink-0 text-primary" />
                  <div className="min-w-0 text-left">
                    <CardTitle className="text-sm font-medium">Email</CardTitle>
                    <CardDescription className="truncate">
                      <a
                        href={`mailto:${siteConfig.email}`}
                        className="hover:text-foreground"
                      >
                        {siteConfig.email}
                      </a>
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/50">
                <CardHeader className="flex-row items-center gap-3 space-y-0 p-4">
                  <Phone className="size-4 shrink-0 text-primary" />
                  <div className="text-left">
                    <CardTitle className="text-sm font-medium">Phone</CardTitle>
                    <CardDescription>
                      <a
                        href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                        className="hover:text-foreground"
                      >
                        {siteConfig.phone}
                      </a>
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>

              <Card className="bg-card/50 sm:col-span-2">
                <CardHeader className="flex-row items-center gap-3 space-y-0 p-4">
                  <MapPin className="size-4 shrink-0 text-primary" />
                  <div className="min-w-0 text-left">
                    <CardTitle className="text-sm font-medium">
                      Location
                    </CardTitle>
                    <CardDescription>
                      <a
                        href={siteConfig.locationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-foreground"
                      >
                        <span className="line-clamp-2">
                          {siteConfig.location}
                        </span>
                        <ExternalLink className="size-3 shrink-0 opacity-50" />
                      </a>
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              <Badge variant="outline">{siteConfig.dateOfBirth}</Badge>
              <Badge variant="outline">{siteConfig.nationality}</Badge>
              {siteConfig.languages.map((lang) => (
                <Badge key={lang.name} variant="secondary">
                  {lang.name}: {lang.level}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
