"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import GlassCard from "@/app/components/ui/GlassCard";
import GlowBadge from "@/app/components/ui/GlowBadge";
import SectionLabel from "@/app/components/ui/SectionLabel";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { EDUCATION } from "@/app/data/portfolio";
import { slideLeft, slideRight } from "@/app/lib/variants";
import type { GlowVariant } from "@/app/types";

const VARIANTS: GlowVariant[] = ["blue", "violet"];

export default function Education() {
  return (
    <AnimatedSection id="education" className="section-pad px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="Education" />
        <motion.h2
          className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Academic<br />
          <span className="gradient-text">Foundation</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={i}
              variants={i === 0 ? slideLeft : slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlassCard className="p-8 h-full" glow={VARIANTS[i]}>
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl mt-1 ${
                      i === 0
                        ? "bg-brand-blue/10 border border-brand-blue/20"
                        : "bg-brand-violet/10 border border-brand-violet/20"
                    }`}
                  >
                    <GraduationCap
                      size={20}
                      className={i === 0 ? "text-brand-blue" : "text-brand-violet"}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-base text-slate-100 mb-1">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-slate-400 mb-3">{edu.degree}</p>
                    <GlowBadge label={edu.field} variant={VARIANTS[i]} className="mb-3" />
                    <p className="text-xs text-slate-600 font-mono">{edu.period}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
