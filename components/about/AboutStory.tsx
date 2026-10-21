"use client";

import { about, profile } from "@/data/portfolio";

export default function AboutStory() {
  return (
    <section className="bg-white px-6 py-[120px] border-b border-[#E5E5E5] text-[#111111]">
      <div className="mx-auto max-w-[1200px]">
        <p className="max-w-3xl text-[clamp(1.6rem,3vw,2.5rem)] leading-[1.35] tracking-tight text-[#111111] font-semibold">
          {about.story}
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:items-start">
          {/* Profile Photo */}
          <div className="relative aspect-[4/3] w-full max-w-[34rem] overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#F5F5F5] md:col-span-5 flex items-end justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/profile-portrait.webp"
              alt={profile.nameTh}
              className="h-full w-auto object-contain object-bottom select-none"
            />
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <span className="text-[13px] font-semibold uppercase tracking-wider text-[#111111]">
              เป้าหมายการฝึกงาน
            </span>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#6B6B6B]">
              {about.storySub}
            </p>
          </div>
        </div>

        {/* Fact Cards */}
        <dl className="mt-16 grid gap-6 border-t border-[#E5E5E5] pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {about.facts.map((f) => (
            <div key={f.label} className="rounded-2xl border border-[#E5E5E5] bg-white p-6">
              <dt className="text-[13px] text-[#6B6B6B] font-medium">{f.label}</dt>
              <dd className="mt-2 text-[16px] leading-snug font-semibold text-[#111111]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
