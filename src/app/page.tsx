import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/stats";
import { HistoryTeamSection, HistoryCoachSection } from "@/components/history";
import { TechnicalTeamSection } from "@/components/technical";
import { CalendarSection } from "@/components/calendar";
import { SponsorsSection } from "@/components/sponsors";
import { GallerySection } from "@/components/gallery";
import { ResultsSection } from "@/components/results";
import { Footer } from "@/components/layout";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <StatsSection />
      <HistoryTeamSection />
      <HistoryCoachSection />
      <TechnicalTeamSection />
      <ResultsSection />
      <CalendarSection />
      <SponsorsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
