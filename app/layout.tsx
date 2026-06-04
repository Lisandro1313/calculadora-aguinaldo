import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import SiteNav from "@/components/SiteNav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Calculadora de Aguinaldo 2026 | Cuánto cobro de SAC (Argentina)",
  description:
    "Calculá tu aguinaldo (SAC) 2026 gratis y al instante. Ingresá tu mejor sueldo del semestre y descubrí cuánto te corresponde de aguinaldo en Argentina. Fórmula oficial y aguinaldo proporcional.",
  keywords: [
    "calculadora de aguinaldo",
    "aguinaldo 2026",
    "como calcular el aguinaldo",
    "SAC",
    "aguinaldo proporcional",
    "cuanto cobro de aguinaldo",
    "sueldo anual complementario",
    "aguinaldo argentina",
  ],
  authors: [{ name: "Calculadora de Aguinaldo" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Calculadora de Aguinaldo 2026 (Argentina) — Gratis y al instante",
    description:
      "Ingresá tu mejor sueldo del semestre y calculá cuánto cobrás de aguinaldo. Incluye aguinaldo proporcional.",
    url: siteConfig.url,
    siteName: "Calculadora de Aguinaldo",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de Aguinaldo 2026 (Argentina)",
    description:
      "Calculá tu aguinaldo gratis al instante. Fórmula oficial y proporcional.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const adsense = siteConfig.adsenseClientId;
  return (
    <html lang="es-AR">
      <head>
        {adsense !== "" && (
          <>
            {/* Script literal de AdSense en el <head> para que el robot de
                verificación lo detecte (no usar next/script aquí). */}
            <script
              async
              src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense}`}
              crossOrigin="anonymous"
            />
            {/* Método de verificación alternativo por meta tag */}
            <meta name="google-adsense-account" content={adsense} />
          </>
        )}
      </head>
      <body>
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
