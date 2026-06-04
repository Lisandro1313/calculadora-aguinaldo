// Lista central de calculadoras. La usan el menú de arriba (SiteNav)
// y el bloque "Otras calculadoras" del pie (ToolsNav).

export type Tool = {
  href: string;
  emoji: string;
  titulo: string; // título largo (tarjetas)
  short: string; // texto corto (menú de arriba)
  desc: string;
};

export const TOOLS: Tool[] = [
  {
    href: "/",
    emoji: "🎁",
    titulo: "Calculadora de Aguinaldo",
    short: "Aguinaldo",
    desc: "Cuánto cobrás de SAC (aguinaldo)",
  },
  {
    href: "/calculadora-sueldo-neto",
    emoji: "💸",
    titulo: "Calculadora de Sueldo Neto",
    short: "Sueldo Neto",
    desc: "De sueldo bruto a sueldo en mano",
  },
  {
    href: "/calculadora-indemnizacion",
    emoji: "📄",
    titulo: "Calculadora de Indemnización",
    short: "Indemnización",
    desc: "Cuánto te corresponde por despido",
  },
  {
    href: "/calculadora-vacaciones",
    emoji: "🏖️",
    titulo: "Calculadora de Vacaciones",
    short: "Vacaciones",
    desc: "Días que te corresponden y cuánto cobrás",
  },
  {
    href: "/calculadora-horas-extra",
    emoji: "⏰",
    titulo: "Calculadora de Horas Extra",
    short: "Horas Extra",
    desc: "Cuánto cobrás al 50% y al 100%",
  },
];
