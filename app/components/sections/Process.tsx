"use client";

import type { ElementType } from "react";
import { motion } from "framer-motion";
import { Search, FileText, Code2, Package, RefreshCw } from "lucide-react";
import GlassCard from "@/app/components/ui/GlassCard";
import SectionLabel from "@/app/components/ui/SectionLabel";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { PROCESS_STEPS } from "@/app/data/portfolio";
import { staggerContainer, fadeUp } from "@/app/lib/variants";

const ICONS: Record<string, ElementType> = {
  Search,
  FileText,
  Code2,
  Package,
  RefreshCw,
};

export default function Process() {
  return (
    <AnimatedSection id="process" className="section-pad px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="How I Work" />
        <motion.h2
          className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-4 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          How every<br />
          <span className="gradient-text">engagement works</span>
        </motion.h2>
        <motion.p
          className="text-slate-500 text-base mb-16 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Every engagement follows the same structure. No surprises. Clear scope. Measurable outcome.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROCESS_STEPS.map((step) => {
            const Icon = ICONS[step.icon];
            return (
              <motion.div key={step.step} variants={fadeUp}>
                <GlassCard className="p-6 h-full flex flex-col relative overflow-hidden" glow="cyan">
                  {/* Giant step number */}
                  <span
                    className="absolute -top-2 -right-1 font-display font-bold text-[96px] leading-none text-brand-cyan/10 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {step.step}
                  </span>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-4 p-2.5 rounded-lg bg-brand-cyan/10 w-fit">
                      <Icon size={20} className="text-brand-cyan" />
                    </div>
                    <h3 className="font-display font-semibold text-base text-slate-100 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">
                      {step.description}
                    </p>
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
