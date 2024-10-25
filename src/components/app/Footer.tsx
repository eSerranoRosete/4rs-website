"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Container } from "./Container";
import { ModeToggle } from "./ModeToggle";

export const Footer = () => {
  return (
    <footer
      className="w-full text-foreground bg-muted"
      suppressHydrationWarning
    >
      <Container>
        <div className="w-full p-6 py-10 flex flex-col">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
            <h6 className="text-3xl font-medium tracking-tight shrink-0">
              Ingresa tu email para recibir
              <br /> nuestras últimas actualizaciones
            </h6>
            <div className="w-full max-w-md">
              <div className="flex items-center gap-3 w-full">
                <Input className="text-md" placeholder="m@example.com" />
                <Button>Suscribirse</Button>
              </div>
            </div>
          </div>
          <Separator className="my-10" />
          <div className="w-full flex flex-col md:flex-row gap-10 justify-between">
            <div className="flex flex-col gap-4 max-w-xs">
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
              <h6 className="font-medium text-sm mb-2">Menu</h6>
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
              <h6 className="font-medium text-sm mb-2">Productos</h6>
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
              <h6 className="font-medium text-sm mb-2">Contacto</h6>
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
              className="p-2 rounded inline-block w-32 bg-[url('/4everPROJECTSlogo.png')] dark:bg-[url('/4everPROJECTSlogoW.png')] h-10 bg-contain"
            ></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
