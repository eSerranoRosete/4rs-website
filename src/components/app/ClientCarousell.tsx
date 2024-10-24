import { internationalClientLogos } from "@/data/internationalClients";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

type Props = {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  reverseItems?: boolean;
};

export const ClientCarousell = ({
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  reverseItems = false,
}: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const items = reverseItems
    ? internationalClientLogos.reverse()
    : internationalClientLogos;

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
        containerRef.current.style.setProperty("--animation-duration", "400s");
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
          "flex h-full w-max min-w-full shrink-0 flex-nowrap items-center gap-20",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((logo) => (
          <img
            key={logo}
            src={logo}
            alt="Client Logo"
            className="h-full w-32"
          />
        ))}
      </ul>
    </div>
  );
};
