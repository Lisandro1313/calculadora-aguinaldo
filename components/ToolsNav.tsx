import Link from "next/link";
import { TOOLS } from "@/lib/tools";

/** Enlaza las calculadoras entre sí (bueno para el usuario y para el SEO). */
export default function ToolsNav({ actual }: { actual: string }) {
  return (
    <nav className="tools-nav" aria-label="Otras calculadoras">
      {TOOLS.filter((t) => t.href !== actual).map((t) => (
        <Link key={t.href} href={t.href} className="tool-link">
          <span className="emoji">{t.emoji}</span>
          <strong>{t.titulo}</strong>
          <span>{t.desc} →</span>
        </Link>
      ))}
    </nav>
  );
}
