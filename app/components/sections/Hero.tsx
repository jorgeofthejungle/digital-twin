"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, ExternalLink, Mail, ChevronDown } from "lucide-react";
import GlowBadge from "@/app/components/ui/GlowBadge";
import { PROFILE, TYPING_PHRASES } from "@/app/data/portfolio";
import { heroStagger, fadeUp } from "@/app/lib/variants";

const TypingEffect = dynamic(() => import("@/app/components/effects/TypingEffect"), {
  ssr: false,
  loading: () => <span className="text-brand-cyan">AI Automation Specialist</span>,
});

export default function Hero() {
  const handleScrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center z-10 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        variants={heroStagger}
        initial="hidden"
        animate="visible"
      >
        {/* Status badge */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-dot-pulse" />
            Available for Projects
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          className="font-display font-bold leading-[0.95] mb-6 gradient-text"
          style={{ fontSize: "clamp(3rem, 9vw, 7.5rem)" }}
        >
          {PROFILE.name}
        </motion.h1>

        {/* Typing headline */}
        <motion.div variants={fadeUp} className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl font-display text-brand-cyan font-semibold">
            <TypingEffect sequences={TYPING_PHRASES} speed={60} />
          </span>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-2 text-slate-500 text-sm mb-10"
        >
          <MapPin size={14} />
          <span>{PROFILE.location}</span>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.a
            href={`mailto:${PROFILE.email}`}
            className="px-8 py-4 rounded-xl bg-brand-cyan text-brand-deep font-display font-bold text-base hover:bg-brand-cyan/90 transition-colors shadow-glow-cyan"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            Let&apos;s Talk
          </motion.a>
          <motion.button
            onClick={handleScrollToPortfolio}
            className="px-8 py-4 rounded-xl border border-brand-cyan/40 text-brand-cyan font-display font-bold text-base hover:bg-brand-cyan/10 transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            View My Work
          </motion.button>
        </motion.div>

        {/* Social links */}
        <motion.div variants={fadeUp} className="flex items-center justify-center gap-6">
          <motion.a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-brand-cyan transition-colors"
            whileHover={{ y: -2 }}
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={`mailto:${PROFILE.email}`}
            className="text-slate-600 hover:text-brand-cyan transition-colors"
            whileHover={{ y: -2 }}
          >
            <Mail size={20} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600 animate-bounce-slow">
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
