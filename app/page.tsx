import Hero from "@/components/home/Hero";
import RecentWorks from "@/components/home/RecentWorks";
import SkillsSection from "@/components/home/SkillsSection";
import ActivitiesTimeline from "@/components/home/ActivitiesTimeline";

export default function HomePage() {
  return (
    <main id="main-content" className="flex flex-col bg-white">
      <Hero />
      <RecentWorks />
      <SkillsSection />
      <ActivitiesTimeline />
    </main>
  );
}
