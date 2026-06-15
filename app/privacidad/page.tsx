import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Política de Privacidad | Calculadoras Laborales",
  description:
    "Política de privacidad de Calculadoras Laborales: qué datos usamos, cómo funcionan las cookies y la publicidad de Google AdSense en este sitio.",
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

export default function Page() {
  const email = siteConfig.contactEmail;

  return (
    <>
      <header className="site-header">
        <div className="container">
          <span className="badge">Información legal</span>
          <h1>Política de Privacidad</h1>
          <p>Cómo tratamos tus datos y por qué este sitio respeta tu privacidad.</p>
        </div>
      </header>

      <main className="container">
        <section className="content">
          <p>
            En <strong>Calculadoras Laborales</strong> (en adelante, "el sitio")
            nos tomamos en serio tu privacidad. Esta política explica de forma
            clara qué información se recopila cuando usás el sitio, con qué fin y
            qué control tenés sobre ella. Última actualización:{" "}
            <strong>junio de 2026</strong>.
          </p>

          <h2>1. Los cálculos se hacen en tu navegador</h2>
          <p>
            Todas nuestras calculadoras (aguinaldo, sueldo neto, indemnización,
            vacaciones y horas extra) funcionan <strong>localmente en tu
            dispositivo</strong>. Los montos que ingresás —tu sueldo, tus días
            trabajados, etc.— <strong>no se envían a ningún servidor</strong>, no
            se guardan y no se comparten con nadie. Cuando cerrás o recargás la
            página, esa información desaparece.
          </p>

          <h2>2. Datos que sí se recopilan</h2>
          <p>
            No te pedimos registro ni datos personales (nombre, DNI, email) para
            usar las calculadoras. La información que se recopila de forma
            automática es la habitual de cualquier sitio web y de las
            herramientas de medición y publicidad de terceros:
          </p>
          <ul style={{ margin: "0 0 12px 20px", color: "#334155" }}>
            <li>
              Datos técnicos anónimos: tipo de dispositivo, navegador, sistema
              operativo y páginas visitadas.
            </li>
            <li>
              Dirección IP (utilizada por los servicios de terceros para
              seguridad y para mostrar anuncios relevantes a tu región).
            </li>
          </ul>

          <h2>3. Cookies y tecnologías similares</h2>
          <p>
            El sitio utiliza cookies, que son pequeños archivos de texto que se
            guardan en tu navegador. Se usan para recordar preferencias, medir el
            tráfico y mostrar publicidad. Podés bloquear o eliminar las cookies
            desde la configuración de tu navegador en cualquier momento; tené en
            cuenta que algunas funciones podrían verse afectadas.
          </p>

          <h2>4. Publicidad de Google AdSense</h2>
          <p>
            Este sitio se financia con publicidad. Utilizamos{" "}
            <strong>Google AdSense</strong>, un servicio de Google que muestra
            anuncios. Para ello, Google y sus socios pueden usar cookies para
            mostrarte avisos basados en tus visitas a este y otros sitios web.
          </p>
          <ul style={{ margin: "0 0 12px 20px", color: "#334155" }}>
            <li>
              Google utiliza la <strong>cookie DART</strong> y otros
              identificadores para publicar anuncios según tus intereses.
            </li>
            <li>
              Podés desactivar la publicidad personalizada visitando la{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
              >
                Configuración de anuncios de Google
              </a>
              .
            </li>
            <li>
              Para más información sobre cómo Google usa los datos, consultá las{" "}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
              >
                políticas de privacidad de los socios de Google
              </a>
              .
            </li>
            <li>
              También podés gestionar tus opciones de publicidad en{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
              >
                aboutads.info/choices
              </a>
              .
            </li>
          </ul>

          <h2>5. Enlaces a otros sitios</h2>
          <p>
            El sitio puede contener enlaces a páginas externas (por ejemplo,
            normativa oficial). No somos responsables de las prácticas de
            privacidad ni del contenido de esos sitios; te recomendamos leer sus
            propias políticas.
          </p>

          <h2>6. Menores de edad</h2>
          <p>
            El sitio está dirigido a un público general y no recopila
            intencionadamente datos de menores de edad.
          </p>

          <h2>7. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política para reflejar cambios en el sitio o
            en la normativa. Publicaremos la versión vigente en esta misma página
            con su fecha de actualización.
          </p>

          <h2>8. Contacto</h2>
          <p>
            Si tenés dudas sobre esta política de privacidad, escribinos a{" "}
            <a href={`mailto:${email}`}>{email}</a>.
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
