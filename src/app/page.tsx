"use client";

import { CertificationsCard } from "@/components/app/CertificationsCard";
import { ContactBanner } from "@/components/app/ContactBanner";
import { Container } from "@/components/app/Container";
import { FeatureCard } from "@/components/app/FeatureCard";
import { Footer } from "@/components/app/Footer";
import { NavBar } from "@/components/app/Navbar";
import { PageSection } from "@/components/app/PageSection";
import { ParallaxImg } from "@/components/app/ParallaxImg";
import { ProductLineCard } from "@/components/app/ProductLineCard";
import { ShiftingCard } from "@/components/app/ShiftingCard";
import { StatsCounter } from "@/components/app/StatsCounter";
import { SuccessStories } from "@/components/app/SuccessStories";
import { Title } from "@/components/app/Title";
import { Button } from "@/components/ui/button";
import { successStories } from "@/data/successStories";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CctvIcon,
  CloudIcon,
  MonitorIcon,
  ShieldIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />

      <PageSection fullHeight noPadding>
        <div className="relative w-full h-full overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 to-transparent z-10"></div>
            <video
              src="/Digital_Tablet_With_CCTV_Camera_Footage_fhd_1651915.mp4"
              muted
              loop
              playsInline
              autoPlay
              className="absolute top-0 left-0 w-full h-full object-cover object-center"
            />
          </div>

          <Container className="flex flex-col md:block items-center justify-center h-full">
            <div className="m-auto flex items h-full px-6 text-white relative z-20">
              <div className="flex flex-col gap-10 justify-center">
                <h1 className="text-center md:text-left text-5xl md:text-8xl max-w-4xl font-semibold tracking-tight text-balance">
                  Tu socio en seguridad y monitoreo.
                </h1>

                <p className="text-center md:text-left text-base md:text-xl antialiased rounded-tl-2xl max-w-xl p-3">
                  Desarrollamos dispositivos y soluciones de seguridad y
                  monitoreo que abarcan desde la protección residencial hasta la
                  infraestructura de ciudades inteligentes.
                </p>
              </div>
            </div>
            <div className="scale-90 relative md:absolute bottom-5 md:bottom-10 md:right-10 z-10 flex items-center md:gap-10 gap-5 flex-wrap justify-center">
              <img
                src="/product-logos/4everalertlogow.png"
                alt="4ever-alert logo"
                className="w-20"
              />
              <img
                src="/product-logos/4everFIRElogoW.png"
                alt="4ever-alert logo"
                className="w-16"
              />
              <img
                src="/product-logos/4everGREENERGYlogoW.png"
                alt="4ever-alert logo"
                className="w-20"
              />
              <img
                src="/product-logos/4everMOVILlogoW.png"
                alt="4ever-alert logo"
                className="w-20"
              />
              <img
                src="/product-logos/4RS_White.png"
                alt="4ever-alert logo"
                className="w-20"
              />
              <img
                src="/product-logos/LogoBlancoUrbania.png"
                alt="4ever-alert logo"
                className="w-20"
              />
            </div>
          </Container>
        </div>
      </PageSection>

      <PageSection className="h-full md:h-screen md:max-h-[900px]">
        <Container>
          <div className="flex flex-col gap-8 w-full h-full">
            <Title>
              ¿Qué se necesita para hacer que{" "}
              <span className="text-brand">
                alguien esté y se sienta seguro
              </span>
              ?
            </Title>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl m-auto text-center text-lg text-balance p-2"
            >
              Durante más de 15 años, nos hemos dedicado a ofrecer a nuestros
              clientes una mayor sensación de seguridad
            </motion.p>
            <div className="grid md:grid-cols-3 gap-6 grow">
              <FeatureCard
                title="360 grados de cobertura"
                description="Cada minuto del día"
                imgUrl="/f9adbf77b2b54adb9a3bc66e702a0b9c_01102024052409.png"
              />

              <FeatureCard
                title="La tecnología más avanzada"
                description="Respaldada por experiencia y conocimiento"
                imgUrl="/success-stories/m_t_66f7a99c936c48caae298ea43e162786_06102024030646.png"
              />

              <FeatureCard
                title="Servicio personalizado"
                description="Con atención 24/7"
                imgUrl="/ce6bba1728384163b37893e55558ecc4_01102024052555.png"
              />
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <div className="flex flex-col text-center justify-between gap-6 items-center">
            <Title>
              Nuestra <span className="text-brand">Trayectoria</span>:
              Experiencia y Reconocimiento
            </Title>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl text-lg text-balance p-2"
            >
              Nuestra misión es crear una atmósfera de tranquilidad, confort y
              seguridad para nuestros clientes.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 md:grid-rows-3 gap-6 mt-10">
            <div className="p-6 text-center md:text-left row-span-full rounded-xl flex flex-col bg-muted relative overflow-hidden">
              <ParallaxImg
                src="/world-dots.png"
                className="absolute w-full h-full top-0 left-0 bg-cover bg-center"
              />
              <div className="z-10 flex flex-col gap-6">
                <p className="text-6xl font-bold tracking-tight">
                  2do mejor integrador
                </p>
                <p className="text-lg">— A nivel Latinoamérica</p>
              </div>
              <div className="mt-auto z-10">
                <p className="text-xl">
                  Estamos transformando la industria y posicionándonos para ser
                  el líder indiscutible como integrador número uno en
                  Latinoamérica.
                  <span className="text-sm block">
                    * Nombrado por Más Seguridad en 2018
                  </span>
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl aspect-square md:aspect-auto row-span-2 relative overflow-hidden">
              <ParallaxImg
                src="/a22cf07054c14f4484fd06af19256285_01102024052701.jpeg"
                className="w-full h-full object-cover object-center absolute top-0 left-0 rounded-xl"
              />
            </div>
            <div className="p-6 rounded-xl flex items-center bg-muted">
              <div className="text-center m-auto">
                <p className="text-8xl font-bold tracking-tight text-brand">
                  <StatsCounter from={0} to={142} suffix="+" />
                </p>
                <p className="text-lg">
                  Certificaciones de integrador de seguridad
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl aspect-square md:aspect-auto row-span-2 relative overflow-hidden">
              <ParallaxImg
                src="/upscaled-2x-17ca30d699624ffdb543872a1e4ca468_01102024052702.png"
                className="w-full h-full object-cover object-center absolute top-0 left-0 rounded-xl"
              />
            </div>
            <div className="p-6 rounded-xl flex items-center bg-muted">
              <div className="text-center m-auto">
                <p className="text-8xl font-bold tracking-tight text-brand">
                  <StatsCounter from={0} to={1471} suffix="+" increments={10} />
                </p>
                <p className="text-lg">Proyectos entregados a la medida</p>
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection className="flex flex-col pt-20">
        <div className="absolute w-full h-full md:h-2/3 top-0 left-0 bg-muted -z-10"></div>
        <Container>
          <div>
            <Title>
              Estamos <span className="text-brand">certificados</span> en una
              amplia gama de disciplinas clave
            </Title>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl text-lg text-balance p-2 m-auto text-center"
            >
              Para la seguridad y la gestión de operaciones, destacando en:
            </motion.p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-20 grow">
            <CertificationsCard
              icon={CctvIcon}
              title="Seguridad y Logística en Monitoreo"
              items={[
                "Cadena de suministro",
                "Cadena de valor",
                "CTPAT (Customs-Trade Partnership Against Terrorism)",
              ]}
            />

            <CertificationsCard
              icon={ShieldIcon}
              title="Seguridad Física en Instalaciones"
              items={[
                "Seguridad perimetral",
                "Control de accesos",
                "Sistemas de videovigilancia",
              ]}
            />

            <CertificationsCard
              icon={MonitorIcon}
              title="Implementación de Centros de Operaciones"
              items={[
                "Introducción a los centros de monitoreo, diseño y ubicación",
                "Tecnología, equipamiento y procedimientos operativos en el centro de monitoreo",
                "Formación especializada para monitoristas: seguridad, protección, gestión y análisis de datos",
                "Integración con sistemas de respuesta, mejora continua y evaluación",
              ]}
            />
          </div>
        </Container>
      </PageSection>

      <PageSection id="casos" fullHeight>
        <Container className="flex flex-col gap-6">
          <div className="relative">
            <Title>
              Ayudamos a nuestros clientes a alcanzar sus objetivos.
            </Title>

            <Button
              size="lg"
              asChild
              className="absolute right-0 top-1/2 -translate-y-1/2 text-md"
              variant="outline"
            >
              <Link href="/casos-de-exito" className="gap-2 float-right">
                Ver casos de éxito
                <ArrowRightIcon />
              </Link>
            </Button>
          </div>

          <SuccessStories speed="slow" items={successStories} />
        </Container>
      </PageSection>

      <PageSection className="text-foreground bg-muted">
        <Container>
          <ShiftingCard
            title="Operamos como una estación central en la nube."
            description="Nuestro centro de monitoreo está construido sobre plataformas en línea y opera bajo las normas más rigurosas de la industria."
            imgUrl="/e4f6955b6c2a4e3db7192de76d4d0be0_01102024052906.png"
            hint="Disponibilidad"
            bottomIcon={CloudIcon}
          />
          <ShiftingCard
            inverted
            title="Somos la empresa líder en el país en la transformación de centros de monitoreo C2, C4 y C5 en centros inteligentes C4i y C5i."
            description="Estos centros avanzados incorporan inteligencia artificial, análisis de vídeo inteligente, drones tácticos y salas de crisis diseñadas para combatir la delincuencia de manera más efectiva y eficiente. Además, garantizamos la seguridad en la gestión de información de datos y ofrecemos protección avanzada en ciberseguridad, asegurando la integridad y la privacidad de la información."
            imgUrl="/c7c2f7921ffe4fe0bb5580b5cb7807b3_01102024052956.png"
            hint="Inovación"
            bottomIcon={CctvIcon}
          />
          <ShiftingCard
            title="Nuestros tiempos de despacho son los más rápidos y precisos de la industria."
            description="Nos esforzamos constantemente por alcanzar nuevos estándares de calidad en la industria, manteniéndonos a la vanguardia de la tecnología de seguridad."
            imgUrl="/ca53233dd43f4094b66e12fd6a83a45d_01102024053040.png"
            hint="Eficiencia"
            bottomIcon={LightningBoltIcon}
          />
        </Container>
      </PageSection>

      <PageSection id="hogar" fullHeight className="h-full md:h-screen">
        <Container className="flex flex-col gap-6">
          <Title>
            Nuestras <span className="text-brand">marcas</span> te apoyan:
          </Title>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl text-lg text-balance p-2 m-auto text-center"
          >
            Equipos de seguridad, accesorios y monitoreo 24/7
          </motion.p>

          <div className="grid grow md:grid-cols-2 gap-6 mt-5">
            <ProductLineCard
              title="4Ever Tech Solutions"
              description="Equipos y monitoreo para integradores"
              imgUrl="/product-line/6d66d2caa3834b42b3f86d682bc1e44a_01102024053541.jpeg"
              bgColor="#E7E7E7"
            />

            <ProductLineCard
              title="4Ever Alert"
              description="Equipos y monitoreo para hogar y vecindario"
              imgUrl="/product-line/62acdc71c3d1469e8aa8be94358a7026_01102024053619.jpeg"
              bgColor="#000"
            />
          </div>
        </Container>
      </PageSection>

      <ContactBanner />

      <Footer />
    </main>
  );
}
