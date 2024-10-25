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
    <div className="relative aspect-square cursor-pointer overflow-hidden rounded md:aspect-auto">
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-b from-black/40 via-transparent to-black" />

      <span className="absolute right-3 top-3 z-10 rounded-tr-2xl border-r border-t border-r-white border-t-white p-2 text-lg text-white">
        Para Individuos
      </span>

      <div
        style={{ backgroundColor: bgColor }}
        className="absolute left-0 top-0 z-10 h-full w-full"
      >
        <img
          src={imgUrl}
          className="absolute left-0 top-0 h-full w-full object-contain object-center"
        />
      </div>
      <div className="absolute bottom-0 left-0 z-10 h-1/2 w-full bg-gradient-to-t from-black to-transparent">
        <div className="absolute bottom-0 left-0 w-full rounded-bl bg-gradient-to-t from-brand/40 to-transparent p-3 text-center text-sm text-brand-foreground">
          <p className="text-2xl font-semibold">{title}</p>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};
