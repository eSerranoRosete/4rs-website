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
        <Container className="flex flex-col items-center gap-10 pt-16 md:flex-row">
          <form className="flex w-full flex-col gap-6 lg:w-3/4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-3"
            >
              <Title className="m-0 text-5xl font-medium tracking-tight md:!text-left">
                Contáctanos
              </Title>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-balance text-center text-lg text-muted-foreground md:text-left"
              >
                Necesitas más información sobre nuestros productos o servicios?
                Contáctanos y te responderemos a la brevedad.
              </motion.p>

              <Button
                asChild
                className="text-md m-auto w-fit gap-2 md:ml-0"
                variant="secondary"
              >
                <Link href="mailto:contacto@4rs.tech" target="_blank">
                  <MailIcon />
                  contacto@4rs.tech
                </Link>
              </Button>

              <Button
                asChild
                className="text-md m-auto w-fit gap-2 md:ml-0"
                variant="secondary"
              >
                <Link href="tel:+525536874435" target="_blank">
                  <PhoneIcon />
                  +52 55 3687 4435
                </Link>
              </Button>

              <Button
                asChild
                className="text-md m-auto h-auto w-fit gap-2 md:ml-0"
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
              className="flex flex-col gap-6"
            >
              <Input
                variant="underline"
                placeholder="Nombre *"
                type="text"
                required
                textSize="lg"
              />
              <div className="grid gap-6 md:grid-cols-2">
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
          <div className="relative aspect-video w-full overflow-hidden rounded-xl">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              src="/ca53233dd43f4094b66e12fd6a83a45d_01102024053040.png"
              className="absolute left-0 top-0 h-full w-full rounded-xl object-cover object-center"
            />
          </div>
        </Container>
      </PageSection>
      <Footer />
    </main>
  );
}
