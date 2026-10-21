import type { Metadata } from "next";
import WorksGrid from "@/components/works/WorksGrid";

export const metadata: Metadata = { title: "ผลงาน" };

export default function WorksPage() {
  return (
    <main id="main-content">
      <WorksGrid />
    </main>
  );
}
