"use client";

import { TypeAnimation } from "react-type-animation";

interface TypingEffectProps {
  sequences: (string | number)[];
  className?: string;
  /** Typing speed between 1 (slowest) and 99 (fastest). Default: 50. */
  speed?: number;
}

export default function TypingEffect({ sequences, className = "", speed = 50 }: TypingEffectProps) {
  return (
    <TypeAnimation
      sequence={sequences}
      wrapper="span"
      speed={speed as Parameters<typeof TypeAnimation>[0]["speed"]}
      repeat={Infinity}
      className={className}
    />
  );
}
