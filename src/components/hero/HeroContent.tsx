"use client";

import { motion } from "framer-motion";
import { ArrowDownCircleIcon } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";

export function HeroContent() {
  return (
    <section className="flex w-full h-full flex-col justify-center items-center px-3 pt-4 sm:px-6 sm:pb-14 lg:px-[12%] lg:pb-16 2xlpb-24">
      {/* Bloco de texto (mobile centralizado, desktop alinhado à esquerda) */}
      <div className="flex w-full flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-7xl text-3xl font-extrabold xl:leading-16 2xl:leading-20 sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[85px]"
        >
          Transformando vidas e construindo{" "}
          <span className="text-accent text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[85px] font-heading tracking-wider">
            CAMPEÕES
          </span>{" "}
          através do voleibol.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="mt-4 max-w-5xl text-sm md:text-lg lg:text-xl 2xl:text-2xl text-accent font-medium sm:text-base lg:mt-4"
        >
          O CAMV Sports é um projeto de alto rendimento e formação esportiva que
          compete nos principais campeonatos do Brasil.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="mt-10 px-3 flex w-full flex-col gap-3 sm:px-0 lg:gap-6 sm:flex-row sm:justify-center"
        >
          <CTAButton href="#historia" variant="primary">
            Conheça o projeto
          </CTAButton>
          <CTAButton href="#patrocinios" variant="secondary">
            Seja um patrocinador
          </CTAButton>
        </motion.div>

        {/* Botão de scroll para baixo */}
        <motion.a
          href="#historia"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-16 md:bottom-18 lg:bottom-20 xl:bottom-24 2xl:bottom-32 flex items-center gap-2 px-4 py-2 text-xs font-medium transition hover:text-accent"
        >
          <ArrowDownCircleIcon className="animate-bounce w-6 h-6 sm:w-8 sm:h-8 2xl:w-10 2xl:h-10" />
        </motion.a>
      </div>
    </section>
  );
}
