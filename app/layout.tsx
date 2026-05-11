import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
import { inter, spaceGrotesk } from "@/app/fonts";
import ScrollProgress from "@/app/components/ui/ScrollProgress";
import GridOverlay from "@/app/components/effects/GridOverlay";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import DigitalTwin from "@/app/components/DigitalTwin";

const ParticleBackground = dynamic(
  () => import("@/app/components/effects/ParticleBackground"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Joshua Burgos — AI Automation Specialist",
  description:
    "I build AI automation systems that cut manual work and sharpen decision-making. Built for production, not demos. n8n · Claude AI · RAG · Voice Agents · MCP.",
  openGraph: {
    title: "Joshua Burgos — AI Automation Specialist",
    description:
      "AI automation systems built for production. n8n + Claude ecosystem + Supabase.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <body className="font-body antialiased bg-brand-deep text-slate-100 overflow-x-hidden">
        <ScrollProgress />
        <GridOverlay />
        <ParticleBackground />
        <Navbar />
        <main className="relative z-10">
          {children}
        </main>
        <Footer />
        <DigitalTwin />
      </body>
    </html>
  );
}
