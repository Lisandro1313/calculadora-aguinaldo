import type { Metadata } from "next";
import CalculadoraVacaciones from "@/components/CalculadoraVacaciones";
import ToolsNav from "@/components/ToolsNav";
import AdSlot from "@/components/AdSlot";

export const metadata: Metadata = {
  title:
    "Calculadora de Vacaciones 2026 | Cuántos días me corresponden (Argentina)",
  description:
    "Calculá cuántos días de vacaciones te corresponden según tu antigüedad y cuánto cobrás. Según la Ley de Contrato de Trabajo (art. 150). Gratis y al instante.",
  keywords: [
    "calculadora de vacaciones",
    "cuantos dias de vacaciones me corresponden",
    "dias de vacaciones por antiguedad",
    "vacaciones argentina",
    "cuanto cobro de vacaciones",
    "calcular vacaciones",
  ],
  alternates: { canonical: "/calculadora-vacaciones" },
  openGraph: {
    title: "Calculadora de Vacaciones 2026 (Argentina)",
    description:
      "Cuántos días de vacaciones te corresponden y cuánto cobrás, según tu antigüedad.",
    url: "/calculadora-vacaciones",
    type: "website",
    locale: "es_AR",
  },
};

const faqs = [
  {
    q: "¿Cuántos días de vacaciones me corresponden en Argentina?",
    a: "Según la Ley de Contrato de Trabajo (art. 150) los días corridos de vacaciones dependen de tu antigüedad: hasta 5 años, 14 días; de 5 a 10 años, 21 días; de 10 a 20 años, 28 días; y más de 20 años, 35 días. La antigüedad se cuenta al 31 de diciembre del año en que vas a tomar las vacaciones.",
  },
  {
    q: "¿Cómo se calcula cuánto se cobra de vacaciones?",
    a: "El valor de cada día de vacaciones se obtiene dividiendo tu sueldo mensual por 25 (art. 155 LCT). Después multiplicás ese valor por la cantidad de días que te corresponden. Por eso el día de vacaciones se paga un poco más que un día normal de trabajo.",
  },
  {
    q: "¿Y si trabajé menos de 6 meses?",
    a: "Si no llegaste a la mitad de los días hábiles del año, te corresponden vacaciones proporcionales: 1 día de descanso por cada 20 días efectivamente trabajados. Esta calculadora estima el caso general por antigüedad.",
  },
  {
    q: "¿Las vacaciones no gozadas se pagan?",
    a: "Sí, pero solo en caso de extinción del contrato (despido o renuncia): se pagan los días proporcionales no gozados de ese año. Durante la relación laboral las vacaciones deben tomarse, no se pueden cambiar por dinero.",
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
          <h1>Calculadora de Vacaciones</h1>
          <p>
            Averiguá cuántos días de vacaciones te corresponden y cuánto cobrás.
            Gratis y al instante.
          </p>
        </div>
      </header>

      <main className="container">
        <CalculadoraVacaciones />

        <section className="content">
          <h2>¿Cuántos días de vacaciones me corresponden?</h2>
          <p>
            La cantidad de días de vacaciones depende de tu{" "}
            <strong>antigüedad</strong> en el trabajo (art. 150 LCT):
          </p>
          <ul style={{ margin: "0 0 12px 20px", color: "#334155" }}>
            <li>Hasta 5 años: <strong>14 días</strong> corridos</li>
            <li>De 5 a 10 años: <strong>21 días</strong></li>
            <li>De 10 a 20 años: <strong>28 días</strong></li>
            <li>Más de 20 años: <strong>35 días</strong></li>
          </ul>
          <h3>¿Cuánto se cobra?</h3>
          <div className="formula-box">
            Cobro = (<b>Sueldo</b> ÷ 25) × días de vacaciones
          </div>
          <p>
            El día de vacaciones se calcula dividiendo el sueldo por 25 (no por
            30), por eso se paga un poco más que un día normal.
          </p>
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
        <ToolsNav actual="/calculadora-vacaciones" />

        <AdSlot slot="bottom" />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            Calculadora de Vacaciones · Herramienta gratuita para trabajadores de
            Argentina 🇦🇷
          </p>
          <p className="disclaimer">
            Cálculo estimado con fines informativos. Para tu liquidación final
            consultá tu recibo de sueldo oficial.
          </p>
        </div>
      </footer>
    </>
  );
}
