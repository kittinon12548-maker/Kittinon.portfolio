"use client";

import { about } from "@/data/portfolio";

export default function Services() {
  return (
    <section className="w-full bg-white px-6 py-[120px] text-[#111111] border-b border-[#E5E5E5]">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="pb-12">
          <h2 className="text-[32px] md:text-[40px] font-semibold tracking-tight text-[#111111] leading-tight">
            {about.servicesHeading}
          </h2>
          <p className="mt-3 text-[16px] leading-[1.6] text-[#6B6B6B] max-w-xl">
            ความเชี่ยวชาญและเครื่องมือที่นำมาปรับใช้เพื่อตอบโจทย์องค์กร
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {about.services.map((s, i) => (
            <article key={s.title} className="flex flex-col justify-between rounded-2xl border border-[#E5E5E5] bg-white p-8 transition-colors hover:border-[#CCCCCC]">
              <div>
                <p className="text-[13px] font-mono font-semibold text-[#6B6B6B]">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#111111]">{s.title}</h3>
                <p className="mt-3 text-sm leading-[1.6] text-[#6B6B6B]">{s.body}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E5E5E5]">
                <div className="flex flex-wrap gap-1.5">
                  {s.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[#E5E5E5] bg-white px-3 py-1 text-[13px] text-[#111111]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
