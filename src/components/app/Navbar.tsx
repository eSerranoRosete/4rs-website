"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { ArrowRight, MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Container } from "./Container";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsOpen } from "../hooks/useIsOpen";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Integradores", href: "/" },
  { label: "Hogar y vecindario", href: "/#hogar" },
  { label: "Casos de éxito", href: "/casos-de-exito" },
];

export const NavBar = () => {
  const [value, setValue] = useState("/");

  const { isOpen, onOpen, onClose, onOpenChange } = useIsOpen();

  const pathname = usePathname();

  useEffect(() => {
    if (value !== pathname) {
      setValue(pathname);
    }
  }, [pathname]);

  return (
    <header className="sticky md:fixed top-0 left-0 w-full z-50 px-6 md:py-2">
      <Container className="relative">
        <nav className="text-white flex gap-2 items-center justify-between md:justify-normal">
          <div className="md:grow absolute md:static left-0 top-2">
            <Link
              href="/"
              className="p-2 rounded inline-block w-32 bg-[url('/4everPROJECTSlogo.png')] dark:bg-[url('/4everPROJECTSlogoW.png')] h-10 bg-contain"
            ></Link>
          </div>

          <Tabs
            onValueChange={setValue}
            value={value}
            className="hidden md:block"
          >
            <TabsList>
              {navItems.map((item) => (
                <TabsTrigger
                  key={item.href}
                  className={cn(value === item.href && "text-primary")}
                  value={item.href}
                >
                  <Link href={item.href}>{item.label}</Link>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <Button asChild className="hidden md:inline-flex">
            <Link href="/contacto">
              Contacto
              <ArrowRight />
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetTrigger className="md:hidden absolute top-3 right-0">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetDescription>
                <nav className="flex flex-col gap-4 mt-10">
                  {navItems.map((item) => (
                    <Button
                      asChild
                      key={item.href}
                      variant={value === item.href ? "default" : "secondary"}
                      onClick={onClose}
                    >
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-white text-lg",
                          value === item.href && "text-primary"
                        )}
                      >
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                  <Button>
                    <Link href="/contacto">Contacto</Link>
                  </Button>
                </nav>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  );
};
