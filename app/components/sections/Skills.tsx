"use client";

import SectionLabel from "@/app/components/ui/SectionLabel";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import GlowBadge from "@/app/components/ui/GlowBadge";
import { SKILLS } from "@/app/data/portfolio";
import type { GlowVariant } from "@/app/types";

const ROW1 = [...SKILLS, ...SKILLS];
const ROW2 = [...SKILLS.slice().reverse(), ...SKILLS.slice().reverse()];

const VARIANTS: GlowVariant[] = ["cyan", "blue", "violet", "green"];

export default function Skills() {
  return (
    <AnimatedSection id="skills" className="section-pad relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <SectionLabel text="Skills & Expertise" />
        <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 max-w-2xl">
          Built on a broad<br />
          <span className="gradient-text">skill foundation</span>
        </h2>
      </div>

      {/* Marquee row 1 */}
      <div className="relative mb-4">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {ROW1.map((skill, i) => (
            <GlowBadge
              key={i}
              label={skill}
              variant={VARIANTS[i % VARIANTS.length]}
              className="shrink-0 text-sm px-4 py-2"
            />
          ))}
        </div>
      </div>

      {/* Marquee row 2 */}
      <div className="relative">
        <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap">
          {ROW2.map((skill, i) => (
            <GlowBadge
              key={i}
              label={skill}
              variant={VARIANTS[(i + 2) % VARIANTS.length]}
              className="shrink-0 text-sm px-4 py-2"
            />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
