"use client";

import { profile } from "@/data/portfolio";
import { NumberTicker } from "@/components/magicui/NumberTicker";
import { DotPattern } from "@/components/magicui/DotPattern";
import { GraduationCap, Award, Layers, Briefcase } from "lucide-react";

export default function StatBento() {
  return (
    <section className="relative bg-[#090b0e] py-16 px-6 md:px-12 border-b border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: GPAX */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12151c] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#161a22] shadow-xl">
            <DotPattern width={20} height={20} cx={1} cy={1} cr={0.8} className="opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,white,transparent_70%)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between text-xs font-medium text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <GraduationCap className="size-4 text-zinc-400" />
                  <span>เกรดเฉลี่ยสะสม</span>
                </span>
                <span className="rounded-full bg-white/[0.06] border border-white/10 px-2 py-0.5 text-[11px] text-zinc-300">GPAX</span>
              </div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <NumberTicker value={3.18} decimalPlaces={2} className="text-4xl font-extrabold text-white" />
                <span className="text-sm text-zinc-500 font-medium">/ 4.00</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                นิสิต Data Science ชั้นปีที่ 3 คณะวิทยาศาสตร์และนวัตกรรมดิจิทัล มหาวิทยาลัยทักษิณ
              </p>
            </div>
          </div>

          {/* Card 2: National Award */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12151c] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#161a22] shadow-xl">
            <DotPattern width={20} height={20} cx={1} cy={1} cr={0.8} className="opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,white,transparent_70%)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between text-xs font-medium text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Award className="size-4 text-zinc-400" />
                  <span>รางวัลวิชาการระดับชาติ</span>
                </span>
                <span className="rounded-full bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 text-[11px] text-amber-300">ระดับดีมาก</span>
              </div>
              <div className="mt-4">
                <span className="text-xl font-bold tracking-tight text-white">วิทยาศาสตร์วิจัย ครั้งที่ 17</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                นำเสนอ Poster งานวิจัยความเหลื่อมล้ำทางรายได้ระดับภูมิภาคในไทย ด้วย Power BI &amp; Python ณ มศว (2569)
              </p>
            </div>
          </div>

          {/* Card 3: 3 Real Projects */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12151c] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#161a22] shadow-xl">
            <DotPattern width={20} height={20} cx={1} cy={1} cr={0.8} className="opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,white,transparent_70%)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between text-xs font-medium text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Layers className="size-4 text-zinc-400" />
                  <span>ผลงานวิจัย &amp; นวัตกรรม</span>
                </span>
                <span className="rounded-full bg-white/[0.06] border border-white/10 px-2 py-0.5 text-[11px] text-zinc-300">3 โครงการ</span>
              </div>
              <div className="mt-4 flex items-baseline gap-1.5">
                <NumberTicker value={3} className="text-4xl font-extrabold text-white" />
                <span className="text-xl font-bold text-white">+</span>
                <span className="text-sm text-zinc-400 ml-1">โครงการเด่น</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                Power BI แดชบอร์ดข้อมูลภาครัฐ 13 ปี, PetGuard AI (PyTorch 92.2%) และนวัตกรรมดูงานไต้หวัน
              </p>
            </div>
          </div>

          {/* Card 4: Target Roles */}
          <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12151c] p-6 transition-all duration-300 hover:border-white/20 hover:bg-[#161a22] shadow-xl">
            <DotPattern width={20} height={20} cx={1} cy={1} cr={0.8} className="opacity-40 [mask-image:radial-gradient(ellipse_at_top_right,white,transparent_70%)]" />
            <div className="relative z-10">
              <div className="flex items-center justify-between text-xs font-medium text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="size-4 text-zinc-400" />
                  <span>ความสนใจในวิชาชีพ</span>
                </span>
                <span className="rounded-full bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 text-[11px] text-emerald-300">Internship</span>
              </div>
              <div className="mt-4">
                <span className="text-xl font-bold tracking-tight text-white">Data Analyst</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                พร้อมเรียนรู้และสร้างคุณค่าจริงให้องค์กร ฝึกงานช่วง {profile.availability}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
