"use client"

import Image from "next/image"
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
              TE AYUDAMOS A VOTAR INFORMADO
            </h1>
            
            {/* Countdown integrado debajo del texto */}
            <div className="flex justify-center">
              <ElectionCountdown />
            </div>
            
            {/* Logo Tinku Electoral - clickeable */}
            <div className="mt-8 w-full max-w-3xl mx-auto">
              <a
                href="https://tinkuelectoral.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block transition-all duration-300 hover:scale-105 focus:scale-105 focus:outline-none sm:hover:scale-105 scale-100 sm:scale-100"
              >
                {/* Contenedor con efectos hover - mismo ancho que contador */}
                <div className="relative bg-gradient-to-br from-[#de2488]/10 via-white to-[#00cfaf]/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border-2 border-[#de2488]/30 transition-all duration-300 sm:hover:shadow-xl sm:hover:border-[#de2488]/50">
                  {/* Glow effect - siempre visible en móvil */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#de2488]/20 to-[#00cfaf]/20 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  
                  {/* Logo centrado y más grande */}
                  <div className="relative flex justify-center items-center">
                    <Image
                      src="/images/tinku_electoral_logo.webp"
                      alt="Tinku Electoral - Análisis Electoral"
                      width={240}
                      height={130}
                      className="object-contain transition-all duration-300 brightness-110 sm:brightness-100 sm:group-hover:brightness-110"
                    />
                  </div>
                  
                  {/* Indicador visual de link - siempre visible en móvil */}
                  <div className="absolute -top-2 -right-2 bg-[#de2488] text-white rounded-full p-1.5 opacity-100 scale-100 sm:opacity-0 sm:scale-75 sm:group-hover:opacity-100 sm:group-hover:scale-100 transition-all duration-300">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  
                  {/* Texto informativo centrado */}
                  <div className="mt-4 text-center">
                    <div className="bg-gradient-to-r from-[#de2488] to-[#00cfaf] bg-clip-text text-transparent text-sm font-semibold">
                      Visitar Tinku Electoral
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}