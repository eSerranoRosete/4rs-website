import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";

type Props = {
  from: number;
  to: number;
  suffix?: string;
  increments?: number;
};

export function StatsCounter({ from, to, suffix, increments }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let hasAnimated = false;
    const incrementAmount = increments || 1;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          const controls = animate(from, to, {
            duration: 1,
            onUpdate(value) {
              if (ref.current) {
                ref.current.textContent = (
                  Math.round(value / incrementAmount) * incrementAmount
                ).toFixed(0);
              }
            },
          });
          return () => controls.stop();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [from, to, increments]);

  return (
    <span>
      <span ref={ref} />
      {suffix}
    </span>
  );
}
