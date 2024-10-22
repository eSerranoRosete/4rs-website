"use client";

import { ParallaxImg } from "./ParallaxImg";

type Props = {
  hint?: string;

  title: string;
  description: string;
  imgUrl: string;
  inverted?: boolean;

  bottomIcon: React.ElementType;
};

export const ShiftingCard = ({
  hint,
  title,
  description,
  imgUrl,
  inverted,
  bottomIcon: BottomIcon,
}: Props) => {
  return (
    <div className="w-full md:sticky top-0 py-20 flex flex-col gap-6 bg-muted">
      <div className="grid md:grid-cols-5 gap-6">
        <div
          className={`col-span-5 md:col-span-2 aspect-video md:aspect-square relative overflow-hidden rounded-xl ${
            inverted ? "md:order-last" : ""
          }`}
        >
          <ParallaxImg
            src={imgUrl}
            alt="Shifting card image"
            className="object-cover object-center absolute top-0 left-0 w-full h-full"
          />
        </div>
        <div className="col-span-5 md:col-span-3 border-t border-foreground flex flex-col gap-6 justify-between relative">
          <span className="absolute top-2 right-0 uppercase text-xs z-10">
            {hint} —
          </span>

          <h2 className="text-center md:text-left text-3xl md:text-4xl font-medium tracking-tight max-w-lg text-balance mt-10 z-10 relative">
            {title}
          </h2>

          <p className="text-center md:text-left text-xl font-light max-w-2xl relative z-10">
            {description}
          </p>

          <BottomIcon className="hidden md:inline-block w-10 h-16 z-16 text-brand" />
        </div>
      </div>
    </div>
  );
};
