"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface AnimatedImageCardProps {
  src: StaticImageData | string;
  alt: string;
  delay?: number;
  objectPosition?: string;
  sizes?: string;
  className?: string;
  overlayContent?: ReactNode;
}

export function AnimatedImageCard({
  src,
  alt,
  delay = 0.3,
  objectPosition = "object-cover",
  sizes = "(min-width: 768px) 50vw, 100vw",
  className = "",
  overlayContent,
}: AnimatedImageCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay }}
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#005096]/5 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`${objectPosition} transition-transform duration-500 group-hover:scale-105`}
        sizes={sizes}
      />
      {overlayContent && (
        <div className="absolute inset-0 bg-linear-to-t from-[#005096]/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center">
          {overlayContent}
        </div>
      )}
    </motion.div>
  );
}
