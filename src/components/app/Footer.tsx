"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Container } from "./Container";
import { ModeToggle } from "./ModeToggle";

export const Footer = () => {
  return (
    <footer className="z-10 w-full bg-muted">
      <Container>
        <div className="flex w-full flex-col p-6 py-10">
          <div className="flex w-full flex-col items-center justify-between gap-10 md:flex-row">
            <h6 className="shrink-0 text-3xl font-medium tracking-tight">
              Ingresa tu email para recibir
              <br /> nuestras últimas actualizaciones
            </h6>
            <div className="w-full max-w-md">
              <div className="flex w-full items-center gap-3">
                <Input className="text-md" placeholder="m@example.com" />
                <Button>Suscribirse</Button>
              </div>
            </div>
          </div>
          <Separator className="my-10" />
          <div className="flex w-full flex-col justify-between gap-10 md:flex-row">
            <div className="flex max-w-xs flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                &#8212; Crear una atmósfera de tranquilidad, confort y seguridad
                para nuestros clientes.
              </p>

              <div className="flex items-center justify-between text-sm font-medium">
                <a href="mailto:contacto@4rs.tech">contacto@4rs.tech</a>
                <a href="tel:+52 55 3687 4435">+52 55 3687 4435</a>
              </div>

              <ModeToggle />
            </div>

            <div className="">
              <h6 className="mb-2 text-sm font-medium">Menu</h6>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:underline">
                    Integradores
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Hogar y vecindario
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Casos de éxito
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="mb-2 text-sm font-medium">Productos</h6>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:underline">
                    4Ever Alert
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    4Ever FIRE
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    4Ever GREENERGY
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    4Ever MOVIL
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    4RS
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    4Ever URBANIA
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <h6 className="mb-2 text-sm font-medium">Contacto</h6>
              <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:underline">
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    X
                  </Link>
                </li>
                <li>
                  <Link href="/" className="hover:underline">
                    Linkedin
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-10" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <p>&copy; 2024 4ever Alert. Todos los derechos reservados.</p>
            <Link
              href="/"
              className="inline-block h-10 w-32 rounded bg-[url('/4everPROJECTSlogo.png')] bg-contain p-2 dark:bg-[url('/4everPROJECTSlogoW.png')]"
            ></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
