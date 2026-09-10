import { Lock } from "lucide-react";
import { VIP_WHATSAPP_GROUP_URL } from "@/config/site";
import { WhatsappIcon } from "./WhatsappButton";

export function VipGroupCard({
  unlocked,
  onLockedClick,
}: {
  unlocked: boolean;
  onLockedClick?: () => void;
}) {
  const buttonClass =
    "mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl px-4 text-xs font-extrabold tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";

  return (
    <section className="h-full rounded-3xl border border-forest/30 bg-forest/10 p-5 shadow-[var(--shadow-soft)] sm:p-6">
      <p className="flex items-center gap-2 text-xs font-extrabold tracking-[0.12em] text-forest">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-[#25D366] text-white shadow-sm">
          <WhatsappIcon className="h-5 w-5" />
        </span>
        BENEFICIO EXCLUSIVO
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-wine">
        ÚNETE AL GRUPO VIP DE WHATSAPP
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Recibe nuevos materiales, consejos prácticos y contenidos exclusivos.
      </p>
      {unlocked && VIP_WHATSAPP_GROUP_URL ? (
        <a
          href={VIP_WHATSAPP_GROUP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} bg-forest hover:bg-forest/90`}
        >
          <WhatsappIcon className="h-5 w-5" />
          ENTRAR EN EL GRUPO VIP
        </a>
      ) : unlocked ? (
        <button type="button" disabled className={`${buttonClass} cursor-not-allowed bg-forest/70`}>
          <WhatsappIcon className="h-5 w-5" />
          ENTRAR EN EL GRUPO VIP
        </button>
      ) : (
        <button
          type="button"
          onClick={onLockedClick}
          className={`${buttonClass} bg-wine hover:bg-wine-soft`}
        >
          <Lock className="h-4 w-4" aria-hidden="true" />
          DESBLOQUEAR GRUPO VIP
        </button>
      )}
    </section>
  );
}
