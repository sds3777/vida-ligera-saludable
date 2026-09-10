import { ReactNode } from "react";
import wellnessLogo from "@/assets/vida-ligera-logo.webp";

export function SiteHeader({ action, onHome }: { action?: ReactNode; onHome?: () => void }) {
  const logo = (
    <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border-2 border-forest/25 bg-card shadow-[var(--shadow-soft)] sm:h-16 sm:w-16">
      <img
        src={wellnessLogo}
        alt="Símbolo de Vida Ligera y Saludable"
        width={512}
        height={512}
        decoding="async"
        className="h-full w-full object-cover"
      />
    </span>
  );

  return (
    <header className="sticky top-0 z-30 border-b border-border/80 bg-card/88 backdrop-blur-lg">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-3 py-2.5 sm:px-5 sm:py-3">
        {onHome ? (
          <button
            type="button"
            onClick={onHome}
            aria-label="Volver a la página principal"
            className="soft-logo z-10 shrink-0 rounded-full transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {logo}
          </button>
        ) : (
          logo
        )}
        <h1 className="pointer-events-none absolute left-1/2 top-1/2 w-[calc(100%-9rem)] -translate-x-1/2 -translate-y-1/2 text-center font-display text-[15px] font-bold leading-tight tracking-[0.045em] text-forest min-[390px]:text-base sm:w-auto sm:whitespace-nowrap sm:text-2xl sm:tracking-wide">
          VIDA LIGERA Y SALUDABLE
        </h1>
        <div className="z-10 flex min-w-14 justify-end">{action}</div>
      </div>
    </header>
  );
}
