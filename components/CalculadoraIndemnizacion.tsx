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

export default function CalculadoraIndemnizacion() {
  const [sueldo, setSueldo] = useState<string>("");
  const [ingreso, setIngreso] = useState<string>("");

  const r = useMemo(() => {
    const mejorSueldo = parseFloat(sueldo.replace(",", "."));
    if (!mejorSueldo || mejorSueldo <= 0 || !ingreso) return null;

    const fIngreso = new Date(ingreso);
    const hoy = new Date();
    if (isNaN(fIngreso.getTime()) || fIngreso > hoy) return null;

    // Antigüedad en meses totales
    let meses =
      (hoy.getFullYear() - fIngreso.getFullYear()) * 12 +
      (hoy.getMonth() - fIngreso.getMonth());
    if (hoy.getDate() < fIngreso.getDate()) meses -= 1;
    if (meses < 0) meses = 0;

    const aniosCompletos = Math.floor(meses / 12);
    const mesesResto = meses % 12;

    // Art. 245 LCT: 1 sueldo por año o fracción mayor a 3 meses (mínimo 1)
    let periodos = aniosCompletos;
    if (mesesResto > 3) periodos += 1;
    const enPrueba = meses < 3;
    if (!enPrueba && periodos < 1) periodos = 1;

    const indemAntiguedad = enPrueba ? 0 : mejorSueldo * periodos;

    // Preaviso: en prueba 15 días; <5 años 1 mes; >=5 años 2 meses
    let mesesPreaviso: number;
    let preavisoLabel: string;
    if (enPrueba) {
      mesesPreaviso = 0.5;
      preavisoLabel = "15 días (período de prueba)";
    } else if (aniosCompletos < 5) {
      mesesPreaviso = 1;
      preavisoLabel = "1 mes (antigüedad menor a 5 años)";
    } else {
      mesesPreaviso = 2;
      preavisoLabel = "2 meses (antigüedad mayor a 5 años)";
    }
    const preaviso = mejorSueldo * mesesPreaviso;

    // SAC sobre el preaviso (1/12)
    const sacPreaviso = preaviso / 12;

    const total = indemAntiguedad + preaviso + sacPreaviso;

    return {
      aniosCompletos,
      mesesResto,
      enPrueba,
      periodos,
      indemAntiguedad,
      preaviso,
      preavisoLabel,
      sacPreaviso,
      total,
    };
  }, [sueldo, ingreso]);

  return (
    <>
      <div className="card">
        <div className="field">
          <label htmlFor="sueldo">
            Mejor sueldo BRUTO mensual
            <span className="hint"> — la mejor remuneración del último año</span>
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
              <div className="label">Indemnización estimada total</div>
              <div className="amount">{formatARS(r.total)}</div>
              <div className="detail">
                Antigüedad: {r.aniosCompletos} año(s) y {r.mesesResto} mes(es)
              </div>
            </div>

            <table className="breakdown">
              <tbody>
                <tr>
                  <td>
                    Indemnización por antigüedad
                    <br />
                    <span style={{ color: "var(--muted)", fontSize: 13 }}>
                      {r.enPrueba
                        ? "No corresponde (período de prueba)"
                        : `${r.periodos} sueldo(s) — art. 245 LCT`}
                    </span>
                  </td>
                  <td className="amt">{formatARS(r.indemAntiguedad)}</td>
                </tr>
                <tr>
                  <td>
                    Preaviso
                    <br />
                    <span style={{ color: "var(--muted)", fontSize: 13 }}>
                      {r.preavisoLabel}
                    </span>
                  </td>
                  <td className="amt">{formatARS(r.preaviso)}</td>
                </tr>
                <tr>
                  <td>
                    SAC sobre preaviso
                    <br />
                    <span style={{ color: "var(--muted)", fontSize: 13 }}>
                      Aguinaldo proporcional del preaviso
                    </span>
                  </td>
                  <td className="amt">{formatARS(r.sacPreaviso)}</td>
                </tr>
                <tr className="total-row">
                  <td>Total estimado</td>
                  <td className="amt">{formatARS(r.total)}</td>
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
