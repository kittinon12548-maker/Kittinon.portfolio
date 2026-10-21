"use client";

import { about } from "@/data/portfolio";

export default function Activities() {
  return (
    <section className="w-full bg-white px-6 py-[120px] text-[#111111] border-b border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto">
        <div className="pb-12">
          <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
            เกียรติประวัติ &amp; ผลงาน
          </h2>
          <p className="mt-3 text-[16px] leading-[1.6] text-[#525252] max-w-xl">
            ผลงานวิจัย การแข่งขันนวัตกรรม และการศึกษาดูงานระดับนานาชาติ
          </p>
        </div>

        <ol className="border-t border-[#E5E5E5]">
          {about.activities.map((a, i) => (
            <li key={i} className="grid gap-2 border-b border-[#E5E5E5] py-8 md:grid-cols-12 md:gap-6">
              <span className="font-mono text-sm font-semibold text-[#525252] md:col-span-2">
                ปี {a.year}
              </span>
              <div className="md:col-span-10">
                <p className="text-lg font-semibold text-[#111111] leading-snug">{a.title}</p>
                {a.detail && <p className="mt-2 text-sm leading-[1.6] text-[#525252]">{a.detail}</p>}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
