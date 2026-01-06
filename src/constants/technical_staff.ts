import jeidePhoto from "@/assets/images/project_coach.png";
import diogoPhoto from "@/assets/team/diogo.jpeg";
import marrekoPhoto from "@/assets/team/marreko.png";
import katiusciaPhoto from "@/assets/team/katiuscia.jpeg";
import tallysonPhoto from "@/assets/team/tallyson.jpeg";
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
    role: "Treinadora",
    image: jeidePhoto,
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
  },
  {
    id: 4,
    name: "Lucilius Martins",
    role: "Fisioterapeuta",
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
  },
  {
    id: 7,
    name: "Beatriz Malta",
    role: "Odontóloga",
  },
  {
    id: 8,
    name: "Paulo Henrique Vaz",
    role: "Estagiário",
  },
  {
    id: 9,
    name: "Tallysson Cavalcante",
    role: "Estagiário",
    image: tallysonPhoto,
  },
];
