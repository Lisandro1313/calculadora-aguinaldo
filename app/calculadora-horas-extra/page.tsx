import type { Metadata } from "next";
import CalculadoraHorasExtra from "@/components/CalculadoraHorasExtra";
import ToolsNav from "@/components/ToolsNav";
import AdSlot from "@/components/AdSlot";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title:
    "Calculadora de Horas Extra 2026 | Cuánto se paga al 50% y 100% (Argentina)",
  description:
    "Calculá cuánto cobrás de horas extra al 50% y al 100% en Argentina. Ingresá tu sueldo y las horas trabajadas de más. Gratis, al instante y con el detalle.",
  keywords: [
    "calculadora de horas extra",
    "como se pagan las horas extra",
    "horas extra al 50",
    "horas extra al 100",
    "valor hora extra",
    "calcular horas extra argentina",
  ],
  alternates: { canonical: "/calculadora-horas-extra" },
  openGraph: {
    title: "Calculadora de Horas Extra 2026 (Argentina)",
    description:
      "Cuánto cobrás de horas extra al 50% y al 100%, con el detalle de cada una.",
    url: "/calculadora-horas-extra",
    type: "website",
    locale: "es_AR",
  },
};

const faqs = [
  {
    q: "¿Cómo se calculan las horas extra en Argentina?",
    a: "Primero se obtiene el valor de la hora normal dividiendo el sueldo mensual por la cantidad de horas que trabajás al mes (una jornada completa son unas 200 horas). Las horas extra al 50% se pagan a 1,5 veces ese valor, y las del 100% a 2 veces.",
  },
  {
    q: "¿Cuándo se pagan las horas extra al 50% y cuándo al 100%?",
    a: "Al 50% se pagan las horas extra de días hábiles y los sábados hasta las 13:00. Al 100% (el doble) se pagan los sábados después de las 13:00, los domingos y los días feriados.",
  },
  {
    q: "¿Cuántas horas extra puedo hacer?",
    a: "El límite legal es de 30 horas extra por mes y 200 por año, salvo autorización especial. De todas formas, todas las horas que trabajes por encima de tu jornada deben pagarse como extra.",
  },
  {
    q: "¿El valor de la hora se calcula sobre el sueldo bruto?",
    a: "Sí. El valor de la hora normal se calcula sobre la remuneración bruta. Sobre las horas extra luego se aplican los descuentos de ley como en el resto del sueldo.",
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
          <h1>Calculadora de Horas Extra</h1>
          <p>
            Calculá cuánto cobrás por tus horas extra al 50% y al 100%. Gratis y
            al instante.
          </p>
        </div>
      </header>

      <main className="container">
        <CalculadoraHorasExtra />

        <section className="content">
          <h2>¿Cómo se calculan las horas extra?</h2>
          <p>
            Primero se calcula el <strong>valor de tu hora normal</strong>:
          </p>
          <div className="formula-box">
            Valor hora = <b>Sueldo mensual</b> ÷ horas que trabajás al mes
          </div>
          <p>Después se aplica el recargo según el tipo de hora extra:</p>
          <ul style={{ margin: "0 0 12px 20px", color: "#334155" }}>
            <li>
              <strong>Al 50%</strong> (días de semana y sábado hasta las 13hs):
              valor hora × 1,5
            </li>
            <li>
              <strong>Al 100%</strong> (sábado tarde, domingo y feriados): valor
              hora × 2
            </li>
          </ul>
        </section>

        <section className="content">
          <h2>Ejemplo práctico</h2>
          <p>
            Tomemos un sueldo de <strong>$800.000</strong> con una jornada
            completa de <strong>200 horas mensuales</strong>. El valor de la hora
            normal es:
          </p>
          <div className="formula-box">
            $800.000 ÷ 200 = <b>$4.000</b> por hora normal
          </div>
          <p>Entonces cada hora extra se paga:</p>
          <ul style={{ margin: "0 0 12px 20px", color: "#334155" }}>
            <li>
              <strong>Al 50%:</strong> $4.000 × 1,5 = <strong>$6.000</strong> la
              hora.
            </li>
            <li>
              <strong>Al 100%:</strong> $4.000 × 2 = <strong>$8.000</strong> la
              hora.
            </li>
          </ul>
          <p>
            Si en el mes hiciste 10 horas al 50%, sumás{" "}
            <strong>$60.000</strong> extra a tu sueldo. Si esas 10 fueran al 100%
            (un domingo o feriado), serían <strong>$80.000</strong>.
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
        <ToolsNav actual="/calculadora-horas-extra" />

        <AdSlot slot="bottom" />
      </main>

      <SiteFooter
        nombre="Calculadora de Horas Extra"
        disclaimer="Cálculo estimado con fines informativos. Para tu liquidación final consultá tu recibo de sueldo oficial."
      />
    </>
  );
}
