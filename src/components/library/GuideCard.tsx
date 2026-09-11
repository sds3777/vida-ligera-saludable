import { Lock } from "lucide-react";
import type { Material } from "@/data/library";

export function GuideCard({
  material,
  locked,
  onSelect,
}: {
  material: Material;
  locked: boolean;
  onSelect: (material: Material) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(material)}
      aria-label={locked ? `${material.title} — contenido bloqueado` : `Abrir ${material.title}`}
      className={`soft-surface group relative block w-full overflow-hidden rounded-3xl bg-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        material.featured
          ? "border-2 border-gold shadow-[0_16px_38px_rgba(22,65,49,0.3)] ring-4 ring-gold/20"
          : "border border-gold/45 shadow-[var(--shadow-soft)]"
      }`}
    >
      <span className="relative block aspect-3/4 w-full overflow-hidden bg-secondary">
        <img
          src={material.cover}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-xl"
        />
        <img
          src={material.cover}
          alt={`Portada de ${material.title}`}
          loading="lazy"
          decoding="async"
          width={1086}
          height={1448}
          className="relative block h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.018]"
        />
        {material.featured ? (
          <span className="absolute left-3 top-3 z-10 rounded-full border border-cream/70 bg-forest px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-cream shadow-lg">
            MATERIAL PRINCIPAL
          </span>
        ) : null}
        {locked ? (
          <span className="absolute inset-0 grid place-items-center bg-forest/30">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-white/65 bg-cream/95 text-forest shadow-[var(--shadow-lift)]">
              <Lock className="h-6 w-6" aria-hidden="true" />
            </span>
          </span>
        ) : null}
      </span>
    </button>
  );
}
