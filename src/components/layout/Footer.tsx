"use client";

import Image from "next/image";
import { ArrowUpRight, Instagram } from "lucide-react";
import heroLogo from "@/assets/icons-logo/Logo CAMV Sports.png";
import { motion } from "framer-motion";
import { VolleyNet } from "./VolleyNet";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center pb-12">
      <VolleyNet />
      <div className="flex flex-col gap-7 md:gap-10 lg:gap-14 xl:gap-20 w-full text-center max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-12">
        <p className="uppercase font-sans font-bold">
          Faça parte desse projeto{" "}
          <span className="text-accent text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading tracking-wider">
            vencedor
          </span>
        </p>

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
            <span className="uppercase font-bold lg:text-lg">
              Junte-se conosco
            </span>
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
          </a>
        </motion.div>
      </div>

      <div className="h-px w-4/5 max-w-7xl px-4 bg-white/40 my-12" />

      <div className="w-full max-w-7xl px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16">
            <Image
              src={heroLogo}
              alt="Logo CAMV Sports"
              fill
              className="object-contain drop-shadow-lg"
              sizes="48px"
              priority
            />
          </div>
          <span className="font-heading text-sm font-semibold tracking-[0.18em] uppercase sm:block lg:text-base">
            CAMV <br /> Sports
          </span>
        </div>
        <p className="text-foreground/70 font-sans text-sm text-left lg:text-center">
          Rua X, Qd. XX, Setor Xxxxxxx, N° XXXX <br /> Goiânia - Goiás • CEP:
          70000-000
        </p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="lg:flex items-center gap-3 text-xs text-white/70"
        >
          <a
            href="https://www.instagram.com/camv_supervolei/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-transparent p-4 text-sm font-medium border border-foreground/40 transition-all hover:bg-muted/10 hover:scale-105"
          >
            <Instagram size={18} />
          </a>
        </motion.div>
      </div>

      <div className="w-full max-w-3xl px-4 lg:px-16 text-center text-foreground/60 text-xs mt-6">
        © 2026 <span className="text-white font-bold">CAMV SPORTS</span> • Todos
        direisto reservados <br />
        Desenvolvido por{" "}
        <a
          href="https://portfolio-v-final-plum.vercel.app/"
          className="text-white hover:underline font-bold"
        >
          Dev Paulo Bruno Dias
        </a>
      </div>
    </footer>
  );
};

export default Footer;
