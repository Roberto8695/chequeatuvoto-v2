"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Volume2, Eye, Shield, MessageSquare } from 'lucide-react'

interface AvoidSharingRule {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
  borderColor: string
}

const avoidSharingRules: AvoidSharingRule[] = [
  {
    id: 1,
    title: "Audios alarmistas",
    description: "Audios alarmistas que instan a las personas a actuar rápidamente ante supuestos eventos que están por suceder.",
    icon: Volume2,
    color: "text-[#de2487]",
    bgColor: "bg-[#de2487]/10",
    borderColor: "border-[#de2487]/30"
  },
  {
    id: 2,
    title: "Videos e imágenes de fuentes desconocidas",
    description: "Videos e imágenes de fuentes desconocidas que buscan generar miedo.",
    icon: Eye,
    color: "text-[#04cfaf]",
    bgColor: "bg-[#04cfaf]/10",
    borderColor: "border-[#04cfaf]/30"
  },
  {
    id: 3,
    title: "Alertas no oficiales",
    description: "Alertas que no sean emitidas por canales oficiales de instituciones o entidades confiables.",
    icon: Shield,
    color: "text-[#de2487]",
    bgColor: "bg-[#de2487]/10",
    borderColor: "border-[#de2487]/30"
  },
  {
    id: 4,
    title: "Capturas de pantalla de chats",
    description: "Capturas de pantallas de \"chats\", reenviados por fuentes dudosas.",
    icon: MessageSquare,
    color: "text-[#04cfaf]",
    bgColor: "bg-[#04cfaf]/10",
    borderColor: "border-[#04cfaf]/30"
  }
]

export default function AvoidSharingSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(avoidSharingRules.length).fill(false))
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0')
          setVisibleItems(prev => {
            const newVisible = [...prev]
            newVisible[index] = true
            return newVisible
          })
        }
      })
    }, observerOptions)

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      {/* Header con animación */}
      <div className="text-center mb-16">
         <div className="h-2 rounded-full overflow-hidden flex shadow-lg mx-auto max-w-md mb-8 animate-pulse">
            <div className="flex-1 bg-gradient-to-r from-[#de2488] to-[#00cfaf]"></div>
          </div>
        
        <div className="relative">
          {/* Megáfono emoji como decoración */}
          
          
          <h2 className="text-3xl lg:text-4xl font-bold font-round text-gray-900 mb-4">
            <span className="text-lack">Evita Compartir</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En este contexto de crisis social, revisa la fuente antes de compartir información.
          </p>
        </div>
      </div>

      {/* Grid de tarjetas con animaciones escalonadas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {avoidSharingRules.map((rule, index) => {
          const Icon = rule.icon
          const isHovered = hoveredCard === rule.id
          const isVisible = visibleItems[index]
          
          return (
            <div
              key={rule.id}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              data-index={index}
              className={`
                transform transition-all duration-700 ease-out
                ${isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-12 opacity-0'
                }
              `}
              style={{
                transitionDelay: `${index * 200}ms`
              }}
            >
              <Card
                className={`
                  relative overflow-hidden transition-all duration-500 ease-out cursor-pointer
                  ${rule.borderColor} border-2 h-full
                  ${isHovered 
                    ? 'shadow-2xl -translate-y-3 scale-105' 
                    : 'shadow-lg hover:shadow-xl'
                  }
                  group
                `}
                onMouseEnter={() => setHoveredCard(rule.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Fondo gradiente animado */}
                <div className={`
                  absolute inset-0 ${rule.bgColor} opacity-40
                  transition-opacity duration-300
                  ${isHovered ? 'opacity-70' : 'opacity-40'}
                `} />
                
                {/* Patrón de advertencia sutil */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-[#de2487] to-[#04cfaf] transform rotate-45 translate-x-10 -translate-y-10"></div>
                </div>
                
                {/* Indicador numérico con efecto pulsante */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white
                    bg-gradient-to-br from-[#de2487] to-[#04cfaf]
                    ${isHovered ? 'scale-110 animate-pulse' : 'scale-100'}
                    transition-transform duration-300 shadow-lg
                  `}>
                    {rule.id}
                  </div>
                </div>

                <CardContent className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icono con animación */}
                  <div className={`
                    flex items-center justify-center w-20 h-20 rounded-full mb-6
                    ${rule.bgColor} border-2 ${rule.borderColor}
                    ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
                    transition-all duration-300 shadow-md
                  `}>
                    <Icon className={`w-10 h-10 ${rule.color}`} />
                  </div>

                  {/* Título con gradiente en hover */}
                  <h3 className={`
                    text-2xl font-bold mb-4 leading-tight
                    ${isHovered 
                      ? `bg-gradient-to-r from-[#de2487] to-[#04cfaf] bg-clip-text text-transparent` 
                      : 'text-gray-900'
                    }
                    transition-all duration-300
                  `}>
                    {rule.title}
                  </h3>

                  {/* Descripción con mejor espaciado */}
                  <p className="text-gray-700 text-base leading-relaxed flex-grow">
                    {rule.description}
                  </p>

                  {/* Indicador de advertencia */}
                  <div className={`
                    mt-6 flex items-center justify-center
                    ${isHovered ? 'opacity-100' : 'opacity-70'}
                    transition-opacity duration-300
                  `}>
                    <div className="flex items-center space-x-2 text-[#de2487]">
                      <div className="w-2 h-2 bg-[#de2487] rounded-full animate-ping"></div>
                      <span className="text-sm font-semibold uppercase tracking-wide">
                        No Compartir
                      </span>
                      <div className="w-2 h-2 bg-[#de2487] rounded-full animate-ping"></div>
                    </div>
                  </div>
                </CardContent>

                {/* Efecto de advertencia en hover */}
                <div className={`
                  absolute inset-0 bg-gradient-to-r from-[#de2487]/10 via-[#04cfaf]/10 to-[#de2487]/10
                  opacity-0 group-hover:opacity-100
                  transform -skew-x-12 -translate-x-full group-hover:translate-x-full
                  transition-all duration-1000 ease-out
                `} />
              </Card>
            </div>
          )
        })}
      </div>

      {/* Mensaje final con llamada a la acción */}
      
    </div>
  )
}
