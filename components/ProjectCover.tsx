"use client";

import { useState } from "react";
import { imageSrc, type Project } from "@/data/portfolio";

export default function ProjectCover({ project, className = "" }: { project: Project; className?: string }) {
  const [hasError, setHasError] = useState(false);
  const { bg, accent } = project.cover;

  const first = project.images?.[0];
  const cover = project.coverImage ?? (first ? imageSrc(first) : undefined);

  if (cover && !hasError) {
    return (
      <div className={`overflow-hidden ${className}`} style={{ background: bg }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={cover}
          alt={`${project.title} cover`}
          loading="lazy"
          decoding="async"
          onError={() => setHasError(true)}
          className="size-full object-cover"
        />
      </div>
    );
  }

  const Mock = { inventory: Inventory, chat: Chat, finance: Finance, dashboard: Dashboard }[project.cover.kind];

  return (
    <div className={`relative grid place-items-center overflow-hidden ${className}`} style={{ background: bg }} aria-hidden>
      <Mock accent={accent} />
    </div>
  );
}

function Window({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl bg-[#181c24] border border-white/10 shadow-2xl ${className}`}>
      <div className="flex gap-1.5 border-b border-white/[0.08] px-3 py-2.5">
        {[0, 1, 2].map((i) => (
          <span key={i} className="size-2 rounded-full bg-white/20" />
        ))}
      </div>
      {children}
    </div>
  );
}

function Bar({ w, className = "" }: { w: string; className?: string }) {
  return <span className={`block h-2 rounded-full bg-white/10 ${className}`} style={{ width: w }} />;
}

function Inventory({ accent }: { accent: string }) {
  const rows = [
    { w: "70%", status: "OK", color: "#64748b" },
    { w: "55%", status: "Low", color: "#94a3b8" },
    { w: "80%", status: "Exp", color: "#cbd5e1" },
    { w: "62%", status: "OK", color: "#64748b" },
    { w: "48%", status: "OK", color: "#64748b" },
  ];
  return (
    <Window className="w-[78%] transition-transform duration-500 group-hover:-translate-y-1">
      <div className="flex">
        <div className="hidden w-[22%] space-y-2 p-3 sm:block bg-[#12151c]">
          <span className="block h-2 w-3/4 rounded-full bg-white/40" />
          {[60, 80, 50, 70].map((w) => (
            <span key={w} className="block h-1.5 rounded-full bg-white/15" style={{ width: `${w}%` }} />
          ))}
        </div>
        <div className="flex-1 p-3 md:p-4 bg-[#141820]">
          <div className="mb-3 grid grid-cols-3 gap-2">
            {["1,284", "37", "12"].map((n) => (
              <div key={n} className="rounded-lg bg-white/[0.04] p-2">
                <Bar w="50%" className="h-1.5" />
                <p className="mt-1.5 text-[clamp(10px,1.4vw,15px)] font-semibold tracking-tight text-zinc-300 tabular-nums">
                  {n}
                </p>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {rows.map((r, i) => (
              <div key={i} className="flex items-center gap-2 border-b border-white/[0.04] pb-2 last:border-0">
                <span className="size-3.5 shrink-0 rounded bg-white/10" />
                <Bar w={r.w} />
                <span className="ml-auto rounded-full px-1.5 py-0.5 text-[8px] font-semibold text-zinc-300 bg-white/10">
                  {r.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}

function Chat({ accent }: { accent: string }) {
  return (
    <div className="h-[86%] translate-y-[8%] transition-transform duration-500 group-hover:translate-y-[4%]">
      <div className="flex aspect-[9/17] h-full flex-col rounded-[2rem] border-[5px] border-zinc-700 bg-[#12151c] p-3 pt-6 shadow-2xl">
        <div className="mb-3 flex items-center gap-2">
          <span className="size-4 rounded-full bg-zinc-600" />
          <Bar w="40%" />
        </div>
        <div className="flex flex-1 flex-col gap-2 text-[clamp(7px,0.9vw,10px)] leading-snug">
          <p className="max-w-[80%] self-end rounded-2xl rounded-br-sm bg-zinc-700 px-2.5 py-1.5 text-zinc-200">ปวดหัว มีไข้ต่ำๆ ครับ</p>
          <p className="max-w-[85%] rounded-2xl rounded-bl-sm bg-white/10 px-2.5 py-1.5 text-zinc-300">
            มีอาการมากี่วันแล้วครับ?
          </p>
          <p className="max-w-[60%] self-end rounded-2xl rounded-br-sm bg-zinc-700 px-2.5 py-1.5 text-zinc-200">2 วันครับ</p>
          <div className="max-w-[85%] space-y-1.5 rounded-2xl rounded-bl-sm bg-white/10 px-2.5 py-2">
            <Bar w="90%" className="h-1.5" />
            <Bar w="70%" className="h-1.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Finance({ accent }: { accent: string }) {
  const items = ["62%", "48%", "70%", "40%"];
  return (
    <div className="w-[52%] rotate-[-2deg] rounded-2xl bg-[#161a22] border border-white/10 p-4 shadow-2xl transition-transform duration-500 group-hover:rotate-0 md:p-5">
      <div className="mb-4 flex items-center justify-between">
        <Bar w="40%" />
        <span className="size-4 rounded-md bg-white/20" />
      </div>
      <div className="space-y-3">
        {items.map((w, i) => (
          <div key={i} className="flex items-center justify-between gap-3">
            <Bar w={w} />
            <span className="h-2 w-7 rounded-full bg-white/10" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-end justify-between rounded-xl bg-white/[0.06] p-3 text-white border border-white/[0.08]">
        <span className="text-[9px] tracking-widest uppercase text-zinc-400">Total</span>
        <span className="text-[clamp(14px,2.2vw,24px)] leading-none font-bold text-white tabular-nums">฿4,850</span>
      </div>
    </div>
  );
}

function Dashboard({ accent }: { accent: string }) {
  const bars = [40, 65, 50, 85, 60, 95, 75];
  return (
    <div className="w-[76%] rounded-2xl bg-[#161a22] border border-white/10 p-4 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 md:p-5">
      <div className="mb-4 grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-white/[0.04] p-2">
            <span className="block h-1.5 w-1/2 rounded-full bg-white/20" />
            <span className="mt-2 block h-2.5 w-3/4 rounded-full bg-white/40" />
          </div>
        ))}
      </div>
      <div className="flex h-[clamp(70px,12vw,130px)] items-end gap-[6%] border-b border-white/10 px-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="flex-1 rounded-t-sm transition-[height] duration-500"
            style={{ height: `${h}%`, background: i === 5 ? "#e2e8f0" : "rgba(255, 255, 255, 0.15)" }}
          />
        ))}
      </div>
    </div>
  );
}
