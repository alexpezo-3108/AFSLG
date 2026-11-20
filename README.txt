AFSLG · Web estática para Vercel

Cómo publicar
1. Sube el contenido de esta carpeta (no la carpeta superior) a un repositorio o arrástrala en vercel.com/new.
2. Framework Preset: "Other". Build command: vacío. Output directory: "." (raíz).
3. Deploy. La portada es index.html.

Rutas cortas disponibles: /noticias, /convocatorias, /proyectos, /documentos, /nosotros, /contacto, /buzon, /privacidad, /terminos.
Cualquier URL inexistente muestra 404.html.

Notas
- Las imágenes van en /assets (WebP optimizado).
- Para reemplazar una foto, sube un archivo con el mismo nombre en /assets.
- Los formularios (Contacto, Buzón) validan y muestran confirmación, pero aún no envían a un servidor: falta conectar un servicio (p. ej. Formspree o una función de Vercel).
