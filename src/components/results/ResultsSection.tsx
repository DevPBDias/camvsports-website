"use client";

import { ResultsBackground } from "./ResultsBackground";
import { ResultsSideImage } from "./ResultsSideImage";
import { ResultsMedals } from "./ResultsMedals";
import { ResultsContent } from "./ResultsContent";

export function ResultsSection() {
  return (
    <section
      id="resultados"
      className="relative w-full min-h-screen flex flex-col lg:grid lg:grid-cols-[1fr_3fr_1fr] overflow-hidden"
    >
      <ResultsBackground />

      {/* Desktop: Left side - Image with blue overlay */}
      <ResultsSideImage />

      {/* Content - Centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <ResultsMedals />
        <ResultsContent />
      </div>

      {/* Desktop: Right side - Image with blue overlay */}
      <ResultsSideImage />
    </section>
  );
}
