import { StaticImageData } from "next/image";
import logo_omni from "@/assets/icons-logo/logo_omni.png";
import logo_evolua from "@/assets/icons-logo/logo_evolua.png";
import logo_humanizart from "@/assets/icons-logo/logo_humanizart.png";
import logo_kaizen from "@/assets/icons-logo/logo_kaizen.webp";
import logo_lokamunck from "@/assets/icons-logo/logo_lokamunck.png";
import logo_vd from "@/assets/icons-logo/logo_vd.png";

export type ISponsors = {
  id: number;
  sponsor_name: string;
  logo: string | StaticImageData;
};

export const sponsors: ISponsors[] = [
  {
    id: 1,
    sponsor_name: "Centro Educacional Omni",
    logo: logo_omni,
  },
  {
    id: 2,
    sponsor_name: "Evolua",
    logo: logo_evolua,
  },
  {
    id: 3,
    sponsor_name: "Kaizen",
    logo: logo_kaizen,
  },
  {
    id: 4,
    sponsor_name: "Humanizart",
    logo: logo_humanizart,
  },
  {
    id: 5,
    sponsor_name: "Lokamunck",
    logo: logo_lokamunck,
  },
  {
    id: 6,
    sponsor_name: "Vidros Temperados",
    logo: logo_vd,
  },
];
