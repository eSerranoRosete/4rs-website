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
      <div className="aspect-square md:aspect-auto m-auto relative h-2/3 overflow-hidden rounded-md">
        <ParallaxImg
          src={imgUrl}
          className="w-full h-full object-cover absolute top-0 left-0 object-center"
        />
      </div>

      <div className="p-2 bg-background rounded-bl text-sm text-center mt-5">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};
