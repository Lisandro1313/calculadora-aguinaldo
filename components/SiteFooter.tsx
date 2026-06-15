import Link from "next/link";

/**
 * Pie de página común a todo el sitio.
 * Incluye los enlaces legales (Sobre, Contacto, Privacidad) que Google AdSense
 * espera encontrar en un sitio completo, además del texto y disclaimer propios
 * de cada página.
 */
export default function SiteFooter({
  nombre,
  disclaimer,
}: {
  nombre: string;
  disclaimer: string;
}) {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>{nombre} · Herramienta gratuita para trabajadores de Argentina 🇦🇷</p>
        <p className="disclaimer">{disclaimer}</p>
        <nav className="footer-links" aria-label="Enlaces del sitio">
          <Link href="/">Inicio</Link>
          <Link href="/sobre">Sobre el sitio</Link>
          <Link href="/contacto">Contacto</Link>
          <Link href="/privacidad">Política de Privacidad</Link>
        </nav>
        <p className="copyright">
          © {new Date().getFullYear()} Calculadoras Laborales. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
