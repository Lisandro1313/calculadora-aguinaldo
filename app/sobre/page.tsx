import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Sobre el sitio | Calculadoras Laborales",
  description:
    "Qué es Calculadoras Laborales, cómo funcionan nuestras calculadoras y en qué normativa argentina (LCT) se basan los cálculos.",
  alternates: { canonical: "/sobre" },
  robots: { index: true, follow: true },
};

export default function Page() {
  const email = siteConfig.contactEmail;

  return (
    <>
      <header className="site-header">
        <div className="container">
          <span className="badge">🇦🇷 Sobre nosotros</span>
          <h1>Sobre el sitio</h1>
          <p>Calculadoras laborales claras, gratuitas y pensadas para Argentina.</p>
        </div>
      </header>

      <main className="container">
        <section className="content">
          <h2>¿Qué es Calculadoras Laborales?</h2>
          <p>
            <strong>Calculadoras Laborales</strong> es un proyecto independiente
            que reúne herramientas online gratuitas para que cualquier trabajador
            en relación de dependencia de Argentina pueda entender y estimar sus
            números laborales en segundos, sin tener que pelear con fórmulas ni
            planillas de cálculo.
          </p>
          <p>Hoy podés usar:</p>
          <ul style={{ margin: "0 0 12px 20px", color: "#334155" }}>
            <li>
              <Link href="/">Calculadora de Aguinaldo (SAC)</Link> — cuánto
              cobrás de aguinaldo, completo o proporcional.
            </li>
            <li>
              <Link href="/calculadora-sueldo-neto">
                Calculadora de Sueldo Neto
              </Link>{" "}
              — de tu sueldo bruto al que cobrás en mano.
            </li>
            <li>
              <Link href="/calculadora-indemnizacion">
                Calculadora de Indemnización por despido
              </Link>{" "}
              — antigüedad, preaviso y SAC.
            </li>
            <li>
              <Link href="/calculadora-vacaciones">
                Calculadora de Vacaciones
              </Link>{" "}
              — días que te corresponden y cuánto se pagan.
            </li>
            <li>
              <Link href="/calculadora-horas-extra">
                Calculadora de Horas Extra
              </Link>{" "}
              — cuánto cobrás al 50% y al 100%.
            </li>
          </ul>

          <h2>¿Por qué lo creamos?</h2>
          <p>
            La información sobre derechos laborales suele estar dispersa, escrita
            en lenguaje técnico y mezclada con publicidad confusa. Nuestra idea es
            simple: que ingreses un par de datos y obtengas un número claro, con
            una explicación entendible de <em>cómo</em> se llegó a ese resultado.
            Cada calculadora viene acompañada de una guía y de preguntas
            frecuentes para que aprendas, no solo para que copies un número.
          </p>

          <h2>¿En qué se basan los cálculos?</h2>
          <p>
            Las fórmulas siguen la{" "}
            <strong>Ley de Contrato de Trabajo (LCT) N.º 20.744</strong> y la
            normativa laboral argentina vigente: el SAC del art. 121 y 122, la
            indemnización por antigüedad del art. 245, los días de vacaciones del
            art. 150 y el valor del día del art. 155, entre otros. Todos los
            cálculos se ejecutan en tu propio navegador: no guardamos ni enviamos
            los montos que ingresás.
          </p>

          <h2>Una aclaración importante</h2>
          <p>
            Calculadoras Laborales <strong>no es un estudio jurídico ni
            contable</strong>. Los resultados son estimaciones orientativas con
            fines informativos y educativos. Pueden existir variables que afecten
            tu caso puntual (convenios colectivos, topes legales, adicionales,
            Impuesto a las Ganancias, etc.). Para tu liquidación final, consultá
            siempre tu recibo de sueldo oficial o a un profesional matriculado.
          </p>

          <h2>Contacto</h2>
          <p>
            ¿Encontraste un error, querés sugerir una calculadora nueva o tenés
            una consulta? Escribinos a{" "}
            <a href={`mailto:${email}`}>{email}</a> o desde la página de{" "}
            <Link href="/contacto">Contacto</Link>.
          </p>
        </section>
      </main>

      <SiteFooter
        nombre="Calculadoras Laborales"
        disclaimer="Este sitio ofrece cálculos estimados con fines informativos. No constituye asesoramiento legal ni contable."
      />
    </>
  );
}
