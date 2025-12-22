import Image from "next/image";
import { motion } from "framer-motion";
import calendarBackground from "@/assets/images/rede_zoom.png";

export function CalendarBackground() {
  return (
    <div className="w-full h-full pointer-events-none absolute inset-0 z-0">
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={calendarBackground}
          alt="Rede de vôlei"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      {/* Gradiente para leitura do texto */}
      <div className="absolute inset-0 bg-white/85" />
    </div>
  );
}
