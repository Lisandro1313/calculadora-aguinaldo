# 💰 Calculadora de Aguinaldo (Argentina)

Micro-web **gratis** para calcular el aguinaldo (SAC). Hecha para rankear en Google
y generar ingresos pasivos con Google AdSense. La construís una vez y trabaja sola.

> **Idea:** la gente busca "calculadora de aguinaldo" en junio y diciembre. Esta web
> aparece, la usan, ven anuncios → vos cobrás. Cero mantenimiento.

---

## 🚀 PASO 1 — Probarla en tu compu

```bash
npm install
npm run dev
```

Abrí http://localhost:3000 y listo.

---

## 🌍 PASO 2 — Publicarla GRATIS en internet (Vercel)

1. Creá un repo nuevo en GitHub (ej: `calculadora-aguinaldo`) y subí esta carpeta:

   ```bash
   git init
   git add .
   git commit -m "Calculadora de aguinaldo"
   git branch -M main
   git remote add origin https://github.com/Lisandro1313/calculadora-aguinaldo.git
   git push -u origin main
   ```

2. Entrá a **https://vercel.com**, iniciá sesión con GitHub.
3. **Add New → Project → Import** el repo → **Deploy**.
4. En ~1 minuto tenés tu web online con un link tipo
   `https://calculadora-aguinaldo.vercel.app`. **¡Gratis para siempre!**

5. Copiá ese link y pegalo en `site.config.ts` (campo `url`).

---

## 💵 PASO 3 — Activar los anuncios (la plata)

1. Creá una cuenta en **https://adsense.google.com** (gratis).
2. Agregá tu sitio. Google lo revisa (puede tardar días). Para aprobar conviene
   tener el dominio andando y algo de contenido — esta web ya lo tiene.
3. Cuando te aprueben, te dan un **ID de editor** tipo `ca-pub-1234567890123456`.
4. Pegalo en `site.config.ts` → `adsenseClientId`.
5. Creá 3 bloques de anuncio en AdSense y pegá cada `data-ad-slot` en
   `adSlots` (`top`, `inline`, `bottom`).
6. `git commit` + `git push` → Vercel redespliega solo. **Anuncios activos.** 🎉

> Mientras no pongas el ID, en lugar de anuncios se ven recuadros grises de
> ejemplo (así no se rompe nada durante el desarrollo).

---

## 📈 PASO 4 — Que Google te encuentre (SEO)

1. Entrá a **https://search.google.com/search-console**.
2. Agregá tu dominio y verificalo.
3. Mandá tu sitemap: `https://TU-SITIO/sitemap.xml`.
4. En "Inspección de URL" pegá tu home y tocá **"Solicitar indexación"**.

En días/semanas empezás a aparecer en las búsquedas. El pico fuerte es
**junio y diciembre** (cuando se paga el aguinaldo).

---

## ⚙️ Personalizar

| Quiero... | Archivo |
|-----------|---------|
| Cambiar textos / preguntas frecuentes | `app/page.tsx` |
| Cambiar la fórmula o el formulario | `components/Calculadora.tsx` |
| Colores y estilos | `app/globals.css` |
| ID de AdSense y URL del sitio | `site.config.ts` |
| Título y descripción para Google | `app/layout.tsx` |

---

## 🧱 Cómo escalar (más plata pasiva)

Cada calculadora nueva = otra página que rankea sola. Ideas para sumar después:

- Calculadora de **indemnización por despido**
- Calculadora de **sueldo neto** (bruto → en mano)
- Calculadora de **vacaciones** (días que te corresponden)
- Calculadora de **horas extra**

Mismo molde, más tráfico, más ingresos. 🚀

---

Hecho con Next.js. Desplegable gratis en Vercel.
