"use client";

import FadeInSection from "@/components/ui/FadeInSection";

export default function AboutSection() {
  return (
    <FadeInSection className="bg-brown px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
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
    </FadeInSection>
  );
}
