"use client"

import TablaGeneralCTV from "../components/tabla-general-ctv"

export default function AnalisisComparativo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#de2488]/5 via-white to-[#00cfaf]/5">
      {/* Hero Section específica para Análisis Comparativo */}
      <section className="relative py-16 px-4 sm:px-8 overflow-hidden">
        {/* Elementos decorativos de fondo siguiendo el diseño establecido */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#de2488]/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#00cfaf]/15 rotate-45 animate-bounce"></div>
          <div className="absolute bottom-32 left-20 w-28 h-28 bg-[#de2488]/10 rounded-lg animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-20 h-20 bg-[#00cfaf]/10 rotate-12 animate-bounce"></div>
          
          {/* Líneas decorativas */}
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-[#de2488]/30 via-[#00cfaf]/20 to-[#de2488]/30 animate-pulse"></div>
          <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-[#00cfaf]/30 via-[#de2488]/20 to-[#00cfaf]/30 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-round mb-6 text-black leading-tight">
            EVALUACIÓN TÉCNICA
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed text-justify">
            Este bloque presenta opiniones técnicas independientes de especialistas invitados. 
            ChequeaBolivia, Natalia Aparicio y Presente.bo, no avalan ni respaldan estas conclusiones; 
            solo facilita su publicación para el voto informado.
          </p>

          
        </div>
      </section>

      {/* Contenido principal */}
      <main className="py-8 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto">
          <TablaGeneralCTV />
        </div>
      </main>
    </div>
  )
}
