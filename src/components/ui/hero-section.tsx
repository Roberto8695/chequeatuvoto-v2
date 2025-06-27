"use client"

import ElectionCountdown from "@/components/ui/countdown"


export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#de2488]/5 via-white to-[#00cfaf]/5 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Formas geométricas con los nuevos colores */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#de2488]/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#00cfaf]/15 rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-28 h-28 bg-[#de2488]/10 rounded-lg animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-[#00cfaf]/10 rotate-12 animate-bounce"></div>
        
        {/* Líneas decorativas con los nuevos colores */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-[#de2488]/30 via-[#00cfaf]/20 to-[#de2488]/30 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-[#00cfaf]/30 via-[#de2488]/20 to-[#00cfaf]/30 animate-pulse"></div>
        
        {/* Círculos adicionales para más dinamismo */}
        <div className="absolute top-1/3 left-1/2 w-40 h-40 bg-gradient-to-r from-[#de2488]/5 to-[#00cfaf]/5 rounded-full animate-pulse transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#de2488]/8 rounded-full animate-bounce"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">        {/* Header con texto principal centrado */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-round mb-8 text-black leading-tight">
              TE AYUDAMOS A INFORMARTE ANTES DE VOTAR
            </h1>
            
            {/* Countdown integrado debajo del texto */}
            <div className="flex justify-center">
              <ElectionCountdown />
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}
