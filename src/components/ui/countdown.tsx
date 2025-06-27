"use client"

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function ElectionCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 1, // Valor inicial que no sea 0 para evitar mostrar "hoy son las elecciones"
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Calcular inmediatamente el tiempo correcto al montar
    const calculateTimeLeft = (): TimeLeft => {
      const electionDate = new Date('2025-08-17T08:00:00-04:00')
      const now = new Date()
      const difference = electionDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    
    setTimeLeft(calculateTimeLeft())
  }, [])

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      // Fecha de las elecciones: 17 de agosto de 2025 a las 8:00 AM (hora de Bolivia)
      const electionDate = new Date('2025-08-17T08:00:00-04:00') // UTC-4 (hora de Bolivia)
      const now = new Date()
      const difference = electionDate.getTime() - now.getTime()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    // Mostrar un skeleton o loading en lugar de null para evitar el flash
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <Card className="bg-gradient-to-br from-[#de2488]/10 via-white to-[#00cfaf]/10 border-2 border-[#de2488]/30 shadow-2xl backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                CUENTA REGRESIVA PARA LAS ELECCIONES
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className="bg-gradient-to-br from-gray-300 to-gray-400 rounded-xl p-4 md:p-6 shadow-xl animate-pulse">
                    <div className="text-3xl md:text-5xl font-bold text-white mb-2">--</div>
                    <div className="text-sm md:text-base font-semibold text-white/90">Loading</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#de2488] to-[#00cfaf] bg-clip-text text-transparent">
                  Domingo 17 de Agosto, 2025
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const isElectionDay = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      
      

      <Card className="bg-gradient-to-br from-[#de2488]/10 via-white to-[#00cfaf]/10 border-2 border-[#de2488]/30 shadow-2xl backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold  text-black mb-8">
              {isElectionDay ? '¡HOY SON LAS ELECCIONES!' : 'CUENTA REGRESIVA PARA LAS ELECCIONES'}
            </h2>
            
            
            {!isElectionDay ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-[#de2488] to-[#de2488]/80 rounded-xl p-4 md:p-6 shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20">
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                    {timeLeft.days.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-wide">
                    Días
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
                </div>
                
                <div className="bg-gradient-to-br from-[#00cfaf] to-[#00cfaf]/80 rounded-xl p-4 md:p-6 shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 relative">
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                    {timeLeft.hours.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-wide">
                    Horas
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
                </div>
                
                <div className="bg-gradient-to-br from-[#de2488] to-[#de2488]/80 rounded-xl p-4 md:p-6 shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 relative">
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                    {timeLeft.minutes.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-wide">
                    Minutos
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
                </div>
                
                <div className="bg-gradient-to-br from-[#00cfaf] to-[#00cfaf]/80 rounded-xl p-4 md:p-6 shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20 relative">
                  <div className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                    {timeLeft.seconds.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-wide">
                    Segundos
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl pointer-events-none"></div>
                </div>
              </div>
            ) : (
              <div className="bg-gradient-to-br from-[#de2488]/20 to-[#00cfaf]/20 backdrop-blur-sm rounded-xl p-8 border-2 border-[#de2488]/40 shadow-2xl">
                <div className="text-6xl md:text-8xl mb-4">🗳️</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#de2488] to-[#00cfaf] bg-clip-text text-transparent mb-4">
                  ¡Es hora de votar!
                </div>
                <div className="text-lg text-gray-700 font-medium">
                  Domingo 17 de Agosto, 2025
                </div>
              </div>
            )}
            
            <div className="mt-8 text-center">
              <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-[#de2488] to-[#00cfaf] bg-clip-text text-transparent">
                Domingo 17 de Agosto, 2025
              </p>
              
            </div>
          </div>
        </CardContent>
      </Card>
      
      
    </div>
  )
}
