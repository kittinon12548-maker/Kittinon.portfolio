"use client";

import { about } from "@/data/portfolio";

export default function ActivitiesTimeline() {
  return (
    <section id="activities" className="w-full bg-white py-[120px] scroll-mt-20 border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="pb-12">
          <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
            รางวัลและกิจกรรมสำคัญ
          </h2>
          <p className="mt-3 text-[16px] leading-[1.6] text-[#525252] max-w-xl">
            เกียรติประวัติทางวิชาการ การแข่งขันนวัตกรรม และบทบาทความรับผิดชอบ
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#E5E5E5] ml-3 sm:ml-6 pl-6 sm:pl-10 space-y-8 max-w-4xl">
          {about.activities.map((a, i) => (
            <div key={i} className="relative group">
              {/* Timeline Node Dot (Centered exactly on the vertical line) */}
              <span className="absolute -left-[31px] sm:-left-[47px] top-6 size-3.5 rounded-full border-2 border-white bg-[#111111]" />

              {/* Minimalist Card */}
              <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 sm:p-8 transition-colors hover:border-[#CCCCCC]">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="rounded-full border border-[#E5E5E5] bg-[#F5F5F5] px-3.5 py-1 font-mono text-[13px] font-semibold text-[#111111] tabular-nums">
                    ปี {a.year}
                  </span>
                  {a.title.includes("รางวัล") || a.title.includes("ชนะเลิศ") ? (
                    <span className="rounded-full border border-[#111111] bg-[#111111] px-3 py-1 text-[13px] font-medium text-white">
                      เกียรติประวัติ
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 text-lg sm:text-xl font-semibold text-[#111111] leading-snug">
                  {a.title}
                </h3>

                {a.detail && (
                  <p className="mt-2.5 text-sm sm:text-[15px] leading-[1.6] text-[#525252]">
                    {a.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
