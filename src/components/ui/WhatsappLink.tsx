"use client";

import { SOCIAL_LINKS } from "@/constants/social";
import whatsappIcon from "@/assets/icons-logo/whatsapp.png";
import Image from "next/image";

interface WhatsappLinkProps {
  showUsername?: boolean;
  variant?: "header" | "footer";
  className?: string;
}

export function WhatsappLink({
  showUsername = true,
  variant = "header",
  className = "",
}: WhatsappLinkProps) {
  const { url } = SOCIAL_LINKS.whatsapp;

  const variantStyles = {
    header:
      "flex items-center gap-2 rounded-xl bg-black/30 px-4 py-2 text-sm font-medium shadow-md backdrop-blur-md transition hover:bg-black/50",
    footer:
      "flex items-center gap-2 rounded-full bg-transparent p-4 text-sm font-medium border border-foreground/40 transition-all hover:bg-muted/10 hover:scale-105",
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={`Contate o CAMV Sports no Whatsapp`}
      className={`${variantStyles[variant]} ${className}`}
    >
      <Image
        src={whatsappIcon}
        alt="Whatsapp"
        width={18}
        height={18}
        className="object-contain"
      />
    </a>
  );
}
