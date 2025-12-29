"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera } from "lucide-react";

import heroTeamPhoto from "@/assets/images/gallery_prizes.png";
import projectTeamPhoto from "@/assets/images/project_team.png";
import projectCoachPhoto from "@/assets/images/project_coach.png";
import manTeamPhoto from "@/assets/images/man_team.png";
import womenTeamPhoto from "@/assets/images/women_team.png";

import { SectionTag } from "@/components/ui/SectionTag";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { CTAButton } from "@/components/ui/CTAButton";
import { SOCIAL_LINKS } from "@/constants/social";

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
        <SectionTag text="Nossa Galeria de Momentos" />

        <SectionTitle>
          Momentos que Constroem <br />
          Nossa História
        </SectionTitle>

        {/* Grid de imagens - layout 2x2 com alturas fixas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {/* Primeiras 3 imagens */}
          {galleryImages.slice(0, 3).map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              className="group relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden rounded-xl sm:rounded-2xl bg-[#005096]/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#005096]/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center">
                <p className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-4 px-2 text-center">
                  {image.alt}
                </p>
              </div>
            </motion.div>
          ))}

          {/* 4º item (2 imagens lado a lado) */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
            {galleryImages.slice(3, 5).map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.45 + index * 0.05 }}
                className="group relative h-full overflow-hidden rounded-lg sm:rounded-xl bg-[#005096]/5"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#005096]/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-center">
                  <p className="text-white font-semibold text-xs sm:text-sm mb-2 sm:mb-4 px-2 text-center">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
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
          <CTAButton href={SOCIAL_LINKS.instagram.url} icon={Camera} external>
            Veja Mais Momentos
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
