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
      <PageSection className="pb-0">
        <Container className="relative overflow-hidden rounded-xl">
          <img
            src="/Office_Workers_Laughing_original_548606.jpg"
            className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center"
          />
          <div className="flex h-[80vh] w-full flex-col items-center justify-end gap-2 bg-gradient-to-t from-black/70 to-transparent px-10 pb-20 text-white md:h-[60vh]">
            <div className="flex w-full flex-col gap-6">
              <h1 className="text-center text-2xl font-semibold md:m-auto md:max-w-4xl md:text-5xl">
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
          <div className="grid h-full w-full gap-10 md:grid-cols-2 lg:grid-cols-3">
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
