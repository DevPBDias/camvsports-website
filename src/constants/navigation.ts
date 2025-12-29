export const NAV_LINKS = [
  { label: "PROJETO", href: "#historia" },
  { label: "COMISSÃO TÉCNICA", href: "#comissao-tecnica" },
  { label: "CONQUISTAS", href: "#conquistas" },
  { label: "RESULTADOS", href: "#resultados" },
  { label: "CALENDÁRIO", href: "#calendario" },
  { label: "PATROCÍNIOS", href: "#patrocinios" },
  { label: "GALERIA", href: "#galeria" },
] as const;

export type NavLink = (typeof NAV_LINKS)[number];
