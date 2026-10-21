"use client";

import { about } from "@/data/portfolio";
import { Highlight } from "@/lib/highlight";

export default function ApproachValues() {
  return (
    <section className="w-full bg-white px-6 py-[120px] text-[#111111]">
      <div className="max-w-[1200px] mx-auto">
        <div className="max-w-2xl">
          <span className="text-[13px] font-semibold uppercase tracking-wider text-[#111111]">
            แนวคิดและการทำงาน
          </span>
          <p className="mt-6 text-[clamp(1.5rem,2.8vw,2.2rem)] leading-[1.35] tracking-tight text-[#111111] font-semibold">
            <Highlight text={about.approach} className="text-[#111111] font-bold underline decoration-[#CCCCCC] underline-offset-4" />
          </p>

          <span className="text-[13px] font-semibold uppercase tracking-wider text-[#111111] block mt-16">
            หลักการทำงาน
          </span>
          <ul className="mt-6 divide-y divide-[#E5E5E5] border-y border-[#E5E5E5]">
            {about.values.map((v) => (
              <li key={v} className="py-6 text-[16px] leading-[1.6] text-[#6B6B6B]">
                <Highlight text={v} className="text-[#111111] font-medium" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
