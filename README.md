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

El catálogo está vacío: las 27 fotos numeradas que venían en la carpeta
inicial eran en realidad del catálogo de Papa Muay Thai y fueron
eliminadas (tanto los archivos como los productos placeholder en
Supabase). Cargá los productos reales de Goshena (foto, nombre, categoría
y precio) desde el panel `/admin`.
