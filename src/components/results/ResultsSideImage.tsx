import Image from "next/image";
import playerScreaming from "@/assets/images/player_screaming.png";

export function ResultsSideImage() {
  return (
    <div className="hidden lg:block relative min-h-screen">
      <Image
        src={playerScreaming}
        alt="Jogador comemorando"
        fill
        className="object-cover"
        sizes="20vw"
        priority
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
    </div>
  );
}


