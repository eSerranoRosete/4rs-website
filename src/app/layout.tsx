import { Providers } from "@/context/Providers";
import { ReactLenis } from "@/lib/lenis";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";
const fornSans = GeistSans;

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
      <ReactLenis root>
        <body className={`${fornSans.className}`}>
          <Providers>{children}</Providers>
        </body>
      </ReactLenis>
    </html>
  );
}
