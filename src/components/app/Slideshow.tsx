import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

import {
  SuccessStoryCard,
  Props as SuccessStoryCardProps,
} from "./SuccessStoryCard";

type Props = {
  items: SuccessStoryCardProps[];
};

export const Slideshow = ({ items }: Props) => {
  const [isPaused, setIsPaused] = useState(false); // State to pause scrolling
  const controls = useAnimation(); // Framer-motion controls for animation
  const [speed, setSpeed] = useState(20); // Control scrolling speed

  // Effect to control continuous scroll animation
  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: speed, // Control how fast it moves
          ease: "linear",
          repeat: Infinity,
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, speed, controls]);

  // Function to temporarily change the direction of the scrolling
  const handleManualControl = (direction: "forward" | "backward") => {
    setSpeed(2); // Temporarily increase the speed to change direction faster
    setTimeout(() => {
      setSpeed(20); // Restore original speed
    }, 1000); // Change speed back after 1 second

    controls.start({
      x: direction === "forward" ? ["0%", "-100%"] : ["-100%", "0%"],
      transition: {
        duration: 2, // How fast to jump
        ease: "linear",
      },
    });
  };

  return (
    <div
      className="overflow-hidden relative w-full h-full grow"
      onMouseEnter={() => setIsPaused(true)} // Pause on hover
      onMouseLeave={() => setIsPaused(false)} // Resume on hover out
      onTouchStart={() => setIsPaused(true)} // Mobile touch support
      onTouchEnd={() => setIsPaused(false)}
    >
      <motion.div
        animate={controls}
        className="flex flex-nowrap grow h-full gap-6"
      >
        {items.map((item, idx) => (
          <SuccessStoryCard key={idx} {...item} />
        ))}
      </motion.div>

      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 text-white bg-black/50 p-2 cursor-pointer z-10"
        onClick={() => handleManualControl("backward")}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 text-white bg-black/50 p-2 cursor-pointer z-10"
        onClick={() => handleManualControl("forward")}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Slideshow;
