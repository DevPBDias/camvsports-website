import jeidePhoto from "@/assets/images/project_coach.png";
import diogoPhoto from "@/assets/team/diogo.jpeg";
import marrekoPhoto from "@/assets/team/marreko.png";
import katiusciaPhoto from "@/assets/team/katiuscia.png";
import tallysonPhoto from "@/assets/team/tallyson.jpeg";
import fernandoPhoto from "@/assets/team/fernando.jpeg";
import beatrizPhoto from "@/assets/team/beatriz.png";
import pauloPhoto from "@/assets/team/paulo.jpeg";
import julioPhoto from "@/assets/team/julio.png";
import muriloPhoto from "@/assets/team/murilo.png";
import georgiaPhoto from "@/assets/team/georgia.png";
import { StaticImageData } from "next/image";

type ITechnicalStaff = {
  id: number;
  name: string;
  role: string;
  image?: string | StaticImageData;
  orientation?: string;
};

export const technical_staff: ITechnicalStaff[] = [
  {
    id: 1,
    name: "Jeide Rudgeri",
    role: "Treinadora & Gestora do Projeto",
    image: jeidePhoto,
  },
  {
    id: 10,
    name: "Julio Rudgeri",
    role: "Vice-Presidente",
    image: julioPhoto,
    orientation: "object-top",
  },
  {
    id: 2,
    name: "Diogo Cavalcante",
    role: "Treinador",
    image: diogoPhoto,
  },
  {
    id: 3,
    name: "Fernando Araújo",
    role: "Preparador Físico",
    image: fernandoPhoto,
  },
  {
    id: 4,
    name: "Lucilius Martins",
    role: "Fisioterapeuta",
  },
  {
    id: 12,
    name: "Geórgia Cunha",
    role: "Médica",
    image: georgiaPhoto,
    orientation: "object-top",
  },
  {
    id: 5,
    name: "Marco Túlio",
    role: "Social Media",
    image: marrekoPhoto,
  },
  {
    id: 6,
    name: "Katiúscia Marqueszin",
    role: "Psicóloga",
    image: katiusciaPhoto,
    orientation: "object-top",
  },
  {
    id: 7,
    name: "Beatriz Malta",
    role: "Odontóloga",
    image: beatrizPhoto,
    orientation: "object-top",
  },
  {
    id: 8,
    name: "Paulo Henrique Vaz",
    role: "Estagiário",
    image: pauloPhoto,
  },
  {
    id: 9,
    name: "Tallysson Cavalcante",
    role: "Estagiário",
    image: tallysonPhoto,
  },
  {
    id: 11,
    name: "Murilo Augusto",
    role: "Estagiário",
    image: muriloPhoto,
    orientation: "object-top",
  },
];
