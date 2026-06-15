"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Send, CheckCircle } from "lucide-react";
import SectionLabel from "@/app/components/ui/SectionLabel";
import AnimatedSection from "@/app/components/ui/AnimatedSection";
import { PROFILE } from "@/app/data/portfolio";
import { fadeUp } from "@/app/lib/variants";

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xjgdjnpg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("sent");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <AnimatedSection id="contact" className="section-pad px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionLabel text="Let's Talk" />

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl text-slate-100 mb-4 leading-[1.04]">
            Got a process that<br />
            <span className="gradient-text">should run itself?</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-[46ch]">
            Marketplace ops, customer-facing workflows, or that automation you keep meaning to build — let&apos;s get it running.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {formState === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 p-10 rounded-2xl border border-brand-cyan/30 bg-brand-raised text-center">
                <CheckCircle size={40} className="text-brand-cyan" />
                <p className="font-display font-semibold text-xl text-slate-100">Message sent</p>
                <p className="text-slate-400 text-sm">Thanks — I&apos;ll reply within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Honeypot */}
                <p className="absolute left-[-9999px]" aria-hidden="true">
                  <label>
                    Don&apos;t fill this out: <input name="_gotcha" tabIndex={-1} />
                  </label>
                </p>
                <input type="hidden" name="_subject" value="New message from joshburgos.com" />

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-semibold tracking-widest uppercase text-slate-500"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full bg-brand-raised border border-brand-border rounded-xl px-4 py-3.5 text-slate-100 text-[15px] placeholder-slate-600 transition-all duration-200 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold tracking-widest uppercase text-slate-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="w-full bg-brand-raised border border-brand-border rounded-xl px-4 py-3.5 text-slate-100 text-[15px] placeholder-slate-600 transition-all duration-200 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold tracking-widest uppercase text-slate-500"
                  >
                    What do you need automated?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-brand-raised border border-brand-border rounded-xl px-4 py-3.5 text-slate-100 text-[15px] placeholder-slate-600 resize-vertical transition-all duration-200 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/20 font-body"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={formState === "sending"}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-brand-cyan text-brand-deep font-display font-bold text-base shadow-glow-cyan transition-colors hover:bg-brand-cyan/90 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: formState === "sending" ? 1 : 1.02 }}
                  whileTap={{ scale: formState === "sending" ? 1 : 0.97 }}
                >
                  <Send size={16} aria-hidden="true" />
                  {formState === "sending" ? "Sending…" : "Send message"}
                </motion.button>

                {formState === "error" && (
                  <p className="text-sm text-red-400 text-center">
                    Something went wrong — try emailing me directly below.
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Direct contact */}
          <motion.div
            className="flex flex-col gap-6 lg:pt-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <p className="text-sm text-slate-500 uppercase tracking-widest font-semibold">
              Or reach me directly
            </p>
            <motion.a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-3 text-slate-300 hover:text-brand-cyan transition-colors group"
              whileHover={{ x: 4 }}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-raised border border-brand-border group-hover:border-brand-cyan/40 transition-colors">
                <Mail size={18} />
              </span>
              <span className="text-[15px]">{PROFILE.email}</span>
            </motion.a>
            <motion.a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-slate-300 hover:text-brand-cyan transition-colors group"
              whileHover={{ x: 4 }}
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-raised border border-brand-border group-hover:border-brand-cyan/40 transition-colors">
                <ExternalLink size={18} />
              </span>
              <span className="text-[15px]">linkedin.com/in/jorgeofthejungle</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
