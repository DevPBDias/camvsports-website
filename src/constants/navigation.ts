export const NAV_LINKS = [
  { label: "INÍCIO", href: "#hero" },
  { label: "PROJETO", href: "#historia" },
  { label: "COMISSÃO TÉCNICA", href: "#comissao-tecnica" },
  { label: "CONQUISTAS", href: "#conquistas" },
  { label: "PATROCINADORES", href: "#patrocinadores" },
  { label: "GALERIA", href: "#galeria" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
