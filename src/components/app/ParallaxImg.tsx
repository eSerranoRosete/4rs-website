import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export const ParallaxImg = ({ src, className, alt }: Props) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.img
        style={{ y, scale: 1.2 }}
        className={cn(className)}
        src={src}
        alt={alt}
      />
    </div>
  );
};
