"use client";

import { useMemo, useState } from "react";
import AdSlot from "./AdSlot";

// Descuentos de ley para empleados en relación de dependencia (Argentina)
const DESCUENTOS = [
  { nombre: "Jubilación", pct: 0.11 },
  { nombre: "Ley 19.032 (PAMI/INSSJP)", pct: 0.03 },
  { nombre: "Obra social", pct: 0.03 },
] as const;

const TOTAL_PCT = DESCUENTOS.reduce((a, d) => a + d.pct, 0); // 0.17

function formatARS(n: number): string {
  return n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CalculadoraSueldoNeto() {
  const [bruto, setBruto] = useState<string>("");

  const r = useMemo(() => {
    const b = parseFloat(bruto.replace(",", "."));
    if (!b || b <= 0) return null;
    const lineas = DESCUENTOS.map((d) => ({
      nombre: d.nombre,
      pct: d.pct,
      monto: b * d.pct,
    }));
    const totalDesc = b * TOTAL_PCT;
    const neto = b - totalDesc;
    return { bruto: b, lineas, totalDesc, neto };
  }, [bruto]);

  return (
    <>
      <div className="card">
        <div className="field">
          <label htmlFor="bruto">
            Tu sueldo BRUTO mensual
            <span className="hint"> — el total antes de los descuentos</span>
          </label>
          <div className="input-money">
            <span>$</span>
            <input
              id="bruto"
              type="number"
              inputMode="decimal"
              placeholder="Ej: 850000"
              value={bruto}
              onChange={(e) => setBruto(e.target.value)}
              min="0"
            />
          </div>
        </div>

        {r ? (
          <>
            <div className="result">
              <div className="label">Tu sueldo en mano (neto) es de</div>
              <div className="amount">{formatARS(r.neto)}</div>
              <div className="detail">
                Te descuentan {formatARS(r.totalDesc)} (
                {(TOTAL_PCT * 100).toFixed(0)}%)
              </div>
            </div>

            <table className="breakdown">
              <tbody>
                {r.lineas.map((l) => (
                  <tr key={l.nombre}>
                    <td>{l.nombre}</td>
                    <td className="pct">{(l.pct * 100).toFixed(0)}%</td>
                    <td className="amt">- {formatARS(l.monto)}</td>
                  </tr>
                ))}
                <tr className="total-row">
                  <td>Sueldo neto</td>
                  <td className="pct">{((1 - TOTAL_PCT) * 100).toFixed(0)}%</td>
                  <td className="amt">{formatARS(r.neto)}</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <div className="result empty">
            <div className="amount">Ingresá tu sueldo bruto 👆</div>
            <div className="detail">El cálculo aparece automáticamente</div>
          </div>
        )}
      </div>

      <AdSlot slot="top" />
    </>
  );
}
