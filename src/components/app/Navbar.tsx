"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export const NavBar = () => {
  const [value, setValue] = useState("/");

  return (
    <header className="absolute md:fixed top-0 left-0 w-full z-50 px-6 py-2">
      <Container>
        <nav className="text-white flex gap-2 items-center">
          <div className="grow">
            <Link
              href="/"
              className="p-2 rounded inline-block w-32 bg-[url('/4everPROJECTSlogo.png')] dark:bg-[url('/4everPROJECTSlogoW.png')] h-10 bg-contain"
            ></Link>
          </div>

          <Tabs
            onValueChange={setValue}
            defaultValue="/"
            className="hidden md:block"
          >
            <TabsList>
              <TabsTrigger className={cn(value === "/" && "dark")} value="/">
                <Link href="/">Integradores</Link>
              </TabsTrigger>
              <TabsTrigger
                className={cn(value === "/#hogar" && "dark")}
                value="/#hogar"
              >
                <Link href="/#hogar">Hogar y vecindario</Link>
              </TabsTrigger>
              <TabsTrigger
                className={cn(value === "/#casos" && "dark")}
                value="/#casos"
                asChild
              >
                <Link href="/#casos">Casos de éxito</Link>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Button asChild className="hidden md:inline-flex">
            <Link href="/">
              Contacto
              <ArrowRight />
            </Link>
          </Button>
        </nav>
      </Container>
    </header>
  );
};
