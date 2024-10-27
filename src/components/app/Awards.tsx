"use client";

import { motion } from "framer-motion";
import { Title } from "./Title";

export const Awards = () => {
  return (
    <div className="flex flex-col-reverse gap-6 md:flex-row">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative overflow-hidden rounded md:w-1/4"
      >
        <img
          src="/39072982d5554eaaaaf0fbd8adf62689_01102024053356.png"
          className="left-0 top-0 h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative overflow-hidden rounded md:w-1/4"
      >
        <img
          src="/e64056eada4742d2a5ee7d0c192a6fb9_01102024053357.png"
          className="left-0 top-0 h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative overflow-hidden rounded md:w-1/4"
      >
        <img
          src="/588af169be0b4689ab86b210ddbd58c9_01102024053357.png"
          className="left-0 top-0 h-full w-full object-cover object-center"
        />
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative flex flex-col gap-6 overflow-hidden rounded text-center md:w-1/4 md:text-left"
      >
        <Title className="m-0 md:text-left">Premios y certificaciones</Title>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-auto text-muted-foreground md:text-xl"
        >
          En 4ever, la innovación impulsa nuestro éxito. Con certificaciones en
          tecnología avanzada, lideramos en Latinoamérica en soluciones de
          seguridad inteligentes que fortalecen la confianza de nuestros
          clientes.
        </motion.p>
      </motion.div>
    </div>
  );
};
