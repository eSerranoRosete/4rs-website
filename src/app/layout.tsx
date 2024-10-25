import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

const fornSans = GeistSans;

import "./globals.css";
import { Providers } from "@/context/Providers";

export const metadata: Metadata = {
  title: "4Ever Projects ",
  description:
    "Desarrollamos dispositivos y soluciones de seguridad y monitoreo que abarcan desde la protección residencial hasta la infraestructura de ciudades inteligentes.",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fornSans.className} scroll-smooth `}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
