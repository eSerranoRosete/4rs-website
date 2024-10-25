"use client";

import React, { useMemo } from "react";
import { ColoredWord } from "./ColoredWord";
import { cn } from "@/lib/utils";

type Props = {
  text: string;
  className?: string;

  size?: "sm" | "md" | "lg" | "xl";
  onAnimationComplete?: () => void;
};

export const ColoredText = ({
  text,
  className,

  size = "md",
  onAnimationComplete,
}: Props) => {
  const words = useMemo(() => {
    return text.split(" ").map((word) => {
      const isAccent = /<b>(.*?)<\/b>/.test(word);
      return {
        text: word.replace(/<\/?b>/g, ""),
        isAccent,
      };
    });
  }, []);

  return (
    <div
      className={cn(
        "flex flex-wrap items-center",
        size === "sm" && "gap-1",
        size === "md" && "gap-2",
        size === "lg" && "gap-2",
        size === "xl" && "gap-3",
        className,
      )}
    >
      {words.map((word, index) => (
        <ColoredWord
          size={size}
          key={index}
          index={index}
          word={word}
          {...(index === words.length - 1 && { onAnimationComplete })}
        />
      ))}
    </div>
  );
};
