import { X } from "lucide-react";
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
          <DialogHeader className="sr-only">
            <DialogTitle>{unlockCopy.title}</DialogTitle>
            <DialogDescription>
              Desbloquea el acceso completo a la biblioteca de recetas.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-2 px-4 pb-4 pt-12 sm:px-5">
            {/* Producto principal */}
            <div className="flex items-center gap-3 rounded-2xl border-2 border-gold/70 bg-card px-4 py-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center text-4xl" aria-hidden="true">
                🥗
              </span>
              <div>
                <p className="text-xs font-extrabold tracking-[0.12em] text-gold">
                  {unlockCopy.featuredLabel}
                </p>
                <p className="font-display text-xl font-bold leading-tight text-foreground sm:text-2xl">
                  {unlockCopy.featuredTitle}
                </p>
              </div>
            </div>

            {/* Bonos */}
            <div className="rounded-2xl border border-gold/40 bg-card px-4 py-3">
              <p className="mb-2 text-sm font-black tracking-[0.1em] text-forest">
                🎁 {unlockCopy.bonusesTitle}
              </p>
              <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {unlockCopy.bonuses.map((bonus) => (
                  <li key={bonus} className="text-[13px] font-medium leading-snug text-foreground">
                    {bonus}
                  </li>
                ))}
              </ul>
            </div>

            {/* Precio */}
            <div className="rounded-2xl border border-gold/40 bg-card px-4 py-2.5 text-center">
              <p className="text-sm text-muted-foreground">
                De <span className="font-semibold text-destructive line-through">{unlockCopy.priceAnchor}</span>
              </p>
              <p className="font-display text-2xl font-bold text-wine sm:text-3xl">
                TODO POR {unlockCopy.price}
              </p>
              <p className="text-xs text-muted-foreground">{unlockCopy.priceNote}</p>
            </div>

            <div className="space-y-2">
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
