"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, Mail, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 text-white overflow-hidden">
      {/* Mesh Background */}
      <div className="mesh-bg" />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="relative w-64 h-32 md:w-80 md:h-40 animate-float">
            <Image
              src="/Logo CAMV Sports.png"
              alt="Camv Sports Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Hero Section */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-black tracking-tighter"
          >
            EM <span className="text-gradient">CONSTRUÇÃO</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Estamos preparando uma experiência esportiva sem precedentes. Em
            breve, o novo hub da{" "}
            <span className="text-white font-semibold">Camv Sports</span> estará
            no ar.
          </motion.p>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex gap-6 items-center"
        >
          <a
            href="https://www.instagram.com/camv_supervolei/"
            className="p-3 glass rounded-full hover:text-accent transition-colors group"
          >
            <Instagram
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </a>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Lançamento previsto: 31/12/2025
        </motion.div>
      </main>

      {/* Footer Decoration */}
      <footer className="absolute bottom-8 text-white/20 text-[10px] uppercase tracking-[0.5em] font-medium">
        © 2025 CAMV SPORTS • ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}
