"use client";

import { CaseStudyPreview } from "@/components/app/CaseStudyPreview";
import { Container } from "@/components/app/Container";
import { Footer } from "@/components/app/Footer";
import { NavBar } from "@/components/app/Navbar";
import { PageSection } from "@/components/app/PageSection";
import { successStories } from "@/data/successStories";

export default function Page() {
  return (
    <>
      <NavBar />
      <PageSection className="pt-14 mb-0">
        <Container className="rounded-xl relative overflow-hidden">
          <img
            src="/Office_Workers_Laughing_original_548606.jpg"
            className="absolute top-0 left-0 w-full h-full object-cover object-center -z-10"
          />
          <div className="w-full bg-gradient-to-t from-black/70 text-white to-transparent h-[80vh] md:h-[60vh] px-10 pb-20 flex flex-col gap-2 items-center justify-end">
            <div className="flex flex-col gap-6 w-full">
              <h1 className="text-2xl md:text-5xl text-center font-semibold md:max-w-4xl md:m-auto">
                Descubre cómo hemos ayudado a nuestros clientes a alcanzar el
                éxito con nuestras soluciones
              </h1>
              <p className="text-center md:text-xl">
                Implementaciones y monitoreo que brindan seguridad y confianza
              </p>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <div className="w-full h-full grid md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
            {successStories.map((c, i) => (
              <CaseStudyPreview key={i} item={c} />
            ))}
          </div>
        </Container>
      </PageSection>
      <Footer />
    </>
  );
}
