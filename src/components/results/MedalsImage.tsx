"use client";

import Image from "next/image";
import medals from "@/assets/images/medals_numbers.png";

export function MedalsImage() {
  return (
    /* Absolute, centralizado horizontal e verticalmente no topo da seção.
       z-40 garante que fica acima de todos os outros elementos (z-0, z-10, z-30). */
    <div className="absolute z-40 -top-4 left-0 right-0 flex justify-center pointer-events-none select-none">
      <div className="relative w-full max-w-[90vw] sm:max-w-[75vw] md:max-w-[65vw] lg:max-w-[55vw] xl:max-w-[700px] 2xl:max-w-[800px] aspect-[1270/983]">
        <Image
          src={medals}
          alt="Medalhas do CAMV Sports — 29 Ouros, 11 Pratas, 9 Bronzes"
          fill
          className="object-contain"
          priority
          sizes="(min-width: 1280px) 800px, (min-width: 1024px) 55vw, (min-width: 768px) 65vw, (min-width: 640px) 75vw, 90vw"
        />
      </div>
    </div>
  );
}
