"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";
import heroTeamPhoto from "@/assets/images/hero_team_volley.jpg";
import projectTeamPhoto from "@/assets/images/project_team.png";
import projectCoachPhoto from "@/assets/images/project_coach.png";

const galleryImages = [
  {
    id: 1,
    src: heroTeamPhoto,
    alt: "Equipe CAMV Sports com troféus",
    span: "col-span-1",
  },
  {
    id: 2,
    src: projectTeamPhoto,
    alt: "Equipe masculina CAMV Sports",
    span: "col-span-1",
  },
  {
    id: 3,
    src: projectCoachPhoto,
    alt: "Equipe feminina CAMV Sports",
    span: "col-span-1",
  },
  {
    id: 4,
    src: projectTeamPhoto,
    alt: "Equipe CAMV Sports em competição",
    span: "col-span-1",
  },
];

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
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
          <div className="rounded-lg bg-[#005096] px-6 py-2">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-white font-heading">
              Nossa Galeria de Momentos
            </span>
          </div>
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl font-black uppercase tracking-wide text-[#005096] sm:text-4xl md:text-5xl lg:text-6xl">
            Momentos que Constroem Nossa História
          </h2>
        </motion.div>

        {/* Grid de imagens - layout igual à imagem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 sm:items-stretch"
        >
          {/* Primeira imagem - topo esquerda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[4/3]"
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </motion.div>

          {/* Segunda imagem - topo direita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:aspect-[4/3]"
          >
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </motion.div>

          {/* Terceira imagem - baixo esquerda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl sm:h-full sm:aspect-auto"
          >
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </motion.div>

          {/* Quarta área - baixo direita (com 2 fotos lado a lado) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="grid grid-cols-2 gap-2 aspect-[4/3] sm:gap-3 sm:h-full sm:aspect-auto sm:items-stretch"
          >
            <div className="group relative h-full overflow-hidden rounded-xl">
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
            </div>
            <div className="group relative h-full overflow-hidden rounded-xl">
              <Image
                src={galleryImages[0].src}
                alt="Mais momentos CAMV Sports"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(min-width: 640px) 25vw, 50vw"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Botão CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <button className="group flex items-center gap-3 rounded-xl bg-[#01B6F5] px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-[#00a3dc] hover:shadow-lg hover:shadow-[#01B6F5]/40 sm:text-lg">
            <Camera className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
            <span>Veja Mais Momentos</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

