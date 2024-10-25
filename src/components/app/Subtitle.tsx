"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

interface SubtitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}

export const Subtitle = ({ className, ...props }: SubtitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <p
        className={cn(
          "m-auto max-w-2xl text-balance text-center text-lg",
          className,
        )}
        {...props}
      />
    </motion.div>
  );
};
