"use client";

import { ParallaxImg } from "./ParallaxImg";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

type Props = {
  hint?: string;

  title: string;
  description: string;
  imgUrl: string;
  inverted?: boolean;
};

export const ShiftingCard = ({
  hint,
  title,
  description,
  imgUrl,
  inverted,
}: Props) => {
  return (
    <div className="top-0 flex w-full flex-col gap-6 bg-muted py-20 md:sticky">
      <div className="grid gap-6 md:grid-cols-5">
        <div
          className={`relative col-span-5 aspect-video overflow-hidden rounded md:col-span-2 md:aspect-square ${
            inverted ? "md:order-last" : ""
          }`}
        >
          <ParallaxImg
            src={imgUrl}
            alt="Shifting card image"
            className="absolute left-0 top-0 h-full w-full object-cover object-center"
          />
        </div>
        <div className="relative col-span-5 flex flex-col justify-start gap-6 border-t border-foreground pt-10 md:col-span-3">
          <span className="absolute right-0 top-2 z-10 text-xs uppercase">
            {hint} —
          </span>

          <Title className="m-0 text-left">{title}</Title>
          <Subtitle className="m-0 text-left">{description}</Subtitle>
        </div>
      </div>
    </div>
  );
};
