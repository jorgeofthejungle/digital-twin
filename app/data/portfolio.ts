import type { Profile, ExperienceItem, EducationItem, ProcessStep, ProjectItem } from "@/app/types";

export const PROFILE: Profile = {
  name: "Joshua Burgos",
  headline: "I fix what's breaking and build systems to keep it that way.",
  location: "Davao, Davao Region, Philippines",
  email: "its.joshburgos@gmail.com",
  linkedin: "https://www.linkedin.com/in/jorgeofthejungle",
  summary:
    "If your business is growing but your team is buried in repetitive work, or your marketplace listings are underperforming, that's exactly where I step in. I've spent 11+ years working directly in operations — across ecommerce, retail, and customer experience — learning how chaos builds up and what it takes to fix it for good. I work closely with business owners to untangle the mess: clearer processes, better systems, and automation that holds up without needing me around to babysit it.",
};

export const TYPING_PHRASES = [
  "Your ops, finally under control.",
  2000,
  "Ecommerce that actually converts.",
  2000,
  "Automation that runs itself.",
  2000,
  "Systems your team can follow.",
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
    description: "Map the real bottleneck — not the symptom. You leave the first call knowing exactly what to fix and what it's worth.",
    icon: "Search",
  },
  {
    step: 2,
    title: "Propose",
    description: "A clear plan with tech stack, timeline, and cost. You approve everything before I touch anything.",
    icon: "FileText",
  },
  {
    step: 3,
    title: "Build",
    description: "Weekly progress, no black boxes. You see it working before it goes live.",
    icon: "Code2",
  },
  {
    step: 4,
    title: "Hand Off",
    description: "Full walkthrough and a runbook your team can actually use. You won't need me to keep the lights on.",
    icon: "Package",
  },
  {
    step: 5,
    title: "Maintain",
    description: "Optional retainer for updates as your needs change. Or take the system and run — the documentation is yours either way.",
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
  { value: "11+", label: "Years solving ops problems" },
  { value: "5", label: "Marketplaces, end to end" },
  { value: "24h", label: "Typical reply time" },
  { value: "5", label: "Step process, no surprises" },
];

export const PROJECTS: ProjectItem[] = [
  {
    title: "Dental Clinic RAG",
    description:
      "A dental clinic needed staff and patients to get answers without tying up the front desk. This AI assistant handles common questions — procedures, pricing, scheduling — through a simple chat interface. Fewer phone calls, faster answers.",
    tags: ["RAG", "Claude AI", "n8n"],
    type: "personal",
    status: "in-progress",
  },
  {
    title: "StockPilot PH",
    description:
      "Manually tracking PSE equities is tedious and error-prone. StockPilot automates the pipeline — scraping, normalizing, and scoring PSE-listed stocks daily — so the signals surface without the legwork.",
    tags: ["Python", "PostgreSQL", "Data Analysis", "PSE"],
    type: "personal",
    status: "in-progress",
  },
];
