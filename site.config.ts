// ============================================================
//  CONFIGURACIÓN DEL SITIO
//  Editá estos valores cuando tengas tu cuenta de AdSense y tu dominio.
// ============================================================

export const siteConfig = {
  // URL final de tu sitio (cambialo si después comprás un dominio propio, ej: https://calculadoraaguinaldo.com.ar)
  url: "https://calculadora-aguinaldo.vercel.app",

  // Tu ID de editor de Google AdSense. Ejemplo: "ca-pub-1234567890123456"
  // Mientras esté vacío "", los anuncios NO se cargan (perfecto para desarrollar).
  adsenseClientId: "ca-pub-4315834178017336",

  // IDs de cada bloque de anuncio que crees en AdSense (data-ad-slot).
  // Dejalos vacíos hasta tener AdSense aprobado.
  adSlots: {
    top: "",     // anuncio arriba del resultado
    inline: "",  // anuncio entre el contenido
    bottom: "",  // anuncio al pie
  },
};
