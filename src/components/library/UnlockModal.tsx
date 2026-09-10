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
      <DialogContent className="unlock-modal w-[94%] max-w-[430px] overflow-hidden rounded-3xl border-2 border-gold/55 bg-linear-to-b from-cream to-card p-0 shadow-[var(--shadow-lift)] [&>button:last-child]:hidden">
        <button
          type="button"
          aria-label="Cerrar"
          onClick={() => onOpenChange(false)}
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-card/90 text-forest shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="bg-forest px-6 pb-5 pt-7 text-center">
          <span
            className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-cream/95 text-2xl shadow-sm"
            aria-hidden="true"
          >
            🌿
          </span>
          <DialogHeader className="space-y-2">
            <DialogTitle className="font-display text-xl font-semibold leading-snug text-cream sm:text-2xl">
              {unlockCopy.title}
            </DialogTitle>
            <DialogDescription className="mx-auto max-w-sm text-sm leading-relaxed text-cream/90">
              {unlockCopy.text}
            </DialogDescription>
          </DialogHeader>
        </div>

        <div className="space-y-3 px-5 py-5 sm:px-6">
          <WhatsappCta label={unlockCopy.buttonLabel} className="cta-pulse" />
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="min-h-11 w-full rounded-2xl border border-border bg-card px-4 text-sm font-semibold tracking-wide text-forest transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            VOLVER A LOS MATERIALES
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
