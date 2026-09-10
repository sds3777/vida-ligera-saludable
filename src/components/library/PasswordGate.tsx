import { FormEvent, useState } from "react";
import { buildWhatsappUrl } from "@/config/site";
import { WhatsappIcon } from "./WhatsappButton";

export function PasswordGate({
  onSubmitPassword,
  whatsappMessage,
}: {
  onSubmitPassword: (password: string) => boolean;
  whatsappMessage?: string | undefined;
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const ok = onSubmitPassword(value);
    setError(!ok);
    if (ok) setValue("");
  };

  return (
    <main className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-4 py-10">
      <div className="rounded-3xl border border-gold/40 bg-card p-6 shadow-[var(--shadow-lift)]">
        <h2 className="font-display text-2xl font-semibold tracking-wide text-wine">
          ACCESO COMPLETO
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Introduce la contraseña que recibiste después de confirmar tu aportación.
        </p>

        <form onSubmit={submit} className="mt-6 space-y-3" noValidate>
          <label htmlFor="access-password" className="block text-sm font-medium text-foreground">
            Contraseña de acceso
          </label>
          <input
            id="access-password"
            type="password"
            inputMode="numeric"
            autoComplete="one-time-code"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            aria-invalid={error}
            aria-describedby={error ? "access-error" : undefined}
            className="min-h-12 w-full rounded-2xl border border-border bg-background px-4 text-base text-foreground outline-none focus-visible:ring-2 focus-visible:ring-gold"
          />
          {error ? (
            <p id="access-error" role="alert" className="text-sm text-destructive">
              La contraseña no es correcta. Comprueba los datos e inténtalo de nuevo.
            </p>
          ) : null}
          <button
            type="submit"
            className="min-h-14 w-full rounded-2xl bg-wine px-5 text-sm font-semibold tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-colors hover:bg-wine-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:text-base"
          >
            ENTRAR EN VIDA LIGERA
          </button>
        </form>

        <a
          href={buildWhatsappUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-20 w-full flex-col items-center justify-center gap-2 rounded-2xl border border-forest/40 bg-card px-4 py-3 text-center text-sm font-semibold tracking-wide text-forest transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <span>SOLICITAR ACCESO POR WHATSAPP</span>
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-white shadow-sm">
            <WhatsappIcon className="h-5 w-5" />
          </span>
        </a>
      </div>
    </main>
  );
}
