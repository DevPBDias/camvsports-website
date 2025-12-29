"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";
import heroTeamPhoto from "@/assets/images/gallery_prizes.png";
import projectTeamPhoto from "@/assets/images/project_team.png";
import projectCoachPhoto from "@/assets/images/project_coach.png";
import manTeamPhoto from "@/assets/images/man_team.png";
import womenTeamPhoto from "@/assets/images/women_team.png";

const galleryImages = [
  {
    id: 1,
    src: heroTeamPhoto,
    alt: "Equipe CAMV Sports com troféus",
  },
  {
    id: 2,
    src: manTeamPhoto,
    alt: "Equipe masculina CAMV Sports",
  },
  {
    id: 3,
    src: projectCoachPhoto,
    alt: "Treinadora da CAMV Sports",
  },
  {
    id: 4,
    src: projectTeamPhoto,
    alt: "Equipe feminina CAMV Sports",
  },
  {
    id: 5,
    src: womenTeamPhoto,
    alt: "Equipe feminina CAMV Sports",
  },
];

export function GallerySection() {
  return (
    <section
      id="galeria"
      className="w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 lg:gap-12 px-5 sm:px-6 lg:px-8">
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
            Momentos que Constroem <br />
            Nossa História
          </h2>
        </motion.div>

        {/* Grid de imagens - layout 2x2 com alturas fixas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {/* 1. Topo Esquerda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-xl sm:rounded-2xl bg-[#005096]/5"
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#005096]/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center">
              <p className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-4 px-2 text-center">
                {galleryImages[0].alt}
              </p>
            </div>
          </motion.div>

          {/* 2. Topo Direita */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="group relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-xl sm:rounded-2xl bg-[#005096]/5"
          >
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#005096]/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center">
              <p className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-4 px-2 text-center">
                {galleryImages[1].alt}
              </p>
            </div>
          </motion.div>

          {/* 3. Baixo Esquerda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-xl sm:rounded-2xl bg-[#005096]/5"
          >
            <Image
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#005096]/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center">
              <p className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-4 px-2 text-center">
                {galleryImages[2].alt}
              </p>
            </div>
          </motion.div>

          {/* 4. Baixo Direita (2 imagens lado a lado) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="group relative h-full overflow-hidden rounded-lg sm:rounded-xl bg-[#005096]/5"
            >
              <Image
                src={galleryImages[3].src}
                alt={galleryImages[3].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#005096]/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center">
                <p className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-4 px-2 text-center">
                  {galleryImages[3].alt}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group relative h-full overflow-hidden rounded-lg sm:rounded-xl bg-[#005096]/5"
            >
              <Image
                src={galleryImages[4].src}
                alt={galleryImages[4].alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#005096]/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center">
                <p className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-4 px-2 text-center">
                  {galleryImages[4].alt}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Botão CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center"
        >
          <a
            href="https://www.instagram.com/camv_supervolei/"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:scale-105 cursor-pointer group gap-3 min-w-48 lg:min-w-64 2xl:min-w-80 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm text-white shadow-lg shadow-accent/40 transition hover:translate-y-px hover:bg-accent/80"
          >
            <Camera className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
            <span className="uppercase font-bold lg:text-lg">
              Veja Mais Momentos
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
