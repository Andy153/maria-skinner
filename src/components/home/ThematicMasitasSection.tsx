"use client";

import StackedImageCarousel from "@/components/home/StackedImageCarousel";
import FadeInSection from "@/components/ui/FadeInSection";
import { businessInfo } from "@/data/business";
import type { Product } from "@/data/products";

type ThematicMasitasSectionProps = {
  product: Product;
};

export default function ThematicMasitasSection({
  product,
}: ThematicMasitasSectionProps) {
  const gallery = product.images ?? [product.image];

  return (
    <FadeInSection className="border-y border-gold/20 bg-brown px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-16">
        <div className="flex w-full min-w-0 items-center justify-center">
          <StackedImageCarousel images={gallery} alt={product.name} />
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-lg">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold sm:text-sm">
            Algo especial
          </p>
          <h2 className="font-serif text-3xl leading-snug text-cream sm:text-4xl md:text-[2.625rem]">
            {product.name}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-sand/90 sm:mt-6 sm:text-base md:text-lg">
            {product.description}
          </p>
          <p className="mt-4 font-serif text-xl text-gold sm:text-2xl">
            {product.price}
          </p>
          <a
            href={businessInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center border border-gold px-8 py-4 text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold/10 sm:mt-10 sm:w-auto sm:px-10"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </FadeInSection>
  );
}
