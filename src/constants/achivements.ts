export type IAchievements = {
  id: number;
  medal_type: "gold" | "silver" | "bronze" | "none";
  year?: number;
  tournaments: {
    regional?: string[];
    nacional?: string[];
    internacional?: string[];
  };
};

export const achievements: IAchievements[] = [
  {
    id: 1,
    medal_type: "gold",
    year: 2025,
    tournaments: {
      regional: [
        "Tetracampeão Sub-18 Fem. - Copa Sesi",
        "Tetracampeão Sub-18 Masc. - Copa Sesi",
        "Tricampeão Sub-19 Fem. - Supervôlei",
        "Tricampeão Sub-16 Fem. - Copa Sesi",
        "Bicampeão Sub-16 Masc. - Copa Sesi",
        "Bicampeão Sub-18 Fem. - Copa União",
        "Bicampeão Sub-16 Fem. - Copa União",
        "Bicampeão Sub-19 Masc. - Supervôlei",
        "Bicampeão Sub-17 Fem. - Supervôlei",
        "Campeão Sub-13 Fem. - Copa Gyn",
        "Campeão Sub-15 Fem. - Copa Gyn",
        "Campeão Sub-19 Fem. - Copa Pró-Vôlei",
        "Campeão Sub-17 Fem. - Copa Pró-Vôlei",
        "Campeão Sub-17 Masc. - Copa Pró-Vôlei",
        "Campeão Sub-17 Masc.- Grand Prix Inhumas",
      ],
    },
  },
  {
    id: 2,
    medal_type: "silver",
    year: 2025,
    tournaments: {
      regional: [
        "2º lugar Sub-17 Fem. - Taça Pontalina",
        "2º lugar Sub-19 Masc. - Copa Pró-Vôlei",
      ],
    },
  },
  {
    id: 3,
    medal_type: "bronze",
    year: 2025,
    tournaments: {
      regional: [
        "3º lugar Sub-18 Masc. - Campeonato Goiano",
        "3º lugar Sub-15 Fem. - Copa Pró-Vôlei",
        "3º lugar Sub-19 Masc. - Grand Prix Inhumas",
        "3º lugar Sub-21 Masc. - Copa Promais",
      ],
    },
  },
  {
    id: 4,
    medal_type: "none",
    year: 2025,
    tournaments: {
      regional: [
        "Semifinalista Sub-15 Masc. e Fem. - Copa Pró-Vôlei",
        "Semifinalista Sub-17 Masc. e Fem. - Copa Pró-Vôlei",
        "Semifinalista Sub-19 Masc. e Fem. - Copa Pró-Vôlei",
        "4º lugar Sub-18 Fem. - Campeonato Goiano",
      ],
      nacional: [
        "4º lugar Sub-18 Fem. - Taça Brasília",
        "7º lugar na Taça Prata Sub-18 Fem. - Taça Paraná",
        "Participação Sub-17 Masc. - CBI",
        "Participação Sub-19 Masc. e Fem. - CBI",
      ],
    },
  },
];
