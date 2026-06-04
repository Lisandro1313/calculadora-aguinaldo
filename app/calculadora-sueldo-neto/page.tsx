import type { Metadata } from "next";
import CalculadoraSueldoNeto from "@/components/CalculadoraSueldoNeto";
import ToolsNav from "@/components/ToolsNav";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title: "Calculadora de Sueldo Neto 2026 | De Bruto a En Mano (Argentina)",
  description:
    "Calculá tu sueldo neto (en mano) a partir del bruto. Descuentos de ley: jubilación 11%, PAMI 3% y obra social 3%. Gratis, al instante y para Argentina.",
  keywords: [
    "calculadora de sueldo neto",
    "sueldo bruto a neto",
    "cuanto cobro en mano",
    "calcular sueldo neto",
    "descuentos del sueldo",
    "sueldo en mano argentina",
  ],
  alternates: { canonical: "/calculadora-sueldo-neto" },
  openGraph: {
    title: "Calculadora de Sueldo Neto 2026 (Argentina)",
    description:
      "De sueldo bruto a sueldo en mano en segundos. Descuentos de ley incluidos.",
    url: "/calculadora-sueldo-neto",
    type: "website",
    locale: "es_AR",
  },
};

const faqs = [
  {
    q: "¿Cómo se calcula el sueldo neto a partir del bruto?",
    a: "Al sueldo bruto se le restan los descuentos obligatorios de ley: 11% de jubilación, 3% de Ley 19.032 (PAMI) y 3% de obra social. En total un 17%. Lo que queda es tu sueldo neto o 'de bolsillo'. Por ejemplo, sobre un bruto de $1.000.000 te descuentan $170.000 y cobrás $830.000.",
  },
  {
    q: "¿Qué descuentos tiene el sueldo en Argentina?",
    a: "Para un empleado en relación de dependencia los descuentos de ley son: Jubilación (11%), Ley 19.032 / INSSJP-PAMI (3%) y Obra social (3%). Suman 17% del sueldo bruto remunerativo.",
  },
  {
    q: "¿Este cálculo incluye el Impuesto a las Ganancias?",
    a: "No. Esta calculadora muestra los descuentos de ley (17%) que tienen todos los empleados. El Impuesto a las Ganancias solo lo pagan los sueldos más altos que superan un mínimo no imponible, y varía según tu situación familiar y deducciones. Si tu sueldo está por debajo de ese mínimo, este es tu neto real.",
  },
  {
    q: "¿El aguinaldo también tiene descuentos?",
    a: "Sí. Al aguinaldo se le aplican los mismos descuentos de ley (17%), por eso el aguinaldo que cobrás en mano es un poco menor al 50% de tu sueldo. Podés calcular el aguinaldo bruto con nuestra Calculadora de Aguinaldo.",
  },
];

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="site-header">
        <div className="container">
          <span className="badge">🇦🇷 Argentina · 2026</span>
          <h1>Calculadora de Sueldo Neto</h1>
          <p>
            Pasá tu sueldo bruto a sueldo en mano en segundos. Gratis y al
            instante.
          </p>
        </div>
      </header>

      <main className="container">
        <CalculadoraSueldoNeto />

        <section className="content">
          <h2>¿Cómo paso de sueldo bruto a neto?</h2>
          <p>
            El <strong>sueldo bruto</strong> es el total que figura arriba en tu
            recibo. El <strong>sueldo neto</strong> (o "en mano") es lo que
            realmente cobrás después de los descuentos obligatorios de ley.
          </p>
          <div className="formula-box">
            Sueldo neto = <b>Sueldo bruto</b> − 17% (descuentos de ley)
          </div>
          <p>Esos descuentos se reparten así:</p>
          <ul style={{ margin: "0 0 12px 20px", color: "#334155" }}>
            <li>Jubilación: <strong>11%</strong></li>
            <li>Ley 19.032 (PAMI / INSSJP): <strong>3%</strong></li>
            <li>Obra social: <strong>3%</strong></li>
          </ul>
        </section>

        <AdSlot slot="inline" />

        <section className="content faq">
          <h2>Preguntas frecuentes</h2>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        <h2 style={{ fontSize: 18, margin: "10px 0 0" }}>Otras calculadoras</h2>
        <ToolsNav actual="/calculadora-sueldo-neto" />

        <AdSlot slot="bottom" />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            Calculadora de Sueldo Neto · Herramienta gratuita para trabajadores
            de Argentina 🇦🇷
          </p>
          <p className="disclaimer">
            Cálculo estimado con fines informativos. No incluye Impuesto a las
            Ganancias. Para tu liquidación final consultá tu recibo de sueldo
            oficial.
          </p>
        </div>
      </footer>
    </>
  );
}
