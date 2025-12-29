"use client";

import { motion } from "framer-motion";

interface SectionTagProps {
  text: string;
  variant?: "primary" | "secondary";
  className?: string;
}

export function SectionTag({
  text,
  variant = "primary",
  className = "",
}: SectionTagProps) {
  const bgColor = variant === "primary" ? "bg-[#005096]" : "bg-white";
  const textColor = variant === "primary" ? "text-white" : "text-[#005096]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`flex justify-center ${className}`}
    >
      <div className={`rounded-lg ${bgColor} px-6 py-2`}>
        <span
          className={`text-xs font-black uppercase tracking-[0.18em] ${textColor} font-heading`}
        >
          {text}
        </span>
      </div>
    </motion.div>
  );
}
