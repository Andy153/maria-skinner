"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);
  const hasMultiple = images.length > 1;

  const goTo = (next: number) => {
    onChangeIndex((next + images.length) % images.length);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-brown/95 p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Vista ampliada: ${alt}`}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 text-3xl leading-none text-cream transition-colors hover:bg-cream/25 sm:right-6 sm:top-6"
        aria-label="Cerrar"
      >
        ×
      </button>

      <div
        className="relative flex w-full max-w-6xl items-center justify-center px-10 sm:px-14"
        onClick={(event) => event.stopPropagation()}
      >
        {hasMultiple && (
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            className="absolute left-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 text-2xl text-cream transition-colors hover:bg-cream/25 sm:h-12 sm:w-12"
            aria-label="Foto anterior"
          >
            ‹
          </button>
        )}

        <div className="relative h-[min(85vh,80vw)] w-full max-w-5xl">
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
            className="absolute right-0 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-cream/15 text-2xl text-cream transition-colors hover:bg-cream/25 sm:h-12 sm:w-12"
            aria-label="Foto siguiente"
          >
            ›
          </button>
        )}
      </div>

      {hasMultiple && (
        <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-sm text-sand/80">
          {index + 1} / {images.length}
        </p>
      )}
    </div>,
    document.body,
  );
}
