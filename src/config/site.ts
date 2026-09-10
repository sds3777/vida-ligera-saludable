/**
 * CONFIGURACIÓN PRINCIPAL
 * ------------------------------------------------------------------
 * Cambia aquí la contraseña compartida del acceso completo.
 * En el futuro este bloque se puede sustituir por Hotmart / Supabase
 * / login individual por email sin tocar la interfaz.
 */
export const FULL_ACCESS_PASSWORD = "6240";

/** Clave de localStorage donde se guarda el acceso completo. */
export const FULL_ACCESS_STORAGE_KEY = "vida_ligera_full_access_v1";

/**
 * Modo activo del MVP. La futura integración cambiará a
 * `email-entitlements` cuando el backend de Hotmart esté conectado.
 */
export const LIBRARY_ACCESS_MODE = "shared-password" as const;

/** Número de WhatsApp de contacto (formato internacional, sin +). */
export const WHATSAPP_NUMBER = "";

/** Mensaje por defecto del botón de WhatsApp. */
export const DEFAULT_WHATSAPP_MESSAGE =
  "Hola, me han gustado los materiales y quiero desbloquear mi acceso completo. Voy a realizar mi aportación ahora. 😊";

/** Grupo exclusivo liberado dentro de la versión completa. */
export const VIP_WHATSAPP_GROUP_URL = "";

export function buildWhatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  const recipient = WHATSAPP_NUMBER ? `/${WHATSAPP_NUMBER}` : "/";
  return `https://wa.me${recipient}?text=${encodeURIComponent(message)}`;
}
