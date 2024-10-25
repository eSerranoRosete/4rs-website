"use client";

import React, { useEffect } from "react";

import { createPortal } from "react-dom";
import { ColoredText } from "./animated-text/ColoredText";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LoadingScreen = () => {
  return createPortal(<LoadingScreenPortal />, document.body);
};

export const LoadingScreenPortal = () => {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <motion.div
      className={cn(
        "absolute left-0 top-0 z-[1000] flex h-full w-full items-center justify-center bg-background",
        loading ? "opacity-100" : "opacity-0",
      )}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        <ColoredText
          text="Tu aliado en seguridad y monitoreo."
          className="max-w-3xl justify-center text-center font-medium"
          size="lg"
          onAnimationComplete={() => {
            setLoading(false);

            document.body.style.overflow = "auto";
          }}
        />
      </motion.div>
    </motion.div>
  );
};
