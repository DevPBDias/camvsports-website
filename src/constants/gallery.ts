import heroTeamPhoto from "@/assets/images/gallery_prizes.png";
import projectTeamPhoto from "@/assets/images/project_team.png";
import projectCoachPhoto from "@/assets/images/project_coach.png";
import manTeamPhoto from "@/assets/images/man_team.png";
import womenTeamPhoto from "@/assets/images/women_team.png";
import { StaticImageData } from "next/image";

type IGalleryImage = {
  id: number;
  src: StaticImageData;
  alt: string;
  orientation?: string;
};

export const GALLERY_IMAGES: IGalleryImage[] = [
  {
    id: 1,
    src: heroTeamPhoto,
    alt: "Equipe CAMV Sports com troféus",
  },
  {
    id: 2,
    src: manTeamPhoto,
    alt: "Equipe masculina CAMV Sports",
  },
  {
    id: 3,
    src: projectTeamPhoto,
    alt: "Equipe feminina CAMV Sports",
    orientation: "object-top",
  },
  {
    id: 4,
    src: projectCoachPhoto,
    alt: "Treinadora da CAMV Sports",
    orientation: "object-top",
  },
  {
    id: 5,
    src: womenTeamPhoto,
    alt: "Equipe feminina CAMV Sports",
  },
];
