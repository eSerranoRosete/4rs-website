"use client";

import { Awards } from "@/components/app/Awards";
import { CertificationsCard } from "@/components/app/CertificationsCard";
import { ClientCarousell } from "@/components/app/ClientCarousell";
import { Clients } from "@/components/app/Clients";
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
    <main className="flex flex-col gap-20">
      <NavBar />

      <PageSection fullHeight noPadding>
        <div className="relative h-full w-full overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-full">
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-gradient-to-t from-black/90 to-transparent"></div>
            <video
              src="/Digital_Tablet_With_CCTV_Camera_Footage_fhd_1651915.mp4"
              muted
              loop
              playsInline
              autoPlay
              className="absolute left-0 top-0 h-full w-full object-cover object-center"
            />
          </div>

          <Container className="flex h-full flex-col items-center justify-center md:block">
            <div className="items relative z-20 m-auto flex h-full px-6 text-white">
              <div className="flex flex-col justify-center gap-10">
                <h1 className="max-w-4xl text-balance text-center text-5xl font-semibold tracking-tight md:text-left md:text-8xl">
                  Tu socio en seguridad y monitoreo.
                </h1>

                <p className="max-w-xl rounded-tl-2xl p-3 text-center text-base antialiased md:text-left md:text-xl">
                  Desarrollamos dispositivos y soluciones de seguridad y
                  monitoreo que abarcan desde la protección residencial hasta la
                  infraestructura de ciudades inteligentes.
                </p>
              </div>
            </div>
            <div className="relative bottom-5 z-10 flex scale-90 flex-wrap items-center justify-center gap-5 md:absolute md:bottom-10 md:right-10 md:gap-10">
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

      <PageSection className="h-full">
        <Container>
          <div className="flex h-full w-full flex-col gap-8">
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
              className="m-auto max-w-2xl text-balance p-2 text-center text-lg"
            >
              Durante más de 15 años, nos hemos dedicado a ofrecer a nuestros
              clientes una mayor sensación de seguridad
            </motion.p>
            <div className="grid grow gap-6 md:grid-cols-3">
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
          <div className="mb-5 flex flex-col items-center justify-between gap-6 text-center">
            <Title>
              Nuestra <span className="text-brand">Trayectoria</span>:
              Experiencia y Reconocimiento
            </Title>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-2xl text-balance p-2 text-lg"
            >
              Nuestra misión es crear una atmósfera de tranquilidad, confort y
              seguridad para nuestros clientes.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:grid-rows-3">
            <div className="relative row-span-full flex flex-col overflow-hidden rounded-xl bg-muted p-6 text-center md:text-left">
              <ParallaxImg
                src="/world-dots.png"
                className="absolute left-0 top-0 h-full w-full bg-cover bg-center opacity-25"
              />
              <div className="z-10 flex flex-col gap-6">
                <p className="text-6xl font-bold tracking-tight">
                  2do mejor integrador
                </p>
                <p className="text-lg">— A nivel Latinoamérica</p>
              </div>
              <div className="z-10 mt-auto">
                <p className="text-xl">
                  Estamos transformando la industria y posicionándonos para ser
                  el líder indiscutible como integrador número uno en
                  Latinoamérica.
                  <span className="block text-sm">
                    * Nombrado por Más Seguridad en 2018
                  </span>
                </p>
              </div>
            </div>
            <div className="relative row-span-2 aspect-square overflow-hidden rounded-xl p-6 md:aspect-auto">
              <ParallaxImg
                src="/a22cf07054c14f4484fd06af19256285_01102024052701.jpeg"
                className="absolute left-0 top-0 h-full w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="flex items-center rounded-xl bg-muted p-6">
              <div className="m-auto text-center">
                <p className="text-8xl font-bold tracking-tight text-brand">
                  <StatsCounter from={0} to={142} suffix="+" />
                </p>
                <p className="text-lg">
                  Certificaciones de integrador de seguridad
                </p>
              </div>
            </div>
            <div className="relative row-span-2 aspect-square overflow-hidden rounded-xl p-6 md:aspect-auto">
              <ParallaxImg
                src="/upscaled-2x-17ca30d699624ffdb543872a1e4ca468_01102024052702.png"
                className="absolute left-0 top-0 h-full w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="flex items-center rounded-xl bg-muted p-6">
              <div className="m-auto text-center">
                <p className="text-8xl font-bold tracking-tight text-brand">
                  <StatsCounter from={0} to={1471} suffix="+" increments={10} />
                </p>
                <p className="text-lg">Proyectos entregados a la medida</p>
              </div>
            </div>
          </div>
        </Container>
      </PageSection>

      <PageSection className="flex flex-col bg-muted">
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
              className="m-auto max-w-2xl text-balance p-2 text-center text-lg"
            >
              Para la seguridad y la gestión de operaciones, destacando en:
            </motion.p>
          </div>
          <div className="mt-20 grid grow gap-6 md:grid-cols-3">
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

      <PageSection id="casos" noPadding>
        <Container className="flex flex-col gap-6 p-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <Title>
              Ayudamos a nuestros clientes a alcanzar sus{" "}
              <span className="text-brand">objetivos</span>.
            </Title>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button size="lg" asChild variant="outline" className="m-auto">
                <Link href="/casos-de-exito" className="float-right gap-2">
                  Ver casos de éxito
                  <ArrowRightIcon />
                </Link>
              </Button>
            </motion.div>
          </div>

          <SuccessStories
            pauseOnHover={false}
            speed="slow"
            items={successStories}
          />
        </Container>
      </PageSection>

      <PageSection className="bg-muted text-foreground">
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

      <PageSection className="light bg-background">
        <ClientCarousell speed="slow" reverseItems pauseOnHover={false} />
        <Title className="light">
          Experiencia con clientes{" "}
          <span className="text-brand">internacionales</span>
        </Title>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="m-auto max-w-2xl text-balance p-2 text-center text-lg text-foreground"
        >
          Nuestros clientes internacionales confían en nosotros para proteger
          sus activos y garantizar la seguridad de sus empleados.
        </motion.p>
        <ClientCarousell
          direction="right"
          speed="slow"
          reverseItems
          pauseOnHover={false}
        />
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
            className="m-auto max-w-2xl text-balance p-2 text-center text-lg"
          >
            Equipos de seguridad, accesorios y monitoreo 24/7
          </motion.p>

          <div className="mt-5 grid grow gap-6 md:grid-cols-2">
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

      <PageSection>
        <Container className="flex flex-col gap-10">
          <Awards />
        </Container>
      </PageSection>

      <ContactBanner />

      <Footer />
    </main>
  );
}
