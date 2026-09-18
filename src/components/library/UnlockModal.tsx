import { Users, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { unlockCopy } from "@/data/library";
import { WhatsappCta } from "./WhatsappButton";

export function UnlockModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="unlock-modal flex max-h-[90vh] w-[94%] max-w-[430px] flex-col overflow-hidden rounded-3xl border-2 border-gold/60 bg-cream p-0 shadow-[var(--shadow-lift)] [&>button:last-child]:hidden">
        <button
          type="button"
          aria-label="Cerrar"
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-card/90 text-wine shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto">
          <div className="px-6 pb-4 pt-7 text-center">
            <DialogHeader>
              <DialogTitle className="font-display text-xl font-semibold leading-snug text-wine sm:text-2xl">
                {unlockCopy.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Desbloquea el acceso completo a la biblioteca de recetas.
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="space-y-3 px-5 pb-5 sm:px-6">
            {/* Producto principal */}
            <div className="flex items-center gap-3 rounded-2xl border border-gold/50 bg-card px-4 py-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center text-2xl" aria-hidden="true">
                🥗
              </span>
              <div>
                <p className="font-display text-base font-semibold leading-snug text-foreground">
                  {unlockCopy.featuredTitle}
                </p>
                <p className="text-[11px] font-extrabold tracking-[0.1em] text-gold">
                  {unlockCopy.featuredLabel}
                </p>
              </div>
            </div>

            {/* Bonos */}
            <div className="rounded-2xl border border-gold/40 bg-card px-4 py-4">
              <p className="mb-2.5 text-xs font-extrabold tracking-[0.1em] text-forest">
                🎁 {unlockCopy.bonusesTitle}
              </p>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {unlockCopy.bonuses.map((bonus) => (
                  <li key={bonus} className="text-xs leading-snug text-foreground">
                    {bonus}
                  </li>
                ))}
              </ul>
            </div>

            {/* Grupo VIP */}
            <div className="flex items-center gap-2 rounded-2xl border border-gold/40 bg-card px-4 py-3">
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest text-cream"
                aria-hidden="true"
              >
                <Users className="h-4.5 w-4.5" />
              </span>
              <p className="text-sm font-semibold text-wine">Grupo VIP de WhatsApp incluido</p>
            </div>

            {/* Precio */}
            <div className="rounded-2xl border border-gold/40 bg-card px-4 py-3.5 text-center">
              <p className="text-sm text-muted-foreground">
                De <span className="font-semibold text-destructive line-through">{unlockCopy.priceAnchor}</span>
              </p>
              <p className="font-display text-3xl font-bold text-wine sm:text-4xl">
                TODO POR {unlockCopy.price}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{unlockCopy.priceNote}</p>
            </div>

            <div className="space-y-2.5">
              <WhatsappCta label={unlockCopy.buttonLabel} className="cta-pulse" />
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="min-h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm font-semibold tracking-wide text-forest transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                {unlockCopy.continueLabel}
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
