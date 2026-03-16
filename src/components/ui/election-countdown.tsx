"use client"

import { useState, useEffect } from 'react'
import { Calendar, Clock, Sparkles } from 'lucide-react'

export default function ElectionCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-03-22T00:00:00-04:00') // 22 de marzo 2026
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

  if (!mounted) {
    return (
      <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#de2488]/20 via-white/80 to-[#00cfaf]/20 backdrop-blur-md border-2 border-white/60 p-4 sm:p-8 shadow-2xl">
        <div className="animate-pulse space-y-3 sm:space-y-4">
          <div className="h-6 sm:h-8 bg-gray-200 rounded w-3/4"></div>
          <div className="h-24 sm:h-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#de2488]/20 via-white/90 to-[#00cfaf]/20 backdrop-blur-md border-2 border-white/60 p-5 sm:p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group">
      {/* Elementos decorativos animados */}
      <div className="absolute -top-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#de2488]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      <div className="absolute -bottom-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-[#00cfaf]/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      
      {/* Detalles decorativos */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex gap-1">
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#de2488] animate-pulse"></div>
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#00cfaf] animate-pulse delay-75"></div>
        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#de2488] animate-pulse delay-150"></div>
      </div>

      <div className="relative z-10">
        {/* Header mejorado */}
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="bg-gradient-to-br from-[#de2488] to-[#de2488]/70 p-2 sm:p-2.5 rounded-lg sm:rounded-xl shadow-lg">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <div>
              <h3 className="text-[10px] sm:text-sm font-black text-[#de2488] uppercase tracking-wider">
                Faltan para las elecciones
              </h3>
              <p className="text-[9px] sm:text-xs text-slate-600 font-semibold mt-0.5">
                22 de Marzo, 2026
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#00cfaf] to-[#00cfaf]/70 p-2 sm:p-2.5 rounded-lg sm:rounded-xl shadow-lg animate-pulse">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </div>

        {/* Contador mejorado con efectos */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {/* Días */}
          <div className="relative group/card">
            <div className="absolute inset-0 bg-gradient-to-br from-[#de2488] to-[#de2488]/70 rounded-xl sm:rounded-2xl blur opacity-40 group-hover/card:opacity-60 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-[#de2488]/95 to-[#de2488]/85 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-center border-2 border-[#de2488]/30 shadow-xl transform group-hover/card:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="text-2xl sm:text-4xl font-black text-white mb-0.5 sm:mb-1.5 drop-shadow-lg">
                  {timeLeft.days}
                </div>
                <div className="absolute inset-0 text-2xl sm:text-4xl font-black text-white/20 blur-sm">
                  {timeLeft.days}
                </div>
              </div>
              <div className="text-[8px] sm:text-[10px] font-bold text-white/90 uppercase tracking-widest">
                Días
              </div>
            </div>
          </div>

          {/* Horas */}
          <div className="relative group/card">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00cfaf] to-[#00cfaf]/70 rounded-xl sm:rounded-2xl blur opacity-40 group-hover/card:opacity-60 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-[#00cfaf]/95 to-[#007e6a]/85 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-center border-2 border-[#00cfaf]/30 shadow-xl transform group-hover/card:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="text-2xl sm:text-4xl font-black text-white mb-0.5 sm:mb-1.5 drop-shadow-lg">
                  {timeLeft.hours}
                </div>
                <div className="absolute inset-0 text-2xl sm:text-4xl font-black text-white/20 blur-sm">
                  {timeLeft.hours}
                </div>
              </div>
              <div className="text-[8px] sm:text-[10px] font-bold text-white/90 uppercase tracking-widest">
                Horas
              </div>
            </div>
          </div>

          {/* Minutos */}
          <div className="relative group/card">
            <div className="absolute inset-0 bg-gradient-to-br from-[#de2488] to-[#de2488]/70 rounded-xl sm:rounded-2xl blur opacity-40 group-hover/card:opacity-60 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-[#de2488]/95 to-[#de2488]/85 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-center border-2 border-[#de2488]/30 shadow-xl transform group-hover/card:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="text-2xl sm:text-4xl font-black text-white mb-0.5 sm:mb-1.5 drop-shadow-lg">
                  {timeLeft.minutes}
                </div>
                <div className="absolute inset-0 text-2xl sm:text-4xl font-black text-white/20 blur-sm">
                  {timeLeft.minutes}
                </div>
              </div>
              <div className="text-[8px] sm:text-[10px] font-bold text-white/90 uppercase tracking-widest">
                Min
              </div>
            </div>
          </div>

          {/* Segundos */}
          <div className="relative group/card">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00cfaf] to-[#00cfaf]/70 rounded-xl sm:rounded-2xl blur opacity-40 group-hover/card:opacity-60 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-[#00cfaf]/95 to-[#007e6a]/85 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-4 text-center border-2 border-[#00cfaf]/30 shadow-xl transform group-hover/card:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="text-2xl sm:text-4xl font-black text-white mb-0.5 sm:mb-1.5 drop-shadow-lg animate-pulse">
                  {timeLeft.seconds}
                </div>
                <div className="absolute inset-0 text-2xl sm:text-4xl font-black text-white/20 blur-sm">
                  {timeLeft.seconds}
                </div>
              </div>
              <div className="text-[8px] sm:text-[10px] font-bold text-white/90 uppercase tracking-widest">
                Seg
              </div>
            </div>
          </div>
        </div>

        {/* Detalles adicionales */}
        <div className="mt-3 sm:mt-5 flex items-center justify-center gap-1.5 sm:gap-2 text-slate-600">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#de2488]" />
          <span className="text-[10px] sm:text-xs font-semibold">Día de votación subnacional</span>
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#00cfaf]" />
        </div>
      </div>
    </div>
  )
}
