"use client";

import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";
import GlassCard from "@/app/components/ui/GlassCard";
import GlowBadge from "@/app/components/ui/GlowBadge";
import SectionLabel from "@/app/components/ui/SectionLabel";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { PROJECTS } from "@/app/data/portfolio";
import { staggerContainer, fadeUp } from "@/app/lib/variants";

const STATUS_LABEL: Record<string, string> = {
  live: "Live",
  "in-progress": "In Progress",
  archived: "Archived",
};

export default function Portfolio() {
  return (
    <AnimatedSection id="portfolio" className="section-pad px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="Work" />
        <motion.h2
          className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          What I&apos;m<br />
          <span className="gradient-text">Building</span>
        </motion.h2>

        {/* Project cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <GlassCard className="p-8 h-full flex flex-col justify-between gap-6" glow="cyan">
                <div className="flex flex-col gap-4">
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <GlowBadge label={STATUS_LABEL[project.status]} variant="cyan" />
                      <span className="flex items-center gap-1 text-[11px] font-semibold tracking-widest uppercase text-slate-600">
                        <User size={11} />
                        Personal
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-slate-100 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
          ))}
        </motion.div>

        {/* CTA card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlassCard className="p-8 md:p-12 text-center border border-brand-cyan/20" glow="cyan" hover={false}>
            <div className="max-w-xl mx-auto">
              <h3 className="font-display font-bold text-2xl md:text-3xl text-slate-100 mb-4">
                Let&apos;s build something that works.
              </h3>
              <p className="text-slate-500 mb-8 leading-relaxed">
                These are early-stage builds. If you want to see how I&apos;d approach your specific problem, let&apos;s talk.
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan text-brand-deep font-display font-bold text-base hover:bg-brand-cyan/90 transition-colors shadow-glow-cyan"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Start a Conversation
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
