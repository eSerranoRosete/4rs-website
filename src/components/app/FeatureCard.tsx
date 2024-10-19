"use client";

import { ParallaxImg } from "./ParallaxImg";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
};

export const FeatureCard = ({ title, description, imgUrl }: Props) => {
  return (
    <div className="overflow-hidden h-full relative">
      <div className="aspect-square w-full m-auto relative overflow-hidden rounded-md">
        <ParallaxImg
          src={imgUrl}
          className="w-full h-full object-cover absolute top-0 left-0 object-center"
        />
        <div className="w-full h-1/2 bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 z-10">
          <div className="absolute p-3 bottom-0 w-full left-0 bg-gradient-to-l from-brand text-brand-foreground to-transparent rounded-bl text-sm text-center">
            <p className="text-2xl font-semibold">{title}</p>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
