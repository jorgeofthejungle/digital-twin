import type { Profile, ExperienceItem, EducationItem, ProcessStep, ProjectItem } from "@/app/types";

export const PROFILE: Profile = {
  name: "Joshua Burgos",
  headline: "Operations & Customer Experience Specialist",
  location: "Davao, Davao Region, Philippines",
  email: "its.joshburgos@gmail.com",
  linkedin: "https://www.linkedin.com/in/jorgeofthejungle",
  summary:
    "Operations and customer experience professional with 11+ years spanning technical support, ecommerce, marketplace management, and retail operations. I've managed online stores across Amazon, eBay, Etsy, Walmart, and Shopify — handling listing optimization, platform compliance, search visibility, and the full customer message-to-resolution cycle. Lately I've been adding workflow automation to the mix, building with n8n, GoHighLevel, and Claude to streamline repetitive operations and customer-facing processes.",
};

export const TYPING_PHRASES = [
  "Operations & CX Specialist",
  2000,
  "Ecommerce Marketplace Manager",
  2000,
  "Workflow Automation Builder",
  2000,
  "n8n + Claude Builder",
  2000,
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Mount Pleasant Bottle Depot",
    role: "Manager",
    period: "Jan 2022 – May 2026",
    current: false,
    description:
      "Managed day-to-day operations at a busy bottle depot, keeping things running smoothly while leading a hands-on team. Focused on solving problems as they came up, improving workflows, and making sure customers had a positive experience. Built strong relationships through clear communication and quick issue resolution, while training and supporting staff to perform at their best. Also handled hiring, onboarding, and safety.",
  },
  {
    company: "Mount Pleasant Bottle Depot",
    role: "Customer Service Representative",
    period: "Jun 2021 – Dec 2021",
    current: false,
    description:
      "Sorted and counted refundable containers and handled cash transactions with accuracy. Acted as the first point of contact for customers, providing friendly and efficient service. Maintained the cleanliness and organization of the depot, helping ensure a safe and well-run environment.",
  },
  {
    company: "Freelance",
    role: "Ecommerce Specialist",
    period: "Apr 2015 – Jan 2021",
    current: false,
    description:
      "Drove online sales by building and optimizing digital storefronts across Amazon, eBay, Etsy, Walmart, and Shopify. Developed strategies to improve product visibility, increase traffic, and boost conversions. Applied SEO, A/B testing, and data analysis to maximize ROI. Managed listings, promotional campaigns, and third-party integrations. Handled customer inquiries across email, chat, and phone.",
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
  "GoHighLevel",
  "Amazon",
  "eBay",
  "Etsy",
  "Walmart",
  "Shopify",
];

export const SKILLS = [
  "Ecommerce Operations",
  "Marketplace Management",
  "Customer Experience",
  "Workflow Automation",
  "n8n",
  "GoHighLevel",
  "Claude AI",
  "Listing Optimization",
  "Platform Compliance",
  "SEO & A/B Testing",
  "Team Leadership",
  "Operations Management",
  "Technical Support",
  "Process Improvement",
];

export const STATS = [
  { value: "11+", label: "Years of Experience" },
  { value: "5", label: "Marketplaces Managed" },
  { value: "2", label: "Degrees Earned" },
  { value: "5", label: "Step Proven Process" },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Dental Clinic RAG",
    description:
      "RAG-powered AI assistant built for a dental clinic. Lets staff and patients query clinic knowledge — procedures, pricing, scheduling policies — through a conversational interface backed by Claude.",
    tags: ["RAG", "Claude AI", "n8n"],
    type: "personal",
    status: "in-progress",
  },
  {
    title: "StockPilot PH",
    description:
      "Philippine Stock Exchange data pipeline and analysis tool. Scrapes, normalizes, and scores PSE-listed equities — surfacing fundamentals, momentum signals, and daily rankings in a self-hosted dashboard.",
    tags: ["Python", "PostgreSQL", "Data Analysis", "PSE"],
    type: "personal",
    status: "in-progress",
  },
];
