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
    <div className="top-0 flex w-full flex-col gap-6 bg-muted py-20 md:sticky">
      <div className="grid gap-6 md:grid-cols-5">
        <div
          className={`relative col-span-5 aspect-video overflow-hidden rounded-xl md:col-span-2 md:aspect-square ${
            inverted ? "md:order-last" : ""
          }`}
        >
          <ParallaxImg
            src={imgUrl}
            alt="Shifting card image"
            className="absolute left-0 top-0 h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative col-span-5 flex flex-col justify-between gap-6 border-t border-foreground md:col-span-3">
          <span className="absolute right-0 top-2 z-10 text-xs uppercase">
            {hint} —
          </span>

          <h2 className="relative z-10 mt-10 max-w-lg text-balance text-center text-3xl font-medium tracking-tight md:text-left md:text-4xl">
            {title}
          </h2>

          <p className="relative z-10 max-w-2xl text-center text-xl font-light md:text-left">
            {description}
          </p>

          <BottomIcon className="z-16 hidden h-16 w-10 text-brand md:inline-block" />
        </div>
      </div>
    </div>
  );
};
