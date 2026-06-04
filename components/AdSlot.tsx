"use client";

import { useEffect } from "react";
import { siteConfig } from "@/site.config";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * Bloque de anuncio de AdSense.
 * Si todavía no configuraste tu ID en site.config.ts, muestra un placeholder
 * gris (así ves dónde va el anuncio sin romper nada).
 */
export default function AdSlot({ slot }: { slot: keyof typeof siteConfig.adSlots }) {
  const client = siteConfig.adsenseClientId;
  const adSlot = siteConfig.adSlots[slot];
  const ready = client !== "" && adSlot !== "";

  useEffect(() => {
    if (!ready) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense aún no cargó; se reintenta en la próxima navegación.
    }
  }, [ready]);

  if (!ready) {
    return (
      <div className="ad-slot">
        <div className="ad-placeholder">
          📢 Espacio para anuncio ({slot}) — se activa cuando cargues tu ID de
          AdSense en <code>site.config.ts</code>
        </div>
      </div>
    );
  }

  return (
    <div className="ad-slot">
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={client}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
