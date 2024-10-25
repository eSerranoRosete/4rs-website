"use client";

import { ColoredText } from "@/components/app/animated-text/ColoredText";
import { AwardsAlt } from "@/components/app/AwardsAlt";
import { CertificationsCard } from "@/components/app/CertificationsCard";
import { ClientCarousell } from "@/components/app/ClientCarousell";
import { Container } from "@/components/app/Container";
import { FeatureCard } from "@/components/app/FeatureCard";
import { Footer } from "@/components/app/Footer";
import { Hero } from "@/components/app/Hero";
import { NavBar } from "@/components/app/Navbar";
import { PageSection } from "@/components/app/PageSection";
import { ParallaxImg } from "@/components/app/ParallaxImg";
import { ProductLineCard } from "@/components/app/ProductLineCard";
import { ShiftingCard } from "@/components/app/ShiftingCard";
import { Spacer } from "@/components/app/Spacer";
import { StatsCounter } from "@/components/app/StatsCounter";
import { Subtitle } from "@/components/app/Subtitle";
import { SuccessStories } from "@/components/app/SuccessStories";
import { Button } from "@/components/ui/button";
import { successStories } from "@/data/successStories";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CctvIcon,
  MonitorIcon,
  ShieldIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <NavBar />

      <Hero />

      <PageSection className="h-full bg-background">
        <Container>
          <div className="flex h-full w-full flex-col">
            <div className="flex flex-col gap-4">
              {/* <Title>
                ¿Qué se necesita para hacer que{" "}
                <span className="text-brand">
                  alguien esté y se sienta seguro
                </span>
                ?
              </Title> */}
              <ColoredText
                size="lg"
                className="m-auto max-w-4xl flex-wrap justify-center"
                text="¿Qué se necesita para hacer que <b>alguien</b> <b>esté</b> <b>y</b> <b>se</b> <b>sienta</b> <b>seguro</b>?"
              />
              <Subtitle>
                Durante más de 15 años, nos hemos dedicado a ofrecer a nuestros
                clientes una mayor sensación de seguridad
              </Subtitle>
            </div>
            <Spacer />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="grid grow gap-3 md:grid-cols-3"
            >
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
            </motion.div>
          </div>
        </Container>
      </PageSection>

      <PageSection>
        <Container>
          <div className="flex flex-col items-center gap-4">
            <ColoredText
              size="lg"
              className="m-auto max-w-4xl flex-wrap justify-center"
              text="Nuestra <b>Trayectoria</b>: Experiencia y Reconocimiento"
            />
            {/* <Title>
              Nuestra <span className="text-brand">Trayectoria</span>:
              Experiencia y Reconocimiento
            </Title> */}
            <Subtitle>
              Nuestra misión es crear una atmósfera de tranquilidad, confort y
              seguridad para nuestros clientes.
            </Subtitle>
          </div>

          <Spacer />

          <div className="grid gap-3 md:grid-cols-3 md:grid-rows-3">
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
            <div className="relative row-span-2 aspect-square overflow-hidden rounded p-6 md:aspect-auto">
              <ParallaxImg
                src="/a22cf07054c14f4484fd06af19256285_01102024052701.jpeg"
                className="absolute left-0 top-0 h-full w-full rounded object-cover object-center"
              />
            </div>
            <div className="flex items-center rounded bg-muted p-6">
              <div className="m-auto text-center">
                <p className="text-8xl font-bold tracking-tight text-brand">
                  <StatsCounter from={0} to={142} suffix="+" />
                </p>
                <p className="text-lg">
                  Certificaciones de integrador de seguridad
                </p>
              </div>
            </div>
            <div className="relative row-span-2 aspect-square overflow-hidden rounded p-6 md:aspect-auto">
              <ParallaxImg
                src="/upscaled-2x-17ca30d699624ffdb543872a1e4ca468_01102024052702.png"
                className="absolute left-0 top-0 h-full w-full rounded object-cover object-center"
              />
            </div>
            <div className="flex items-center rounded bg-muted p-6">
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
          <div className="flex flex-col gap-4">
            <ColoredText
              size="lg"
              className="m-auto max-w-4xl flex-wrap justify-center"
              text="Estamos <b>certificados</b> en una amplia gama de disciplinas clave"
            />
            {/* <Title>
              Estamos <span className="text-brand">certificados</span> en una
              amplia gama de disciplinas clave
            </Title> */}
            <Subtitle>
              Para la seguridad y la gestión de operaciones, destacando en:
            </Subtitle>
          </div>
          <Spacer />
          <div className="grid grow gap-3 md:grid-cols-3">
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

      <PageSection id="casos" noPadding className="!py-16">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* <Title>
            Ayudamos a nuestros clientes a alcanzar sus{" "}
            <span className="text-brand">objetivos</span>.
          </Title> */}

          <ColoredText
            size="lg"
            className="m-auto max-w-4xl flex-wrap justify-center"
            text="Ayudamos a nuestros clientes a alcanzar sus <b>objetivos</b>."
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button size="lg" asChild variant="outline" className="m-auto">
              <Link href="/casos-de-exito">
                Ver casos de éxito
                <ArrowRightIcon />
              </Link>
            </Button>
          </motion.div>
        </div>
        <Spacer />
        <SuccessStories
          pauseOnHover={false}
          speed="slow"
          items={successStories}
        />
      </PageSection>

      <PageSection className="bg-muted text-foreground">
        <Container>
          <ShiftingCard
            title="Operamos como una estación central en la nube."
            description="Nuestro centro de monitoreo está construido sobre plataformas en línea y opera bajo las normas más rigurosas de la industria."
            imgUrl="/e4f6955b6c2a4e3db7192de76d4d0be0_01102024052906.png"
            hint="Disponibilidad"
          />
          <ShiftingCard
            inverted
            title="Somos la empresa líder en el país en la transformación de centros de monitoreo C2, C4 y C5 en centros inteligentes C4i y C5i."
            description="Estos centros avanzados incorporan inteligencia artificial, análisis de vídeo inteligente, drones tácticos y salas de crisis diseñadas para combatir la delincuencia de manera más efectiva y eficiente. Además, garantizamos la seguridad en la gestión de información de datos y ofrecemos protección avanzada en ciberseguridad, asegurando la integridad y la privacidad de la información."
            imgUrl="/c7c2f7921ffe4fe0bb5580b5cb7807b3_01102024052956.png"
            hint="Inovación"
          />
          <ShiftingCard
            title="Nuestros tiempos de despacho son los más rápidos y precisos de la industria."
            description="Nos esforzamos constantemente por alcanzar nuevos estándares de calidad en la industria, manteniéndonos a la vanguardia de la tecnología de seguridad."
            imgUrl="/ca53233dd43f4094b66e12fd6a83a45d_01102024053040.png"
            hint="Eficiencia"
          />
        </Container>
      </PageSection>

      <PageSection className="light bg-background">
        <ClientCarousell pauseOnHover={false} reverseItems speed="slow" />
        <div className="my-10 flex flex-col gap-4">
          {/* <Title className="text-foreground">
            Experiencia con clientes{" "}
            <span className="text-brand">internacionales</span>
          </Title> */}
          <ColoredText
            size="lg"
            className="m-auto max-w-4xl flex-wrap justify-center"
            text="Experiencia con clientes <b>internacionales</b>"
          />
          <Subtitle className="text-foreground">
            Nuestros clientes internacionales confían en nosotros para proteger
            sus activos y garantizar la seguridad de sus empleados.
          </Subtitle>
        </div>
        <ClientCarousell
          pauseOnHover={false}
          speed="slow"
          reverseItems
          direction="right"
        />
      </PageSection>

      <PageSection id="hogar" fullHeight className="h-full md:h-screen">
        <Container className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            {/* <Title>
              Nuestras <span className="text-brand">marcas</span> te apoyan:
            </Title> */}
            <ColoredText
              size="lg"
              className="m-auto max-w-4xl flex-wrap justify-center"
              text="Nuestras marcas están creadas para <b>apoyarte</b>"
            />

            <Subtitle>
              Equipos de seguridad, accesorios y monitoreo 24/7
            </Subtitle>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mt-5 grid grow gap-6 md:grid-cols-2"
          >
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
          </motion.div>
        </Container>
      </PageSection>

      <PageSection fullHeight className="h-full md:h-screen">
        <Container className="h-full w-full">
          <AwardsAlt />
        </Container>
      </PageSection>

      <Footer />
    </main>
  );
}
