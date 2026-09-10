import { useCallback, useEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { ChevronLeft, ChevronRight, Download, Eye, EyeOff, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

type PdfReaderProps = {
  /** Ruta del archivo a cargar. En /demo siempre es el PDF recortado. */
  file: string;
  title: string;
  /** Máximo de páginas a mostrar (la demostración usa 11). */
  maxPages?: number | undefined;
  onClose: () => void;
  onReachLastPage?: (() => void) | undefined;
  downloadUrl?: string | undefined;
  /** Bloque fijo de contenido bloqueado bajo la última página de la muestra. */
  lockedContent?: ReactNode;
};

function LazyRenderedPage({
  pageNumber,
  width,
  scrollRoot,
  register,
  nightMode,
}: {
  pageNumber: number;
  width: number;
  scrollRoot: RefObject<HTMLDivElement | null>;
  register: (node: HTMLDivElement | null) => void;
  nightMode: boolean;
}) {
  const localRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(pageNumber <= 2);

  useEffect(() => {
    const node = localRef.current;
    const root = scrollRoot.current;
    if (!node || !root || visible) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { root, rootMargin: "1200px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [scrollRoot, visible]);

  const estimatedHeight = Math.round(width * 1.414);

  return (
    <div
      data-page={pageNumber}
      ref={(node) => {
        localRef.current = node;
        register(node);
      }}
      style={{ minHeight: estimatedHeight }}
      className={`w-full max-w-full overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] ${
        nightMode ? "pdf-night-page bg-slate-800" : "bg-card"
      }`}
    >
      {visible ? (
        <Page
          pageNumber={pageNumber}
          width={width}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading={<Skeleton className="h-[60vh] w-full rounded-2xl" />}
          className="mx-auto [&_canvas]:!h-auto [&_canvas]:max-w-none"
        />
      ) : (
        <Skeleton className="h-full min-h-[60vh] w-full rounded-2xl" />
      )}
    </div>
  );
}

export default function PdfReader({
  file,
  title,
  maxPages,
  onClose,
  onReachLastPage,
  downloadUrl,
  lockedContent,
}: PdfReaderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const reachedRef = useRef(false);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [width, setWidth] = useState(640);
  const [failed, setFailed] = useState(false);
  const [nightMode, setNightMode] = useState(false);

  const total = maxPages ? Math.min(maxPages, numPages || maxPages) : numPages;

  useEffect(() => {
    const update = () => {
      const el = scrollRef.current;
      if (!el) return;
      setWidth(Math.max(280, Math.min(el.clientWidth - 24, 900)));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [onClose]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || !total) return;
    const update = () => {
      const marker = container.getBoundingClientRect().top + container.clientHeight * 0.3;
      let page = 1;
      for (let i = 0; i < total; i += 1) {
        const node = pageRefs.current[i];
        if (!node || node.offsetHeight < 80) continue;
        if (node.getBoundingClientRect().top <= marker) page = i + 1;
      }

      const scrollable = container.scrollHeight > container.clientHeight * 1.5;
      const atBottom =
        scrollable && container.scrollTop + container.clientHeight >= container.scrollHeight - 24;
      setCurrentPage(atBottom ? total : page);
    };
    update();
    container.addEventListener("scroll", update, { passive: true });
    return () => container.removeEventListener("scroll", update);
  }, [total]);

  useEffect(() => {
    if (!total || !numPages || reachedRef.current) return;
    if (currentPage >= total) {
      reachedRef.current = true;
      onReachLastPage?.();
    }
  }, [currentPage, total, numPages, onReachLastPage]);
  const goTo = useCallback((page: number) => {
    const node = pageRefs.current[page - 1];
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col transition-colors duration-300 ${
        nightMode ? "bg-slate-950" : "bg-cream"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className={`grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 border-b px-3 py-2 transition-colors duration-300 sm:gap-3 sm:px-4 ${
          nightMode ? "border-white/10 bg-slate-900" : "border-border bg-card"
        }`}
      >
        <p
          className={`truncate font-display text-sm font-semibold sm:text-base ${
            nightMode ? "text-cream" : "text-wine"
          }`}
        >
          {title}
        </p>
        <div className="flex shrink-0 items-center gap-1">
          <button
            type="button"
            aria-label={nightMode ? "Desactivar modo nocturno" : "Activar modo nocturno"}
            aria-pressed={nightMode}
            onClick={() => setNightMode((current) => !current)}
            className={`grid h-10 w-10 place-items-center rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
              nightMode
                ? "border-white/15 bg-white/10 text-cream hover:bg-white/15"
                : "border-border text-wine hover:bg-secondary"
            }`}
          >
            {nightMode ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
          {downloadUrl ? (
            <a
              href={downloadUrl}
              download
              aria-label="Descargar PDF"
              className={`inline-flex h-10 items-center justify-center gap-2 rounded-xl border px-3 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                nightMode
                  ? "border-white/15 bg-white/10 text-cream hover:bg-white/15"
                  : "border-border text-wine hover:bg-secondary"
              }`}
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">DESCARGAR</span>
            </a>
          ) : null}
          <button
            type="button"
            aria-label="Cerrar lector"
            onClick={onClose}
            className="ml-1 grid h-10 w-10 place-items-center rounded-xl bg-wine text-primary-foreground transition-colors hover:bg-wine-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        onContextMenu={(e) => e.preventDefault()}
        className={`flex-1 overflow-y-auto overscroll-contain px-3 py-4 transition-colors duration-300 ${
          nightMode ? "bg-slate-950" : ""
        }`}
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center gap-4">
          {failed ? (
            <div className="rounded-3xl border border-border bg-card p-8 text-center">
              <p className="font-display text-lg text-wine">No hemos podido abrir este material</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Inténtalo de nuevo en unos segundos o vuelve a tus materiales.
              </p>
            </div>
          ) : (
            <Document
              file={file}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              onLoadError={() => setFailed(true)}
              loading={<Skeleton className="h-[70vh] w-full max-w-3xl rounded-2xl" />}
              error={null}
              className="flex w-full flex-col items-center gap-4"
            >
              {Array.from({ length: total }, (_, index) => (
                <LazyRenderedPage
                  key={index}
                  pageNumber={index + 1}
                  width={width}
                  scrollRoot={scrollRef}
                  nightMode={nightMode}
                  register={(node) => {
                    pageRefs.current[index] = node;
                  }}
                />
              ))}
            </Document>
          )}
          {!failed && maxPages && lockedContent ? lockedContent : null}
        </div>
      </div>

      <div
        className={`grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 border-t px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] transition-colors duration-300 ${
          nightMode ? "border-white/10 bg-slate-900" : "border-border bg-card"
        }`}
      >
        <button
          type="button"
          aria-label="Página anterior"
          disabled={currentPage <= 1}
          onClick={() => goTo(currentPage - 1)}
          className={`grid h-11 w-11 place-items-center rounded-xl border transition-colors disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
            nightMode
              ? "border-white/15 text-cream hover:bg-white/10"
              : "border-border text-wine hover:bg-secondary"
          }`}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <p
          className={`text-center text-sm font-medium ${
            nightMode ? "text-cream/75" : "text-muted-foreground"
          }`}
        >
          Página {currentPage} de {total || "…"}
        </p>
        <button
          type="button"
          aria-label="Página siguiente"
          disabled={!!total && currentPage >= total}
          onClick={() => goTo(currentPage + 1)}
          className={`grid h-11 w-11 place-items-center rounded-xl border transition-colors disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
            nightMode
              ? "border-white/15 text-cream hover:bg-white/10"
              : "border-border text-wine hover:bg-secondary"
          }`}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
