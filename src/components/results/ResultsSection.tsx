"use client";

import { ResultsBackground } from "./ResultsBackground";
import { ResultsSideImage } from "./ResultsSideImage";
import { ResultsMedals } from "./ResultsMedals";
import { ResultsContent } from "./ResultsContent";

export function ResultsSection() {
  return (
    <section
      id="resultados"
      className="relative w-full min-h-screen flex flex-col bg-foreground lg:flex-row items-center justify-center overflow-hidden"
    >
      <ResultsMedals />
      <ResultsBackground />

      {/* Desktop: Left side - Image with blue overlay */}
      <ResultsSideImage side="left-0 -scale-x-100" />

      {/* Content - Centralizado */}
      <div className="w-full mt-170 flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <ResultsContent />
      </div>

      {/* Desktop: Right side - Image with blue overlay */}
      <ResultsSideImage side="right-0" />
    </section>
  );
}
