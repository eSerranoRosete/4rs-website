"use client";

import { motion } from "framer-motion";
import { ColoredText } from "./animated-text/ColoredText";

export const AwardsAlt = () => {
  return (
    <div className="grid h-full w-full grow gap-3 md:max-h-[600px] md:grid-cols-4">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative aspect-square h-full w-full rounded md:aspect-auto"
      >
        <img
          src="/588af169be0b4689ab86b210ddbd58c9_01102024053357.png"
          alt="Awards Image"
          className="absolute left-0 top-0 h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative aspect-square h-full w-full rounded md:aspect-auto"
      >
        <img
          src="/e64056eada4742d2a5ee7d0c192a6fb9_01102024053357.png"
          alt="Awards Image"
          className="absolute left-0 top-0 h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative aspect-square h-full w-full rounded md:aspect-auto"
      >
        <img
          src="/39072982d5554eaaaaf0fbd8adf62689_01102024053356.png"
          alt="Awards Image"
          className="absolute left-0 top-0 h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative flex h-full w-full flex-col rounded"
      >
        <ColoredText
          size="lg"
          text="Certificaciones y Premios"
          className="justify-center md:justify-normal"
        />
        <p className="mt-auto text-center text-lg text-muted-foreground md:text-left md:text-xl">
          La innovación es el pilar que impulsa nuestros éxitos en 4ever. Hemos
          obtenido diversas certificaciones en tecnología avanzada y seguridad
          que avalan la calidad de nuestras soluciones.\n\n Reconocidos como uno
          de los principales integradores tecnológicos en Latinoamérica,
          nuestros premios reflejan nuestro liderazgo y compromiso en la
          creación de sistemas de seguridad inteligentes y de vanguardia,
          diseñados para transformar la protección y confianza de nuestros
          clientes.
        </p>
      </motion.div>
    </div>
  );
};
