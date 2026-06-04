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

export default function CalculadoraVacaciones() {
  const [sueldo, setSueldo] = useState<string>("");
  const [ingreso, setIngreso] = useState<string>("");

  const r = useMemo(() => {
    const s = parseFloat(sueldo.replace(",", "."));
    if (!s || s <= 0 || !ingreso) return null;

    const fIngreso = new Date(ingreso);
    const hoy = new Date();
    if (isNaN(fIngreso.getTime()) || fIngreso > hoy) return null;

    // Antigüedad en años (al 31/12 del año en curso, según LCT)
    const finAnio = new Date(hoy.getFullYear(), 11, 31);
    let meses =
      (finAnio.getFullYear() - fIngreso.getFullYear()) * 12 +
      (finAnio.getMonth() - fIngreso.getMonth());
    if (finAnio.getDate() < fIngreso.getDate()) meses -= 1;
    if (meses < 0) meses = 0;
    const anios = meses / 12;

    // Días de vacaciones según antigüedad (art. 150 LCT)
    let dias: number;
    let bracket: string;
    if (anios < 5) {
      dias = 14;
      bracket = "Hasta 5 años de antigüedad";
    } else if (anios < 10) {
      dias = 21;
      bracket = "De 5 a 10 años de antigüedad";
    } else if (anios < 20) {
      dias = 28;
      bracket = "De 10 a 20 años de antigüedad";
    } else {
      dias = 35;
      bracket = "Más de 20 años de antigüedad";
    }

    // Valor del día de vacaciones: sueldo / 25 (art. 155 LCT)
    const valorDia = s / 25;
    const monto = valorDia * dias;

    return { dias, bracket, valorDia, monto };
  }, [sueldo, ingreso]);

  return (
    <>
      <div className="card">
        <div className="field">
          <label htmlFor="sueldo">
            Tu sueldo BRUTO mensual
            <span className="hint"> — para calcular cuánto cobrás</span>
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
          <label htmlFor="ingreso">Fecha de ingreso al trabajo</label>
          <input
            id="ingreso"
            type="date"
            value={ingreso}
            max={new Date().toISOString().slice(0, 10)}
            onChange={(e) => setIngreso(e.target.value)}
          />
        </div>

        {r ? (
          <>
            <div className="result">
              <div className="label">Te corresponden</div>
              <div className="amount">{r.dias} días</div>
              <div className="detail">{r.bracket}</div>
            </div>

            <table className="breakdown">
              <tbody>
                <tr>
                  <td>Valor de cada día (sueldo ÷ 25)</td>
                  <td className="amt">{formatARS(r.valorDia)}</td>
                </tr>
                <tr>
                  <td>Días de vacaciones</td>
                  <td className="amt">{r.dias} días</td>
                </tr>
                <tr className="total-row">
                  <td>Total a cobrar de vacaciones</td>
                  <td className="amt">{formatARS(r.monto)}</td>
                </tr>
              </tbody>
            </table>
          </>
        ) : (
          <div className="result empty">
            <div className="amount">Completá los datos 👆</div>
            <div className="detail">
              Ingresá tu sueldo y la fecha de ingreso
            </div>
          </div>
        )}
      </div>

      <AdSlot slot="top" />
    </>
  );
}
