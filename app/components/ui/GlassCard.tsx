"use client";

import { motion } from "framer-motion";
import type { GlowVariant } from "@/app/types";

const glowMap: Record<GlowVariant, string> = {
  cyan: "hover:shadow-glow-cyan hover:border-brand-cyan/20",
  blue: "hover:shadow-glow-blue hover:border-brand-blue/20",
  violet: "hover:shadow-glow-violet hover:border-brand-violet/20",
  green: "hover:shadow-glow-green hover:border-brand-green/20",
};

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: GlowVariant;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  glow = "cyan",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl border border-white/[0.06] transition-all duration-300 ${
        hover ? glowMap[glow] : ""
      } ${className}`}
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
