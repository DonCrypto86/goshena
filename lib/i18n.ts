
export const copy = {
  cuisine: "Mamá Medica",
  hero: "Plantas con propósito.",
  near: "Productos con alma.",
  intro: "Plantas con propósito. Productos con alma,",
  introStrong: "creados con amor y conciencia.",
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
