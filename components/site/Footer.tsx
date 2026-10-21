"use client";

import { useRef, useState } from "react";
import { contact, profile } from "@/data/portfolio";
import { scrollToTop } from "@/lib/scroll";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const copy = async () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      timerRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${contact.email}`;
    }
  };

  return (
    <footer id="contact" className="w-full bg-[#F5F5F5] border-t border-[#E5E5E5] py-[120px] scroll-mt-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="rounded-2xl border border-[#E5E5E5] bg-white p-8 md:p-14">
          <div className="max-w-2xl">
            <h2 className="text-[32px] md:text-[44px] font-semibold tracking-tight text-[#111111] leading-tight">
              พร้อมร่วมงานและเรียนรู้กับทีมของคุณ
            </h2>

            <p className="mt-4 text-[16px] leading-[1.6] text-[#525252]">
              เปิดรับโอกาสฝึกงาน ({profile.availabilityNote}) ในตำแหน่ง Data Analyst ยินดีพูดคุยและนัดสัมภาษณ์ครับ
            </p>
          </div>

          {/* Contact Actions Row */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {/* Copy Email Button */}
            <button
              onClick={copy}
              className="relative inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3.5 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
            >
              <span>{copied ? "คัดลอกอีเมลแล้ว ✓" : contact.email}</span>
              {!copied && <span className="text-sm leading-none">↗</span>}
            </button>

            {/* Direct Phone Call */}
            <a
              href={`tel:${contact.phone.replace(/-/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-3.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
            >
              <span>โทร {contact.phone}</span>
            </a>

            {/* Social Links */}
            {contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-3.5 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
              >
                <span>{s.label}</span>
                <span className="text-[13px] text-[#6B6B6B]">↗</span>
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-[#525252] pt-6 border-t border-[#E5E5E5]">
          <p>
            {profile.name} ({profile.nameTh}) • {profile.faculty} {profile.university}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111111] hover:text-[#525252] transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] rounded px-1"
          >
            <span>กลับขึ้นด้านบน</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
