import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Goshena | Productos naturales",
  description: "Catálogo de productos naturales. Consultas y pedidos directamente por WhatsApp en Paraguay.",
  openGraph: {
    title: "Goshena",
    description: "Productos naturales · Pedidos por WhatsApp",
    locale: "es_PY",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
