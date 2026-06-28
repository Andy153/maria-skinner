"use client";

import FadeInSection from "@/components/ui/FadeInSection";
import Image from "next/image";

const identityPhotos = [
  {
    src: "/images/identidad/maria-cocina-elaboracion.jpeg",
    alt: "María elaborando tortas y vasitos en su cocina",
    className: "row-span-2",
  },
  {
    src: "/images/identidad/maria-alfajores-chocolate.jpeg",
    alt: "María bañando alfajorcitos en chocolate",
    className: "",
  },
  {
    src: "/images/identidad/maria-cocina-preparacion.jpeg",
    alt: "Preparación artesanal de bizcochos y alfajores",
    className: "",
  },
  {
    src: "/images/identidad/maria-alfajores-bandeja.jpeg",
    alt: "Bandeja de alfajorcitos recién hechos",
    className: "",
  },
  {
    src: "/images/identidad/maria-cocina-vasitos.jpeg",
    alt: "María terminando vasitos y tortas en la cocina",
    className: "",
  },
];

export default function AboutSection() {
  return (
    <FadeInSection className="bg-brown px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="grid aspect-[4/5] grid-cols-2 grid-rows-3 gap-2 sm:gap-3">
          {identityPhotos.map((photo) => (
            <div
              key={photo.src}
              className={`relative overflow-hidden ${photo.className}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 50vw, 400px"
              />
            </div>
          ))}
        </div>

        <div className="max-w-lg lg:mx-auto">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold sm:text-sm">
            Detrás de cada torta
          </p>
          <h2 className="font-serif text-3xl leading-snug text-cream sm:text-4xl md:text-[2.625rem]">
            Hecho a mano,{" "}
            <em className="italic text-gold">con dedicación</em>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-sand/90 sm:mt-6 sm:text-base md:text-lg">
            Cada pedido pasa por la cocina de María: desde los alfajorcitos
            bañados uno a uno, hasta las tortas, vasitos y cajas surtidas que
            llegan a tu mesa. Sin atajos, con el mismo cuidado de siempre.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-sand/75 sm:text-base">
            Pastelería artesanal en Buenos Aires.
          </p>
        </div>
      </div>
    </FadeInSection>
  );
}
