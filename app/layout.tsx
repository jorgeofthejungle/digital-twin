import type { Metadata } from "next";
import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import "./globals.css";
import { inter, spaceGrotesk } from "@/app/fonts";
import ScrollProgress from "@/app/components/ui/ScrollProgress";
import GridOverlay from "@/app/components/effects/GridOverlay";
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

const ParticleBackground = dynamic(
  () => import("@/app/components/effects/ParticleBackground"),
  { ssr: false }
);

const DigitalTwin = dynamic(
  () => import("@/app/components/DigitalTwin"),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Joshua Burgos — Operations & Customer Experience Specialist",
  description:
    "Operations and customer experience professional with 11+ years in ecommerce, marketplace management, and retail ops. Now adding workflow automation with n8n, GoHighLevel, and Claude.",
  openGraph: {
    title: "Joshua Burgos — Operations & Customer Experience Specialist",
    description:
      "11+ years in ecommerce, marketplace management, and retail ops. n8n · GoHighLevel · Claude · Amazon · Shopify.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
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
