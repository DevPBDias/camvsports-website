"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import teamPhoto from "@/assets/images/new_project_team.jpg";
import { SectionTag } from "@/components/ui/SectionTag";

export function HistoryTeamSection() {
  return (
    <section id="historia" className="w-full bg-background">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex w-full flex-col items-start justify-start bg-white text-[#1E1E1E]"
      >
        <div className="h-full w-full flex flex-col lg:grid lg:grid-cols-2 lg:items-center">
          {/* Coluna texto: o projeto */}
          <div className="w-full flex flex-col justify-start items-start gap-5 px-6 lg:px-16 py-14 xl:px-24 2xl:px-32 lg:justify-center">
            <SectionTag text="Nossa história" className="justify-start" />

            <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-background md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl">
              O PROJETO <br />
              CAMV SPORTS
            </h2>

            <p className="w-full font-medium text-sm lg:text-base 2xl:text-xl leading-relaxed text-[#1E1E1E]/80 sm:text-base">
              O Centro de Atividades Mais Vôlei (CAMV) começou em agosto de 2018
              em Uberlândia (MG), em parceria com a ABCD, o Instituto Algar, o
              Governo de Minas Gerais e o Instituto Formação Vamos Crescer.
            </p>
            <p className="w-full font-medium text-sm lg:text-base 2xl:text-xl leading-relaxed text-[#1E1E1E]/80 sm:text-base">
              O nosso intuito sempre foi atender atletas masculinos e femininos
              de seis anos até a categoria adulta, levando a prática do
              voleibol, mas também trazendo valores morais em sua formação como
              indivíduo.
            </p>
            <p className="w-full font-medium text-sm lg:text-base 2xl:text-xl leading-relaxed text-[#1E1E1E]/80 sm:text-base">
              Em 2025, decidimos expandir o CAMV e trazê-lo para Goiânia (GO),
              com Jeide Rudgeri como gestora. Atualmente, temos dois Centros de
              Treinamentos, contando com mais de 220 atletas.
            </p>
          </div>

          {/* Coluna imagem do time */}
          <div className="relative h-72 w-full overflow-hidden sm:h-80 lg:h-full">
            <Image
              src={teamPhoto}
              alt="Equipe CAMV Sports"
              fill
              className="object-cover object-top overflow-hidden"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
