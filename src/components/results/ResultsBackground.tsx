import Image from "next/image";
import playerScreaming from "@/assets/images/player_screaming.png";

export function ResultsBackground() {
  return (
    <div className="lg:hidden absolute inset-0 z-0">
      <Image
        src={playerScreaming}
        alt="Jogador comemorando"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-white/85" />
    </div>
  );
}
