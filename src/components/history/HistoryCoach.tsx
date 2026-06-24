"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import coachPhoto from "@/assets/images/project_coach.png";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function HistoryCoachSection() {
  return (
    <section className="w-full overflow-hidden bg-foreground">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex w-full flex-col lg:grid lg:grid-cols-2 lg:items-stretch lg:min-h-0"
      >
        {/* Coluna imagem da treinadora (esquerda) */}
        <div className="hidden lg:block relative h-72 w-full overflow-hidden sm:h-96 lg:h-full lg:min-h-[600px]">
          <Image
            src={coachPhoto}
            alt="Jeide Rudgeri, treinadora do CAMV Sports"
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>

        {/* Coluna texto (direita) */}
        <div className="flex w-full flex-col gap-5 px-6 py-10 lg:px-16 lg:py-12 xl:px-20 xl:py-16 2xl:px-32 lg:justify-center text-muted lg:min-h-[600px]">
          <SectionTitle variant="dark" className="text-left" delay={0}>
            JEIDE RUDGERI
          </SectionTitle>
          <p className="-mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-background/90 lg:text-sm xl:text-base 2xl:text-lg">
            Fundadora e Gestora do CAMV Sports
          </p>

          <p className="text-sm font-medium leading-relaxed sm:text-base lg:text-sm xl:text-base 2xl:text-xl">
            Jeide Cristiane Rudgeri de Brito nasceu em Goiânia. Começou a
            praticar o vôlei quando criança, tornando-se sua paixão. Desde
            então, nunca mais largou o esporte.
          </p>
          <p className="text-sm font-medium leading-relaxed sm:text-base lg:text-sm xl:text-base 2xl:text-xl">
            Em 2001, formou-se em Educação Física pela ESEFEGO, iniciando sua
            trajetória dentro do vôlei como treinadora. De lá para cá, coleciona
            inúmeras conquistas e campanhas de destaque, como vice-campeonato da
            Superliga B em 2016 pelo Universo Jaó, vice-campeonato Mineiro
            Sub-17 em 2018 e os bi-campeonatos CBS e Copa Cidade de Goiânia.
          </p>

          <h3 className="mt-4 font-heading text-xl font-bold uppercase tracking-wide text-background sm:text-2xl lg:text-2xl xl:text-3xl">
            CARREIRA
          </h3>
          <ul className="space-y-1 font-medium text-sm leading-relaxed sm:text-base lg:text-sm xl:text-base 2xl:text-xl">
            <li>
              &gt; Campeã Brasileira Sub-18 Feminino pela Seleção Goiana 2ª
              Divisão - 2016
            </li>
            <li>
              &gt; Campeã Brasileira Sub-18 Feminino pela Seleção Goiana 1ª
              Divisão - 2017
            </li>
            <li>
              &gt; Vice-campeã Superliga B Masculino (Universo Jaó) - 2017/18
            </li>
            <li>&gt; Bi-campeã da Copa Cidade de Goiânia - 2018/19</li>
            <li>&gt; Vice-campeã Mineira Sub-16 - 2019</li>
            <li>&gt; Tri-campeã Copa MPT Uberlândia - 2018/19/20</li>
            <li>&gt; Técnica Superliga C Masculino (Caldas/APAV) - 2020</li>
            <li>&gt; Campeã Campeonato Pró-Vôlei - 2020</li>
            <li>&gt; Técnica Seleção Goiana Sub-18 - 2023/24</li>
            <li>&gt; Técnica Seleção Goiana Sub-16 & Sub-18 - 2025/26</li>
          </ul>
        </div>
        {/* Coluna imagem da treinadora (esquerda) - Mobile */}
        <div className="lg:hidden relative h-80 w-full overflow-hidden md:h-96">
          <Image
            src={coachPhoto}
            alt="Jeide Rudgeri, treinadora do CAMV Sports"
            fill
            className="object-cover object-top"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
