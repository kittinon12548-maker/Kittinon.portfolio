"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/portfolio";
import ProjectCover from "../ProjectCover";
import ProjectModal from "../ProjectModal";

export default function WorksGrid() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section className="relative min-h-screen bg-white pt-28 pb-[120px] text-[#111111]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="pb-12 border-b border-[#E5E5E5] mb-12">
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold uppercase tracking-tighter leading-none flex items-baseline gap-3">
            <span className="text-outline">SELECTED</span>
            <span className="text-[#111111]">WORKS</span>
            <span className="text-base font-mono text-[#6B6B6B] ml-2">[{projects.length}]</span>
          </h1>
          <p className="mt-4 text-[16px] leading-[1.6] text-[#6B6B6B] max-w-xl">
            แฟ้มสะสมผลงานด้านการวิเคราะห์ข้อมูล การสร้างโมเดลปัญญาประดิษฐ์ และโครงการนวัตกรรม
          </p>
        </div>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <article key={p.slug} className="flex flex-col rounded-2xl border border-[#E5E5E5] bg-white overflow-hidden transition-colors hover:border-[#CCCCCC]">
              <button
                onClick={() => setSelected(p)}
                className="group block w-full text-left cursor-pointer"
                aria-label={`View details of ${p.title}`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F5F5] border-b border-[#E5E5E5]">
                  <ProjectCover
                    project={p}
                    className="size-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h2 className="text-lg font-semibold text-[#111111] group-hover:text-[#6B6B6B] transition-colors leading-snug">
                        {p.title}
                      </h2>
                      <span className="text-[13px] text-[#6B6B6B] shrink-0 mt-1">↗</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#6B6B6B] line-clamp-2">{p.subtitle}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-[#E5E5E5]">
                    <span className="rounded-full border border-[#E5E5E5] bg-white px-3 py-1 text-[13px] font-medium text-[#111111]">
                      {p.role}
                    </span>
                    {p.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[#E5E5E5] bg-white px-3 py-1 text-[13px] text-[#6B6B6B]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
