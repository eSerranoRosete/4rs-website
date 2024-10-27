import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { PageSection } from "./PageSection";

export const ContactBanner = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <PageSection fullHeight>
      <div
        ref={container}
        className="container relative h-full w-full overflow-hidden rounded"
      >
        <img
          src="/contact.jpg"
          className="absolute left-0 top-0 h-full w-full object-cover object-center md:object-left-top"
        />

        <motion.div
          style={{ y }}
          className="dark absolute left-0 top-0 flex h-full w-full items-end justify-center bg-gradient-to-t from-black to-transparent p-10 pb-32 text-foreground md:pb-20"
        >
          <div className="flex flex-col items-center justify-between md:flex-row">
            <h2 className="mb-8 text-balance text-3xl font-bold md:w-2/3 md:text-6xl">
              ¿Qué podemos ayudarte a lograr?
            </h2>
            <motion.div style={{ x: y }}>
              <Link href="/contacto" className="flex items-center gap-2">
                <span className="inline-block md:text-xl">Contáctanos</span>
                <span className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-white/30">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand">
                    <ArrowRightIcon />
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </PageSection>
  );
};
