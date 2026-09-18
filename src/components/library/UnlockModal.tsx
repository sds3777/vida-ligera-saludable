import { Check, Sparkles, Users, X } from "lucide-react";
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
      <DialogContent className="unlock-modal flex max-h-[90vh] w-[94%] max-w-[430px] flex-col overflow-hidden rounded-3xl border-2 border-gold/55 bg-card p-0 shadow-[var(--shadow-lift)] [&>button:last-child]:hidden">
        <button
          type="button"
          aria-label="Cerrar"
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-card/90 text-forest shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto">
          <div className="bg-forest px-6 pb-5 pt-7 text-center">
            <DialogHeader className="space-y-1.5">
              <DialogTitle className="font-display text-xl font-semibold leading-snug text-cream sm:text-2xl">
                {unlockCopy.title}
              </DialogTitle>
              <DialogDescription className="mx-auto max-w-sm text-sm leading-relaxed text-cream/90">
                {unlockCopy.subtitle}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="space-y-4 px-5 py-5 sm:px-6">
            {/* Producto principal */}
            <div className="flex items-center gap-3 rounded-2xl border border-gold/40 bg-secondary/60 px-4 py-3">
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-forest text-cream"
                aria-hidden="true"
              >
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[11px] font-extrabold tracking-[0.1em] text-wine">
                  {unlockCopy.featuredLabel}
                </p>
                <p className="font-display text-base font-semibold leading-snug text-foreground">
                  {unlockCopy.featuredTitle}
                </p>
              </div>
            </div>

            {/* Bonos */}
            <div className="rounded-2xl border border-border bg-cream/70 px-4 py-4">
              <p className="mb-2.5 text-xs font-extrabold tracking-[0.1em] text-forest">
                {unlockCopy.bonusesTitle}
              </p>
              <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {unlockCopy.bonuses.map((bonus) => (
                  <li key={bonus} className="flex items-start gap-1.5 text-xs leading-snug text-muted-foreground">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold" aria-hidden="true" />
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Grupo VIP */}
            <div className="flex items-center gap-2 rounded-2xl border border-forest/30 bg-forest/10 px-4 py-3">
              <span
                className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest text-cream"
                aria-hidden="true"
              >
                <Users className="h-4.5 w-4.5" />
              </span>
              <p className="text-sm font-semibold text-wine">Grupo VIP de WhatsApp incluido</p>
            </div>

            {/* Precio */}
            <div className="rounded-2xl bg-secondary/70 px-4 py-3 text-center">
              <p className="text-sm text-muted-foreground">
                De <span className="text-wine line-through">{unlockCopy.priceAnchor}</span>
              </p>
              <p className="font-display text-2xl font-bold text-forest">
                TODO POR {unlockCopy.price}
              </p>
              <p className="text-xs text-muted-foreground">{unlockCopy.priceNote}</p>
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
