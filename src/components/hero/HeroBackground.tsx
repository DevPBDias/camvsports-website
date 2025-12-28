import Image from "next/image";
import { motion } from "framer-motion";
import heroBackground from "@/assets/images/hero_team_volley.png";

export function HeroBackground() {
  return (
    <div className="w-full h-full pointer-events-none absolute inset-0 z-0">
      <motion.div
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={heroBackground}
          alt="Equipe CAMV Sports"
          fill
          priority
          className="object-cover object-top w-full h-full"
          sizes="100vw"
        />
      </motion.div>
      {/* Gradiente para leitura do texto */}
      <div className="absolute inset-0 bg-background/90" />
    </div>
  );
}
