export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current: boolean;
  description: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  period: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
  linkedin: string;
  summary: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  type: "personal" | "client";
  status: "live" | "in-progress" | "archived";
  link?: string;
}

export type GlowVariant = "cyan" | "blue" | "violet" | "green";
