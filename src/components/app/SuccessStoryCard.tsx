"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ParallaxImg } from "./ParallaxImg";

export type Props = {
  hint: string;
  title: string;
  imgurl: string;
};

export const SuccessStoryCard = ({ hint, title, imgurl }: Props) => {
  return (
    <>
      <Sheet open={false}>
        <SheetTrigger asChild>
          <div className="w-96 overflow-hidden h-full cursor-pointer shrink-0 relative p-8 hover:opacity-90 rounded-xl">
            <div className="relative z-20 text-white">
              <span className="text-lg mb-4 block">{hint}</span>
              <h3 className="text-4xl font-semibold text-balance">{title}</h3>
            </div>
            <div className="w-full h-1/2 bg-gradient-to-b from-black/90 to-transparent absolute top-0 left-0 z-10" />
            <ParallaxImg
              src={imgurl}
              className="absolute w-full h-full top-0 left-0 object-cover object-center"
            />
          </div>
        </SheetTrigger>
        <SheetContent className="!max-w-full w-3/4">
          <div className="w-full h-full grid grid-cols-3 gap-6 content-center">
            <div className="w-full relative">
              <img src={imgurl} />
            </div>

            <div className="col-span-2 flex flex-col gap-6">
              <h2 className="text-4xl font-semibold tracking-tight max-w-lg text-balance">
                {title}
              </h2>

              <p className="text-lg">
                En el gremio funerario, la seguridad es nuestra prioridad. Con
                más de 1500 cámaras en renta, sistemas de control de accesos y
                alarmas de seguridad, hemos creado un entorno protegido en cada
                una de nuestras sucursales. Todas estas medidas están
                interconectadas en una central de monitoreo, garantizando una
                vigilancia integral y una respuesta rápida ante cualquier
                situación. Tu tranquilidad es nuestra misión. ¡Bienvenidos a un
                espacio seguro !
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
