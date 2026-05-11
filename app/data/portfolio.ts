import type { Profile, ExperienceItem, EducationItem, ProcessStep } from "@/app/types";

export const PROFILE: Profile = {
  name: "Joshua Burgos",
  headline: "AI Automation Specialist",
  location: "Davao, Philippines",
  email: "its.joshburgos@gmail.com",
  linkedin: "https://www.linkedin.com/in/jorgeofthejungle",
  summary:
    "I build AI automation systems that cut manual work and sharpen decision-making. Built for production, not demos.",
};

export const TYPING_PHRASES = [
  "AI Automation Specialist",
  2000,
  "n8n Workflow Architect",
  2000,
  "Voice Agent Builder",
  2000,
  "RAG Systems Engineer",
  2000,
  "MCP Integration Expert",
  2000,
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "jorgeofthejungle",
    role: "AI Automation Specialist",
    period: "Jan 2026 – Present",
    current: true,
    description:
      "Building production-grade AI automation systems — agentic workflows, voice agents, RAG pipelines, and MCP integrations for SMBs and agencies. n8n + Claude ecosystem as the core stack.",
  },
  {
    company: "Mount Pleasant Bottle Depot",
    role: "Manager",
    period: "Jan 2022 – Present",
    current: true,
    description:
      "Led day-to-day operations and a hands-on team. Focused on improving workflows, resolving issues fast, and maintaining a reliable, well-run environment. Handled hiring, onboarding, and safety.",
  },
  {
    company: "Mount Pleasant Bottle Depot",
    role: "Customer Service Representative",
    period: "Jun 2021 – Dec 2021",
    current: false,
    description:
      "First point of contact for customers. Handled cash transactions with accuracy, maintained depot cleanliness and organization, and delivered consistent, friendly service.",
  },
  {
    company: "Freelance",
    role: "Ecommerce Specialist",
    period: "Apr 2015 – Jan 2021",
    current: false,
    description:
      "Drove online sales by building and optimizing digital storefronts across multiple platforms. Applied SEO, A/B testing, and data analysis to maximize ROI. Managed listings, campaigns, and third-party integrations.",
  },
];

export const EDUCATION: EducationItem[] = [
  {
    school: "Acsenda School of Management",
    degree: "Bachelor of Business Administration",
    field: "Management Information Systems",
    period: "Sep 2020 – Oct 2023",
  },
  {
    school: "Davao Doctors' College",
    degree: "Bachelor of Science",
    field: "Psychology",
    period: "Apr 2011 – Apr 2014",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "Diagnose",
    description: "Map the real bottleneck — not the symptom. Define the ROI target before touching a single tool.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Propose",
    description: "A structured automation plan with clear tech stack, timeline, and cost. No surprises.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Build",
    description: "Build, test, and document in small verifiable steps. Production-grade from day one.",
    icon: "Code2",
  },
  {
    step: 4,
    title: "Hand Off",
    description: "Full handoff with walkthrough and runbook. Your team can operate it without me.",
    icon: "Package",
  },
  {
    step: 5,
    title: "Maintain",
    description: "Monthly retainer to evolve the system as your needs change. Always improving.",
    icon: "RefreshCw",
  },
];

export const STACK = [
  "n8n",
  "Claude AI",
  "Supabase",
  "GoHighLevel",
  "RAG",
  "Voice Agents",
  "MCP",
  "Agentic Workflows",
];

export const SKILLS = [
  "API Integration",
  "n8n",
  "Agentic Workflows",
  "Voice Agents",
  "RAG Systems",
  "MCP",
  "Claude AI",
  "Supabase",
  "GoHighLevel",
  "Team Leadership",
  "Operations Management",
  "Ecommerce",
  "Prompt Engineering",
  "Process Automation",
  "System Design",
];

export const STATS = [
  { value: "3+", label: "Years in AI Systems" },
  { value: "5", label: "Step Proven Process" },
  { value: "2", label: "Degrees Earned" },
  { value: "∞", label: "Production-first Philosophy" },
];
