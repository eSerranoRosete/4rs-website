"use client";

import { Container } from "@/components/app/Container";
import { Footer } from "@/components/app/Footer";
import { NavBar } from "@/components/app/Navbar";
import { PageSection } from "@/components/app/PageSection";
import { Title } from "@/components/app/Title";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Page() {
  const [active, setActive] = useState<number>(1);

  return (
    <main className="flex flex-col">
      <NavBar />
      <PageSection fullHeight className="flex flex-col gap-6">
        <Title>
          <span className="text-brand">Certificaciones y premios</span>
          <br />
          que nos han brindado
        </Title>

        <Container
          onMouseOut={() => setActive(1)}
          className="flex w-full grow gap-3"
        >
          <div
            onMouseEnter={() => setActive(1)}
            className={cn(
              "relative w-1/3 overflow-hidden rounded bg-green-500 transition-all duration-500",
              active === 1 && "w-2/3",
            )}
          >
            <img
              src="/588af169be0b4689ab86b210ddbd58c9_01102024053357.png"
              className="pointer-events-none absolute h-full object-cover"
            />
          </div>
          <div
            onMouseEnter={() => setActive(2)}
            className={cn(
              "relative w-1/3 overflow-hidden rounded bg-yellow-500 transition-all duration-500",
              active === 2 && "w-2/3",
            )}
          >
            <img
              src="/e64056eada4742d2a5ee7d0c192a6fb9_01102024053357.png"
              className="pointer-events-none absolute h-full object-cover"
            />
          </div>
          <div
            onMouseEnter={() => setActive(3)}
            className={cn(
              "relative w-1/3 overflow-hidden rounded bg-pink-500 transition-all duration-500",
              active === 3 && "w-2/3",
            )}
          >
            <img
              src="/39072982d5554eaaaaf0fbd8adf62689_01102024053356.png"
              className="pointer-events-none absolute h-full object-cover"
            />
          </div>
        </Container>
      </PageSection>
      <Footer />
    </main>
  );
}
