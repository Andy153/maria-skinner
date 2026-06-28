import ProductCard from "@/components/ProductCard";
import type { Product } from "@/data/products";
import Link from "next/link";

type CatalogPageProps = {
  eyebrow?: string;
  title: string;
  description: string;
  products: Product[];
  categories: readonly string[];
  ctaHref?: string;
  ctaLabel?: string;
};

export default function CatalogPage({
  eyebrow,
  title,
  description,
  products,
  categories,
  ctaHref = "/pedidos",
  ctaLabel = "Hacer un pedido",
}: CatalogPageProps) {
  return (
    <div className="bg-cream">
      <section
        className="border-b border-gold/20 bg-brown px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
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
        <div className="mx-auto max-w-6xl">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.2em] text-gold sm:text-sm">
              {eyebrow}
            </p>
          )}
          <h1 className={`font-serif text-3xl text-white sm:text-4xl md:text-5xl ${eyebrow ? "mt-2 sm:mt-3" : ""}`}>
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sand/90 sm:mt-4 sm:text-base md:text-lg">
            {description}
          </p>
        </div>
      </section>

      {categories.map((category) => {
        const items = products.filter((product) => product.category === category);
        if (items.length === 0) return null;

        return (
          <section
            key={category}
            className="border-b border-border-warm px-4 py-12 last:border-b-0 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
          >
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-6 font-serif text-2xl text-brown sm:mb-10 sm:text-3xl md:text-4xl">
                {category}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
                {items.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-sand px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-2xl text-brown sm:text-3xl md:text-4xl">
            ¿Te interesa alguno?
          </h2>
          <p className="mt-3 text-sm text-muted sm:mt-4 sm:text-base">
            Escribinos por WhatsApp para hacer tu pedido.
          </p>
          <Link
            href={ctaHref}
            className="mt-6 inline-flex w-full items-center justify-center bg-brown px-8 py-4 text-sm uppercase tracking-widest text-cream transition-colors hover:bg-brown-dark sm:mt-8 sm:w-auto sm:px-10"
          >
            {ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
