/**
 * Contrato estable de acceso a la biblioteca.
 *
 * Hoy la sesión se crea con una contraseña compartida. La futura integración
 * Hotmart + base de datos solo tendrá que devolver este mismo formato después
 * de autenticar el correo del comprador.
 */
export type LibraryAccessMode = "shared-password" | "email-entitlements";

export type LibraryAccessSession = {
  authenticated: boolean;
  email: string | null;
  /** True cuando una compra libera toda la biblioteca. */
  allAccess: boolean;
  /** Claves de colecciones compradas por separado. */
  entitlements: string[];
};

export const EMPTY_ACCESS_SESSION: LibraryAccessSession = {
  authenticated: false,
  email: null,
  allAccess: false,
  entitlements: [],
};

export const SHARED_PASSWORD_SESSION: LibraryAccessSession = {
  authenticated: true,
  email: null,
  allAccess: true,
  entitlements: [],
};

export function canAccessEntitlement(session: LibraryAccessSession, entitlementKey: string) {
  return (
    session.authenticated && (session.allAccess || session.entitlements.includes(entitlementKey))
  );
}
