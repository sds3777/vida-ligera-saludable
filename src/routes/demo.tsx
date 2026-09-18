import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { GuideCard } from "@/components/library/GuideCard";
import { LazyPdfReader } from "@/components/library/LazyPdfReader";
import { SiteHeader } from "@/components/library/SiteHeader";
import { UnlockModal } from "@/components/library/UnlockModal";
import { VipGroupCard } from "@/components/library/VipGroupCard";
import { materials, type Material } from "@/data/library";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Vida Ligera y Saludable — 10 guías complementarias" },
      {
        name: "description",
        content: "Descubre las 10 guías complementarias de alimentación, salud y bienestar.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: DemoPage,
});

export function DemoPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [previewMaterial, setPreviewMaterial] = useState<Material | null>(null);

  const handleSelect = useCallback((material: Material) => {
    if (material.isFeatured && material.previewPages) {
      setPreviewMaterial(material);
      return;
    }
    setModalOpen(true);
  }, []);

  const closeReader = useCallback(() => setPreviewMaterial(null), []);

  return (
    <div className="min-h-screen pb-10">
      <SiteHeader />

      <main className="app-content mx-auto max-w-7xl px-4 py-6 sm:px-5 lg:py-8">
        <section className="space-y-5">
          <div className="flex items-center gap-3 border-b border-gold/30 pb-4">
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-xl"
              aria-hidden="true"
            >
              🎁
            </span>
            <div>
              <p className="text-sm font-bold tracking-[0.12em] text-forest">
                CONTENIDO COMPLEMENTARIO
              </p>
              <h2 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
                Tus 10 guías exclusivas
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {materials.map((material) => (
              <GuideCard
                key={material.id}
                material={material}
                locked={!material.isFeatured}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </section>

        <section className="mt-9 border-t border-gold/30 pt-8">
          <VipGroupCard unlocked={false} onLockedClick={() => setModalOpen(true)} />
        </section>
      </main>

      {previewMaterial ? (
        <LazyPdfReader
          file={previewMaterial.pdfUrl}
          title={previewMaterial.title}
          maxPages={previewMaterial.previewPages}
          onClose={closeReader}
          onReachLastPage={() => setModalOpen(true)}
          lockedContent={
            <div className="w-full rounded-2xl border border-gold/45 bg-card p-6 text-center shadow-[var(--shadow-soft)]">
              <p className="font-display text-lg font-semibold text-wine">
                Has llegado al final de la muestra
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Desbloquea el recetario completo y los 10 bonos exclusivos.
              </p>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="mt-4 min-h-11 w-full rounded-2xl bg-forest px-4 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:bg-forest-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                DESBLOQUEAR ACCESO COMPLETO
              </button>
            </div>
          }
        />
      ) : null}

      <UnlockModal open={modalOpen} onOpenChange={setModalOpen} />
    </div>
  );
}
