"use client";

import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import { PROFILE } from "@/app/data/portfolio";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-deep">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <span className="font-display font-bold text-2xl text-brand-cyan">JB</span>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              Built for production.<br />Not demos.
            </p>
          </div>

          {/* Nav */}
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-500 hover:text-brand-cyan transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <motion.a
              href={`mailto:${PROFILE.email}`}
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand-cyan transition-colors w-fit"
              whileHover={{ y: -2 }}
            >
              <Mail size={16} />
              {PROFILE.email}
            </motion.a>
            <motion.a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-500 hover:text-brand-cyan transition-colors w-fit"
              whileHover={{ y: -2 }}
            >
              <ExternalLink size={16} />
              linkedin.com/in/jorgeofthejungle
            </motion.a>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-6 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-600">
            © 2026 Joshua Burgos · Davao, Philippines
          </span>
          <span className="text-xs text-slate-600">
            Operations & Customer Experience Specialist
          </span>
        </div>
      </div>
    </footer>
  );
}
