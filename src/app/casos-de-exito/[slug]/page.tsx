import { Carousel } from "@/components/app/Carousel";
import { Container } from "@/components/app/Container";
import { Footer } from "@/components/app/Footer";
import { NavBar } from "@/components/app/Navbar";
import { PageSection } from "@/components/app/PageSection";
import { Button } from "@/components/ui/button";
import { successStories } from "@/data/successStories";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const { slug } = params;

  const caseStudy = successStories.find((c) => c.slug === slug);

  if (!caseStudy) notFound();

  return (
    <main>
      <NavBar />
      <PageSection>
        <Container>
          <Button
            variant="secondary"
            asChild
            className="md:absolute top-14 mt-14 md:mt-auto"
          >
            <Link href="/casos-de-exito">
              <ArrowLeftIcon className="w-6 h-6" />
              Ver más casos de éxito
            </Link>
          </Button>
          <div className="flex flex-col md:flex-row text-center md:text-left gap-10 items-center mt-32 md:mt-0">
            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <h1 className="text-4xl md:text-6xl font-semibold text-balance">
                {caseStudy.title}
              </h1>
              <p className="text-muted-foreground text-xl text-balance">
                {caseStudy.description}
              </p>
            </div>
            <div className="w-full md:w-1/2 aspect-square">
              <Carousel items={caseStudy.images} />
            </div>
          </div>
        </Container>
      </PageSection>
      <Footer />
    </main>
  );
}
