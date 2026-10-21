"use client";

import { useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/data/portfolio";
import dynamic from "next/dynamic";
import ProjectCover from "../ProjectCover";
import { Badge, SectionHeader } from "@/components/ui";

const ProjectModal = dynamic(() => import("../ProjectModal"), { ssr: false });

export default function RecentWorks() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full bg-white py-[120px] scroll-mt-20 border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <SectionHeader
          title="ผลงานเด่น"
          subtitle="โครงการวิเคราะห์ข้อมูล แดชบอร์ดเชิงโต้ตอบ และโมเดลปัญญาประดิษฐ์ที่พัฒนาขึ้นจริง"
          action={
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-[#111111] hover:text-[#525252] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1"
            >
              <span>ดูทั้งหมด <span className="tabular-nums font-mono">[{projects.length}]</span></span>
              <span className="text-sm">↗</span>
            </Link>
          }
        />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              role="button"
              tabIndex={0}
              onClick={() => setSelected(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(project);
                }
              }}
              className="group flex flex-col rounded-2xl border border-[#E5E5E5] bg-white overflow-hidden transition-colors hover:border-[#CCCCCC] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
            >
              {/* Project Image Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F5F5F5] border-b border-[#E5E5E5]">
                <ProjectCover project={project} className="size-full object-cover" />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-[#111111] group-hover:text-[#525252] transition-colors leading-snug">
                      {project.title}
                    </h3>
                    <span className="text-[13px] text-[#525252] shrink-0 mt-1">↗</span>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-[#525252] line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-[#E5E5E5]">
                  <Badge variant="ink">{project.role}</Badge>
                  {project.tech.slice(0, 2).map((t) => (
                    <Badge key={t} variant="default">{t}</Badge>
                  ))}
                  {project.tech.length > 2 && (
                    <Badge variant="default" className="tabular-nums">
                      +{project.tech.length - 2}
                    </Badge>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
