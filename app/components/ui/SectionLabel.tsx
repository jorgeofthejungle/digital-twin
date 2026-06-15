"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/app/lib/variants";

interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <motion.span
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="inline-block text-xs font-mono tracking-widest text-brand-cyan/70 uppercase mb-4"
    >
      {`// ${text}`}
    </motion.span>
  );
}
