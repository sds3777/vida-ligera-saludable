import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { GuideCard } from "@/components/library/GuideCard";
import { LazyPdfReader } from "@/components/library/LazyPdfReader";
import { PasswordGate } from "@/components/library/PasswordGate";
import { SiteHeader } from "@/components/library/SiteHeader";
import { VipGroupCard } from "@/components/library/VipGroupCard";
import { materials, type Material } from "@/data/library";
import { useFullAccess } from "@/hooks/useFullAccess";

export const Route = createFileRoute("/full")({
  head: () => ({
    meta: [
      { title: "Acceso completo — Vida Ligera y Saludable" },
      {
        name: "description",
        content: "Área privada con las 10 guías completas de alimentación, salud y bienestar.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: FullPage,
});

function FullPage() {
  const { hydrated, hasAccess, signIn, signOut } = useFullAccess();
  const [active, setActive] = useState<Material | null>(null);
  const homeScrollRef = useRef(0);

  const openMaterial = useCallback((material: Material) => {
    homeScrollRef.current = window.scrollY;
    window.history.pushState({ ...window.history.state, libraryView: "reader" }, "");
    setActive(material);
  }, []);

  const closeReader = useCallback(() => {
    if (window.history.state?.libraryView === "reader") {
      window.history.back();
      return;
    }
    setActive(null);
    requestAnimationFrame(() => window.scrollTo({ top: homeScrollRef.current, behavior: "auto" }));
  }, []);

  useEffect(() => {
    const handleBrowserBack = () => {
      if (!active) return;
      setActive(null);
      requestAnimationFrame(() =>
        window.scrollTo({ top: homeScrollRef.current, behavior: "auto" }),
      );
    };
    window.addEventListener("popstate", handleBrowserBack);
    return () => window.removeEventListener("popstate", handleBrowserBack);
  }, [active]);

  if (!hydrated) {
    return (
      <div className="min-h-screen">
        <SiteHeader />
      </div>
    );
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen">
        <SiteHeader />
        <PasswordGate onSubmitPassword={signIn} />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-10">
      <SiteHeader
        action={
          <button
            type="button"
            onClick={signOut}
            className="shrink-0 rounded-xl border border-border bg-card px-2 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:px-3"
          >
            <span className="sm:hidden">SALIR</span>
            <span className="hidden sm:inline">Cerrar sesión</span>
          </button>
        }
      />

      <main className="app-content mx-auto max-w-7xl px-4 py-6 sm:px-5 lg:py-8">
        <section className="space-y-5">
          <div className="flex items-center gap-3 border-b border-gold/30 pb-4">
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-xl"
              aria-hidden="true"
            >
              ✓
            </span>
            <div>
              <p className="text-sm font-bold tracking-[0.12em] text-forest">ACCESO COMPLETO</p>
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
                locked={false}
                onSelect={openMaterial}
              />
            ))}
          </div>
        </section>

        <section className="mt-9 border-t border-gold/30 pt-8">
          <VipGroupCard unlocked />
        </section>
      </main>

      {active ? (
        <LazyPdfReader
          file={active.pdfUrl}
          title={active.title}
          onClose={closeReader}
          downloadUrl={active.pdfUrl}
        />
      ) : null}
    </div>
  );
}
