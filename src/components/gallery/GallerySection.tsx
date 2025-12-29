"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";
import heroTeamPhoto from "@/assets/images/gallery_prizes.png";
import projectTeamPhoto from "@/assets/images/project_team.png";
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
    src: projectTeamPhoto,
    alt: "Equipe feminina CAMV Sports",
  },
  {
    id: 4,
    src: womenTeamPhoto,
    alt: "Equipe feminina CAMV Sports",
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
            Momentos que Constroem <br />
            Nossa História
          </h2>
        </motion.div>

        {/* Grid de imagens - 1 coluna mobile, 2 colunas desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group relative aspect-video overflow-hidden rounded-xl sm:rounded-2xl bg-[#005096]/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#005096]/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center">
                <p className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4 px-4 text-center">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}
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
