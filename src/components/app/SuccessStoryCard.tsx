"use client";

import { IFSuccessStory } from "@/types/CasesTypes";
import Link from "next/link";

export type Props = {
  item: IFSuccessStory;
};

export const SuccessStoryCard = ({ item }: Props) => {
  return (
    <Link
      href={`/casos-de-exito/${item.slug}`}
      className="group relative aspect-square w-96 cursor-pointer overflow-hidden rounded-xl p-8"
    >
      <div className="relative z-20 text-white">
        <span className="mb-4 block text-lg">{item.location}</span>
        <h3 className="text-balance text-4xl font-semibold">{item.title}</h3>
      </div>
      <div className="pointer-events-auto absolute left-0 top-0 z-10 h-1/2 w-full bg-gradient-to-b from-black/90 to-transparent" />
      <img
        src={item.images[0].src}
        className="absolute left-0 top-0 h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
      />
    </Link>
  );
};
