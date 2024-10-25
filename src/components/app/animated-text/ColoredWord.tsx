"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  index?: number;

  word: ColoredWord;

  size?: "sm" | "md" | "lg" | "xl";
  onAnimationComplete?: () => void;
};

export type ColoredWord = {
  text: string;
  isAccent: boolean;
};

export const ColoredWord = ({
  index = 0,

  size = "md",
  word,
  onAnimationComplete,
}: Props) => {
  const [ended, setEnded] = useState(false);

  console.log("ColoredWord", word);

  return (
    <div
      className={cn(
        "relative font-medium",
        size === "sm" && "text-lg",
        size === "md" && "text-2xl",
        size === "lg" && "text-4xl md:text-5xl",
        size === "xl" && "text-5xl md:text-7xl",
      )}
    >
      <motion.span
        initial={{ height: "0%", opacity: 0 }}
        whileInView={{ height: "100%", opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.05 * (index + 1) }}
        onAnimationStart={() => setEnded(false)}
        viewport={{ once: true, margin: "-200px" }}
        onAnimationComplete={() => {
          setEnded(true);
          if (onAnimationComplete) onAnimationComplete();
        }}
        style={{ background: "hsl(var(--brand))" }}
        className={cn(
          "relative z-20 !bg-clip-text text-transparent",
          ended && "!bg-foreground transition-colors duration-500",
          word.isAccent && `!bg-[hsl(var(--brand))]`,
        )}
      >
        {word.text}
      </motion.span>

      <span className="absolute left-0 top-0 text-muted-foreground/40">
        {word.text}
      </span>
    </div>
  );
};
