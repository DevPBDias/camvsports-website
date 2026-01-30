"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Divider } from "./Divider";
import { STATS_DATA } from "@/constants";

type StatValueProps = {
  value: number;
  suffix?: string;
};

function StatValue({ value, suffix = "" }: StatValueProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame: number;
    const duration = 1200; // ms
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      const current = Math.floor(eased * value);
      setDisplayValue(current);

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section
      className="flex items-center justify-center bg-[#01B6F5] px-6 py-16 sm:px-8 sm:py-20"
    >
      <div className="flex w-full max-w-md flex-col items-center gap-10 sm:max-w-lg lg:max-w-3xl xl:max-w-5xl lg:flex-row lg:items-stretch lg:justify-center">
        {STATS_DATA.map((stat, index) => (
          <div key={stat.labelTop} className="flex items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center px-4"
            >
              <p className="font-heading text-5xl sm:text-6xl 2xl:text-8xl font-black text-white">
                <StatValue value={stat.value} suffix={stat.suffix} />
              </p>

              <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#1E1E1E]">
                {stat.labelTop}
              </p>
            </motion.div>

            {index < STATS_DATA.length - 1 && <Divider delay={index * 0.15} />}
          </div>
        ))}
      </div>
    </section>
  );
}
