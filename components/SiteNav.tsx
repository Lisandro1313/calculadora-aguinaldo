"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOOLS } from "@/lib/tools";

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="site-nav" aria-label="Calculadoras">
      <div className="site-nav-inner">
        <Link href="/" className="site-nav-brand">
          🧮 Calculadoras Laborales
        </Link>
        <div className="site-nav-links">
          {TOOLS.map((t) => {
            const active = pathname === t.href;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={active ? "site-nav-link active" : "site-nav-link"}
                aria-current={active ? "page" : undefined}
              >
                <span aria-hidden>{t.emoji}</span> {t.short}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
