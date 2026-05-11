import type { GlowVariant } from "@/app/types";

const variantStyles: Record<GlowVariant, string> = {
  cyan: "text-brand-cyan border-brand-cyan/30 bg-brand-cyan/10",
  blue: "text-brand-blue border-brand-blue/30 bg-brand-blue/10",
  violet: "text-brand-violet border-brand-violet/30 bg-brand-violet/10",
  green: "text-brand-green border-brand-green/30 bg-brand-green/10",
};

interface GlowBadgeProps {
  label: string;
  variant?: GlowVariant;
  className?: string;
}

export default function GlowBadge({
  label,
  variant = "cyan",
  className = "",
}: GlowBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
