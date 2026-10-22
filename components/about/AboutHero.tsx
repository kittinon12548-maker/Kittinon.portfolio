"use client";

import { useRef } from "react";
import { about, profile, projects } from "@/data/portfolio";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import { Marquee } from "@/registry/magicui/marquee";
import ProjectCover from "../ProjectCover";

type Tile = { size: "square" | "wide" | "tall"; node: React.ReactNode };

const sizeClass = {
  square: "h-[clamp(11rem,25vw,18rem)] aspect-square",
  wide: "h-[clamp(7rem,15vw,11rem)] aspect-[5/3]",
  tall: "h-[clamp(14rem,31vw,22rem)] aspect-[3/4]",
};

function TextTile({ children, className }: { children: React.ReactNode; className: string }) {
  return <div className={`grid size-full place-items-center p-5 text-center ${className}`}>{children}</div>;
}

function ImageTile({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className="size-full bg-[#F5F5F5] overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={`size-full object-cover select-none ${className}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

export default function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const p0 = projects[0];
  const p2 = projects[2];

  const tiles: Tile[] = [
    // 1. ผลงานที่ 1: Regional Income (Research 13 ปี & Power BI Dashboard)
    { size: "square", node: p0 && <ProjectCover project={p0} className="size-full" /> },
    // 2. ภาพกิจกรรม Style3 (1/6): ศึกษาดูงานระบบนิเวศสตาร์ทอัพ ณ ไต้หวัน
    {
      size: "wide",
      node: (
        <ImageTile
          src="/images/gallery/style3-pitching-04.webp"
          alt="ทีม Style3 ศึกษาดูงานระบบนิเวศสตาร์ทอัพ ณ ไต้หวัน"
        />
      ),
    },
    // 3. ป้ายข้อความ SQL Insight
    {
      size: "wide",
      node: (
        <TextTile className="bg-[#F5F5F5] border border-[#E5E5E5] font-mono text-[clamp(0.8rem,1.3vw,1rem)] text-[#111111]">
          SELECT * FROM insights;
        </TextTile>
      ),
    },
    // 4. ภาพกิจกรรม Style3 (2/6): เวิร์กช็อป Taiwan Tech GTE-X Bootcamp
    {
      size: "wide",
      node: (
        <ImageTile
          src="/images/gallery/style3-pitching-05.webp"
          alt="เวิร์กช็อป Taiwan Tech GTE-X Bootcamp ณ มหาวิทยาลัยเทคโนโลยีแห่งชาติไต้หวัน"
        />
      ),
    },
    // 5. ภาพถ่ายโปรไฟล์ (Profile Portrait)
    {
      size: "tall",
      node: (
        <div className="size-full bg-[#F5F5F5] flex items-end justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/profile-portrait.webp" alt={profile.name} className="h-full w-auto object-contain object-bottom" />
        </div>
      ),
    },
    // 6. ภาพกิจกรรม Style3 (3/6): การนำเสนอผลงาน Pitching บนเวที Bootcamp
    {
      size: "wide",
      node: (
        <ImageTile
          src="/images/gallery/style3-pitching-06.webp"
          alt="การนำเสนอผลงานต้นแบบ Pitching บนเวที Bootcamp"
        />
      ),
    },
    // 7. ผลงานที่ 2: Smart Digital Perfume Vending Machine (ทีมผู้ชนะ)
    { size: "square", node: p2 && <ProjectCover project={p2} className="size-full" /> },
    // 8. ภาพกิจกรรม Style3 (4/6): การระดมสมองพัฒนา Business Model และ Prototype
    {
      size: "square",
      node: (
        <ImageTile
          src="/images/gallery/style3-pitching-03.webp"
          alt="การระดมสมองพัฒนา Business Model และ Prototype"
        />
      ),
    },
    // 9. ป้ายข้อความ Open for internship
    {
      size: "wide",
      node: (
        <TextTile className="bg-white border border-[#E5E5E5] text-[clamp(1.1rem,1.8vw,1.4rem)] leading-tight tracking-tight text-[#111111]">
          Open for internship
          <br />
          <span className="text-[13px] text-[#525252] mt-1 block">{profile.availability}</span>
        </TextTile>
      ),
    },
    // 10. ภาพกิจกรรม Style3 (5/6): กิจกรรม Teamwork & Hands-on Challenge
    {
      size: "square",
      node: (
        <ImageTile
          src="/images/gallery/style3-pitching-01.webp"
          alt="กิจกรรม Teamwork และ Hands-on Challenge ใน Bootcamp"
        />
      ),
    },
    // 11. ผลงานวิจัย: โปสเตอร์ผลงานวิจัยระดับดีมาก (Regional Income Award Poster)
    {
      size: "wide",
      node: (
        <ImageTile
          src="/projects/regional-income/01-award-poster.webp"
          alt="โปสเตอร์นำเสนอผลงานวิจัยระดับดีมาก การประชุมวิชาการระดับชาติ วิทยาศาสตร์วิจัย ครั้งที่ 17"
        />
      ),
    },
    // 12. ภาพกิจกรรม Style3 (6/7): กิจกรรมแลกเปลี่ยนเรียนรู้ในโครงการ TSU Discover Taiwan
    {
      size: "wide",
      node: (
        <ImageTile
          src="/images/gallery/style3-pitching-02.webp"
          alt="กิจกรรมแลกเปลี่ยนเรียนรู้ในโครงการ TSU Discover Taiwan"
        />
      ),
    },
    // 13. ป้ายข้อความ Data → Insights → Impact
    {
      size: "tall",
      node: (
        <TextTile className="bg-[#F5F5F5] border border-[#E5E5E5] text-[clamp(1.4rem,2.4vw,2rem)] leading-[1.1] tracking-[-0.04em] text-[#111111]">
          Data
          <br />→ Insights
          <br />→ Impact
        </TextTile>
      ),
    },
    // 14. ภาพกิจกรรม Style3 (7/7): การระดมความคิดและออกแบบแนวทางแก้ไขปัญหาในเวิร์กช็อป
    {
      size: "wide",
      node: (
        <ImageTile
          src="/images/gallery/style3-pitching-07.webp"
          alt="การระดมความคิดและออกแบบแนวทางแก้ไขปัญหาในเวิร์กช็อป Taiwan Tech Bootcamp"
        />
      ),
    },
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(".about-line", { yPercent: 110, y: 0 }, { yPercent: 0, duration: 1.3, ease: "expo.out", stagger: 0.1, delay: 0.1 });
        gsap.fromTo(".about-sub", { opacity: 0 }, { opacity: 1, duration: 1, delay: 0.6 });
        gsap.fromTo(".about-ticker", { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 1.4, ease: "expo.out", delay: 0.3 });
      });
    },
    { scope: ref },
  );

  const words = about.heading.split(" ");
  const half = Math.ceil(words.length / 2);
  const lines = [words.slice(0, half).join(" "), words.slice(half).join(" ")];

  return (
    <section ref={ref} className="relative flex min-h-svh flex-col overflow-hidden bg-white pt-[18svh] md:min-h-[115svh] text-[#111111] border-b border-[#E5E5E5]">
      <div className="px-4 text-center">
        <h1 className="mx-auto max-w-[14ch] text-[clamp(2.8rem,7vw,6.5rem)] font-extrabold uppercase tracking-tight leading-[0.95] text-[#111111]">
          {lines.map((line) => (
            <span key={line} className="-mb-[0.1em] block overflow-hidden pb-[0.1em]">
              <span className="about-line pre-line block">{line}</span>
            </span>
          ))}
        </h1>
        <p className="about-sub mt-6 text-base text-[#525252] md:text-lg">{about.sub}</p>
      </div>

      <div className="about-ticker relative mt-auto w-full overflow-hidden pt-16 pb-8" aria-hidden>
        <Marquee pauseOnHover className="[--duration:45s] [--gap:12px]">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={cn("overflow-hidden rounded-2xl border border-[#E5E5E5] bg-white", sizeClass[t.size])}
            >
              {t.node}
            </div>
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />
      </div>
    </section>
  );
}
