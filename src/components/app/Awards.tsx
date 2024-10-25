"use client";
import { AccordionCard, AccordionItem } from "./AccordionCard";
import { Container } from "./Container";
import { PageSection } from "./PageSection";

export const Awards = () => {
  const items: AccordionItem[] = [
    {
      description:
        "La innovación es el pilar que impulsa nuestros éxitos en 4ever. Hemos obtenido diversas certificaciones en tecnología avanzada y seguridad que avalan la calidad de nuestras soluciones.\n\n Reconocidos como uno de los principales integradores tecnológicos en Latinoamérica, nuestros premios reflejan nuestro liderazgo y compromiso en la creación de sistemas de seguridad inteligentes y de vanguardia, diseñados para transformar la protección y confianza de nuestros clientes.",
      title: "",
      imgSrc: "/588af169be0b4689ab86b210ddbd58c9_01102024053357.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget nunc. Nullam nec nisl nec nunc.",
      title: "Certificación 2",
      imgSrc: "/e64056eada4742d2a5ee7d0c192a6fb9_01102024053357.png",
    },
    {
      description:
        "La innovación es clave en 4ever. Contamos con certificaciones en tecnología avanzada y seguridad que respaldan la calidad de nuestras soluciones. Reconocidos como líderes en Latinoamérica, nuestros premios reflejan nuestro compromiso con la creación de sistemas de seguridad inteligentes y transformadores para nuestros clientes.",
      title: "Certificaciones y Premios",
      imgSrc: "/39072982d5554eaaaaf0fbd8adf62689_01102024053356.png",
    },
  ];

  return (
    <PageSection fullHeight className="flex flex-col gap-6">
      <Container className="flex max-h-[600px] w-full grow">
        {items.map((item, index) => (
          <AccordionCard key={index} index={index} active={0} item={item} />
        ))}
      </Container>
    </PageSection>
  );
};
