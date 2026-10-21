"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { scrollToBottom, scrollToTarget } from "@/lib/scroll";
import { projects, about } from "@/data/portfolio";

export default function Header() {
  const pathname = usePathname();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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

        {/* Center: Navigation Menu with Bracketed Numbers */}
        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-[#6B6B6B]">
          <li>
            <Link
              href="/"
              className={`transition-colors hover:text-[#111111] ${
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
              className="inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#111111]"
            >
              <span>ผลงาน</span><span className="text-[13px] text-[#6B6B6B]">[{projects.length}]</span>
            </Link>
          </li>
          <li>
            <Link
              href="/#skills"
              onClick={(e) => handleNavClick(e, "skills")}
              className="inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#111111]"
            >
              <span>ทักษะ</span><span className="text-[13px] text-[#6B6B6B]">[{about.services.length}]</span>
            </Link>
          </li>
          <li>
            <Link
              href="/#activities"
              onClick={(e) => handleNavClick(e, "activities")}
              className="inline-flex items-center gap-1 whitespace-nowrap transition-colors hover:text-[#111111]"
            >
              <span>รางวัล</span><span className="text-[13px] text-[#6B6B6B]">[{about.activities.length}]</span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`transition-colors hover:text-[#111111] ${
                pathname === "/about" ? "text-[#111111] font-semibold" : ""
              }`}
            >
              เกี่ยวกับ
            </Link>
          </li>
        </ul>

        {/* Right: Contact CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToBottom}
            className="flex items-center gap-1.5 rounded-full bg-[#111111] px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800 cursor-pointer"
          >
            <span>ติดต่อ</span>
            <span className="text-sm leading-none">↗</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
