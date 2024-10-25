import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { Container } from "./Container";
import { PageSection } from "./PageSection";

export const ContactBanner = () => {
  return (
    <PageSection className="bg-muted md:py-32">
      <div className="absolute left-0 top-0 z-10 h-full w-full bg-brand text-brand-foreground"></div>

      <Container>
        <div className="relative z-20 flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:text-left">
          <h2 className="mb-8 text-balance text-3xl font-bold md:w-2/3 md:text-7xl">
            ¿Qué podemos ayudarte a lograr?
          </h2>
          <Link href="/contacto" className="flex items-center gap-2">
            <span className="inline-block md:text-xl">Contáctanos</span>
            <span className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-white/30">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand">
                <ArrowRightIcon />
              </span>
            </span>
          </Link>
        </div>
      </Container>
    </PageSection>
  );
};
