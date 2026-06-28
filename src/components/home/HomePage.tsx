"use client";

import AboutSection from "@/components/home/AboutSection";
import HeroCarousel from "@/components/home/HeroCarousel";
import ProductCard from "@/components/ProductCard";
import FadeInSection from "@/components/ui/FadeInSection";
import { businessInfo } from "@/data/business";
import { decoProducts, pasteleriaProducts } from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const marqueeText =
  "Torta brownie · Marquise · Lemon Pie · Rogel · Cheesecake · Vasitos · Scones · Cajas dulces · Deco de mesa";

const homePasteleriaPreview = pasteleriaProducts.slice(0, 3);
const homeDecoPreview = decoProducts.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative bg-brown"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(201, 169, 110, 0.05) 0px,
            rgba(201, 169, 110, 0.05) 1px,
            transparent 1px,
            transparent 14px
          )`,
        }}
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-12 sm:gap-10 sm:px-6 sm:py-16 md:py-20 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold sm:mb-4 sm:text-sm">
              Pastelería artesanal · Buenos Aires
            </p>
            <h1 className="font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Hecho con dedicación,{" "}
              <em className="italic text-gold">con cariño</em>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-sand/90 sm:mt-6 sm:text-base md:text-lg">
              Tortas, vasitos y delicias elaboradas a mano para quienes
              aprecian lo bien hecho.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/pedidos"
                className="inline-flex w-full items-center justify-center bg-cream px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-brown transition-colors hover:bg-sand-light sm:w-auto sm:px-8"
              >
                Hacer un pedido
              </Link>
              <Link
                href="/pasteleria"
                className="inline-flex w-full items-center justify-center border border-gold px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-gold transition-colors hover:bg-gold/10 sm:w-auto sm:px-8"
              >
                Ver catálogo
              </Link>
            </div>
          </motion.div>

          <HeroCarousel />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden bg-gold py-3 sm:py-3.5">
        <div className="marquee-track flex w-max">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="marquee-content shrink-0 px-4 font-sans text-xs uppercase tracking-[0.2em] text-cream sm:text-sm md:text-base md:tracking-[0.25em]"
            >
              {marqueeText}
              <span className="mx-4 sm:mx-6">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* PREVIEW PASTELERÍA */}
      <FadeInSection className="bg-cream px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-serif text-3xl text-brown sm:mb-14 sm:text-4xl md:text-5xl">
            Las estrellas de la casa
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {homePasteleriaPreview.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-10 text-center sm:mt-14">
            <Link
              href="/pasteleria"
              className="inline-flex w-full items-center justify-center border border-brown px-8 py-3.5 text-sm uppercase tracking-widest text-brown transition-colors hover:border-gold hover:text-gold sm:w-auto sm:px-10"
            >
              Ver toda la pastelería
            </Link>
          </div>
        </div>
      </FadeInSection>

      {/* SPLIT SECTION */}
      <FadeInSection as="div" className="grid lg:grid-cols-2">
        <div className="relative aspect-[4/3] min-h-[220px] sm:min-h-[280px] lg:aspect-auto lg:min-h-[480px]">
          <Image
            src="/images/productos/vasitos-variados.jpg"
            alt="Vasitos surtidos de chocolate y dulce de leche"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-sand px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
          <h2 className="font-serif text-2xl leading-snug text-brown sm:text-3xl md:text-4xl lg:text-[2.625rem]">
            Para compartir en cualquier ocasión
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
            Vasitos individuales, cajas surtidas y bolsas de delicias para
            regalar o disfrutar en casa. Porciones perfectas, presentación
            impecable y el mismo cuidado artesanal que nuestras tortas.
          </p>
          <Link
            href="/pasteleria"
            className="mt-6 inline-flex items-center gap-2 font-serif text-base text-brown transition-colors hover:text-gold sm:mt-8 sm:text-lg"
          >
            Ver opciones →
          </Link>
        </div>
      </FadeInSection>

      {/* PREVIEW DECO */}
      <FadeInSection className="bg-sand-light px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center font-serif text-3xl text-brown sm:mb-14 sm:text-4xl md:text-5xl">
            Para la mesa del té
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {homeDecoPreview.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-10 text-center sm:mt-14">
            <Link
              href="/deco"
              className="inline-flex w-full items-center justify-center border border-brown px-8 py-3.5 text-sm uppercase tracking-widest text-brown transition-colors hover:border-gold hover:text-gold sm:w-auto sm:px-10"
            >
              Ver toda la deco
            </Link>
          </div>
        </div>
      </FadeInSection>

      <AboutSection />

      {/* CTA FINAL */}
      <FadeInSection className="bg-sand px-4 py-14 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl text-brown sm:text-4xl md:text-5xl">
            ¿Querés hacer un pedido?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
            Retiro en {businessInfo.address}.
            <br />
            {businessInfo.hours}. {businessInfo.orderNote}.
          </p>
          <a
            href={businessInfo.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center bg-brown px-8 py-4 text-sm uppercase tracking-widest text-cream transition-colors hover:bg-brown-dark sm:mt-10 sm:w-auto sm:px-10"
          >
            Contactar por WhatsApp
          </a>
        </div>
      </FadeInSection>
    </>
  );
}
