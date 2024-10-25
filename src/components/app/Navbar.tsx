"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

import { useScroll } from "framer-motion";

import { MenuIcon, MoveUpRightIcon } from "lucide-react";

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
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null,
  );

  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(scrollY.get() < 500);
    };

    const unsubscribe = scrollY.onChange(handleScroll);
    handleScroll(); // Set initial state

    return () => unsubscribe();
  }, [scrollY]);

  useEffect(() => {
    let lastScrollY = 0;

    const updateScrollDirection = () => {
      const currentScrollY = scrollY.get();
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    const unsubscribe = scrollY.onChange(updateScrollDirection);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <header
      className={cn(
        "absolute left-0 top-0 z-50 w-full p-1 transition-all duration-500",
        scrollDirection === "down" && "fixed -translate-y-full",
        scrollDirection === "up" && "fixed translate-y-0",
        atTop && "bg-transparent bg-gradient-to-b from-black/70 to-transparent",
      )}
    >
      <nav
        className={cn(
          "container m-auto flex items-center justify-between rounded p-1",
          atTop ? "bg-transparent" : "bg-black",
        )}
      >
        <Link href="/" className="h-10">
          <img src="/4everPROJECTSlogoW.png" alt="Logo" className="w-32" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Button
              asChild
              variant="link"
              key={item.href}
              className={cn("!text-muted-foreground", atTop && "!text-white")}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </ul>

        <Button size="sm" variant="outline" className="hidden md:inline-flex">
          Contacto
          <MoveUpRightIcon className="w!-4 !h-4" />
        </Button>

        <Button variant="ghost" className="md:hidden">
          <MenuIcon className="!h-6 !w-6" />
        </Button>
      </nav>
    </header>
  );
};
