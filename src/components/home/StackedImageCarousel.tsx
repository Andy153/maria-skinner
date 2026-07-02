"use client";

import { useEffect, useState, type ReactNode } from "react";

type StackedImageCarouselProps = {
  images: string[];
  alt: string;
};

const AUTOPLAY_MS = 4000;
const ROTATIONS = [-3, 2.5, -2, 3];

export default function StackedImageCarousel({
  images,
  alt,
}: StackedImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;
  const currentImage = images[index];
  const currentRotation = ROTATIONS[index % ROTATIONS.length];

  const goNext = () => {
    setIndex((current) => (current + 1) % images.length);
  };

  const goPrev = () => {
    setIndex((current) => (current - 1 + images.length) % images.length);
  };

  const goTo = (next: number) => {
    setIndex((next + images.length) % images.length);
  };

  useEffect(() => {
    if (!hasMultiple) return;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [hasMultiple, images.length]);

  const formattedIndex = String(index + 1).padStart(2, "0");
  const formattedTotal = String(images.length).padStart(2, "0");

  const stackCount = hasMultiple ? Math.min(images.length - 1, 3) : 0;

  const backCards = hasMultiple
    ? Array.from({ length: stackCount }, (_, i) => i + 1).map((offset) => ({
        imageIndex: (index + offset) % images.length,
        rotation: ROTATIONS[(index + offset) % ROTATIONS.length],
        stackOffset: offset,
      }))
    : [];

  return (
    <div className="relative mx-auto w-full max-w-[340px] px-4 py-2 sm:max-w-[400px] sm:px-6 sm:py-4 lg:max-w-[440px]">
      <div
        className="pointer-events-none absolute -left-4 top-4 h-32 w-32 rounded-full bg-gold/25 blur-3xl sm:h-40 sm:w-40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-2 bottom-20 h-28 w-28 rounded-full bg-cream/15 blur-3xl sm:h-32 sm:w-32"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full py-1">
        <div className="relative aspect-[5/6] w-full overflow-visible">
          {backCards.map(({ imageIndex, rotation, stackOffset }) => {
            const side = stackOffset % 2 === 1 ? -1 : 1;
            const xOffset = side * (20 + stackOffset * 16);
            const yOffset = stackOffset * 3;

            return (
            <div
              key={`stack-${imageIndex}-${stackOffset}`}
              className="absolute inset-0 transition-transform duration-500 ease-out"
              style={{
                zIndex: 10 - stackOffset,
                transform: `translateX(${xOffset}px) translateY(${yOffset}px) scale(${0.96 - stackOffset * 0.025}) rotate(${rotation + side * 3}deg)`,
              }}
              aria-hidden="true"
            >
              <PolaroidFrame dimmed>
                <img
                  src={images[imageIndex]}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </PolaroidFrame>
            </div>
            );
          })}

          <div
            className="absolute inset-0 z-20 transition-transform duration-500 ease-out"
            style={{
              transform: `rotate(${currentRotation}deg)`,
            }}
          >
            <PolaroidFrame>
              <img
                key={currentImage}
                src={currentImage}
                alt={`${alt} — foto ${index + 1} de ${images.length}`}
                className="h-full w-full object-cover"
              />
            </PolaroidFrame>
          </div>
        </div>
      </div>

      {hasMultiple && (
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4">
          <span className="text-sm tracking-[0.2em] text-sand/70">
            {formattedIndex} / {formattedTotal}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-lg text-gold transition-colors hover:border-gold hover:bg-gold/10"
              aria-label="Foto anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-xs uppercase tracking-widest text-gold transition-colors hover:border-gold hover:bg-gold/10"
            >
              Siguiente
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      )}

      {hasMultiple && (
        <div className="mt-4 flex justify-center gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => goTo(i)}
              className={`rounded-full transition-all ${
                i === index
                  ? "h-2 w-6 bg-gold"
                  : "h-2 w-2 bg-sand/40 hover:bg-sand/70"
              }`}
              aria-label={`Ir a foto ${i + 1}`}
              aria-current={i === index ? "true" : undefined}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function PolaroidFrame({
  children,
  dimmed = false,
}: {
  children: ReactNode;
  dimmed?: boolean;
}) {
  return (
    <div
      className={`h-full rounded-[1.75rem] bg-cream p-3 shadow-[0_28px_60px_rgba(0,0,0,0.35)] sm:rounded-[2rem] sm:p-3.5 ${
        dimmed ? "brightness-[0.96] saturate-95" : ""
      }`}
    >
      <div className="relative h-full overflow-hidden rounded-[1.25rem] ring-1 ring-brown/10 sm:rounded-[1.4rem]">
        {children}
      </div>
    </div>
  );
}
