"use client"

import { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Clock, Search, AlertTriangle, PenTool } from 'lucide-react'

interface FakeNewsRule {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
  borderColor: string
}

const fakeNewsRules: FakeNewsRule[] = [
  {
    id: 1,
    title: "Cuestionar la fuente",
    description: "Verifica las fuentes del contenido. ¿Es creíble? ¿Es real?",
    icon: Search,
    color: "text-[#de2487]",
    bgColor: "bg-[#de2487]/10",
    borderColor: "border-[#de2487]/30"
  },
  {
    id: 2,
    title: "Revisar la fecha original",
    description: "Compartir contenidos antiguos puede generar debate sobre un tema que dejó de ser relevante",
    icon: Clock,
    color: "text-[#04cfaf]",
    bgColor: "bg-[#04cfaf]/10",
    borderColor: "border-[#04cfaf]/30"
  },
  {
    id: 3,
    title: "¿Es una broma o un meme?",
    description: "Si lo es, revisa la fuente y asegúrate de que no envíe un mensaje confuso",
    icon: AlertTriangle,
    color: "text-[#de2487]",
    bgColor: "bg-[#de2487]/10",
    borderColor: "border-[#de2487]/30"
  },
  {
    id: 4,
    title: "¿Tiene mala ortografía o errores de redacción?",
    description: "Si es así, puede cuestionarse la veracidad de su origen",
    icon: PenTool,
    color: "text-[#04cfaf]",
    bgColor: "bg-[#04cfaf]/10",
    borderColor: "border-[#04cfaf]/30"
  }
]

export default function ContentFakeNews() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
         <div className="h-2 rounded-full overflow-hidden flex shadow-lg mx-auto max-w-md mb-8 animate-pulse">
            <div className="flex-1 bg-gradient-to-r from-[#de2488] to-[#00cfaf]"></div>
          </div>
      {/* Header */}
      <div className="text-center mb-16">
        
        <h2 className="text-3xl lg:text-4xl font-bold font-round text-gray-900 mb-4">
          ¿Cómo Identificar Noticias Falsas?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Aprende a verificar la información antes de compartirla. Tu responsabilidad como ciudadano es crucial para combatir la desinformación.
        </p>
      </div>

      {/* Grid de tarjetas */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {fakeNewsRules.map((rule, index) => {
          const Icon = rule.icon
          const isHovered = hoveredCard === rule.id
          
          return (
            <Card
              key={rule.id}
              className={`
                relative overflow-hidden transition-all duration-500 ease-out cursor-pointer
                ${rule.borderColor} border-2
                ${isHovered 
                  ? 'shadow-2xl -translate-y-4 scale-105' 
                  : 'shadow-lg hover:shadow-xl'
                }
                group
              `}
              onMouseEnter={() => setHoveredCard(rule.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {/* Fondo gradiente animado */}
              <div className={`
                absolute inset-0 ${rule.bgColor} opacity-50 
                transition-opacity duration-300
                ${isHovered ? 'opacity-80' : 'opacity-50'}
              `} />
              
              {/* Indicador numérico */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white
                  bg-gradient-to-br from-[#de2487] to-[#04cfaf]
                  ${isHovered ? 'scale-110' : 'scale-100'}
                  transition-transform duration-300
                `}>
                  {rule.id}
                </div>
              </div>

              <CardContent className="relative z-10 p-6 h-full flex flex-col">
                {/* Icono */}
                <div className={`
                  flex items-center justify-center w-16 h-16 rounded-2xl mb-6
                  ${rule.bgColor} border ${rule.borderColor}
                  ${isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'}
                  transition-all duration-300
                `}>
                  <Icon className={`w-8 h-8 ${rule.color}`} />
                </div>

                {/* Título */}
                <h3 className={`
                  text-xl font-bold mb-4 leading-tight
                  ${isHovered ? rule.color : 'text-gray-900'}
                  transition-colors duration-300
                `}>
                  {rule.title}
                </h3>

                {/* Descripción principal */}
                <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                  {rule.description}
                </p>

              </CardContent>

              {/* Efecto de brillo en hover */}
              <div className={`
                absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent
                opacity-0 group-hover:opacity-20
                transform -skew-x-12 -translate-x-full group-hover:translate-x-full
                transition-all duration-700 ease-out
              `} />
            </Card>
          )
        })}
      </div>
    </div>
  )
}
