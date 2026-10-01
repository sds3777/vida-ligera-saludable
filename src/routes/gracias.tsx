import { ArrowRight, Check, LockKeyhole, MessageCircle } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-vida-ligera.png";

const LIBRARY_URL = "https://vida-ligera-saludable.vercel.app/full";
const WHATSAPP_URL = "https://wa.me/5519989410996?text=Tengo%20Dudas";
const ACCESS_PASSWORD = "6240";

export const Route = createFileRoute("/gracias")({
  head: () => ({
    meta: [
      { title: "¡Gracias por tu compra! — Vida Ligera y Saludable" },
      {
        name: "description",
        content: "Accede a tu biblioteca completa de recetas y materiales de Vida Ligera y Saludable.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#fff8e9]">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-5xl justify-center px-3 py-8 sm:px-5 sm:py-14 lg:py-16">
        <section className="w-full max-w-[576px] overflow-hidden rounded-[25px] border border-[#efdbae] bg-[#fffdf8] shadow-[0_18px_35px_rgba(92,49,17,0.15)]">
          <div className="bg-gradient-to-br from-[#8c0d1c] to-[#730916] px-5 py-9 text-center text-white sm:px-7 sm:py-10">
            <span className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full border border-white/50 bg-white/10">
              <Check className="h-8 w-8 stroke-[1.8]" aria-hidden="true" />
            </span>
            <h1 className="font-display text-[2rem] font-bold leading-tight sm:text-[2.55rem]">
              ¡Gracias por tu compra!
            </h1>
            <p className="mt-2 text-sm font-medium sm:text-base">
              Tu material completo ya está listo para ti.
            </p>
          </div>

          <div className="px-5 py-8 text-center sm:px-9 sm:py-9">
            <h2 className="font-display text-[1.45rem] font-semibold leading-tight text-[#890d1c]">
              Accede a todo tu material
            </h2>
            <p className="mt-2 text-sm text-[#755451]">
              Pulsa el botón e introduce la contraseña que aparece aquí abajo.
            </p>

            <a
              href={LIBRARY_URL}
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#19552f] px-4 py-3 text-center text-xs font-bold tracking-wide text-white shadow-[0_8px_16px_rgba(25,85,47,0.16)] transition hover:-translate-y-0.5 hover:bg-[#124225] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8a51b] focus-visible:ring-offset-2 sm:text-sm"
            >
              <LockKeyhole className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>ACCEDER A LA BIBLIOTECA COMPLETA</span>
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>

            <div className="mt-5 rounded-[21px] border border-[#e8a51b] bg-[#fff8e9] px-4 py-5">
              <p className="text-xs font-bold uppercase tracking-[0.13em] text-[#890d1c]">
                🔑 &nbsp;Tu contraseña de acceso
              </p>
              <p className="mt-1 font-display text-[3.25rem] font-extrabold leading-tight tracking-[0.16em] text-[#19552f]">
                {ACCESS_PASSWORD}
              </p>
              <p className="mt-2 text-xs text-[#755451]">
                Escríbela tal como aparece al entrar en la biblioteca.
              </p>
            </div>

            <div className="mt-5 border-t border-[#eadfcd] pt-5 text-sm text-[#755451]">
              ¿Tienes alguna duda? Estamos aquí para ayudarte.
              <br />
              <a
                href={WHATSAPP_URL}
                className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#b6cdbd] px-5 py-2.5 text-xs font-bold text-[#19552f] transition hover:border-[#19552f] hover:bg-[#eff7f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e8a51b] focus-visible:ring-offset-2"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>HABLAR POR WHATSAPP</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#eadfcd] bg-[#fffdf8]/90 backdrop-blur-lg">
      <div className="relative mx-auto flex min-h-[70px] max-w-7xl items-center justify-center px-3 py-2.5 sm:min-h-[80px] sm:px-5 sm:py-3">
        <div className="absolute left-3 grid h-11 w-11 place-items-center overflow-hidden rounded-full border-2 border-[#19552f]/25 bg-[#fffdf8] shadow-[var(--shadow-soft)] sm:left-5 sm:h-14 sm:w-14">
          <img
            src={logo}
            alt="Símbolo de Vida Ligera y Saludable"
            width="512"
            height="512"
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="font-display text-center text-[15px] font-bold tracking-[0.045em] text-[#19552f] min-[390px]:text-base sm:text-2xl sm:tracking-wide">
          VIDA LIGERA Y SALUDABLE
        </h1>
      </div>
    </header>
  );
}
