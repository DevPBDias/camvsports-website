import Image from "next/image";
import medals from "@/assets/images/Medals.png";

export function ResultsMedals() {
  return (
    <div className="w-full flex justify-center mb-8 sm:mb-10 md:mb-12">
      <div className="relative w-full max-w-2xl h-auto">
        <Image
          src={medals}
          alt="Medalhas do CAMV Sports"
          width={800}
          height={400}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}


