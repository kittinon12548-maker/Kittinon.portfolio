"use client";

import { Marquee } from "@/components/magicui/Marquee";
import { techIcons } from "@/data/tech";

const techList = [
  "Python",
  "Power BI",
  "PyTorch",
  "SQL",
  "OpenCV",
  "Pandas",
  "NumPy",
  "Excel",
  "Git",
  "GitHub",
  "Jupyter",
  "MySQL",
  "REST API",
  "HTML5",
  "CSS3",
  "JavaScript",
];

export default function TechMarquee() {
  return (
    <section className="relative w-full overflow-hidden bg-[#090b0e] py-10 border-b border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-6 mb-4 text-center">
        <p className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">
          Data Science, Machine Learning &amp; Analytics Stack
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:35s]">
          {techList.map((name) => {
            const slug = techIcons[name];
            return (
              <div
                key={name}
                className="flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-[#12151c] px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-white/20 hover:bg-[#161a22] shadow-sm"
              >
                {slug ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={`/tech/${slug}.svg`} alt={name} className="size-4 object-contain" />
                ) : (
                  <span className="size-2 rounded-full bg-zinc-500" />
                )}
                <span>{name}</span>
              </div>
            );
          })}
        </Marquee>

        {/* Left & Right Smoky Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#090b0e] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#090b0e] to-transparent z-10" />
      </div>
    </section>
  );
}
