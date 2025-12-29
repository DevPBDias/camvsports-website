"use client";

import { Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/social";

interface InstagramLinkProps {
  showUsername?: boolean;
  variant?: "header" | "footer";
  className?: string;
}

export function InstagramLink({
  showUsername = true,
  variant = "header",
  className = "",
}: InstagramLinkProps) {
  const { url, username } = SOCIAL_LINKS.instagram;

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
      className={`${variantStyles[variant]} ${className}`}
    >
      <Instagram size={18} />
      {showUsername && variant === "header" && (
        <span className="hidden xl:flex">{username}</span>
      )}
    </a>
  );
}
