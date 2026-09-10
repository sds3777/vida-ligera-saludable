import { useCallback, useEffect, useState } from "react";
import { FULL_ACCESS_PASSWORD, FULL_ACCESS_STORAGE_KEY } from "@/config/site";
import {
  EMPTY_ACCESS_SESSION,
  SHARED_PASSWORD_SESSION,
  canAccessEntitlement,
  type LibraryAccessSession,
} from "@/auth/access";

/**
 * Acceso completo del MVP: contraseña compartida guardada en localStorage.
 * Para migrar a Hotmart / Supabase / login por email basta con sustituir
 * la lógica de este hook: la interfaz no cambia.
 */
export function useFullAccess() {
  const [hydrated, setHydrated] = useState(false);
  const [session, setSession] = useState<LibraryAccessSession>(EMPTY_ACCESS_SESSION);

  useEffect(() => {
    try {
      setSession(
        window.localStorage.getItem(FULL_ACCESS_STORAGE_KEY) === "true"
          ? SHARED_PASSWORD_SESSION
          : EMPTY_ACCESS_SESSION,
      );
    } catch {
      setSession(EMPTY_ACCESS_SESSION);
    }
    setHydrated(true);
  }, []);

  const signIn = useCallback((password: string) => {
    const ok = password.trim() === FULL_ACCESS_PASSWORD;
    if (ok) {
      try {
        window.localStorage.setItem(FULL_ACCESS_STORAGE_KEY, "true");
      } catch {
        /* almacenamiento no disponible */
      }
      setSession(SHARED_PASSWORD_SESSION);
    }
    return ok;
  }, []);

  const signOut = useCallback(() => {
    try {
      window.localStorage.removeItem(FULL_ACCESS_STORAGE_KEY);
    } catch {
      /* almacenamiento no disponible */
    }
    setSession(EMPTY_ACCESS_SESSION);
  }, []);

  const canAccess = useCallback(
    (entitlementKey: string) => canAccessEntitlement(session, entitlementKey),
    [session],
  );

  return {
    hydrated,
    hasAccess: session.authenticated,
    session,
    canAccess,
    signIn,
    signOut,
  };
}
