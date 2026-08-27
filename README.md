# Goshena

Catálogo digital mobile-first para Goshena (productos naturales), basado en la estructura completa de WENDELO.

## Funciones

- Catálogo público por categorías
- Orden por precio
- Consulta de cada producto por WhatsApp
- Área privada `/admin`
- Productos editables con Supabase
- Carga de una o varias fotos

## Configuración

Copiá `.env.example` como `.env.local` y completá Supabase y el número de WhatsApp en formato internacional, sin `+` ni espacios.

## Estado actual

Los 27 productos fueron cargados con nombre, categoría y precio PLACEHOLDER
(`Producto 01`…`Producto 27`, categoría "Productos", Gs. 50.000) a partir de
las fotos en `public/products/01.webp`…`27.webp`. Reemplazá cada uno con los
datos reales desde el panel `/admin`.
