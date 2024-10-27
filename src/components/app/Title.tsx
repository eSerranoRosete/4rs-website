"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Title = ({ children, className }: Props) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={cn(
        "m-auto max-w-3xl text-balance text-center text-4xl font-semibold tracking-tight text-foreground md:text-5xl",
        className,
      )}
    >
      {children}
    </motion.h2>
  );
};
