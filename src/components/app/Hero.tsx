"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { PageSection } from "./PageSection";
import { Subtitle } from "./Subtitle";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { ColoredText } from "./animated-text/ColoredText";

export const Hero = () => {
  const [opacity, setOpacity] = useState(1);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.max(1 - scrollY / 700, 0);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageSection fullHeight noPadding className="dark sticky top-0">
      <div
        className={cn(
          "pointer-events-auto absolute left-0 top-0 h-full w-full bg-background transition-all",
          ended && "opacity-0 duration-1000",
        )}
      />
      <div
        className="relative h-full w-full overflow-hidden"
        style={{ opacity }}
      >
        <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent via-background/80 to-background">
          <video
            src="/Digital_Tablet_With_CCTV_Camera_Footage_fhd_1651915.mp4"
            muted
            loop
            playsInline
            autoPlay
            className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center"
          />
        </div>

        <Container className="relative z-10 flex h-full flex-col items-center justify-center">
          <div className="flex flex-col gap-6 text-center text-white">
            <ColoredText
              text="Tu aliado en seguridad y monitoreo."
              className="max-w-4xl justify-center text-center font-medium"
              size="xl"
              onAnimationComplete={() => setEnded(true)}
            />
            <Subtitle
              className={cn(
                "text-md opacity-0 transition-opacity duration-500 md:text-xl",
                ended && "opacity-1",
              )}
            >
              Desarrollamos dispositivos y soluciones de seguridad y monitoreo
              que abarcan desde la protección residencial hasta la
              infraestructura de ciudades inteligentes.
            </Subtitle>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="absolute bottom-10 left-0 flex w-full !scale-75 flex-wrap items-center justify-center gap-10 md:scale-100"
          >
            <img
              src="/product-logos/4everalertlogow.png"
              alt="4ever-alert logo"
              className="w-20"
            />
            <img
              src="/product-logos/4everFIRElogoW.png"
              alt="4ever-alert logo"
              className="w-16"
            />
            <img
              src="/product-logos/4everGREENERGYlogoW.png"
              alt="4ever-alert logo"
              className="w-36"
            />
            <img
              src="/product-logos/4everMOVILlogoW.png"
              alt="4ever-alert logo"
              className="w-20"
            />
            <img
              src="/product-logos/4RS_White.png"
              alt="4ever-alert logo"
              className="w-20"
            />
            <img
              src="/product-logos/LogoBlancoUrbania.png"
              alt="4ever-alert logo"
              className="w-32"
            />
          </motion.div>
        </Container>
      </div>
    </PageSection>
  );
};
