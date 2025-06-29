"use client"

import { useState, useEffect, useRef } from 'react'
import { X,
  AlertTriangle,
  Info
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface Feature {
  name: string
  description: string
  moreInfo: string
  risks: string[]
  myrisk: string[]
  icon: any
  image: string
  color: string
}

interface FeaturesGridProps {
  features: Feature[]
}

// Hook para el efecto parallax optimizado
const useParallax = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}

export default function FeaturesGrid({ features }: FeaturesGridProps) {
  const [expandedModal, setExpandedModal] = useState<{ type: 'info' | 'risks' | null, feature: string | null }>({ type: null, feature: null })
  const scrollY = useParallax()
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const openModal = (type: 'info' | 'risks', featureName: string) => {
    setExpandedModal({ type, feature: featureName })
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setExpandedModal({ type: null, feature: null })
    // Restore body scroll when modal is closed
    document.body.style.overflow = 'unset'
  }

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }
    
    if (expandedModal.type) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [expandedModal.type])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])
  
  const getFeatureColors = (index: number) => {
    const colors = [
      {
        bg: 'bg-gradient-to-br from-[#de2488]/10 via-[#de2488]/5 to-white',
        border: 'border-[#de2488]/30',
        accent: 'text-[#de2488]',
        button: 'hover:bg-[#de2488]/10 border-[#de2488]/40 text-[#de2488] hover:text-[#de2488]'
      },
      {
        bg: 'bg-gradient-to-br from-[#00cfaf]/10 via-[#00cfaf]/5 to-white',
        border: 'border-[#00cfaf]/30',
        accent: 'text-[#00cfaf]',
        button: 'hover:bg-[#00cfaf]/10 border-[#00cfaf]/40 text-[#00cfaf] hover:text-[#00cfaf]'
      },
      {
        bg: 'bg-gradient-to-br from-[#de2488]/8 via-white to-[#00cfaf]/8',
        border: 'border-[#de2488]/25',
        accent: 'text-[#de2488]',
        button: 'hover:bg-[#de2488]/10 border-[#de2488]/40 text-[#de2488] hover:text-[#de2488]'
      },
      {
        bg: 'bg-gradient-to-br from-[#00cfaf]/8 via-white to-[#de2488]/8',
        border: 'border-[#00cfaf]/25',
        accent: 'text-[#00cfaf]',
        button: 'hover:bg-[#00cfaf]/10 border-[#00cfaf]/40 text-[#00cfaf] hover:text-[#00cfaf]'
      }
    ]
    return colors[index % colors.length]
  }
  // Función para calcular el offset parallax
  const getParallaxOffset = (index: number) => {
    if (typeof window === 'undefined' || !cardRefs.current[index]) return 0
    
    try {
      const rect = cardRefs.current[index]?.getBoundingClientRect()
      if (!rect) return 0
      
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Solo aplicar parallax cuando el elemento está visible
      if (elementTop > windowHeight || elementTop + elementHeight < 0) {
        return 0
      }
      
      // Calcular el progreso del elemento en la viewport (-1 a 1)
      const progress = (windowHeight / 2 - elementTop - elementHeight / 2) / (windowHeight / 2)
      
      // Aplicar el efecto parallax (movimiento más sutil)
      return Math.max(-30, Math.min(30, progress * 20))
    } catch (error) {
      return 0
    }
  }

  const currentFeature = features.find(f => f.name === expandedModal.feature)
  return (
    <>
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <div className="w-full max-w-7xl mx-auto px-4">{/* Título de la sección */}
        <div className="text-center mb-12">
          {/* Línea decorativa superior */}
          <div className="h-2 rounded-full overflow-hidden flex shadow-lg mx-auto max-w-md mb-8 animate-pulse">
            <div className="flex-1 bg-gradient-to-r from-[#de2488] to-[#00cfaf]"></div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold  text-black mb-4">
            GUÍA PARA UNA VOTACIÓN CONSCIENTE
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            Estas son las preguntas clave que debes hacerte antes de ejercer tu derecho al voto
          </p>
        </div>        {/* Grid de Features más denso */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const colors = getFeatureColors(index)
            const IconComponent = feature.icon
            const parallaxOffset = getParallaxOffset(index)
            const isLastOdd = features.length % 3 === 1 && index === features.length - 1
            
            return (
              <Card 
                key={feature.name} 
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={`group relative overflow-hidden rounded-2xl bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.01] cursor-pointer ${isLastOdd ? 'xl:col-start-2' : ''}`}
              >
                {/* Imagen principal más pequeña */}
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full"
                    style={{
                      transform: `translateY(${parallaxOffset * 0.3}px)`,
                      transition: 'transform 0.2s ease-out'
                    }}
                  >
                    <img
                      src={feature.image}
                      alt={feature.name}
                      className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  {/* Gradient overlay más sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent transition-opacity duration-500 group-hover:from-black/40"></div>
                  
                  {/* Overlay de color temático - más sutil */}
                  <div 
                    className={`absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-5`}
                    style={{
                      background: index % 2 === 0 ? '#de2488' : '#00cfaf'
                    }}
                  ></div>
                </div>                <CardContent className="p-6 relative flex flex-col h-64">
                  {/* Borde decorativo dinámico más sutil */}
                  <div 
                    className={`absolute top-0 left-6 right-6 h-0.5 rounded-full transition-all duration-500 group-hover:left-4 group-hover:right-4`}
                    style={{
                      background: `linear-gradient(90deg, ${index % 2 === 0 ? '#de2488' : '#00cfaf'}, ${index % 2 === 0 ? '#00cfaf' : '#de2488'})`
                    }}
                  ></div>                  {/* Título con gradiente más compacto */}
                  <h3 
                    className="text-lg font-bold mb-3 leading-tight min-h-[3.5rem] flex items-start transition-all duration-300 group-hover:scale-[1.02]"
                    style={{
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? '#de2488' : '#00cfaf'}, #374151)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {feature.name}
                  </h3>
                  
                  {/* Descripción más concisa */}
                  <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 flex-grow mb-4 line-clamp-3">
                    {feature.description}
                  </p>

                  {/* Botones más compactos */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className={`flex-1 group/btn relative overflow-hidden rounded-xl border-2 font-medium transition-all duration-300 hover:scale-[1.02] text-xs`}
                      style={{
                        borderColor: index % 2 === 0 ? '#de2488' : '#00cfaf',
                        color: index % 2 === 0 ? '#de2488' : '#00cfaf'
                      }}
                      onClick={() => openModal('info', feature.name)}
                    >
                      <Info className="mr-1 h-3 w-3 transition-transform group-hover/btn:scale-110" />
                      <span className="relative z-10">Más Info</span>
                    </Button>
                    
                    <Button
                      size="sm"
                      className={`flex-1 group/btn relative overflow-hidden rounded-xl border-0 font-medium text-white transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg text-xs`}
                      style={{
                        background: `linear-gradient(135deg, ${index % 2 === 0 ? '#de2488' : '#00cfaf'}, ${index % 2 === 0 ? '#b91c5c' : '#059669'})`
                      }}
                      onClick={() => openModal('risks', feature.name)}
                    >
                      <AlertTriangle className="mr-1 h-3 w-3 transition-transform group-hover/btn:scale-110" />
                      <span className="relative z-10">Red Flags</span>
                    </Button>
                  </div>

                  {/* Línea decorativa inferior más pequeña */}
                  <div className="flex justify-center mt-4">
                    <div 
                      className={`h-0.5 w-12 rounded-full transition-all duration-500 group-hover:w-16 ${index % 2 === 0 ? 'bg-[#de2488]' : 'bg-[#00cfaf]'}`}
                    ></div>
                  </div>
                </CardContent>                {/* Efecto de borde animado más sutil */}
                <div 
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none border ${index % 2 === 0 ? 'border-[#de2488]' : 'border-[#00cfaf]'}`}
                ></div>
              </Card>
            )
          })}
        </div>
      </div>      {/* Modal Overlay */}
      {expandedModal.type && expandedModal.feature && (        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden animate-in slide-in-from-bottom-4 duration-300 flex flex-col">            {/* Header del modal */}
            <div className="bg-gradient-to-r from-[#de2488] via-[#00cfaf] to-[#de2488] p-3 sm:p-4 text-white relative">
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-white/20 hover:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Cerrar modal"
              >
                <X className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <div className="flex items-start sm:items-center mb-1 pr-10">
                {expandedModal.type === 'info' ? (
                  <Info className="h-5 w-5 sm:h-6 sm:w-6 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                ) : (
                  <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" />
                )}
                <h2 className="text-base sm:text-xl font-bold leading-tight">
                  {expandedModal.type === 'info' ? 'Información Detallada' : 'Red Flags - Señales de Alerta'}
                </h2>
              </div>
              <h3 className="text-sm sm:text-base opacity-90 font-medium leading-tight break-words pl-7 sm:pl-8">
                {currentFeature?.name}
              </h3>
            </div>{/* Contenido del modal */}
            <div className="flex-1 p-3 sm:p-4 overflow-y-auto">
              {expandedModal.type === 'info' ? (
                <div className="space-y-3">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base break-words">
                    {currentFeature?.moreInfo}
                  </p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Mis Red Flags */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#de2488] mb-2 sm:mb-3 flex items-center">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                      Mis Red Flags
                    </h4>
                    <div className="bg-gradient-to-r from-[#de2488]/10 to-[#de2488]/5 border-l-4 border-[#de2488] p-3 sm:p-4 rounded-r-lg">
                      <ul className="space-y-2">
                        {currentFeature?.risks.map((risk, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#de2488] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="text-[#de2488] text-sm sm:text-base leading-snug break-words font-medium">{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Red Flags de Candidatos */}
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-[#00cfaf] mb-2 sm:mb-3 flex items-center">
                      <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 flex-shrink-0" />
                      Red Flags de Candidatos
                    </h4>
                    <div className="bg-gradient-to-r from-[#00cfaf]/10 to-[#00cfaf]/5 border-l-4 border-[#00cfaf] p-3 sm:p-4 rounded-r-lg">
                      <ul className="space-y-2">
                        {currentFeature?.myrisk.map((risk, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#00cfaf] rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span className="text-[#00cfaf] text-sm sm:text-base leading-snug break-words font-medium">{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>            {/* Footer del modal */}
            <div className="bg-gradient-to-r from-[#de2488]/5 to-[#00cfaf]/5 px-3 py-2 sm:px-4 sm:py-3 border-t border-gray-200 flex-shrink-0">
              <Button
                onClick={closeModal}
                variant="outline"
                size="sm"
                className="w-full border-2 border-[#de2488]/40 text-[#de2488] hover:bg-[#de2488]/10 hover:border-[#de2488] font-semibold transition-all duration-300"
              >
                Cerrar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
