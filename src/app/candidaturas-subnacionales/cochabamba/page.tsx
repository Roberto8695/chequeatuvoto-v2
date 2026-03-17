import Link from "next/link";
import { ArrowLeft, MapPin } from "lucide-react";
import CandidatosCochabamba from "@/components/ui/candidatos-cochabamba";

export default function CandidaturasCochabambaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#de2488]/5 via-white to-[#00cfaf]/5">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 bg-[#de2488]/10 rounded-full animate-pulse" />
        <div className="absolute top-28 right-16 w-20 h-20 bg-[#00cfaf]/10 rounded-full animate-bounce" />
      </div>

      <main className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#de2488] hover:text-[#b91c5c] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <header className="mt-6 text-center">
          <div className="h-2 rounded-full overflow-hidden flex shadow-lg mx-auto max-w-md mb-6">
            <div className="flex-1 bg-gradient-to-r from-[#de2488] to-[#00cfaf]" />
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#de2488]/20 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#de2488]">
            <MapPin className="h-3.5 w-3.5" />
            Candidaturas Subnacionales
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900">Departamento de Cochabamba</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Revisa las candidaturas para alcaldia y gobernacion en Cochabamba.
          </p>
        </header>

        <div className="mt-10 sm:mt-12">
          <CandidatosCochabamba />
        </div>
      </main>
    </div>
  );
}
