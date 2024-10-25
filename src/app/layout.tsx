import { Providers } from "@/context/Providers";
import { GeistSans as FontSans } from "geist/font/sans";
// import { Ubuntu as FontSans } from "next/font/google";
// import { Inter as FontSans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "4Ever Projects ",
  description:
    "Desarrollamos dispositivos y soluciones de seguridad y monitoreo que abarcan desde la protección residencial hasta la infraestructura de ciudades inteligentes.",
  generator: "Next.js",
};

// const fornSans = FontSans({
//   subsets: ["latin"],

//   weight: ["400", "500", "700"],
// });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${FontSans.className} scroll-smooth`}>
        <Providers>
          {/* <LoadingScreen /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
