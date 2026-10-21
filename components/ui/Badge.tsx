import React from "react";

export type BadgeVariant = "default" | "ink" | "surface" | "solid";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

export default function Badge({
  variant = "default",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    default: "border-[#E5E5E5] bg-white text-[#525252]",
    ink: "border-[#E5E5E5] bg-white text-[#111111] font-medium",
    surface: "border-[#E5E5E5] bg-[#F5F5F5] text-[#111111] font-mono font-semibold tabular-nums",
    solid: "border-[#111111] bg-[#111111] text-white font-medium",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[13px] transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
