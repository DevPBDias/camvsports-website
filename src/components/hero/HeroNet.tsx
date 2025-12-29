import Image from "next/image";
import { motion } from "framer-motion";
import heroNet from "@/assets/images/rede_volei.png";

export function HeroNet() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="pointer-events-none relative h-14 w-full sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32"
    >
      <div className="absolute inset-x-0 bottom-0 w-full h-full">
        <Image
          src={heroNet}
          alt="Rede de vôlei"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
    </motion.div>
  );
}
