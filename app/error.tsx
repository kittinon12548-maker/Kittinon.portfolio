"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if available
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <span className="font-mono text-sm font-semibold text-[#525252]">SYSTEM NOTICE</span>
      <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight text-[#111111] leading-none">
        เกิดข้อผิดพลาดในการโหลด
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-[#525252]">
        ระบบพบปัญหาชั่วคราวในการประมวลผลข้อมูล กรุณาลองใหม่อีกครั้งหรือกลับสู่หน้าหลัก
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={() => reset()}
          className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
        >
          <span>ลองใหม่อีกครั้ง</span>
          <span>↻</span>
        </button>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-3 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
        >
          <span>กลับสู่หน้าแรก</span>
          <span>↗</span>
        </Link>
      </div>
    </div>
  );
}
