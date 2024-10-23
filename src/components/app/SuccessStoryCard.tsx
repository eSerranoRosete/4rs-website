"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ParallaxImg } from "./ParallaxImg";
import Link from "next/link";
import { IFSuccessStory } from "@/types/CasesTypes";

export type Props = {
  item: IFSuccessStory;
};

export const SuccessStoryCard = ({ item }: Props) => {
  return (
    <Link
      href={`/casos-de-exito/${item.slug}`}
      className="w-96 overflow-hidden h-full cursor-pointer shrink-0 relative p-8 hover:opacity-90 rounded-xl"
    >
      <div className="relative z-20 text-white">
        <span className="text-lg mb-4 block">{item.location}</span>
        <h3 className="text-4xl font-semibold text-balance">{item.title}</h3>
      </div>
      <div className="w-full h-1/2 bg-gradient-to-b from-black/90 to-transparent absolute top-0 left-0 z-10" />
      <ParallaxImg
        src={item.images[0].src}
        className="absolute w-full h-full top-0 left-0 object-cover object-center"
      />
    </Link>
  );
};
