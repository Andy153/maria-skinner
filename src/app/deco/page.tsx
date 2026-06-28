import CatalogPage from "@/components/CatalogPage";
import { decoCategories, decoProducts } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deco & Regalos — María Skinner",
  description: "Piezas de cerámica, jarros, medallones y vajilla para la mesa del té.",
};

export default function DecoPage() {
  return (
    <CatalogPage
      eyebrow="Para la mesa del té · Buenos Aires"
      title="Deco & Regalos"
      description="Jarritos de cerámica, medallones, jarros de vidrio y vajilla para la mesa del té. Precios actualizados."
      products={decoProducts}
      categories={decoCategories}
    />
  );
}
