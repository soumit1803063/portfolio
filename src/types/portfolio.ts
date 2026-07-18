export type SocialIcon =
  | "github"
  | "linkedin"
  | "facebook"
  | "instagram"
  | "blog";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface Language {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  brand: string;
  title: string;
  tagline: string;
  email: string;
  phone: string;
  location: string;
  locationUrl: string;
  dateOfBirth: string;
  nationality: string;
  languages: Language[];
  social: SocialLink[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  gpa: string;
  highlight?: boolean;
  period?: string;
  year?: string;
}

export interface Project {
  title: string;
  href?: string;
  liveUrl?: string;
  tools: string[];
  keywords: string[];
}

export interface ProjectCategory {
  category: string;
  projects: Project[];
}

export type FeaturedLinkIcon = "live" | "github" | "api" | "external";

export interface FeaturedLink {
  label: string;
  href: string;
  icon: FeaturedLinkIcon;
}

export interface Metric {
  label: string;
  value: string;
}

export interface FeaturedProject {
  name: string;
  tagline: string;
  context: string;
  status?: string;
  recent?: boolean;
  stack: string[];
  highlights: string[];
  metrics?: Metric[];
  links?: FeaturedLink[];
  note?: string;
}

export interface ResearchItem {
  title: string;
  publication: string;
  description: string;
  duration?: string;
  year?: string;
  publisher?: string;
  doi?: string;
  github?: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface ExperienceProject {
  name: string;
  bullets: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  employmentType?: string;
  current?: boolean;
  summary?: string;
  projects: ExperienceProject[];
  metrics?: Metric[];
  technologies: string[];
}
