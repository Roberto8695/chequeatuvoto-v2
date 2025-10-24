"use client"

import { useState, useEffect } from 'react'
import { Calendar,  Crown } from 'lucide-react'

export default function FloatingPosesion() {
  const [isExpanded, setIsExpanded] = useState(true) // Abierto por defecto
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  // Cuenta atrás para el 8 de noviembre de 2025
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-11-08T00:00:00-04:00') // 8 de noviembre 2025, Bolivia timezone
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  // Efecto para cerrar al hacer clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isExpanded) {
        const target = event.target as Element
        const floatingElement = document.getElementById('floating-posesion')
        
        // Si el clic no fue dentro del componente flotante, cerrarlo
        if (floatingElement && !floatingElement.contains(target)) {
          setIsExpanded(false)
        }
      }
    }

    // Solo agregar el listener si está expandido
    if (isExpanded) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    // Cleanup del event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isExpanded])

  return (
    <div id="floating-posesion" className="fixed bottom-6 right-6 z-50">
      {/* Botón flotante principal */}
      <div className="relative">
        {/* Efecto de pulso en el fondo cuando está cerrado */}
        {!isExpanded && (
          <div className="absolute inset-0 bg-gradient-to-br from-[#f83728] to-[#005e4a] rounded-full animate-pulse "></div>
        )}
        
        {/* Botón principal */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`relative bg-gradient-to-br from-[#f83728] to-[#005e4a] text-white shadow-2xl border-2 border-white/30 backdrop-blur-sm hover:shadow-3xl ${
            isExpanded 
              ? 'rounded-lg p-6 transition-all duration-300 ease-out' 
              : 'rounded-sm p-4 transition-all duration-300 ease-out hover:scale-110'
          }`}
        >
          {!isExpanded ? (
            // Vista compacta
            <div className="flex items-center space-x-2">
              <Crown className="w-5 h-5" />
              <span className="font-bold text-sm hidden sm:block">POSESIÓN</span>
              {/* Contador mini visible */}
              <div className="bg-white/20  px-2 py-1 hidden md:block">
                <span className="text-xs font-bold">{timeLeft.days}d</span>
              </div>
            </div>
          ) : (
            // Vista expandida
            <div className="min-w-[280px]">
              {/* Header */}
              <div className="text-center mb-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <Crown className="w-6 h-6 text-yellow-300" />
                  <span className="font-black text-lg">POSESIÓN PRESIDENCIAL</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-semibold">8 de Noviembre 2025</span>
                </div>
              </div>

              {/* Contador expandido */}
              <div className="bg-white/20 backdrop-blur-sm rounded-md p-4 border border-white/30">
                
                
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-[#f83728]/30 backdrop-blur-sm rounded-sm p-2 border border-white/20">
                    <div className="text-xl font-black text-white">{timeLeft.days}</div>
                    <div className="text-xs text-white/80 font-medium">Días</div>
                  </div>
                  <div className="bg-[#005e4a]/30 backdrop-blur-sm rounded-sm p-2 border border-white/20">
                    <div className="text-xl font-black text-white">{timeLeft.hours}</div>
                    <div className="text-xs text-white/80 font-medium">Hrs</div>
                  </div>
                  <div className="bg-[#f83728]/30 backdrop-blur-sm rounded-sm p-2 border border-white/20">
                    <div className="text-xl font-black text-white">{timeLeft.minutes}</div>
                    <div className="text-xs text-white/80 font-medium">Min</div>
                  </div>
                  <div className="bg-[#005e4a]/30 backdrop-blur-sm rounded-sm p-2 border border-white/20">
                    <div className="text-xl font-black text-white">{timeLeft.seconds}</div>
                    <div className="text-xs text-white/80 font-medium">Seg</div>
                  </div>
                </div>
              </div>

              {/* Información adicional */}
              <div className="mt-4 text-center">
                <div className="bg-black/20 backdrop-blur-sm rounded-md p-3 border border-white/20">
                  <div className="text-sm font-bold text-yellow-300 mb-1">Presidente Electo</div>
                  <div className="text-xs text-white/90 font-semibold">Rodrigo Paz Pereira</div>
                  <div className="text-sm font-bold text-yellow-300 mb-1 mt-2">Vicepresidente Electo</div>
                  <div className="text-xs text-white/90 font-semibold">Edman Lara Montaño</div>
                </div>
              </div>

              {/* Botón cerrar */}
              <div className="text-center mt-3">
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsExpanded(false)
                  }}
                  className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer inline-block"
                >
                  ✕ Cerrar
                </div>
              </div>
            </div>
          )}
        </button>

        {/* Elementos decorativos flotantes */}
        {!isExpanded && (
          <>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white/60 rounded-full animate-bounce"></div>
          </>
        )}
      </div>
    </div>
  )
}
