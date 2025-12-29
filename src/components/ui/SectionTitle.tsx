"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionTitleProps {
  children: ReactNode;
  variant?: "light" | "dark";
  delay?: number;
  className?: string;
}

export function SectionTitle({
  children,
  variant = "dark",
  delay = 0.1,
  className = "",
}: SectionTitleProps) {
  const textColor = variant === "dark" ? "text-[#005096]" : "text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`text-center ${className}`}
    >
      <h2
        className={`font-heading text-3xl font-black uppercase tracking-wide ${textColor} sm:text-4xl md:text-5xl lg:text-6xl`}
      >
        {children}
      </h2>
    </motion.div>
  );
}
