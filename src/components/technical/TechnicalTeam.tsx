"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import jeidePhoto from "@/assets/images/project_coach.png";
import { TechnicalBackground } from "./TechnicalBackground";

const teamMembers = [
  {
    name: "JEIDE RUDGERI",
    role: "Treinadora Nível IV da CBV",
  },
  {
    name: "DIOGO CAVALCANTE",
    role: "Treinador Nível III da CBV",
  },
  {
    name: "FERNANDO ARAUJO",
    role: "Preparador Físico",
  },
  {
    name: "LUCILIUS MARTINS",
    role: "Fisioterapeuta",
  },
  {
    name: "MARCO TÚLIO",
    role: "Social Media",
  },
  {
    name: "KATIÚCIA MARQUEZIN",
    role: "Psicóloga",
  },
  {
    name: "BEATRIZ MALTA",
    role: "Odontóloga",
  },
  {
    name: "PAULO HENRIQUE VAZ",
    role: "Estagiário",
  },
  {
    name: "TALLYSSON CAVALCANTE",
    role: "Estagiário",
  },
];

export function TechnicalTeamSection() {
  return (
    <section
      id="comissao-tecnica"
      className="relative w-full overflow-hidden bg-[#005096] py-16 sm:py-20 lg:py-24"
    >
      {/* Padrão de rede de vôlei no fundo */}
      <TechnicalBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-5 sm:px-6 lg:px-8">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="rounded-lg bg-white px-6 py-2">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-background font-heading">
              Nossa Comissão Técnica
            </span>
          </div>
        </motion.div>

        {/* Título e subtítulo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-white md:text-4xl lg:text-5xl xl:text-6xl">
            Equipe Multidisciplinar
          </h2>
          <p className="max-w-2xl text-sm font-medium text-white/90 sm:text-base lg:text-lg">
            Focada em performance, saúde e desenvolvimento integral dos atletas
          </p>
        </motion.div>

        {/* Grid de membros da equipe */}
        <div className="grid w-full grid-cols-1 gap-4 sm:gap-2 lg:grid-cols-3 lg:gap-6 mt-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              className="group flex flex-col items-center rounded-xl bg-white/10 py-6 px-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:shadow-[#01B6F5]/20 lg:py-8 lg:px-6 border border-white/30"
            >
              {/* Foto circular */}
              <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full border-2 border-white/30 transition-all duration-300 group-hover:border-[#01B6F5] group-hover:scale-105 sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                <Image
                  src={jeidePhoto}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 128px, 112px"
                />
              </div>

              {/* Nome */}
              <h3 className="mb-2 text-center font-heading text-sm font-black uppercase tracking-wide text-white transition-colors group-hover:text-[#01B6F5] sm:text-base lg:text-lg xl:text-xl">
                {member.name}
              </h3>

              {/* Função */}
              <p className="text-center text-xs text-white/80 sm:text-sm lg:text-base">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
