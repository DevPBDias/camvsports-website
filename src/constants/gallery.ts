import heroTeamPhoto from "@/assets/images/gallery_prizes.png";
import projectTeamPhoto from "@/assets/images/project_team.png";
import projectCoachPhoto from "@/assets/images/project_coach.png";
import manTeamPhoto from "@/assets/images/man_team.png";
import womenTeamPhoto from "@/assets/images/women_team.png";

export const GALLERY_IMAGES = [
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
    src: projectCoachPhoto,
    alt: "Treinadora da CAMV Sports",
  },
  {
    id: 4,
    src: projectTeamPhoto,
    alt: "Equipe feminina CAMV Sports",
  },
  {
    id: 5,
    src: womenTeamPhoto,
    alt: "Equipe feminina CAMV Sports",
  },
] as const;
