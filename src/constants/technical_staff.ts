import jeidePhoto from "@/assets/images/project_coach.png";
import { StaticImageData } from "next/image";

type ITechnicalStaff = {
  id: number;
  name: string;
  role: string;
  image?: string | StaticImageData;
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
    name: "Diego Cavalcante",
    role: "Treinador",
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
    name: "Marco Tulio",
    role: "Social Media",
  },
  {
    id: 6,
    name: "Katiuscia Marqueszin",
    role: "Psicóloga",
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
  },
];
