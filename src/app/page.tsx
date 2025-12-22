import { Hero } from "@/components/hero/Hero";
import { StatsSection } from "@/components/sections/Stats";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <StatsSection />
    </main>
  );
}
