"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/icons-logo/Logo CAMV Sports.png";
import { CalendarBackground } from "./CalendarBackground";

const calendarMonths = [
  { month: "FEVEREIRO", tournaments: 1 },
  { month: "MARÇO", tournaments: 3 },
  { month: "ABRIL", tournaments: 3 },
  { month: "MAIO", tournaments: 5 },
  { month: "JUNHO", tournaments: 4 },
  { month: "AGOSTO", tournaments: 5 },
  { month: "SETEMBRO", tournaments: 5 },
  { month: "OUTUBRO", tournaments: 4 },
  { month: "NOVEMBRO", tournaments: 5 },
  { month: "DEZEMBRO", tournaments: 3 },
];

const mainCompetitions = ["CBI", "Taça Brasília", "Taça Paraná"];

export function CalendarSection() {
  return (
    <section
      id="calendario"
      className="hidden relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Padrão de rede de vôlei sutil no fundo */}
      <CalendarBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 sm:px-6 lg:px-8">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="rounded-lg bg-[#005096] px-6 py-2">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-white font-heading">
              Nosso Calendário
            </span>
          </div>
        </motion.div>

        {/* Logo e Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8"
        >
          <div className="hidden lg:block relative h-20 w-20 overflow-hidden rounded-full border-2 border-[#005096] sm:h-24 sm:w-24">
            <Image
              src={logo}
              alt="Logo CAMV Sports"
              fill
              className="object-contain p-2"
              sizes="96px"
            />
          </div>
          <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-[#005096] sm:text-4xl md:text-5xl lg:text-6xl">
            Competições de 2026
          </h2>
        </motion.div>

        {/* Texto introdutório */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mx-auto max-w-6xl text-center"
        >
          <p className="text-sm text-left lg:text-center leading-relaxed text-[#1E1E1E]/80 sm:text-base lg:text-lg">
            Investir no nosso projeto de voleibol é ter sua marca atrelada a uma
            equipe que não só participa, mas domina competições. Em 2024,
            disputamos 40 campeonatos e subimos ao pódio em 37 deles, garantindo
            exposição constante e de alto impacto. Para 2025, o cenário se
            repete: serão mais 40 torneios, todos com a presença do uniforme
            estampando a marca do patrocinador.
          </p>
        </motion.div>

        {/* Grid de meses e torneios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 lg:gap-6"
        >
          {calendarMonths.map((item, index) => (
            <div
              key={item.month}
              className="flex flex-col items-center justify-center rounded-lg bg-[#005096] p-4 text-center transition-all duration-300 hover:bg-[#005096]/90 hover:shadow-lg sm:p-6"
            >
              <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-white md:text-base lg:text-lg xl:text-xl">
                {item.month}
              </p>
              <p className="text-3xl font-black font-heading text-white md:text-4xl lg:text-5xl xl:text-6xl">
                {item.tournaments}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-white/80 lg:text-sm xl:text-lg">
                {item.tournaments === 1 ? "TORNEIO" : "TORNEIOS"}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Principais Competições */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mx-auto w-full max-w-7xl flex flex-col items-center justify-center rounded-lg border-2 border-[#005096] bg-white p-6 sm:p-8"
        >
          <h3 className="mb-4 font-heading text-xl font-black uppercase tracking-wide text-[#005096] sm:text-2xl">
            Principais Competições:
          </h3>
          <div className="flex flex-wrap gap-3">
            {mainCompetitions.map((competition) => (
              <span
                key={competition}
                className="rounded-lg bg-[#005096]/10 px-4 py-2 text-sm font-semibold text-[#005096] sm:text-base"
              >
                {competition}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
