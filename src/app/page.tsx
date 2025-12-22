import { Hero } from "@/components/hero/Hero";
import { StatsSection } from "@/components/stats/Stats";
import { HistoryTeamSection } from "@/components/history/HistoryTeam";
import { HistoryCoachSection } from "@/components/history/HistoryCoach";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <StatsSection />
      <HistoryTeamSection />
      <HistoryCoachSection />
    </main>
  );
}
