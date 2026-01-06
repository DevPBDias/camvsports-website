"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

import heroLogo from "@/assets/icons-logo/Logo CAMV Sports.png";
import { NAV_LINKS } from "@/constants/navigation";
import { InstagramLink } from "@/components/ui/InstagramLink";
import { WhatsappLink } from "../ui/WhatsappLink";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12 xl:px-16 transition-all duration-300 ${
        isScrolled
          ? "bg-[#005096]/95 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <a
        href="#hero"
        className="flex items-center gap-3 hover:scale-105 transition duration-300"
      >
        <div className="relative h-10 w-10 sm:h-12 sm:w-12">
          <Image
            src={heroLogo}
            alt="Logo CAMV Sports"
            fill
            className="object-contain drop-shadow-lg"
            sizes="48px"
            priority
          />
        </div>
        <span className="hidden font-heading text-sm font-semibold tracking-[0.08em] uppercase sm:block leading-none">
          CAMV <br /> Sports
        </span>
      </a>

      {/* Navegação desktop */}
      <nav className="hidden items-center font-sans gap-3 lg:gap-4 xl:gap-5 text-xs font-medium uppercase tracking-[0.15em] lg:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleNavigate}
            className="transition hover:text-[#01B6F5] whitespace-nowrap"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Social - Instagram */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: "easeOut" }}
        className="lg:flex items-center gap-3 text-xs text-white/70 hidden"
      >
        <InstagramLink variant="header" showUsername={false} />
        <WhatsappLink variant="header" />
      </motion.div>

      {/* Botão burger (mobile/tablet) */}
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white shadow-md backdrop-blur-md transition hover:bg-white/10 lg:hidden"
        aria-label="Abrir menu"
        onClick={handleToggleMenu}
      >
        {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Menu mobile / tablet */}
      <div
        className={`lg:hidden absolute left-0 right-0 top-full origin-top border-t border-white/10 bg-[#005096]/98 backdrop-blur-md transition-all duration-300 ${
          isMenuOpen
            ? "scale-y-100 opacity-100"
            : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4 text-sm font-medium uppercase tracking-[0.18em]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavigate}
              className="rounded-md px-2 py-2 text-white/90 transition hover:bg-white/10 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
