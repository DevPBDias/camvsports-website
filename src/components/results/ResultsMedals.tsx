"use client";

import { motion } from "framer-motion";
import { MEDAL_COUNTS } from "@/constants/medals";

export function ResultsMedals() {
  return (
    <div className="flex w-full justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
      {MEDAL_COUNTS.map((medal, index) => (
        <motion.div
          key={medal.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="flex flex-col items-center bg-background/90 backdrop-blur-sm rounded-lg px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 xl:px-10 xl:py-6"
        >
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-heading text-white">
            {medal.quantity}
          </span>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl uppercase font-heading text-white">
            {medal.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
