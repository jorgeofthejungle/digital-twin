"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    })
      .then(() => setReady(true))
      .catch((err: unknown) => console.error("ParticleBackground init error:", err));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      aria-hidden="true"
      className="fixed inset-0 z-[2] pointer-events-none"
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          color: { value: "#00f5ff" },
          links: {
            color: "#00f5ff",
            distance: 150,
            enable: true,
            opacity: 0.07,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
          number: { value: 50, density: { enable: true } },
          opacity: { value: 0.2 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
}
