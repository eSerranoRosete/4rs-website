"use client";

import { Container } from "@/components/app/Container";
import { Footer } from "@/components/app/Footer";
import { NavBar } from "@/components/app/Navbar";
import { PageSection } from "@/components/app/PageSection";
import { Title } from "@/components/app/Title";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function page() {
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
          className="grow w-full flex gap-3"
        >
          <div
            onMouseEnter={() => setActive(1)}
            className={cn(
              "w-1/3 relative bg-green-500 transition-all duration-500 rounded overflow-hidden",
              active === 1 && "w-2/3"
            )}
          >
            <img
              src="/588af169be0b4689ab86b210ddbd58c9_01102024053357.png"
              className="h-full object-cover absolute  pointer-events-none"
            />
          </div>
          <div
            onMouseEnter={() => setActive(2)}
            className={cn(
              "w-1/3 relative bg-yellow-500 transition-all duration-500 rounded overflow-hidden",
              active === 2 && "w-2/3"
            )}
          >
            <img
              src="/e64056eada4742d2a5ee7d0c192a6fb9_01102024053357.png"
              className="h-full object-cover absolute  pointer-events-none"
            />
          </div>
          <div
            onMouseEnter={() => setActive(3)}
            className={cn(
              "w-1/3 relative bg-pink-500 transition-all duration-500 rounded overflow-hidden",
              active === 3 && "w-2/3"
            )}
          >
            <img
              src="/39072982d5554eaaaaf0fbd8adf62689_01102024053356.png"
              className="h-full object-cover absolute  pointer-events-none"
            />
          </div>
        </Container>
      </PageSection>
      <Footer />
    </main>
  );
}
