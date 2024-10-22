import React from "react";

type Props = {
  title: string;
  description: string;
  imgUrl: string;
  bgColor?: string;
};

export const ProductLineCard = ({
  title,
  description,
  imgUrl,
  bgColor,
}: Props) => {
  return (
    <div className="relative overflow-hidden cursor-pointer aspect-square md:aspect-auto rounded-xl">
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-b from-black/40 to-black via-transparent z-10" />

      <span className="absolute top-3 right-3 text-white text-lg border-t border-r border-t-white border-r-white rounded-tr-2xl p-2 z-10">
        Para Individuos
      </span>

      <div
        style={{ backgroundColor: bgColor }}
        className="absolute top-0 left-0 w-full h-full z-10"
      >
        <img
          src={imgUrl}
          className="w-full h-full object-contain object-center absolute top-0 left-0"
        />
      </div>
      <div className="w-full h-1/2 bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 z-10">
        <div className="absolute p-3 bottom-0 w-full left-0 bg-gradient-to-l from-brand text-brand-foreground to-transparent rounded-bl text-sm text-center">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
