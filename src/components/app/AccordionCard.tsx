"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ColoredText } from "./animated-text/ColoredText";
import { Subtitle } from "./Subtitle";

type Props = {
  index: number;
  active: number;
  setActive?: (value: number) => void;

  item: AccordionItem;
};

export type AccordionItem = {
  imgSrc: string;
  title: string;
  description: string;
};

export const AccordionCard = ({ active, setActive, index, item }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 * index, duration: 0.4 }}
      ref={containerRef}
      onMouseEnter={() => setActive?.(index)}
      className={cn(
        "group relative w-1/3 overflow-hidden p-2",
        active === index && "w-2/3",
      )}
    >
      <div className="grid h-full w-full grid-cols-2 gap-3">
        <div
          className={cn(
            "absolute left-0 top-0 z-10 -m-2 h-full w-full rounded p-2",
            active === index &&
              "bg-gradient-to-l opacity-100 transition-all duration-1000",
          )}
        />
        <div
          className={cn(
            "relative col-span-2 h-full w-full overflow-hidden rounded bg-background",
            active === index && "col-span-1",
          )}
        >
          <img
            src={item.imgSrc}
            alt={item.title}
            className="h-full object-cover"
          />
        </div>
        <div
          className={cn(
            "absolute right-0 top-0 z-10 h-full w-full translate-x-full rounded opacity-0 duration-500",
            active === index && "block translate-x-1/2 opacity-100",
          )}
        >
          <div
            {...(containerRef && {
              style: {
                width: containerRef.current?.clientWidth,
              },
            })}
            className={cn(
              "flex h-full flex-col gap-4 p-4",
              !containerRef.current && "w-1/2",
            )}
          >
            <ColoredText text={item.title} className="text-left" size="lg" />
            <Subtitle className="text-left">{item.description}</Subtitle>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
