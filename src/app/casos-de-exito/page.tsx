"use client";

import { CaseStudyPreview } from "@/components/app/CaseStudyPreview";
import { Container } from "@/components/app/Container";
import { Footer } from "@/components/app/Footer";
import { NavBar } from "@/components/app/Navbar";
import { PageSection } from "@/components/app/PageSection";
import { successStories } from "@/data/successStories";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <main>
      <NavBar />
      <PageSection className="mt-14">
        <Container className="h-full rounded-xl relative overflow-hidden">
          <img
            src="/Office_Workers_Laughing_original_548606.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
          />
          <div className="w-full h-full bg-gradient-to-t from-black/70 text-white to-transparent py-72 px-10 flex flex-col gap-2 items-center">
            <div className="absolute md:left-1/2 md:-translate-x-1/2 flex flex-col gap-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl text-center font-semibold md:max-w-4xl md:m-auto"
              >
                Descubre cómo hemos ayudado a nuestros clientes a alcanzar el
                éxito con nuestras soluciones
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center text-xl"
              >
                Implementaciones y monitoreo que brindan seguridad y confianza
              </motion.p>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <div className="w-full h-full grid md:grid-cols-2 lg:md-cols-3 mt-10 gap-10">
            {successStories.map((c, i) => (
              <CaseStudyPreview key={i} item={c} />
            ))}
          </div>
        </Container>
      </PageSection>
      <Footer />
    </main>
  );
}
