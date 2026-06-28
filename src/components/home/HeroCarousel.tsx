"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    src: "/images/productos/mesa-te-tarta-frutos.jpeg",
    alt: "Mesa del té con tarta de frutos",
  },
  {
    src: "/images/productos/caja-dulce-variada.jpg",
    alt: "Alfajorcitos y brownies en el plato",
  },
  {
    src: "/images/productos/caja-mini-tortas-mesa-te.jpeg",
    alt: "Mini tortas y rogelitos en la mesa del té",
  },
  {
    src: "/images/productos/tarteletas-variadas.jpg",
    alt: "Caja de tarteletas surtidas",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroSlides.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
      className="relative mx-auto aspect-[4/3] w-full max-w-full overflow-hidden sm:max-w-md lg:mx-0 lg:max-w-md"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 400px"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
