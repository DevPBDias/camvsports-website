import { Hero } from "@/components/hero/Hero";
import { StatsSection } from "@/components/stats/Stats";
import { HistoryTeamSection } from "@/components/history/HistoryTeam";
import { HistoryCoachSection } from "@/components/history/HistoryCoach";
import { TechnicalTeamSection } from "@/components/technical/TechnicalTeam";
import { CalendarSection } from "@/components/calendar/CalendarSection";
import { SponsorsSection } from "@/components/sponsors/SponsorsSection";
import { GallerySection } from "@/components/gallery/GallerySection";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <StatsSection />
      <HistoryTeamSection />
      <HistoryCoachSection />
      <TechnicalTeamSection />
      <CalendarSection />
      <SponsorsSection />
      <GallerySection />
    </main>
  );
}
