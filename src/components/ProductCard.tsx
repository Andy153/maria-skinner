import ProductImageCarousel from "@/components/ProductImageCarousel";
import type { Product } from "@/data/products";

export default function ProductCard({
  image,
  images,
  tag,
  name,
  description,
  price,
}: Pick<Product, "image" | "images" | "tag" | "name" | "description" | "price">) {
  const gallery = images ?? [image];

  return (
    <article className="group min-w-0 overflow-hidden rounded-sm border border-border-warm bg-sand-light transition-all duration-300 hover:-translate-y-1 hover:border-gold">
      <ProductImageCarousel images={gallery} alt={name} />
      <div className="space-y-2 p-4 sm:p-6">
        <span className="text-xs uppercase tracking-widest text-gold">{tag}</span>
        <h3 className="font-serif text-xl text-brown sm:text-2xl">{name}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        <p className="font-serif text-base text-brown-light sm:text-lg">{price}</p>
      </div>
    </article>
  );
}
