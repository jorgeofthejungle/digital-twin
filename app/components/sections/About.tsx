"use client";

import { motion } from "framer-motion";
import GlassCard from "@/app/components/ui/GlassCard";
import GlowBadge from "@/app/components/ui/GlowBadge";
import SectionLabel from "@/app/components/ui/SectionLabel";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { PROFILE, STACK, STATS } from "@/app/data/portfolio";
import { staggerContainer, fadeUp } from "@/app/lib/variants";

export default function About() {
  return (
    <AnimatedSection id="about" className="section-pad px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="About Me" />
        <motion.h2
          className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Operations-trained.<br />
          <span className="gradient-text">AI-native.</span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Quote card */}
          <GlassCard className="p-8 relative overflow-hidden" glow="cyan">
            <span
              className="absolute top-2 left-4 font-display font-bold text-[120px] leading-none text-brand-cyan/10 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <div className="relative z-10">
              <p className="text-xl text-slate-200 font-medium leading-relaxed italic mb-6">
                {PROFILE.summary}
              </p>
              <div className="flex flex-col gap-3">
                <div>
                  <span className="text-xs font-mono text-brand-cyan/60 tracking-wider uppercase">Specialties</span>
                  <p className="text-sm text-slate-400 mt-1">Ecommerce ops · Marketplace management · Workflow automation · Customer experience</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-brand-cyan/60 tracking-wider uppercase">Platforms</span>
                  <p className="text-sm text-slate-400 mt-1">Amazon · eBay · Etsy · Walmart · Shopify</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <GlassCard className="p-6 text-center h-full flex flex-col items-center justify-center" glow="blue">
                  <span className="font-display font-bold text-4xl text-brand-cyan mb-2">
                    {stat.value}
                  </span>
                  <span className="text-sm text-slate-500 text-center leading-snug">{stat.label}</span>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech stack */}
        <div>
          <span className="text-xs font-mono text-slate-600 tracking-wider uppercase mb-4 block">
            Core Stack
          </span>
          <div className="flex flex-wrap gap-3">
            {STACK.map((tech) => (
              <GlowBadge key={tech} label={tech} variant="cyan" />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
