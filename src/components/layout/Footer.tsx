"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import heroLogo from "@/assets/icons-logo/Logo CAMV Sports.png";
import { VolleyNet } from "./VolleyNet";
import { InstagramLink } from "@/components/ui/InstagramLink";
import { CTAButton } from "@/components/ui/CTAButton";
import { SOCIAL_LINKS } from "@/constants/social";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center pb-12">
      <VolleyNet />
      <div className="flex flex-col gap-7 md:gap-10 md:px-4 lg:gap-10 xl:gap-8 w-full text-center max-w-4xl text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mt-28">
        <p className="uppercase font-heading font-bold flex flex-wrap md:block items-center justify-center px-10 md:px-2">
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
          <CTAButton
            href={SOCIAL_LINKS.instagram.url}
            icon={ArrowUpRight}
            iconPosition="right"
            external
          >
            Junte-se conosco
          </CTAButton>
        </motion.div>
      </div>

      <div className="h-px w-4/5 max-w-7xl px-4 bg-white/40 mt-28 mb-12" />

      <div className="w-full max-w-6xl 2xl:max-w-7xl px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-8 lg:justify-between">
        <a
          href="#hero"
          className="flex items-center gap-3 hover:scale-105 transition-all duration-300"
        >
          <div className="relative h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24">
            <Image
              src={heroLogo}
              alt="Logo CAMV Sports"
              fill
              className="object-contain drop-shadow-lg"
              sizes="48px"
              priority
            />
          </div>
          <span className="font-heading text-base font-semibold tracking-[0.08em] uppercase sm:block lg:text-lg xl:text-xl 2xl:text-2xl leading-none">
            CAMV <br /> Sports
          </span>
        </a>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="lg:flex items-center gap-3 text-xs text-white/70"
        >
          <InstagramLink variant="footer" showUsername={false} />
        </motion.div>
      </div>

      <div className="w-full max-w-3xl px-4 lg:px-16 text-center text-foreground/60 text-xs mt-6">
        © 2026 <span className="text-white font-bold">CAMV SPORTS</span> • Todos
        direitos reservados <br />
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
