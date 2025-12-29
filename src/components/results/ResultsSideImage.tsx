import Image from "next/image";
import bg_woman_results from "@/assets/images/bg_woman_results.png";

export function ResultsSideImage({ side }: { side: string }) {
  return (
    <div className={`w-1/5 hidden lg:block absolute z-10 ${side} h-full`}>
      <Image
        src={bg_woman_results}
        alt="Jogador comemorando"
        fill
        className="object-cover"
        sizes="20vw"
        priority
      />
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
    </div>
  );
}
