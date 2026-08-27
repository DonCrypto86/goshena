
export const copy = {
  cuisine: "Productos naturales",
  hero: "Bienestar natural, en cada producto.",
  near: "Calidad que se nota.",
  intro: "Seleccionamos productos naturales de calidad para tu bienestar diario.",
  introStrong: "Cuidado natural, resultados en los que podés confiar.",
  viewMenu: "Ver catálogo",
  menu: "Nuestra selección",
  favorite: "Elegí tu favorito",
  products: "productos",
  price: "Precio",
  view: "Ver",
  from: "Desde",
  ask: "Consultar",
  order: "¿Buscás algo natural?",
  write: "Consultanos directamente por WhatsApp",
  productOf: "Producto de",
  close: "Cerrar",
  share: "Compartir en mi Estado",
  preparing: "Preparando…",
  all: "Todo",
} as const;

export const categoryLabels: Record<string, string> = {
  ofertas: "Ofertas",
  cremas: "Cremas",
  tinturas: "Tinturas",
  aceites: "Aceites",
  fragancias: "Fragancias",
};

export function categoryLabel(category: string): string {
  return categoryLabels[category] ?? category.charAt(0).toUpperCase() + category.slice(1);
}
