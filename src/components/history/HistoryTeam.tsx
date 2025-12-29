"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import teamPhoto from "@/assets/images/project_team.png";
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
          <div className="w-full flex flex-col justify-start items-start gap-5 px-5 lg:px-12 py-14 xl:px-20 2xl:px-24 lg:justify-center">
            <SectionTag text="Nossa história" className="justify-start" />

            <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-background md:text-4xl lg:text-5xl xl:text-6xl">
              O PROJETO <br />
              CAMV SPORTS
            </h2>

            <p className="w-full font-medium text-sm lg:text-base 2xl:text-xl leading-relaxed text-[#1E1E1E]/80 sm:text-base">
              O projeto Centro de Atividades Mais Vôlei (CAMV) começou em agosto
              de 2018 em Uberlândia (MG), com parceria da ABCD, do Instituto
              Algar, do Governo de Minas Gerais e do Instituto Formação Vamos
              Crescer.
            </p>
            <p className="w-full font-medium text-sm lg:text-base 2xl:text-xl leading-relaxed text-[#1E1E1E]/80 sm:text-base">
              O nosso intuito é atender atletas masculinos e femininos de 6 anos
              até a categoria adulta, levando a prática do voleibol, mas também
              trazendo valores morais em sua formação como indivíduo. Contamos
              com mais de 200 atletas atendidas nesse tempo, totalizando mais de
              2.000 durante esses sete anos de trabalho.
            </p>
            <p className="w-full font-medium text-sm lg:text-base 2xl:text-xl leading-relaxed text-[#1E1E1E]/80 sm:text-base">
              Em 2025, decidimos expandir o CAMV e trazê-lo para Goiânia (GO), e
              o projeto tem Jeide Rudgeri como sua gestora. Assim como em
              Uberlândia, Jeide possui uma trajetória vitoriosa no voleibol do
              Estado de Goiás, sendo treinadora da Seleção Goiana por vários
              anos.
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
