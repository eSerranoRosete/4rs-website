"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "./Container";
import { PageSection } from "./PageSection";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <div ref={ref}>
      <PageSection fullHeight noPadding>
        <div className="absolute top-0 z-10 h-14 w-full bg-gradient-to-b from-black/80 to-transparent" />
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full">
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
            <video
              src="/Digital_Tablet_With_CCTV_Camera_Footage_fhd_1651915.mp4"
              muted
              loop
              playsInline
              autoPlay
              className="absolute left-0 top-0 h-full w-full object-cover object-center"
            />
          </div>

          <Container className="flex h-full flex-col items-center justify-center md:block">
            <div className="items relative z-20 m-auto flex h-full flex-col justify-center px-6 text-white">
              <motion.div
                style={{ y }}
                className="flex flex-col justify-center gap-10"
              >
                <h1 className="max-w-4xl text-balance text-center text-5xl font-semibold tracking-tight md:text-left md:text-8xl">
                  Tu socio en seguridad y monitoreo.
                </h1>

                <p className="max-w-xl rounded-tl-2xl p-3 text-center text-base antialiased md:text-left md:text-xl">
                  Desarrollamos dispositivos y soluciones de seguridad y
                  monitoreo que abarcan desde la protección residencial hasta la
                  infraestructura de ciudades inteligentes.
                </p>
              </motion.div>
            </div>
            <div className="relative bottom-5 z-10 flex scale-90 flex-wrap items-center justify-center gap-5 md:absolute md:bottom-10 md:right-10 md:gap-10">
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
                className="w-20"
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
                className="w-20"
              />
            </div>
          </Container>
        </div>
      </PageSection>
    </div>
  );
};
