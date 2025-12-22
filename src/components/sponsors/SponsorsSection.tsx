"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const sponsors = [
  {
    name: "HM SPORTS BRASIL",
    logo: null, // Será substituído por imagem quando disponível
  },
  {
    name: "EVOLUA",
    logo: null,
  },
  {
    name: "KAIZEN",
    logo: null,
  },
  {
    name: "HUMANIZART",
    logo: null,
  },
  {
    name: "LOKAMUNICK",
    logo: null,
  },
];

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
            Parceiros que confiam no nosso Projeto
          </h2>
        </motion.div>

        {/* Grid de patrocinadores */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.05,
                ease: "easeOut",
              }}
              className="flex flex-col items-center justify-center rounded-xl bg-white p-8 transition-all duration-300 hover:shadow-lg hover:shadow-white/20"
            >
              {/* Área para logo - será substituída quando as imagens estiverem disponíveis */}
              <div className="mb-4 flex h-24 items-center justify-center sm:h-32">
                {sponsor.logo ? (
                  <img
                    src={sponsor.logo}
                    alt={`Logo ${sponsor.name}`}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-lg bg-[#005096]/5">
                    <span className="text-sm font-semibold text-[#005096]/40 sm:text-base">
                      Logo
                    </span>
                  </div>
                )}
              </div>
              <p className="text-center font-heading text-base font-black uppercase tracking-wide text-[#005096] sm:text-lg">
                {sponsor.name}
              </p>
            </motion.div>
          ))}

          {/* Card Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.5,
              delay: 0.3 + sponsors.length * 0.05,
              ease: "easeOut",
            }}
            className="group flex flex-row gap-4 items-center justify-center rounded-xl border-2 border-dashed border-white/50 bg-white/5 p-8 transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            <p className="flex flex-col justify-center items-start text-center text-base font-bold uppercase tracking-wide text-white sm:text-lg">
              Sua{" "}
              <span className="text-xl font-black font-heading sm:text-2xl">
                MARCA
              </span>{" "}
              aqui
            </p>
            <ArrowUpRight className="h-8 w-8 text-white transition-colors group-hover:text-white lg:h-12 lg:w-12" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
