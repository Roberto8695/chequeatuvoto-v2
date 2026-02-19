"use client"

import MapBolivia from "@/components/ui/map-bolivia"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#de2488]/5 via-white to-[#00cfaf]/5 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#de2488]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#00cfaf]/15 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 bg-[#de2488]/10 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-[#00cfaf]/10 rotate-12 animate-bounce"></div>

        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-[#de2488]/30 via-[#00cfaf]/20 to-[#de2488]/30 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-[#00cfaf]/30 via-[#de2488]/20 to-[#00cfaf]/30 animate-pulse"></div>

        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-r from-[#de2488]/5 to-[#00cfaf]/5 rounded-full animate-pulse transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#de2488]/8 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-start px-6 pb-16 pt-10">
        <div className="grid w-full grid-cols-1 gap-14 lg:grid-cols-[1.05fr_1.15fr] lg:gap-20">
          <div className="flex flex-col justify-center gap-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-[#de2488]">
                Proceso democratico
              </p>
              <h1 className="text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
                Elecciones subnacionales 2026
              </h1>
              <p className="text-base text-slate-600 sm:text-lg">
                Explora los departamentos, conoce las propuestas y sigue el pulso
                del proceso electoral en Bolivia.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-[#de2488]/30 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#de2488]">
                9 departamentos
              </span>
              <span className="rounded-full border border-[#00cfaf]/30 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#007e6a]">
                Gobernaciones
              </span>
              <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
                Alcaldias
              </span>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-lg shadow-slate-100">
                <p className="text-lg font-semibold uppercase tracking-wide text-[#00cfaf]">
                Participacion
                </p>
                <p className="mt-2 text-lg text-slate-600">
                  Indicadores actualizados y tendencias regionales.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-lg shadow-slate-100">
                <p className="text-lg font-semibold uppercase tracking-wide text-[#de2488]">
                Observacion
                </p>
                <p className="mt-2 text-lg text-slate-600">
                  Transparencia, datos abiertos y seguimiento ciudadano.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-start justify-center lg:justify-end">
            <div className="w-full max-w-2xl rounded-3xl ">
              <MapBolivia />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}