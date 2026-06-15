"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GlassCard from "@/app/components/ui/GlassCard";
import GlowBadge from "@/app/components/ui/GlowBadge";
import SectionLabel from "@/app/components/ui/SectionLabel";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { EXPERIENCE } from "@/app/data/portfolio";
import { slideLeft, slideRight } from "@/app/lib/variants";

export default function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const spineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <AnimatedSection id="experience" className="section-pad px-6 relative z-10">
      <div className="max-w-5xl mx-auto">
        <SectionLabel text="Career Journey" />
        <motion.h2
          className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-16 max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          From operations<br />
          <span className="gradient-text">to intelligent systems</span>
        </motion.h2>

        <div className="relative" ref={containerRef}>
          {/* Animated spine */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-brand-border">
            <motion.div
              className="absolute top-0 left-0 right-0 origin-top"
              style={{
                height: spineHeight,
                background: "linear-gradient(to bottom, #00f5ff, #3b82f6)",
              }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {EXPERIENCE.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={`${item.company}-${item.role}`} className="relative flex items-start gap-6 md:gap-0">
                  {/* Mobile layout: all left-aligned */}
                  <div className="flex items-start gap-4 pl-12 md:hidden w-full">
                    {/* Node */}
                    <div
                      className={`absolute left-4 top-6 -translate-x-1/2 w-3 h-3 rounded-full border-2 z-10 ${
                        item.current
                          ? "border-brand-cyan bg-brand-cyan shadow-glow-cyan"
                          : "border-brand-border bg-brand-mid"
                      }`}
                    />
                    <motion.div
                      variants={slideLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="w-full"
                    >
                      <GlassCard className="p-6" glow={item.current ? "cyan" : "blue"}>
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                          <div>
                            <h3 className="font-display font-semibold text-base text-slate-100">
                              {item.role}
                            </h3>
                            <p className="text-sm text-brand-cyan font-medium">{item.company}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            {item.current && <GlowBadge label="Current" variant="green" />}
                            <span className="text-xs text-slate-600 font-mono">{item.period}</span>
                          </div>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                      </GlassCard>
                    </motion.div>
                  </div>

                  {/* Desktop layout: alternating */}
                  <div className="hidden md:flex w-full items-start">
                    {/* Left side */}
                    <div className="w-1/2 pr-10 flex justify-end">
                      {isEven ? (
                        <motion.div
                          variants={slideRight}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="w-full max-w-sm"
                        >
                          <GlassCard className="p-6" glow={item.current ? "cyan" : "blue"}>
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                              <div>
                                <h3 className="font-display font-semibold text-base text-slate-100">
                                  {item.role}
                                </h3>
                                <p className="text-sm text-brand-cyan font-medium">{item.company}</p>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                {item.current && <GlowBadge label="Current" variant="green" />}
                                <span className="text-xs text-slate-600 font-mono">{item.period}</span>
                              </div>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                          </GlassCard>
                        </motion.div>
                      ) : (
                        <div className="w-full max-w-sm" />
                      )}
                    </div>

                    {/* Node */}
                    <div className="relative flex items-start justify-center w-0">
                      <div
                        className={`absolute top-6 -translate-y-1/2 w-4 h-4 rounded-full border-2 z-10 ${
                          item.current
                            ? "border-brand-cyan bg-brand-cyan shadow-glow-cyan"
                            : "border-slate-600 bg-brand-mid"
                        }`}
                        style={{ left: "-8px" }}
                      />
                    </div>

                    {/* Right side */}
                    <div className="w-1/2 pl-10">
                      {!isEven ? (
                        <motion.div
                          variants={slideLeft}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="w-full max-w-sm"
                        >
                          <GlassCard className="p-6" glow={item.current ? "cyan" : "blue"}>
                            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                              <div>
                                <h3 className="font-display font-semibold text-base text-slate-100">
                                  {item.role}
                                </h3>
                                <p className="text-sm text-brand-cyan font-medium">{item.company}</p>
                              </div>
                              <div className="flex flex-col items-end gap-1">
                                {item.current && <GlowBadge label="Current" variant="green" />}
                                <span className="text-xs text-slate-600 font-mono">{item.period}</span>
                              </div>
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                          </GlassCard>
                        </motion.div>
                      ) : (
                        <div className="w-full max-w-sm" />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
