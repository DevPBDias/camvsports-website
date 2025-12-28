"use client";

import { Header } from "@/components/layout/Header";
import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroNet } from "./HeroNet";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative h-dvh w-full overflow-hidden bg-background text-white"
    >
      <HeroBackground />
      <Header />

      <main className="relative z-10 flex h-full flex-col">
        {/* Espaço para o header fixo */}
        <div className="h-20 sm:h-24" />

        <HeroContent />
        <HeroNet />
      </main>
    </section>
  );
}
