"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToBottom, scrollToTarget } from "@/lib/scroll";
import { projects, about, profile } from "@/data/portfolio";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        scrollToTarget(el);
      }
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-[#E5E5E5]">
      <nav 
        aria-label="Main Navigation"
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4"
      >
        {/* Left: Status Pill */}
        <div className="flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#111111]">
          <span className="size-2 rounded-full bg-emerald-500 shrink-0" />
          <span>พร้อมรับงาน</span>
        </div>

        {/* Center: Desktop Navigation Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-[#525252]">
          <li>
            <Link
              href="/"
              className={`transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-0.5 ${
                pathname === "/" ? "text-[#111111] font-semibold" : ""
              }`}
            >
              หน้าแรก
            </Link>
          </li>
          <li>
            <Link
              href="/#projects"
              onClick={(e) => handleNavClick(e, "projects")}
              className="inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-0.5"
            >
              <span>ผลงาน</span><span className="text-[13px] text-[#525252] tabular-nums">[{projects.length}]</span>
            </Link>
          </li>
          <li>
            <Link
              href="/#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className="inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-0.5"
            >
              <span>ทักษะ</span><span className="text-[13px] text-[#525252] tabular-nums">[{about.services.length}]</span>
            </Link>
          </li>
          <li>
            <Link
              href="/#activities"
              onClick={(e) => handleNavClick(e, "activities")}
              className="inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-0.5"
            >
              <span>รางวัล</span><span className="text-[13px] text-[#525252] tabular-nums">[{about.activities.length}]</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`transition-colors hover:text-[#111111] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1.5 py-0.5 ${
                pathname === "/about" ? "text-[#111111] font-semibold" : ""
              }`}
            >
              เกี่ยวกับ
            </Link>
          </li>
        </ul>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5">
          {/* GitHub Quick Link */}
          <a
            href="https://github.com/kittinon12548-maker"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ดู GitHub ของ Kittinon"
            className="hidden sm:inline-flex items-center justify-center size-11 rounded-full border border-[#E5E5E5] bg-white text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Contact CTA */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              scrollToBottom();
            }}
            className="flex items-center gap-1.5 rounded-full bg-[#111111] px-4 sm:px-5 py-2.5 min-h-[44px] text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
          >
            <span>ติดต่อ</span>
            <span className="text-sm leading-none">↗</span>
          </button>

          {/* Mobile Hamburger Button (44x44px Touch Target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center size-11 rounded-full border border-[#E5E5E5] bg-white text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111]"
          >
            {mobileMenuOpen ? (
              <svg className="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 5l10 10M15 5L5 15" strokeLinecap="round" />
              </svg>
            ) : (
              <svg className="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h12M4 10h12M4 14h12" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-white px-6 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col gap-3 text-[15px] font-medium text-[#525252]">
            <li>
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1.5 transition-colors hover:text-[#111111] ${
                  pathname === "/" ? "text-[#111111] font-semibold" : ""
                }`}
              >
                หน้าแรก
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                onClick={(e) => handleNavClick(e, "projects")}
                className="flex items-center justify-between py-1.5 transition-colors hover:text-[#111111]"
              >
                <span>ผลงานเด่น</span>
                <span className="font-mono text-xs text-[#525252] tabular-nums">[{projects.length}]</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#skills"
                onClick={(e) => handleNavClick(e, "skills")}
                className="flex items-center justify-between py-1.5 transition-colors hover:text-[#111111]"
              >
                <span>ทักษะและประสบการณ์</span>
                <span className="font-mono text-xs text-[#525252] tabular-nums">[{about.services.length}]</span>
              </Link>
            </li>
            <li>
              <Link
                href="/#activities"
                onClick={(e) => handleNavClick(e, "activities")}
                className="flex items-center justify-between py-1.5 transition-colors hover:text-[#111111]"
              >
                <span>รางวัลและเกียรติประวัติ</span>
                <span className="font-mono text-xs text-[#525252] tabular-nums">[{about.activities.length}]</span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-1.5 transition-colors hover:text-[#111111] ${
                  pathname === "/about" ? "text-[#111111] font-semibold" : ""
                }`}
              >
                เกี่ยวกับ
              </Link>
            </li>
          </ul>

          <div className="mt-4 pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-[#111111] hover:underline"
              >
                ดาวน์โหลดเรซูเม่ (PDF) ↓
              </a>
            )}
            <a
              href="https://github.com/kittinon12548-maker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-[#525252] hover:text-[#111111]"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
