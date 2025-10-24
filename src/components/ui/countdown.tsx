"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import Confetti from '@/components/ui/confetti'

export default function ElectionResults() {
  const [mounted, setMounted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Activar confeti después de que se monte el componente
    const confettiTimer = setTimeout(() => {
      setShowConfetti(true)
    }, 500) // Pequeño delay para mejor efecto

    return () => clearTimeout(confettiTimer)
  }, [])

  if (!mounted) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <Card className="bg-gradient-to-br from-[#f83728]/10 via-white to-[#005e4a]/10 border-2 border-[#f83728]/30 shadow-2xl backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-300 rounded mb-4"></div>
                <div className="h-24 bg-gray-300 rounded mb-4"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 relative">
      {/* Componente de confeti */}
      <Confetti 
        active={showConfetti} 
        duration={4000} 
        particleCount={80} 
      />
      
      
      <Card className="bg-gradient-to-br from-[#f83728]/10 via-white to-[#005e4a]/10 border-2 border-[#f83728]/30 shadow-2xl backdrop-blur-sm overflow-hidden relative">
        {/* Elementos decorativos del PDC */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f83728]/20 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#005e4a]/20 to-transparent rounded-full translate-y-20 -translate-x-20"></div>
        
        <CardContent className="p-8 relative z-10">
          <div className="text-center">
            {/* Logo PDC */}
            

           
            
            {/* Mensaje de victoria */}
            <div className="bg-gradient-to-r from-[#f83728]/20 via-white/50 to-[#005e4a]/20 backdrop-blur-sm rounded-xl p-6 md:p-4 border-2 border-[#f83728]/40 shadow-2xl mb-6">
            
              
              <div className={`text-lg md:text-xl text-gray-700 font-medium mb-2 transition-all duration-1000 ${
                mounted ? 'transform translate-y-0 opacity-100' : 'transform -translate-y-4 opacity-0'
              }`}>
                El 19 de octubre ganó el PDC con
              </div>
              
              {/* Porcentaje destacado */}
              <div className="relative">
                <div className={`text-4xl md:text-5xl font-black text-[#f83728] drop-shadow-lg mb-2 transition-all duration-1000 ${
                  mounted ? 'transform scale-100 rotate-0' : 'transform scale-75 rotate-12'
                } ${showConfetti ? 'animate-none' : ''}`}>
                  54.96%
                </div>
                <div className="absolute inset-0 text-4xl md:text-5xl font-black text-[#005e4a] opacity-20 blur-sm">
                  54.96%
                </div>
                {/* Efecto de brillo cuando hay confeti */}
                {showConfetti && (
                  <div className="absolute inset-0 text-4xl md:text-5xl font-black text-yellow-400 opacity-30 animate-pulse">
                    54.96%
                  </div>
                )}
              </div>
              
              
            </div>

            {/* Imagen del binomio ganador */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <Image
                  src="/images/paz-lara.webp"
                  alt="Rodrigo Paz Pereira y Edman Lara Montaño - Binomio PDC"
                  width={500}
                  height={200}
                  className="rounded-lg shadow-2xl border-2 border-[#f83728]/30 object-cover"
                />
                {/* Overlay con colores del PDC */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#f83728]/10 via-transparent to-[#005e4a]/10 rounded-lg"></div>
              </div>
            </div>

            {/* Información adicional */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-[#f83728]/10 rounded-lg p-4 border border-[#f83728]/20 text-center">
                <div className="text-lg font-bold text-[#f83728] mb-1">Presidente Electo</div>
                <div className="text-lg text-gray-700 font-semibold">Rodrigo Paz Pereira</div>
              </div>
              <div className="bg-[#005e4a]/10 rounded-lg p-4 border border-[#005e4a]/20 text-center">
                <div className="text-lg font-bold text-[#005e4a] mb-1">Vicepresidente Electo</div>
                <div className="text-lg text-gray-700 font-semibold">Edman Lara Montaño</div>
              </div>
            </div>
      
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
