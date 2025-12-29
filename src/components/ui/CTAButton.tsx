"use client";

import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}

export function CTAButton({
  href,
  children,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  external = false,
  className = "",
}: CTAButtonProps) {
  const baseStyles =
    "hover:scale-105 cursor-pointer group gap-3 min-w-48 lg:min-w-64 2xl:min-w-80 inline-flex items-center justify-center rounded-xl px-6 py-2 text-sm text-white shadow-lg transition hover:translate-y-px";

  const variantStyles = {
    primary: "bg-accent shadow-accent/40 hover:bg-accent/80",
    secondary:
      "border border-white/40 bg-white/5 shadow-md backdrop-blur-md hover:bg-white/10",
  };

  const externalProps = external
    ? { target: "_blank", rel: "noreferrer noopener" }
    : {};

  return (
    <a
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...externalProps}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
      )}
      <span className="uppercase font-bold lg:text-lg">{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon className="h-5 w-5 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
      )}
    </a>
  );
}
