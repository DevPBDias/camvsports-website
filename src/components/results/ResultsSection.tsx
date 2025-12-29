"use client";

import { ResultsBackground } from "./ResultsBackground";
import { ResultsSideImage } from "./ResultsSideImage";
import { ResultsContent } from "./ResultsContent";
import { MedalsImage } from "./MedalsImage";

export function ResultsSection() {
  return (
    <section
      id="resultados"
      className="relative w-full min-h-screen flex flex-col bg-foreground lg:flex-row items-center justify-center overflow-hidden"
    >
      <MedalsImage />
      <ResultsBackground />

      {/* Desktop: Left side - Image with blue overlay */}
      <ResultsSideImage side="left-0 -scale-x-100" />

      {/* Content - Centralizado */}
      <div className="w-full mt-45 sm:mt-65 md:mt-72 lg:mt-85 xl:mt-120 2xl:mt-160 flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <ResultsContent />
      </div>

      {/* Desktop: Right side - Image with blue overlay */}
      <ResultsSideImage side="right-0" />
    </section>
  );
}
