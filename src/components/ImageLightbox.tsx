"use client";

import Image from "next/image";
import { useEffect } from "react";

type ImageLightboxProps = {
  images: string[];
  alt: string;
  index: number;
  onClose: () => void;
  onChangeIndex: (index: number) => void;
};

export default function ImageLightbox({
  images,
  alt,
  index,
  onClose,
  onChangeIndex,
}: ImageLightboxProps) {
  const hasMultiple = images.length > 1;

  const goTo = (next: number) => {
    onChangeIndex((next + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft" && hasMultiple) goTo(index - 1);
      if (event.key === "ArrowRight" && hasMultiple) goTo(index + 1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, hasMultiple, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brown/92 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada: ${alt}`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-2xl leading-none text-cream transition-colors hover:bg-cream/20 sm:right-6 sm:top-6"
        aria-label="Cerrar"
      >
        ×
      </button>

      <div
        className="relative flex max-h-full w-full max-w-5xl items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        {hasMultiple && (
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute -left-1 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-xl text-cream transition-colors hover:bg-cream/20 sm:-left-4 sm:h-12 sm:w-12"
            aria-label="Foto anterior"
          >
            ‹
          </button>
        )}

        <div className="relative aspect-[4/3] max-h-[85vh] w-full">
          <Image
            src={images[index]}
            alt={`${alt} — foto ${index + 1} de ${images.length}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {hasMultiple && (
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            className="absolute -right-1 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-cream/10 text-xl text-cream transition-colors hover:bg-cream/20 sm:-right-4 sm:h-12 sm:w-12"
            aria-label="Foto siguiente"
          >
            ›
          </button>
        )}
      </div>

      {hasMultiple && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-sand/80">
          {index + 1} / {images.length}
        </p>
      )}
    </div>
  );
}
