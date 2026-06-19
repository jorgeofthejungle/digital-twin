"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Settings2, Zap, Target } from "lucide-react";
import type { ElementType } from "react";
import GlassCard from "@/app/components/ui/GlassCard";
import SectionLabel from "@/app/components/ui/SectionLabel";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { staggerContainer, fadeUp } from "@/app/lib/variants";

interface ServiceCard {
  icon: ElementType;
  area: string;
  headline: string;
  outcome: string;
  tags: string[];
}

const SERVICES: ServiceCard[] = [
  {
    icon: ShoppingBag,
    area: "Ecommerce & Marketplace",
    headline: "Listings that sell. Accounts that stay healthy.",
    outcome:
      "I manage the full picture: listing optimization, search visibility, platform compliance, and the customer message-to-resolution cycle. You stop firefighting the platform and start seeing the numbers move.",
    tags: ["Amazon", "eBay", "Etsy", "Walmart", "Shopify"],
  },
  {
    icon: Settings2,
    area: "Operations & Systems",
    headline: "A business that runs when you step away.",
    outcome:
      "I map your workflows, document the processes, and build systems your team can actually follow — so the business doesn't stall every time you're unavailable.",
    tags: ["Process Design", "SOPs", "Workflow Mapping", "Team Ops"],
  },
  {
    icon: Zap,
    area: "Workflow Automation",
    headline: "Cut the repetitive work. Keep the results.",
    outcome:
      "I build automations that connect your tools and handle the manual work end to end. Your team gets hours back every week with fewer errors and no more copy-paste.",
    tags: ["n8n", "GoHighLevel", "Claude AI", "API Integrations"],
  },
  {
    icon: Target,
    area: "Paid Media & Advertising",
    headline: "Ad spend that earns its keep.",
    outcome:
      "I plan and manage paid campaigns end to end — account structure, copy that converts, and the discipline to cut what's not working. You stop guessing at ROI and start seeing it.",
    tags: ["Media Buying", "Ad Copywriting", "Campaign Structure"],
  },
];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-pad relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionLabel text="What I Do" />
        <motion.h2
          className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Ecommerce. Operations.<br />
          <span className="gradient-text">Automation.</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.area} variants={fadeUp}>
                <GlassCard className="p-8 h-full flex flex-col gap-5" glow="cyan">
                  <div className="p-3 rounded-xl bg-brand-cyan/10 w-fit">
                    <Icon size={22} className="text-brand-cyan" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-brand-cyan/60 tracking-wider uppercase mb-2">
                      {service.area}
                    </p>
                    <h3 className="font-display font-bold text-lg text-slate-100 leading-snug">
                      {service.headline}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">
                    {service.outcome}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-brand-mid border border-brand-border text-slate-500 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
