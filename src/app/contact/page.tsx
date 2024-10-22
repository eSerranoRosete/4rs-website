"use client";

import { Container } from "@/components/app/Container";
import { Footer } from "@/components/app/Footer";
import { NavBar } from "@/components/app/Navbar";
import { PageSection } from "@/components/app/PageSection";
import { Title } from "@/components/app/Title";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col">
      <NavBar />
      <PageSection>
        <Container className="flex flex-col md:flex-row items-center gap-10 pt-16">
          <form className="w-full lg:w-3/4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-3"
            >
              <Title className="md:!text-left m-0 text-5xl font-medium tracking-tight">
                Contáctanos
              </Title>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-center md:text-left text-balance text-muted-foreground"
              >
                Necesitas más información sobre nuestros productos o servicios?
                Contáctanos y te responderemos a la brevedad.
              </motion.p>

              <Button
                asChild
                className="gap-2 w-fit text-md m-auto md:ml-0 "
                variant="secondary"
              >
                <Link href="mailto:contacto@4rs.tech" target="_blank">
                  <MailIcon />
                  contacto@4rs.tech
                </Link>
              </Button>

              <Button
                asChild
                className="gap-2 w-fit text-md m-auto md:ml-0"
                variant="secondary"
              >
                <Link href="tel:+525536874435" target="_blank">
                  <PhoneIcon />
                  +52 55 3687 4435
                </Link>
              </Button>

              <Button
                asChild
                className="gap-2 w-fit text-md m-auto md:ml-0 h-auto"
                variant="secondary"
              >
                <Link
                  href="http://maps.google.com/?q=Presidente Masaryk 61 901B Polanco Miguel Hidalgo CDMX cp 11560"
                  target="_blank"
                >
                  <MapPinIcon />
                  <span className="whitespace-normal">
                    Presidente Masaryk 61 901B Polanco Miguel Hidalgo, CDMX cp
                    11560
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <Input
                variant="underline"
                placeholder="Nombre *"
                type="text"
                required
                textSize="lg"
              />
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  variant="underline"
                  placeholder="E-mail *"
                  type="email"
                  textSize="lg"
                  required
                />
                <Input
                  variant="underline"
                  textSize="lg"
                  placeholder="Empresa"
                  type="text"
                />
              </div>
              <Input
                variant="underline"
                textSize="lg"
                placeholder="Teléfono"
                type="tel"
              />
              <Textarea
                variant="underline"
                textSize="lg"
                placeholder="¿En qué podemos ayudarte?"
                className="h-32 resize-none"
                required
              />
              <Button size="lg">Enviar</Button>
            </motion.div>
          </form>
          <div className="w-full rounded-xl aspect-video relative overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              src="/ca53233dd43f4094b66e12fd6a83a45d_01102024053040.png"
              className="w-full h-full object-cover object-center absolute top-0 left-0 rounded-xl"
            />
          </div>
        </Container>
      </PageSection>
      <Footer />
    </main>
  );
}
