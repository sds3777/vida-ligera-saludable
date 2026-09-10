import { Suspense, lazy, useEffect, useState, type ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const PdfReader = lazy(() => import("./PdfReader"));

type Props = {
  file: string;
  title: string;
  maxPages?: number | undefined;
  onClose: () => void;
  onReachLastPage?: (() => void) | undefined;
  downloadUrl?: string | undefined;
  lockedContent?: ReactNode;
};

/** El lector solo se carga en el navegador (PDF.js no funciona en SSR). */
export function LazyPdfReader(props: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Suspense
      fallback={
        <div className="fixed inset-0 z-50 grid place-items-center bg-cream p-6">
          <Skeleton className="h-[70vh] w-full max-w-3xl rounded-2xl" />
        </div>
      }
    >
      <PdfReader {...props} />
    </Suspense>
  );
}
