import React from "react";

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  tag?: string;
  action?: React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  tag,
  action,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`pb-12 ${action ? "flex flex-col md:flex-row md:items-end md:justify-between gap-6" : ""} ${className}`}>
      <div>
        {tag && (
          <span className="text-[13px] font-semibold uppercase tracking-wider text-[#111111] block mb-2">
            {tag}
          </span>
        )}
        <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-[16px] leading-[1.6] text-[#525252] max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}
