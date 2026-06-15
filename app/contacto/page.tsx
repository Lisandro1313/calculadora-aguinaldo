import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Contacto | Calculadoras Laborales",
  description:
    "¿Tenés dudas, sugerencias o encontraste un error en alguna calculadora? Escribinos. Contacto de Calculadoras Laborales.",
  alternates: { canonical: "/contacto" },
  robots: { index: true, follow: true },
};

export default function Page() {
  const email = siteConfig.contactEmail;

  return (
    <>
      <header className="site-header">
        <div className="container">
          <span className="badge">✉️ Contacto</span>
          <h1>Contacto</h1>
          <p>Estamos para ayudarte a mejorar el sitio.</p>
        </div>
      </header>

      <main className="container">
        <section className="content">
          <h2>Escribinos</h2>
          <p>
            Si encontraste un error en algún cálculo, querés proponer una
            calculadora nueva, sugerir una mejora o hacer una consulta general
            sobre el sitio, podés contactarnos por email. Respondemos todos los
            mensajes en la medida de lo posible.
          </p>

          <div className="formula-box" style={{ textAlign: "center" }}>
            📧 <a href={`mailto:${email}`} style={{ color: "#7dd3fc" }}>{email}</a>
          </div>

          <h2>¿Para qué nos podés escribir?</h2>
          <ul style={{ margin: "0 0 12px 20px", color: "#334155" }}>
            <li>Reportar un error o un resultado que no cierra.</li>
            <li>Sugerir una calculadora o una función nueva.</li>
            <li>Consultas sobre cómo usar las herramientas.</li>
            <li>Propuestas de colaboración o publicidad.</li>
          </ul>

          <h2>Lo que no podemos hacer</h2>
          <p>
            No brindamos <strong>asesoramiento legal ni contable
            personalizado</strong>. Las calculadoras dan estimaciones
            orientativas; para tu situación particular (un despido, un reclamo,
            tu liquidación de sueldo) consultá a un abogado laboralista, a tu
            sindicato o a un contador matriculado.
          </p>

          <p>
            Antes de escribir, quizás encuentres tu respuesta en la sección{" "}
            <Link href="/sobre">Sobre el sitio</Link> o en las preguntas
            frecuentes de cada calculadora.
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
