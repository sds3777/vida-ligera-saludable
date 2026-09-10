import { buildWhatsappUrl } from "@/config/site";

export function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.03 4C9.4 4 4.03 9.37 4.03 16c0 2.11.55 4.09 1.51 5.81L4 28l6.35-1.66A11.94 11.94 0 0 0 16.03 28c6.63 0 12-5.37 12-12s-5.37-12-12-12zm0 21.82c-1.86 0-3.6-.5-5.1-1.38l-.37-.22-3.77.99 1.01-3.67-.24-.38a9.78 9.78 0 0 1-1.51-5.24c0-5.42 4.42-9.83 9.98-9.83 5.43 0 9.84 4.41 9.84 9.83s-4.41 9.9-9.84 9.9zm5.4-7.35c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15s-.77.96-.94 1.16c-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.71 2-1.41.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" />
    </svg>
  );
}

export function WhatsappCta({
  message,
  label = "QUIERO DESBLOQUEAR MI ACCESO",
  className = "",
}: {
  message?: string | undefined;
  label?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <a
      href={buildWhatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-forest px-5 py-4 text-center text-sm font-semibold tracking-wide text-primary-foreground shadow-[var(--shadow-lift)] transition-colors hover:bg-forest-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:text-base ${className}`}
    >
      <WhatsappIcon className="h-6 w-6 shrink-0" />
      <span>{label}</span>
    </a>
  );
}

export function WhatsappFloatingBar({
  message,
  pulse = false,
}: {
  message?: string | undefined;
  pulse?: boolean;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-cream/95 px-4 pt-3 backdrop-blur pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-md">
        <WhatsappCta message={message} className={pulse ? "cta-pulse" : ""} />
      </div>
    </div>
  );
}
