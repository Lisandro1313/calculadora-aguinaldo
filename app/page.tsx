import Calculadora from "@/components/Calculadora";
import ToolsNav from "@/components/ToolsNav";
import AdSlot from "@/components/AdSlot";
import SiteFooter from "@/components/SiteFooter";

const faqs = [
  {
    q: "¿Cómo se calcula el aguinaldo en Argentina?",
    a: "El aguinaldo (SAC) equivale al 50% de la mejor remuneración mensual bruta que cobraste dentro del semestre. Por ejemplo, si tu mejor sueldo fue de $800.000, tu aguinaldo será de $400.000. Si no trabajaste el semestre completo, se calcula de forma proporcional a los días trabajados.",
  },
  {
    q: "¿Cuándo se paga el aguinaldo 2026?",
    a: "La primera cuota (SAC) se paga hasta el 30 de junio y corresponde al primer semestre (enero–junio). La segunda cuota se paga hasta el 18 de diciembre y corresponde al segundo semestre (julio–diciembre). El empleador tiene un período de gracia de hasta 4 días hábiles.",
  },
  {
    q: "¿Qué es el aguinaldo proporcional?",
    a: "Si ingresaste a trabajar empezado el semestre, o renunciaste antes de que termine, no te corresponde el aguinaldo completo sino una parte proporcional a los días efectivamente trabajados. La cuenta es: (mejor sueldo ÷ 2) × (días trabajados ÷ días del semestre).",
  },
  {
    q: "¿El aguinaldo se calcula sobre el sueldo bruto o neto?",
    a: "Se calcula sobre el sueldo BRUTO (antes de los descuentos de jubilación, obra social, etc.). Sobre el monto del aguinaldo sí se aplican luego los descuentos de ley, por eso lo que cobrás en mano es un poco menos.",
  },
  {
    q: "¿Las horas extra y comisiones cuentan para el aguinaldo?",
    a: "Sí. Se toma la mejor remuneración mensual del semestre, e incluye horas extra, comisiones, premios y todo concepto remunerativo. Por eso conviene usar el mes en que más cobraste.",
  },
  {
    q: "¿Los monotributistas cobran aguinaldo?",
    a: "No. El aguinaldo es un derecho de los trabajadores en relación de dependencia (empleados registrados). Los monotributistas y autónomos no perciben SAC.",
  },
];

export default function Home() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Calculadora de Aguinaldo 2026",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "ARS" },
    description:
      "Calculá tu aguinaldo (SAC) en Argentina de forma gratuita e instantánea.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />

      <header className="site-header">
        <div className="container">
          <span className="badge">🇦🇷 Argentina · 2026</span>
          <h1>Calculadora de Aguinaldo</h1>
          <p>
            Averiguá en segundos cuánto cobrás de aguinaldo (SAC). Gratis, sin
            registro y al instante.
          </p>
        </div>
      </header>

      <main className="container">
        <Calculadora />

        <section className="content">
          <h2>¿Cómo se calcula el aguinaldo?</h2>
          <p>
            El <strong>aguinaldo</strong> o <strong>SAC</strong> (Sueldo Anual
            Complementario) es un sueldo extra que en Argentina se paga en dos
            cuotas al año. Cada cuota equivale al <strong>50% de la mejor
            remuneración mensual bruta</strong> que cobraste dentro del
            semestre correspondiente.
          </p>
          <div className="formula-box">
            Aguinaldo = <b>Mejor sueldo bruto del semestre</b> ÷ 2
          </div>
          <p>
            Si no trabajaste el semestre completo (porque ingresaste o te fuiste
            en el medio), corresponde el <strong>aguinaldo proporcional</strong>
            :
          </p>
          <div className="formula-box">
            Aguinaldo proporcional = (<b>Mejor sueldo</b> ÷ 2) × (
            <b>días trabajados</b> ÷ días del semestre)
          </div>
        </section>

        <section className="content">
          <h2>Ejemplo práctico</h2>
          <p>
            Supongamos que trabajaste todo el semestre y tu mejor sueldo bruto
            fue de <strong>$900.000</strong>. El aguinaldo se calcula así:
          </p>
          <div className="formula-box">
            $900.000 ÷ 2 = <b>$450.000</b> de aguinaldo bruto
          </div>
          <p>
            Ese es el monto bruto. Como al SAC se le aplican los descuentos de
            ley (17%: jubilación, PAMI y obra social), en mano cobrarías
            aproximadamente <strong>$373.500</strong>:
          </p>
          <div className="formula-box">
            $450.000 − 17% = <b>$373.500</b> aproximados en mano
          </div>
          <p>
            Y si solo trabajaste, por ejemplo, <strong>90 de los 181 días</strong>{" "}
            del semestre, el aguinaldo proporcional sería: ($900.000 ÷ 2) × (90 ÷
            181) = <strong>$223.756</strong> brutos.
          </p>
        </section>

        <AdSlot slot="inline" />

        <section className="content">
          <h2>¿Cuándo se cobra el aguinaldo en 2026?</h2>
          <p>
            La ley establece dos pagos al año:
          </p>
          <h3>🗓️ Primera cuota — hasta el 30 de junio</h3>
          <p>
            Corresponde al primer semestre (enero a junio). Es la que están
            cobrando todos ahora.
          </p>
          <h3>🗓️ Segunda cuota — hasta el 18 de diciembre</h3>
          <p>
            Corresponde al segundo semestre (julio a diciembre), justo antes de
            las fiestas.
          </p>
        </section>

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
        <ToolsNav actual="/" />

        <AdSlot slot="bottom" />
      </main>

      <SiteFooter
        nombre="Calculadora de Aguinaldo"
        disclaimer="Este sitio ofrece un cálculo estimado con fines informativos. Para tu liquidación final consultá a tu empleador, contador o el recibo de sueldo oficial."
      />
    </>
  );
}
