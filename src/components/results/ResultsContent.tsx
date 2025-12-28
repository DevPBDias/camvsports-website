"use client";

import { motion } from "framer-motion";

export function ResultsContent() {
  return (
    <>
      {/* Introductory Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-[#1E1E1E] lg:text-white text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mb-6 sm:mb-8 px-4"
      >
        Ao longo de nossa história, essas foram as medalhas que conquistamos.
        Em 2025, adicionamos mais estas medalhas:
      </motion.p>

      {/* Main Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="font-heading font-black text-background lg:text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl uppercase tracking-wide mb-8 sm:mb-10 md:mb-12 text-center"
      >
        RESULTADOS DE 2025
      </motion.h2>
    </>
  );
}


