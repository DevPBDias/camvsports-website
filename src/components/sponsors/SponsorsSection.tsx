"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { sponsors } from "@/constants/sponsors";
import Image from "next/image";

export function SponsorsSection() {
  return (
    <section
      id="patrocinios"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: "linear-gradient(to right, #0078D7 13%, #005096 73%)",
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 sm:px-6 lg:px-8">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="rounded-lg bg-white px-6 py-2">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#005096] font-heading">
              Nossos Patrocinadores
            </span>
          </div>
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center gap-2 text-center"
        >
          <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-white sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
            Parceiros que confiam no <br /> nosso Projeto
          </h2>
        </motion.div>

        {/* Grid de patrocinadores - Layout customizado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 max-w-5xl mx-auto"
        >
          {/* Segunda linha: 2 patrocinadores (2 colunas no mobile, 2 colunas cada no desktop) */}
          {sponsors.slice(0, 2).map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.05,
                ease: "easeOut",
              }}
              className="hover:scale-105 col-span-1 lg:col-span-2 flex flex-col items-center justify-center rounded-xl bg-white p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
            >
              <div className="relative mb-3 sm:mb-4 h-20 w-20 sm:h-28 sm:w-28 lg:h-40 lg:w-40 xl:h-44 xl:w-44 2xl:h-48 2xl:w-48">
                {sponsor.logo && (
                  <Image
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.sponsor_name}`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1536px) 200px, (min-width: 1280px) 144px, (min-width: 1024px) 128px, (min-width: 640px) 112px, 80px"
                  />
                )}
              </div>
              <p className="text-center font-sans text-xs sm:text-sm lg:text-base font-bold uppercase tracking-wide text-[#005096]">
                {sponsor.sponsor_name}
              </p>
            </motion.div>
          ))}

          {/* Terceira linha: 4 patrocinadores (2 colunas no mobile, 1 coluna cada no desktop) */}
          {sponsors.slice(2, 6).map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.4 + index * 0.05,
                ease: "easeOut",
              }}
              className="hover:scale-105 col-span-1 flex flex-col items-center justify-center rounded-xl bg-white p-3 sm:p-4 lg:p-6 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
            >
              <div className="relative mb-2 sm:mb-3 h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 2xl:h-32 2xl:w-32">
                {sponsor.logo && (
                  <Image
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.sponsor_name}`}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1536px) 128px, (min-width: 1280px) 112px, (min-width: 1024px) 96px, (min-width: 640px) 80px, 64px"
                  />
                )}
              </div>
              <p className="text-center font-sans font-bold text-xs sm:text-sm uppercase tracking-wide text-[#005096]">
                {sponsor.sponsor_name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* "Sua marca aqui" */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            delay: 0.6 + sponsors.length * 0.05,
            ease: "easeOut",
          }}
          href="https://www.instagram.com/camv_supervolei/"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:scale-105 w-full max-w-4xl mx-auto flex flex-row gap-3 sm:gap-4 items-center justify-center rounded-xl border-2 border-dashed border-white/50 bg-white/5 p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:border-white hover:bg-white/10"
        >
          <p className="flex flex-col justify-center items-start text-center text-sm sm:text-base font-bold uppercase tracking-wide text-white">
            Sua{" "}
            <span className="text-lg sm:text-xl lg:text-2xl font-black font-heading">
              MARCA
            </span>{" "}
            aqui
          </p>
          <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8 lg:h-12 lg:w-12 text-white transition-colors group-hover:text-white" />
        </motion.a>
      </div>
    </section>
  );
}
