"use client";

import { profile, contact } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full bg-white pt-28 pb-[120px] border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Full-Width Giant Typographic Headline */}
        <div className="w-full select-none pb-8 md:pb-12">
          <h1 className="text-[clamp(3.2rem,9.2vw,9.5rem)] font-extrabold uppercase leading-[0.92] tracking-tighter flex flex-wrap items-baseline gap-x-4 md:gap-x-7">
            <span className="text-outline">KITTINON</span>
            <span className="text-[#111111]">CHUMBOON</span>
          </h1>
        </div>

        {/* 12-Column Responsive Layout */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 items-end">
          {/* Left Column: Role, Description & CTA */}
          <div className="flex flex-col items-start md:col-span-5">
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-[#111111]">
              <span className="size-1.5 rounded-full bg-[#111111]" />
              <span>Data Analyst &amp; ML Developer</span>
            </div>

            <p className="mt-4 text-[16px] leading-[1.6] text-[#6B6B6B]">
              นิสิต Data Science ม.ทักษิณ เชี่ยวชาญการวิเคราะห์ข้อมูลด้วย Power BI และพัฒนาโมเดลปัญญาประดิษฐ์ด้วย PyTorch พร้อมฝึกงานช่วง {profile.availability}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800"
              >
                <span>ดูผลงานเด่น</span>
                <span className="text-sm leading-none">↗</span>
              </a>

              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-3 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5]"
                >
                  <span>ดาวน์โหลดเรซูเม่ (PDF)</span>
                  <span className="text-[13px]">↓</span>
                </a>
              )}
            </div>
          </div>

          {/* Center Column: Portrait Photo */}
          <div className="flex justify-center md:col-span-4">
            <div className="relative aspect-[3/4] w-full max-w-[280px] sm:max-w-[320px] overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#F5F5F5] flex items-end justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile-portrait.webp"
                alt={`ภาพของ ${profile.nameTh}`}
                className="h-full w-auto object-contain object-bottom select-none"
                draggable={false}
              />
            </div>
          </div>

          {/* Right Column: GPAX Widget & Vertical Social Link Pills */}
          <div className="flex flex-col items-start md:items-end md:col-span-3">
            <div className="flex w-full flex-col md:w-auto md:min-w-[190px]">
              {/* GPAX Card with Restored PetGuard AI Text */}
              <div className="w-full rounded-2xl border border-[#E5E5E5] bg-white p-5 transition-colors hover:border-[#CCCCCC] mb-6">
                <div className="flex items-center gap-1.5 text-[13px] font-semibold text-[#6B6B6B] uppercase tracking-wider">
                  <GraduationCap className="size-3.5 text-[#6B6B6B]" />
                  <span>เกรดเฉลี่ยสะสม</span>
                </div>

                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold tracking-tight text-[#111111]">
                    {profile.gpax}
                  </span>
                  <span className="text-[13px] font-medium text-[#6B6B6B]">/ 4.00</span>
                </div>

                <div className="mt-2.5 min-h-[38px] flex items-center">
                  <p className="text-[13px] leading-relaxed text-[#6B6B6B]">
                    PetGuard AI (PyTorch 92.2%) รอบชิงระดับมหาวิทยาลัย TSU Pitching 2026
                  </p>
                </div>
              </div>

              {/* Social Link Pills */}
              <span className="text-[13px] font-semibold uppercase tracking-wider text-[#6B6B6B] mb-2">
                ช่องทางติดต่อ
              </span>

              <div className="flex flex-col gap-2">
                {contact.socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 rounded-full border border-[#E5E5E5] bg-white px-4 py-2.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5]"
                  >
                    <span>{s.label}</span>
                    <span className="text-[13px] text-[#6B6B6B]">↗</span>
                  </a>
                ))}

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center justify-between gap-4 rounded-full border border-[#E5E5E5] bg-white px-4 py-2.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5]"
                >
                  <span>อีเมล</span>
                  <span className="text-[13px] text-[#6B6B6B]">↗</span>
                </a>

                <a
                  href={`tel:${contact.phone.replace(/-/g, "")}`}
                  className="flex items-center justify-between gap-4 rounded-full border border-[#E5E5E5] bg-white px-4 py-2.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5]"
                >
                  <span>{contact.phone}</span>
                  <span className="text-[13px] text-[#6B6B6B]">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Statistics Row */}
        <div className="mt-16 pt-12 border-t border-[#E5E5E5]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E5E5]">
            <div className="py-6 first:pt-0 last:pb-0 md:py-0 md:px-6 text-center">
              <span className="block text-[48px] font-semibold text-[#111111] leading-none tracking-tight">
                92.2%
              </span>
              <span className="block text-[13px] text-[#6B6B6B] mt-2">
                ความแม่นยำโมเดลต้นแบบ PetGuard AI บน Test Set (4 คลาส)
              </span>
            </div>

            <div className="py-6 first:pt-0 last:pb-0 md:py-0 md:px-6 text-center">
              <span className="block text-[48px] font-semibold text-[#111111] leading-none tracking-tight">
                13 ปี
              </span>
              <span className="block text-[13px] text-[#6B6B6B] mt-2">
                ข้อมูลภาครัฐที่ใช้วิเคราะห์
              </span>
            </div>

            <div className="py-6 first:pt-0 last:pb-0 md:py-0 md:px-6 text-center">
              <span className="block text-[48px] font-semibold text-[#111111] leading-none tracking-tight">
                9,600+
              </span>
              <span className="block text-[13px] text-[#6B6B6B] mt-2">
                รูปใน Dataset ฝึกโมเดล
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
