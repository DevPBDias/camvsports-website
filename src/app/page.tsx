import { Hero } from "@/components/hero";
import { StatsSection } from "@/components/stats";
import { HistoryTeamSection, HistoryCoachSection } from "@/components/history";
import { TechnicalTeamSection } from "@/components/technical";
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
      <SponsorsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
