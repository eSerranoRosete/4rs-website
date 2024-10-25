"use client";

import { ParallaxImg } from "./ParallaxImg";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
};

export const FeatureCard = ({ title, description, imgUrl }: Props) => {
  return (
    <div className="relative h-full overflow-hidden">
      <div className="relative m-auto aspect-square w-full overflow-hidden rounded">
        <ParallaxImg
          src={imgUrl}
          className="absolute left-0 top-0 h-full w-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t from-black to-transparent">
          <div className="absolute bottom-0 left-0 w-full rounded-bl bg-gradient-to-t from-brand/40 to-transparent p-3 text-center text-sm text-brand-foreground">
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
