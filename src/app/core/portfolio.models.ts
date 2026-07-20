export interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  available: boolean;
  socials: SocialLink[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export interface Project {
  name: string;
  summary: string;
  year: string;
  tech: string[];
  demoUrl?: string;
  sourceUrl?: string;
}

export interface TimelineItem {
  title: string;
  organisation: string;
  period: string;
  description: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface Stat {
  value: string;
  label: string;
}
