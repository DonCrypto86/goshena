import type { Product } from "./types";

const product = (
  id: string,
  name: string,
  reference: string,
  price: number,
  image: string,
  short_note?: string
): Product => ({
  id,
  name,
  brand: "Mamá Medica",
  reference,
  price,
  category: "productos",
  image_url: `/products/${image}`,
  short_note,
  status: "published",
  is_new: true,
  is_offer: false,
});

// PRECIOS PLACEHOLDER: reemplazar por los precios reales desde /admin.
export const demoProducts: Product[] = [
  product("1", "Relax", "GOS-01", 50000, "relax-aceite-coco.jpg", "Aceite de coco con manzanilla, passiflora y... (tercer ingrediente cortado en la etiqueta, confirmar)"),
  product("2", "Tintura Madre de Ortiga", "GOS-02", 50000, "tintura-madre-ortiga.jpg", "Extracto alcohólico 96% concentrado de ortiga"),
  product("3", "Tintura Madre de Malva Blanca", "GOS-03", 50000, "tintura-madre-malva-blanca.jpg", "Extracto alcohólico de flores y hojas de malva blanca"),
  product("4", "Tintura Madre de Artemisia Annua A3", "GOS-04", 50000, "tintura-madre-artemisia-annua.jpg", "Extracto alcohólico 96% de Artemisia annua A3"),
  product("5", "Tintura de Passiflora", "GOS-05", 50000, "tintura-passiflora.jpg", "Extracto alcohólico 96% de flores y hojas de passiflora"),
  product("6", "Crema Natural de Artemisia Annua", "GOS-06", 50000, "crema-artemisia-annua.jpg", "Artemisia annua, aceite de coco y cera de abejas"),
];
