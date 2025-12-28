"use client";

import { motion } from "framer-motion";

type DividerProps = {
  orientation?: "vertical" | "horizontal";
  delay?: number;
};

export function Divider({ orientation = "vertical", delay = 0 }: DividerProps) {
  const isVertical = orientation === "vertical";

  return (
    <motion.div
      aria-hidden
      initial={isVertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={isVertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay,
      }}
      className={`
        ${
          isVertical
            ? "hidden lg:block w-1 h-24 origin-top mx-10"
            : "block lg:hidden h-1 w-24 origin-left my-6"
        }
        bg-[#005096]/70
      `}
    />
  );
}
