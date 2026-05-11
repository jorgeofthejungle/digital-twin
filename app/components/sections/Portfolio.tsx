"use client";

import { motion } from "framer-motion";
import { Construction, ArrowRight } from "lucide-react";
import GlassCard from "@/app/components/ui/GlassCard";
import GlowBadge from "@/app/components/ui/GlowBadge";
import SectionLabel from "@/app/components/ui/SectionLabel";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { PROFILE } from "@/app/data/portfolio";
import { staggerContainer, fadeUp } from "@/app/lib/variants";

const PLACEHOLDERS = [
  { title: "Agentic RAG Pipeline", tag: "RAG + n8n" },
  { title: "Voice Agent System", tag: "Voice + Claude" },
  { title: "SMB Automation Suite", tag: "GoHighLevel + n8n" },
];

export default function Portfolio() {
  return (
    <AnimatedSection id="portfolio" className="section-pad px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="Portfolio" />
        <div className="flex items-start justify-between flex-wrap gap-4 mb-16">
          <motion.h2
            className="font-display font-bold text-4xl md:text-5xl text-slate-100 max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Work in<br />
            <span className="gradient-text">Progress</span>
          </motion.h2>
          <div className="flex items-center gap-2 text-slate-600 pt-3">
            <Construction size={18} />
            <span className="text-sm">Documenting builds</span>
          </div>
        </div>

        {/* Placeholder cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {PLACEHOLDERS.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <GlassCard className="p-6 h-48 flex flex-col justify-between relative overflow-hidden" glow="cyan">
                {/* Shimmer overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent animate-pulse pointer-events-none" />
                <div>
                  <GlowBadge label="In Progress" variant="cyan" className="mb-3" />
                  <h3 className="font-display font-semibold text-base text-slate-300">{item.title}</h3>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-600">{item.tag}</span>
                  <span className="text-xs text-slate-700">Case study coming soon</span>
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
                I&apos;m documenting my builds. In the meantime, let&apos;s talk about what you need automated.
              </p>
              <motion.a
                href={`mailto:${PROFILE.email}`}
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
