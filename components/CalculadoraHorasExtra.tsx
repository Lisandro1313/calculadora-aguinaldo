"use client";

import { useMemo, useState } from "react";
import AdSlot from "./AdSlot";

function formatARS(n: number): string {
  return n.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function CalculadoraHorasExtra() {
  const [sueldo, setSueldo] = useState<string>("");
  const [horasMes, setHorasMes] = useState<string>("200");
  const [hs50, setHs50] = useState<string>("");
  const [hs100, setHs100] = useState<string>("");

  const r = useMemo(() => {
    const s = parseFloat(sueldo.replace(",", "."));
    const hm = parseFloat(horasMes.replace(",", ".")) || 200;
    if (!s || s <= 0 || hm <= 0) return null;

    const n50 = parseFloat(hs50.replace(",", ".")) || 0;
    const n100 = parseFloat(hs100.replace(",", ".")) || 0;
    if (n50 <= 0 && n100 <= 0) return null;

    const valorHora = s / hm;
    const valor50 = valorHora * 1.5;
    const valor100 = valorHora * 2;
    const total50 = valor50 * n50;
    const total100 = valor100 * n100;
    const total = total50 + total100;

    return { valorHora, valor50, valor100, n50, n100, total50, total100, total };
  }, [sueldo, horasMes, hs50, hs100]);

  return (
    <>
      <div className="card">
        <div className="field">
          <label htmlFor="sueldo">
            Tu sueldo BRUTO mensual
            <span className="hint"> — el sueldo de tu jornada normal</span>
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
          <label htmlFor="horasMes">
            Horas que trabajás por mes
            <span className="hint"> — jornada completa ≈ 200</span>
          </label>
          <input
            id="horasMes"
            type="number"
            inputMode="decimal"
            value={horasMes}
            onChange={(e) => setHorasMes(e.target.value)}
            min="1"
          />
        </div>

        <div className="row">
          <div className="field">
            <label htmlFor="hs50">
              Horas extra al 50%
              <span className="hint"> — días de semana</span>
            </label>
            <input
              id="hs50"
              type="number"
              inputMode="decimal"
              placeholder="Ej: 10"
              value={hs50}
              onChange={(e) => setHs50(e.target.value)}
              min="0"
            />
          </div>
          <div className="field">
            <label htmlFor="hs100">
              Horas extra al 100%
              <span className="hint"> — sáb. tarde, dom. y feriados</span>
            </label>
            <input
              id="hs100"
              type="number"
              inputMode="decimal"
              placeholder="Ej: 5"
              value={hs100}
              onChange={(e) => setHs100(e.target.value)}
              min="0"
            />
          </div>
        </div>

        {r ? (
          <>
            <div className="result">
              <div className="label">Total a cobrar por horas extra</div>
              <div className="amount">{formatARS(r.total)}</div>
              <div className="detail">
                Valor hora normal: {formatARS(r.valorHora)}
              </div>
            </div>

            <table className="breakdown">
              <tbody>
                <tr>
                  <td>
                    Horas al 50%
                    <br />
                    <span style={{ color: "var(--muted)", fontSize: 13 }}>
                      {r.n50} h × {formatARS(r.valor50)}
                    </span>
                  </td>
                  <td className="amt">{formatARS(r.total50)}</td>
                </tr>
                <tr>
                  <td>
                    Horas al 100%
                    <br />
                    <span style={{ color: "var(--muted)", fontSize: 13 }}>
                      {r.n100} h × {formatARS(r.valor100)}
                    </span>
                  </td>
                  <td className="amt">{formatARS(r.total100)}</td>
                </tr>
                <tr className="total-row">
                  <td>Total horas extra</td>
                  <td className="amt">{formatARS(r.total)}</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <div className="result empty">
            <div className="amount">Completá los datos 👆</div>
            <div className="detail">
              Ingresá tu sueldo y las horas extra
            </div>
          </div>
        )}
      </div>

      <AdSlot slot="top" />
    </>
  );
}
