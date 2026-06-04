import type { Metadata } from "next";
import CalculadoraIndemnizacion from "@/components/CalculadoraIndemnizacion";
import ToolsNav from "@/components/ToolsNav";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title:
    "Calculadora de Indemnización por Despido 2026 | Cuánto me corresponde (Argentina)",
  description:
    "Calculá tu indemnización por despido sin causa en Argentina. Antigüedad (art. 245 LCT), preaviso y SAC. Gratis, al instante y con el detalle de cada concepto.",
  keywords: [
    "calculadora de indemnizacion",
    "indemnizacion por despido",
    "cuanto me corresponde de indemnizacion",
    "despido sin causa",
    "art 245 LCT",
    "calcular indemnizacion argentina",
    "preaviso despido",
  ],
  alternates: { canonical: "/calculadora-indemnizacion" },
  openGraph: {
    title: "Calculadora de Indemnización por Despido 2026 (Argentina)",
    description:
      "Calculá cuánto te corresponde por despido sin causa: antigüedad, preaviso y SAC.",
    url: "/calculadora-indemnizacion",
    type: "website",
    locale: "es_AR",
  },
};

const faqs = [
  {
    q: "¿Cómo se calcula la indemnización por despido en Argentina?",
    a: "Por un despido sin causa te corresponde: (1) Indemnización por antigüedad (art. 245 LCT): un mes de tu mejor sueldo bruto por cada año trabajado o fracción mayor a 3 meses; (2) Preaviso: 1 mes si tenés menos de 5 años de antigüedad o 2 meses si tenés más; (3) SAC (aguinaldo proporcional) sobre el preaviso. La suma de todo es tu indemnización.",
  },
  {
    q: "¿Qué es la indemnización por antigüedad (art. 245)?",
    a: "Es el componente principal: equivale a un mes de la mejor remuneración mensual, normal y habitual del último año, por cada año de servicio. Las fracciones mayores a 3 meses se cuentan como un año completo. El mínimo es un sueldo.",
  },
  {
    q: "¿Qué es el preaviso?",
    a: "Es el aviso anticipado que el empleador debe darte antes del despido. Si no te avisó, te lo debe pagar: equivale a 1 mes de sueldo si tenés menos de 5 años de antigüedad, o 2 meses si tenés 5 o más. Durante el período de prueba el preaviso es de 15 días.",
  },
  {
    q: "¿Cobro indemnización si renuncio?",
    a: "No. La indemnización por antigüedad corresponde cuando el empleador te despide sin causa justa. Si renunciás, no cobrás indemnización por antigüedad (sí te corresponden vacaciones no gozadas y SAC proporcional).",
  },
  {
    q: "¿Este cálculo es exacto?",
    a: "Es una estimación de los conceptos principales. La liquidación final puede variar por topes legales (fallo Vizzoti), vacaciones no gozadas, integración del mes de despido, multas o convenios particulares. Para un número exacto consultá a un abogado laboral.",
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
          <h1>Calculadora de Indemnización por Despido</h1>
          <p>
            Calculá cuánto te corresponde por un despido sin causa. Gratis y al
            instante.
          </p>
        </div>
      </header>

      <main className="container">
        <CalculadoraIndemnizacion />

        <section className="content">
          <h2>¿Cómo se calcula la indemnización por despido?</h2>
          <p>
            Cuando te despiden <strong>sin causa</strong>, la ley argentina (LCT)
            te reconoce varios conceptos. Los principales son:
          </p>
          <h3>1. Indemnización por antigüedad (art. 245)</h3>
          <div className="formula-box">
            <b>Mejor sueldo bruto</b> × años trabajados
          </div>
          <p>
            Un sueldo por cada año. Las fracciones mayores a 3 meses cuentan como
            un año completo.
          </p>
          <h3>2. Preaviso</h3>
          <p>
            1 mes de sueldo si tenés menos de 5 años de antigüedad, o 2 meses si
            tenés 5 o más.
          </p>
          <h3>3. SAC sobre el preaviso</h3>
          <p>El aguinaldo proporcional correspondiente al preaviso.</p>
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
        <ToolsNav actual="/calculadora-indemnizacion" />

        <AdSlot slot="bottom" />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            Calculadora de Indemnización · Herramienta gratuita para trabajadores
            de Argentina 🇦🇷
          </p>
          <p className="disclaimer">
            Cálculo estimado con fines informativos. No reemplaza el
            asesoramiento de un abogado laboral ni la liquidación final oficial.
          </p>
        </div>
      </footer>
    </>
  );
}
