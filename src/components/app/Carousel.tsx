"use client";

import { cn } from "@/lib/utils";
import { IFSuccessStory } from "@/types/CasesTypes";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useCounter } from "../hooks/useCounter";
import { Button } from "../ui/button";

type Props = {
  items: IFSuccessStory["images"][number][];
};

export const Carousel = ({ items }: Props) => {
  const singleImage = items.length === 1;

  const counter = useCounter({
    initialValue: 0,
    limit: items.length - 1,
    shouldLoop: true,
  });

  return (
    <div className="pt-20 flex flex-col w-full h-full">
      {!singleImage && (
        <div className="py-4 flex items-center justify-center gap-3">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => counter.setCount(i)}
              className={cn(
                "w-4 h-4 bg-muted rounded-full border",
                counter.count === i &&
                  "bg-brand outline outline-brand outline-offset-2"
              )}
            />
          ))}
        </div>
      )}

      <div className="relative h-full flex w-full items-center justify-center overflow-hidden">
        {!singleImage && (
          <Button
            size="icon"
            className="rounded-full absolute top-1/2 hover:scale-125 transition-all left-5 transform -translate-y-1/2 z-10"
            onClick={() => counter.increment()}
          >
            <ArrowLeftIcon className="!w-5 !h-5" />
          </Button>
        )}

        {items.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.desc}
            className={cn(
              "h-full w-full absolute inset-0 object-cover transition-transform duration-500 ease-in-out rounded-xl",
              counter.count === i ? "translate-x-0" : "translate-x-full"
            )}
            style={{ transform: `translateX(${(i - counter.count) * 100}%)` }}
          />
        ))}

        {!singleImage && (
          <Button
            size="icon"
            className="rounded-full absolute top-1/2 hover:scale-125 transition-all right-5 transform -translate-y-1/2 z-10"
            onClick={() => counter.decrement()}
          >
            <ArrowRightIcon className="!w-5 !h-5" />
          </Button>
        )}
      </div>
    </div>
  );
};
