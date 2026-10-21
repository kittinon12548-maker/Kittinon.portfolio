import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24 text-center">
      <span className="font-mono text-sm font-semibold text-[#525252]">404 ERROR</span>
      <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-tight text-[#111111] leading-none">
        ไม่พบหน้าที่คุณค้นหา
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-[#525252]">
        หน้าที่คุณกำลังเข้าถึงอาจถูกย้าย ลบออกไป หรือสะกดที่อยู่ URL ไม่ถูกต้อง
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-3 text-[13px] font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
        >
          <span>กลับสู่หน้าแรก</span>
          <span>↗</span>
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-5 py-3 text-[13px] font-medium text-[#111111] transition-colors hover:bg-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111111] focus-visible:ring-offset-2"
        >
          <span>ดูผลงานเด่น</span>
        </Link>
      </div>
    </div>
  );
}
