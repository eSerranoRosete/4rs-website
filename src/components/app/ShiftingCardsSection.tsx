"use client";

import { LightningBoltIcon } from "@radix-ui/react-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { CctvIcon, CloudIcon } from "lucide-react";
import { useRef } from "react";
import { Container } from "./Container";
import { PageSection } from "./PageSection";
import { ShiftingCard } from "./ShiftingCard";

export const ShiftingCardsSection = () => {
  const container2 = useRef<HTMLDivElement>(null);
  const container3 = useRef<HTMLDivElement>(null);

  const scroll2 = useScroll({
    target: container2,
    offset: ["end center", "start end"],
  });
  const scroll3 = useScroll({
    target: container3,
    offset: ["end center", "start end"],
  });

  const opacity2 = useTransform(scroll2.scrollYProgress, [0, 1], [1, 0]);
  const opacity3 = useTransform(scroll3.scrollYProgress, [0, 1], [1, 0]);

  return (
    <PageSection className="bg-muted text-foreground">
      <Container>
        <div className="sticky top-0">
          <motion.div
            style={{
              opacity: opacity2,
            }}
            className="absolute left-0 top-0 z-10 h-full w-full bg-black"
          />
          <ShiftingCard
            title="Operamos como una estación central en la nube."
            description="Nuestro centro de monitoreo está construido sobre plataformas en línea y opera bajo las normas más rigurosas de la industria."
            imgUrl="/e4f6955b6c2a4e3db7192de76d4d0be0_01102024052906.png"
            hint="Disponibilidad"
            bottomIcon={CloudIcon}
          />
        </div>

        <div ref={container2} className="sticky top-0">
          <motion.div
            style={{
              opacity: opacity3,
            }}
            className="absolute left-0 top-0 z-10 h-full w-full bg-black"
          />
          <ShiftingCard
            inverted
            title="Somos la empresa líder en el país en la transformación de centros de monitoreo C2, C4 y C5 en centros inteligentes C4i y C5i."
            description="Estos centros avanzados incorporan inteligencia artificial, análisis de vídeo inteligente, drones tácticos y salas de crisis diseñadas para combatir la delincuencia de manera más efectiva y eficiente. Además, garantizamos la seguridad en la gestión de información de datos y ofrecemos protección avanzada en ciberseguridad, asegurando la integridad y la privacidad de la información."
            imgUrl="/c7c2f7921ffe4fe0bb5580b5cb7807b3_01102024052956.png"
            hint="Inovación"
            bottomIcon={CctvIcon}
          />
        </div>

        <div ref={container3} className="sticky top-0">
          <ShiftingCard
            title="Nuestros tiempos de despacho son los más rápidos y precisos de la industria."
            description="Nos esforzamos constantemente por alcanzar nuevos estándares de calidad en la industria, manteniéndonos a la vanguardia de la tecnología de seguridad."
            imgUrl="/ca53233dd43f4094b66e12fd6a83a45d_01102024053040.png"
            hint="Eficiencia"
            bottomIcon={LightningBoltIcon}
          />
        </div>
      </Container>
    </PageSection>
  );
};
