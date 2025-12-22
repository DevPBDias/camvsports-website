import { motion } from "framer-motion";
import { ArrowDownCircleIcon, Instagram } from "lucide-react";

export function HeroContent() {
  return (
    <section className="flex w-full h-full flex-col justify-center items-center px-3 pt-4 sm:px-6 sm:pb-14 lg:px-[15%] lg:pb-24 lg:pt-28">
      {/* Bloco de texto (mobile centralizado, desktop alinhado à esquerda) */}
      <div className="flex w-full flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-7xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[85px]"
        >
          Transformando vidas e construindo{" "}
          <span className="text-accent text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[85px] font-heading tracking-wider">
            CAMPEÕES
          </span>{" "}
          através do voleibol.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="mt-4 max-w-5xl text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-accent font-medium sm:text-base lg:mt-6"
        >
          O CAMV Sports é um projeto de alto rendimento e formação esportiva que
          compete nos principais campeonatos do Brasil.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="mt-6 px-3 flex w-full flex-col gap-3 sm:px-0 sm:flex-row sm:justify-center uppercase font-bold"
        >
          <a
            href="#projeto"
            className="min-w-48 2xl:min-w-80 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm text-white shadow-lg shadow-accent/40 transition hover:translate-y-px hover:bg-accent/80"
          >
            Conheça o projeto
          </a>
          <a
            href="#patrocinadores"
            className="min-w-48 2xl:min-w-80 inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/5 px-6 py-3 text-sm text-white shadow-md backdrop-blur-md transition hover:bg-white/10"
          >
            Seja um patrocinador
          </a>
        </motion.div>

        {/* Social - focando no Instagram por enquanto */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
          className="mt-6 flex items-center gap-3 text-xs text-white/70"
        >
          <span className="hidden text-[11px] uppercase tracking-[0.22em] sm:inline">
            Acompanhe nosso dia a dia
          </span>
          <a
            href="https://www.instagram.com/camv_supervolei/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-xl bg-black/30 px-4 py-2 text-xs font-medium shadow-md backdrop-blur-md transition hover:bg-black/50"
          >
            <Instagram size={16} />
            <span>@camv_supervolei</span>
          </a>
        </motion.div>

        {/* Botão de scroll para baixo */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: "easeOut" }}
          className="absolute bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-20 2xl:bottom-24 flex items-center gap-2 px-4 py-2 text-xs font-medium transition hover:text-accent"
        >
          <ArrowDownCircleIcon className="animate-bounce w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        </motion.button>
      </div>
    </section>
  );
}
