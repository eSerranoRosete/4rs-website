"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useIsOpen } from "../hooks/useIsOpen";
import { Button } from "../ui/button";

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
  const { isOpen, onClose, onOpenChange } = useIsOpen();
  const [last, setLast] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");

  const { scrollYProgress } = useScroll();

  const atTop = last === 0;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // keep track of the last value
    setLast(latest);

    // if the latest value is greater than the last value, the user is scrolling down
    if (latest > last) {
      setDirection("down");

      // if the latest value is less than the last value, the user is scrolling up
    } else {
      setDirection("up");
    }
  });

  return (
    <header className="fixed left-0 top-0 z-50 w-full p-2">
      <motion.div
        style={{
          scaleY: direction === "down" ? 0 : 1,
          originY: 0,
        }}
        className={cn(
          "dark container relative overflow-hidden rounded bg-black p-1.5 transition-all duration-300",
          atTop ? "bg-opacity-0" : "bg-opacity-100",
        )}
      >
        <nav className="flex items-center justify-between gap-2 md:justify-normal">
          <Link href="/" className="grow">
            <img src="/4everPROJECTSlogoW.png" alt="" className="h-full w-24" />
          </Link>

          <div className="hidden md:flex">
            {navItems.map((item, index) => (
              <Button key={index} variant="link">
                <Link href={item.href} className="text-sm">
                  {item.label}
                </Link>
              </Button>
            ))}
          </div>

          <Button asChild className="hidden md:inline-flex" size="sm">
            <Link href="/contacto">Contacto</Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={onOpenChange}>
            <SheetTrigger className="md:hidden">
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <SheetDescription>
                <nav className="mt-10 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Button
                      asChild
                      key={item.href}
                      variant="outline"
                      onClick={onClose}
                    >
                      <Link key={item.href} href={item.href}>
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
      </motion.div>
    </header>
  );
};
