"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { achievements } from "@/constants/achivements";

const medalLabel: Record<"gold" | "silver" | "bronze" | "none", string> = {
  gold: "Primeiro lugar",
  silver: "Segundo lugar",
  bronze: "Terceiro lugar",
  none: "Participação",
};

function TournamentsBlock({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className="w-full space-y-2 text-left flex flex-col items-center">
      <h4 className="font-sans font-semibold text-lg uppercase tracking-wide text-muted-foreground">
        {title}
      </h4>

      <ul className="list-disc list-inside space-y-1 text-[13px] lg:text-base font-sans">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function AchievementsSlider() {
  const [api, setApi] = React.useState<any>(null);
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-full">
      <Carousel
        setApi={setApi}
        className="relative w-full max-w-3xl mx-auto"
        opts={{
          align: "center",
        }}
      >
        <CarouselContent className="items-center">
          {achievements.map((achievement) => (
            <CarouselItem
              key={achievement.id}
              className="basis-full flex justify-center"
            >
              <div className="w-full max-w-xl rounded-xl border p-6 space-y-4 bg-background">
                <h3 className="font-heading text-3xl uppercase w-full text-center">
                  {medalLabel[achievement.medal_type]}
                </h3>

                <TournamentsBlock
                  title="Regionais"
                  items={achievement.tournaments.regional}
                />

                <TournamentsBlock
                  title="Nacionais"
                  items={achievement.tournaments.nacional}
                />

                <TournamentsBlock
                  title="Internacionais"
                  items={achievement.tournaments.internacional}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Botões laterais — Desktop */}
        <div className="hidden lg:flex">
          <CarouselPrevious className="-left-14" />
          <CarouselNext className="-right-14" />
        </div>
      </Carousel>

      {/* Dots — Mobile */}
      <div className="mt-6 flex justify-center gap-2 lg:hidden">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-colors",
              current === index ? "bg-primary" : "bg-muted-foreground/30"
            )}
          />
        ))}
      </div>
    </div>
  );
}
