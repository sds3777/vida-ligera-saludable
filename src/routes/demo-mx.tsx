import { createFileRoute } from "@tanstack/react-router";
import { DemoPage } from "./demo";

export const Route = createFileRoute("/demo-mx")({
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
  component: MexicoDemoPage,
});

function MexicoDemoPage() {
  return <DemoPage />;
}
