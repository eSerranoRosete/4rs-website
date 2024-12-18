"use client";

import { cn } from "@/lib/utils";
import { IFSuccessStory } from "@/types/CasesTypes";
import React, { useEffect, useState } from "react";
import { SuccessStoryCard } from "./SuccessStoryCard";

type Props = {
  items: IFSuccessStory[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
};

export const SuccessStories = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 m-auto w-full overflow-hidden",
        className,
      )}
    >
      <div className="absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-background to-transparent"></div>
      <div className="absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-background to-transparent"></div>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex h-full w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item) => (
          <SuccessStoryCard key={item.title} item={item} />
        ))}
      </ul>
    </div>
  );
};
