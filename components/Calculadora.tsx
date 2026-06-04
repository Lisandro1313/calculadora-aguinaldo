"use client";

import { useMemo, useState } from "react";
import AdSlot from "./AdSlot";

// Días de cada semestre (no bisiesto / bisiesto da casi igual el redondeo)
const SEMESTRES = {
  "1": { label: "1º semestre (enero a junio) — se cobra en junio", dias: 181 },
  "2": { label: "2º semestre (julio a diciembre) — se cobra en diciembre", dias: 184 },
} as const;

type SemKey = keyof typeof SEMESTRES;

function formatARS(n: number): string {
  return n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function Calculadora() {
  const [sueldo, setSueldo] = useState<string>("");
  const [semestre, setSemestre] = useState<SemKey>("1");
  const [completo, setCompleto] = useState<boolean>(true);
  const [diasTrabajados, setDiasTrabajados] = useState<string>("");

  const totalDias = SEMESTRES[semestre].dias;

  const resultado = useMemo(() => {
    const mejorSueldo = parseFloat(sueldo.replace(",", "."));
    if (!mejorSueldo || mejorSueldo <= 0) return null;

    const base = mejorSueldo / 2; // 50% de la mejor remuneración

    if (completo) {
      return { monto: base, dias: totalDias, proporcional: false };
    }

    const dias = parseInt(diasTrabajados || "0", 10);
    if (!dias || dias <= 0) return null;
    const diasClamp = Math.min(dias, totalDias);
    const monto = (base * diasClamp) / totalDias;
    return { monto, dias: diasClamp, proporcional: true };
  }, [sueldo, completo, diasTrabajados, totalDias]);

  return (
    <>
      <div className="card">
        <div className="field">
          <label htmlFor="sueldo">
            Mejor sueldo BRUTO del semestre
            <span className="hint">
              {" "}
              — el mes que más cobraste (en bruto, antes de descuentos)
            </span>
          </label>
          <div className="input-money">
            <span>$</span>
            <input
              id="sueldo"
              type="number"
              inputMode="decimal"
              placeholder="Ej: 850000"
              value={sueldo}
              onChange={(e) => setSueldo(e.target.value)}
              min="0"
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="semestre">¿Qué cuota querés calcular?</label>
          <select
            id="semestre"
            value={semestre}
            onChange={(e) => setSemestre(e.target.value as SemKey)}
          >
            {(Object.keys(SEMESTRES) as SemKey[]).map((k) => (
              <option key={k} value={k}>
                {SEMESTRES[k].label}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label
            className="toggle"
            htmlFor="completo"
            style={{ display: "flex" }}
          >
            <input
              id="completo"
              type="checkbox"
              checked={completo}
              onChange={(e) => setCompleto(e.target.checked)}
            />
            <span>Trabajé el semestre completo</span>
          </label>
        </div>

        {!completo && (
          <div className="field">
            <label htmlFor="dias">
              Días trabajados en el semestre
              <span className="hint"> — el semestre tiene {totalDias} días</span>
            </label>
            <input
              id="dias"
              type="number"
              inputMode="numeric"
              placeholder={`Ej: 90 (de ${totalDias})`}
              value={diasTrabajados}
              onChange={(e) => setDiasTrabajados(e.target.value)}
              min="0"
              max={totalDias}
            />
          </div>
        )}

        {resultado ? (
          <div className="result">
            <div className="label">Tu aguinaldo (SAC) es de</div>
            <div className="amount">{formatARS(resultado.monto)}</div>
            <div className="detail">
              {resultado.proporcional
                ? `Proporcional por ${resultado.dias} de ${totalDias} días trabajados`
                : "50% de tu mejor sueldo del semestre"}
            </div>
          </div>
        ) : (
          <div className="result empty">
            <div className="amount">Ingresá tu sueldo 👆</div>
            <div className="detail">
              El cálculo aparece automáticamente
            </div>
          </div>
        )}
      </div>

      <AdSlot slot="top" />
    </>
  );
}
