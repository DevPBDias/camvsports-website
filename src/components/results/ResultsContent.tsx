"use client";

import { motion } from "framer-motion";
import { ResultsMedals } from "./ResultsMedals";
import { ResultsCarousel } from "./ResultsCarousel";

export function ResultsContent() {
  return (
    <>
      <ResultsMedals />

      {/* Container para textos - centralizado e com largura responsiva */}
      <div className="relative z-30 w-full lg:w-3/5 flex flex-col items-center px-4 sm:px-6 lg:px-8 gap-6">
        {/* Introductory Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full text-background font-sans text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-10 lg:mb-14 xl:mb-16"
        >
          Ao longo de nossa história, essas foram as medalhas que conquistamos.
          Em 2025, adicionamos mais estas medalhas:
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full font-heading text-background text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wide mb-8 text-center"
        >
          RESULTADOS DE 2025
        </motion.h2>
        <ResultsCarousel />
      </div>
    </>
  );
}
