import Image from "next/image";
import medals from "@/assets/images/medals.png";

const medalsValue = [
  {
    id: 1,
    text: "Ouros",
    quantity: "29",
  },
  {
    id: 2,
    text: "Pratas",
    quantity: "11",
  },
  {
    id: 3,
    text: "Bronzes",
    quantity: "9",
  },
];

export function ResultsMedals() {
  return (
    <div className="absolute z-20 w-full px-[10%] top-0 flex justify-center items-center">
      <Image
        src={medals}
        alt="Medalhas do CAMV Sports"
        className="w-full h-auto object-cover"
        priority
      />

      <div
        key={medalsValue[0].id}
        className="absolute z-30 top-[40%] flex flex-col items-center"
      >
        <span className="text-4xl 2xl:text-[200px] font-heading text-white">
          {medalsValue[0].quantity}
        </span>
        <span className="text-5xl uppercase font-heading text-white -mt-6">
          {medalsValue[0].text}
        </span>
      </div>

      <div
        key={medalsValue[1].id}
        className="absolute z-30 top-[20%] left-1/4 flex flex-col items-center"
      >
        <span className="text-4xl xl:text-[150px] font-heading font-bold text-white">
          {medalsValue[1].quantity}
        </span>
        <span className="text-4xl font-heading uppercase text-white -mt-6">
          {medalsValue[1].text}
        </span>
      </div>

      <div
        key={medalsValue[2].id}
        className="absolute z-30 top-[20%] right-1/4 flex flex-col items-center"
      >
        <span className="text-4xl xl:text-[150px] font-heading font-bold text-white">
          {medalsValue[2].quantity}
        </span>
        <span className="text-4xl font-heading uppercase text-white -mt-6">
          {medalsValue[2].text}
        </span>
      </div>
    </div>
  );
}
