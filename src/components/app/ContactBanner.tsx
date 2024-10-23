import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "./Container";
import { PageSection } from "./PageSection";

export const ContactBanner = () => {
  return (
    <PageSection className="bg-muted md:py-32">
      <img
        src="/Toronto_Financial_District_Skyline_original_1953742.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0 grayscale"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-background to-transparent z-10"></div>

      <Container>
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left">
          <h2 className="text-3xl md:text-7xl font-bold mb-8 text-balance md:w-2/3">
            ¿Qué podemos ayudarte a lograr?
          </h2>
          <Link href="/contacto" className="flex items-center gap-2">
            <span className="inline-block md:text-xl">Contáctanos</span>
            <span className="w-16 h-16 flex items-center justify-center bg-white/30 rounded-full animate-pulse">
              <span className="w-10 h-10 inline-flex rounded-full bg-white text-brand items-center justify-center">
                <ArrowRightIcon />
              </span>
            </span>
          </Link>
        </div>
      </Container>
    </PageSection>
  );
};
