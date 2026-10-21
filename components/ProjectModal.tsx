"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { imageSrc, type Project } from "@/data/portfolio";
import { getLenis } from "@/lib/scroll";
import ProjectCover from "./ProjectCover";

export default function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const [shown, setShown] = useState<Project | null>(project);
  const closeRef = useRef<HTMLButtonElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const open = project !== null;

  useEffect(() => {
    if (project) {
      setShown(project);
      sheetRef.current?.scrollTo({ top: 0 });
    }
  }, [project]);

  useEffect(() => {
    if (!open) return;
    openerRef.current = document.activeElement as HTMLElement;
    const lenis = getLenis();
    lenis?.stop();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const container = sheetRef.current;
        if (!container) return;
        const focusable = [
          closeRef.current,
          ...Array.from(container.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))
        ].filter(Boolean) as HTMLElement[];

        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      openerRef.current?.focus();
    };
  }, [open, onClose]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const p = shown;
  if (!mounted) return null;

  return createPortal(
    <div className={`fixed inset-0 z-[60] ${open ? "" : "pointer-events-none"}`} inert={!open}>
      {/* Light Backdrop */}
      <div
        className={`absolute inset-0 bg-[#111111]/40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Floating Close Button (44x44px for Touch Target standards) */}
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="ปิดหน้าต่าง"
        className={`absolute top-5 left-1/2 z-20 grid size-11 -translate-x-1/2 place-items-center rounded-full border border-[#E5E5E5] bg-white text-[#111111] transition-all duration-300 hover:bg-[#F5F5F5] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2 ${
          open ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="size-4" aria-hidden>
          <path d="M5 5l10 10M15 5L5 15" />
        </svg>
      </button>

      {/* Modal Bottom Sheet */}
      <div
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        data-lenis-prevent
        className={`absolute inset-x-0 top-[70px] bottom-0 overflow-y-auto overscroll-contain rounded-t-[24px] border-t border-[#E5E5E5] bg-white text-[#111111] p-5 sm:p-10 lg:p-12 transition-transform duration-500 ease-out ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {p && (
          <div className="mx-auto max-w-6xl pb-24 pb-[max(6rem,calc(env(safe-area-inset-bottom)+5rem))] break-words min-w-0">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-14">
              {/* Left Column: Project Overview & Specs */}
              <div ref={infoRef} className="space-y-8 lg:self-start min-w-0">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="rounded-full border border-[#E5E5E5] bg-white px-3 py-1 text-[13px] font-medium text-[#111111]">
                      {p.category}
                    </span>
                    {p.year && (
                      <span className="rounded-full border border-[#E5E5E5] bg-[#F5F5F5] px-3 py-1 font-mono text-[12px] text-[#525252]">
                        ปี {p.year}
                      </span>
                    )}
                  </div>

                  <h2 id="project-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] leading-tight">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm text-[#525252] leading-relaxed">{p.subtitle}</p>

                  {/* Award Recognition Box */}
                  {p.award && (
                    <div className="mt-4 rounded-xl border border-[#111111] bg-[#111111] p-4 text-white shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        <span aria-hidden>🏆</span>
                        <span>รางวัลและเกียรติประวัติ</span>
                      </div>
                      <p className="text-[14px] leading-relaxed text-white">
                        {p.award}
                      </p>
                    </div>
                  )}

                  {/* Key Metric */}
                  {p.metric && (
                    <div className="mt-3.5 flex items-start gap-2.5 rounded-xl border border-[#E5E5E5] bg-[#F5F5F5] px-3.5 py-2 text-[13px] font-medium text-[#111111] leading-relaxed">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#111111]" />
                      <span>{p.metric}</span>
                    </div>
                  )}
                </div>

                {/* Problem & Solution */}
                <Group label="ที่มาและปัญหา">
                  <p>{p.problem}</p>
                </Group>

                <Group label="การแก้ปัญหาและผลลัพธ์">
                  <p>{p.solution}</p>
                </Group>

                {/* Key Features */}
                {p.features && p.features.length > 0 && (
                  <Group label="ฟังก์ชันสำคัญ">
                    <ul className="space-y-2">
                      {p.features.map((f, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-[#525252]">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#111111]" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </Group>
                )}

                {/* Tech Stack */}
                {p.tech.length > 0 && (
                  <Group label="เครื่องมือและเทคโนโลยี">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[#E5E5E5] bg-white px-3 py-1 text-[13px] text-[#111111]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </Group>
                )}

                {/* Links */}
                {(p.demoUrl || p.githubUrl) && (
                  <Group label="ลิงก์ผลงาน">
                    <div className="flex flex-wrap gap-2.5">
                      {p.demoUrl && (
                        <a
                          href={p.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800"
                        >
                          <span>ทดลองใช้งานจริง</span>
                          <span>↗</span>
                        </a>
                      )}
                      {p.githubUrl && (
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-2.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5]"
                        >
                          <span>GitHub</span>
                          <span>↗</span>
                        </a>
                      )}
                    </div>
                  </Group>
                )}
              </div>

              {/* Right Column: Screenshots List */}
              <div className="space-y-6">
                <div className="text-[13px] font-semibold text-[#525252] uppercase tracking-wider mb-2">
                  ภาพประกอบผลงาน
                </div>

                {p.images && p.images.length > 0 ? (
                  p.images.map((img) => {
                    const caption = typeof img === "string" ? undefined : img.caption;
                    const key = imageSrc(img);
                    return (
                      <figure key={key} className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#F5F5F5] p-3">
                        {typeof img !== "string" && "row" in img ? (
                          <div className="flex justify-center gap-3 py-4">
                            {img.row.map((src) => (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                key={src}
                                src={src}
                                alt={caption ?? `${p.title} screenshot`}
                                className="block h-auto w-[min(48%,280px)] rounded-xl border border-[#E5E5E5]"
                                loading="lazy"
                                decoding="async"
                                onError={(e) => {
                                  e.currentTarget.style.display = "none";
                                }}
                              />
                            ))}
                          </div>
                        ) : (
                          <div className="overflow-hidden rounded-xl">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={key}
                              alt={caption ?? `${p.title} screenshot`}
                              className="block h-auto w-full object-contain rounded-xl"
                              loading="lazy"
                              decoding="async"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          </div>
                        )}
                        {caption && (
                          <figcaption className="mt-3 px-2 pb-1 text-[13px] leading-relaxed text-[#525252]">
                            {caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  })
                ) : (
                  <ProjectCover project={p} className="aspect-[4/3] w-full rounded-2xl border border-[#E5E5E5]" />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="border-b border-[#E5E5E5] pb-2 text-[13px] font-semibold uppercase tracking-wider text-[#111111]">
        {label}
      </h3>
      <div className="mt-3 text-sm leading-[1.6] text-[#525252]">{children}</div>
    </section>
  );
}
