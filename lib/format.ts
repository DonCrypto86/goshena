export function formatGuarani(value: number) {
  return `Gs. ${new Intl.NumberFormat("es-PY").format(value)}`;
}

export function whatsappUrl(name?: string, reference?: string, price?: number) {
  const phone = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");
  const message = name
    ? `Hola, quisiera consultar por ${name} (${reference})${price ? ` — ${formatGuarani(price)}` : ""}.`
    : "Hola, quisiera consultar por los productos de Goshena.";

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
