"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageCarouselProps = {
  images: string[];
  alt: string;
};

export default function ProductImageCarousel({
  images,
  alt,
}: ProductImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const goTo = (next: number) => {
    setIndex((next + images.length) % images.length);
  };

  return (
    <div className="min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={images[index]}
          alt={`${alt} — foto ${index + 1} de ${images.length}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {hasMultiple && (
        <div className="border-t border-border-warm bg-sand">
          <div className="flex items-center gap-1.5 px-2 py-2 sm:gap-2 sm:px-3 sm:py-2.5">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-border-warm text-brown transition-colors hover:border-gold hover:text-gold sm:h-9 sm:w-9"
              aria-label="Foto anterior"
            >
              ‹
            </button>

            <div className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex w-max min-w-full justify-center gap-1.5 px-0.5 sm:gap-2">
                {images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`relative h-10 w-14 shrink-0 overflow-hidden rounded-sm border-2 transition-colors sm:h-12 sm:w-16 ${
                      i === index
                        ? "border-gold"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Ver foto ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-border-warm text-brown transition-colors hover:border-gold hover:text-gold sm:h-9 sm:w-9"
              aria-label="Foto siguiente"
            >
              ›
            </button>
          </div>

          <div className="flex justify-center gap-1.5 pb-2.5 sm:hidden">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-gold" : "w-1.5 bg-brown/25"
                }`}
                aria-label={`Ir a foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
