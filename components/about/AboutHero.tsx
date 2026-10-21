"use client";

import { useRef } from "react";
import { about, profile, projects } from "@/data/portfolio";
import { gsap, useGSAP } from "@/lib/gsap";
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

export default function AboutHero() {
  const ref = useRef<HTMLElement>(null);
  const [p0, p1, p2, p3] = projects;

  const tiles: Tile[] = [
    { size: "square", node: p0 && <ProjectCover project={p0} className="size-full" /> },
    {
      size: "wide",
      node: (
        <TextTile className="bg-[#F5F5F5] border border-[#E5E5E5] font-mono text-[clamp(0.8rem,1.3vw,1rem)] text-[#111111]">
          SELECT * FROM insights;
        </TextTile>
      ),
    },
    { size: "square", node: p1 && <ProjectCover project={p1} className="size-full" /> },
    {
      size: "tall",
      node: (
        <div className="size-full bg-[#F5F5F5] flex items-end justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/profile-portrait.webp" alt="" className="h-full w-auto object-contain object-bottom" />
        </div>
      ),
    },
    { size: "square", node: p2 && <ProjectCover project={p2} className="size-full" /> },
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
    { size: "square", node: p3 && <ProjectCover project={p3} className="size-full" /> },
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

      <div className="about-ticker mt-auto pt-16 pb-8" aria-hidden>
        <div className="marquee flex w-max items-end">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-end gap-[12px] pr-[12px]">
              {tiles.map((t, i) => (
                <div key={i} className={`overflow-hidden rounded-2xl border border-[#E5E5E5] ${sizeClass[t.size]}`}>
                  {t.node}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
