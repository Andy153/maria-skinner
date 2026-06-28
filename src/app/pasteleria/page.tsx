import CatalogPage from "@/components/CatalogPage";
import {
  pasteleriaCategories,
  pasteleriaProducts,
} from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pastelería — María Skinner",
  description: "Catálogo completo de tortas, vasitos, cajas y delicias artesanales.",
};

export default function PasteleriaPage() {
  return (
    <CatalogPage
      eyebrow="Pastelería artesanal · Buenos Aires"
      title="Pastelería"
      description="Tortas, vasitos, cajas dulces y bolsitas. Precios actualizados. Retiro por Arenales y Suipacha, CABA."
      products={pasteleriaProducts}
      categories={pasteleriaCategories}
    />
  );
}
