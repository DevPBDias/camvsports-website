"use client";

import Image from "next/image";
import medals from "@/assets/images/medals.png";

export function MedalsImage() {
  return (
    <div className="absolute z-20 w-full px-4 sm:px-[5%] md:px-[8%] lg:px-[10%] top-0 flex flex-col items-center">
      {/* Imagem das medalhas */}
      <Image
        src={medals}
        alt="Medalhas do CAMV Sports"
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}
