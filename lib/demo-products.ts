import type { Category, Product } from "./types";

// NOTA: nombres y precios son PLACEHOLDERS. Reemplazá cada uno con el
// nombre real, la categoría real y el precio real desde el panel /admin.
const product = (id: string, image: string): Product => ({
  id,
  name: `Producto ${id}`,
  brand: "Goshena",
  reference: `GOS-${id}`,
  price: 50000,
  category: "productos" as Category,
  image_url: `/products/${image}`,
  status: "published",
  is_new: false,
  is_offer: false,
});

export const demoProducts: Product[] = Array.from({ length: 27 }, (_, index) => {
  const num = String(index + 1).padStart(2, "0");
  return product(num, `${num}.webp`);
});
