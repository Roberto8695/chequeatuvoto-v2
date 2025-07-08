"use client"

import { useState, useEffect } from 'react'
import { FileCheck, BarChart3, Calendar, TrendingUp } from 'lucide-react'

interface SurveyRule {
  id: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
}

const surveyRules: SurveyRule[] = [
  {
    id: 1,
    title: "Registro de la empresa o institución ante el Tribunal Supremo Electoral (TSE)",
    description: "Todas los estudios de opinión en materia electoral deben ser registradas ante el Tribunal Supremo Electoral (TSE) antes de su publicación. Si una encuesta no está registrada, es probable que sea engañosa o falsa.",
    icon: FileCheck,
    color: "#de2487",
    bgColor: "#1e40af" // Azul oscuro como en la imagen
  },
  {
    id: 2,
    title: "Metodología transparente y sostenible",
    description: "Los estudios de opinión en materia electoral deben ser transparentes en su metodología. Esto incluye detalles sobre el tamaño de la muestra, la representación geográfica, la segmentación por grupos demográficos y el margen de error, entre otros.",
    icon: BarChart3,
    color: "#04cfaf",
    bgColor: "#1e40af" // Azul oscuro
  },
  {
    id: 3,
    title: "Plazo de publicación",
    description: "No se pueden difundir encuestas de intención de voto en los tres días previos a la jornada electoral. Si una encuesta se publica en este período, es ilegal y probablemente falsa.",
    icon: Calendar,
    color: "#de2487",
    bgColor: "#047857" // Verde oscuro como en la imagen
  },
  {
    id: 4,
    title: "Verificación de resultados coherentes",
    description: "Si los resultados de la encuesta son desproporcionadamente diferentes de otras encuestas bien establecidas y conocidas, podría ser una señal de que la encuesta no es confiable.",
    icon: TrendingUp,
    color: "#04cfaf",
    bgColor: "#1e40af" // Azul oscuro
  }
]

export default function SurveyDetectionSection() {
  const [activeStep, setActiveStep] = useState<number>(0)

  // Auto-step progression
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % surveyRules.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8 relative overflow-hidden min-h-screen">
      {/* Background dinámico con colores de la página - optimizado */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#de2487] via-purple-800 to-[#04cfaf] -z-10"></div>
      <div className="absolute inset-0 opacity-15 -z-10">
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 w-24 sm:w-48 h-24 sm:h-48 bg-gradient-to-r from-[#de2487]/60 to-[#04cfaf]/60 rounded-full mix-blend-overlay filter blur-xl animate-blob"></div>
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-24 sm:w-48 h-24 sm:h-48 bg-gradient-to-r from-[#04cfaf]/60 to-[#de2487]/60 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-5 sm:bottom-10 left-1/2 w-24 sm:w-48 h-24 sm:h-48 bg-gradient-to-r from-[#de2487]/40 to-[#04cfaf]/40 rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Header compacto y responsivo */}
      <div className="text-center mb-6 sm:mb-8 relative">
        <div className="flex justify-center mb-3 sm:mb-4">
          <div className="relative">
            <div className="text-3xl sm:text-4xl lg:text-5xl animate-pulse">📊</div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#de2487] rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#04cfaf] rounded-full animate-bounce"></div>
          </div>
        </div>
        
        <div className="relative">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3 sm:mb-4 relative">
            <span className="text-white/90">¿Cómo reconocer</span><br/>
            <span className="bg-gradient-to-r from-[#de2487] via-yellow-400 to-[#04cfaf] bg-clip-text text-transparent">
              ENCUESTAS FALSAS?
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed px-2">
            ¡Descubre las señales de alerta y protégete de la manipulación electoral!
          </p>
        </div>
      </div>

      {/* Diseño de pasos compacto e interactivo - responsivo */}
      <div className="relative">
        {/* Indicadores de pasos responsivos */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="flex space-x-2 sm:space-x-3">
            {surveyRules.map((rule, index) => (
              <button
                key={rule.id}
                onClick={() => setActiveStep(index)}
                className={`
                  w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm
                  transform transition-all duration-500 border-2
                  ${activeStep === index 
                    ? 'scale-110 shadow-xl' 
                    : 'scale-100 hover:scale-105 opacity-70'
                  }
                `}
                style={{
                  backgroundColor: activeStep === index ? rule.color : 'transparent',
                  borderColor: rule.color,
                  color: activeStep === index ? 'white' : rule.color
                }}
              >
                {rule.id}
              </button>
            ))}
          </div>
        </div>

        {/* Contenido principal compacto y responsive */}
        <div className="relative h-[400px] sm:h-[400px] lg:h-[400px]">
          {surveyRules.map((rule, index) => {
            const Icon = rule.icon
            const isActive = activeStep === index

            return (
              <div
                key={rule.id}
                className={`
                  absolute inset-0 transform transition-all duration-1000 ease-out
                  ${isActive 
                    ? 'translate-x-0 opacity-100 scale-100' 
                    : index < activeStep 
                      ? '-translate-x-full opacity-0 scale-95'
                      : 'translate-x-full opacity-0 scale-95'
                  }
                `}
              >
                {/* Layout responsivo mejorado */}
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 items-center h-full px-2 sm:px-4">
                  {/* Lado superior en móvil / izquierdo en desktop - Visual mejorado */}
                  <div className="relative lg:col-span-1 flex justify-center">
                    {/* Círculo principal mejorado y responsive */}
                    <div 
                      className={`
                        w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full flex items-center justify-center relative
                        transform transition-all duration-1000
                        ${isActive ? 'scale-100 rotate-0' : 'scale-75 rotate-45'}
                        shadow-2xl
                      `}
                      style={{
                        background: `conic-gradient(from 0deg, ${rule.color}40, ${rule.color}, ${rule.color}20, ${rule.color}60, ${rule.color})`
                      }}
                    >
                      {/* Anillo interior con glassmorphism */}
                      <div 
                        className="absolute inset-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                        style={{
                          boxShadow: `inset 0 0 20px ${rule.color}30`
                        }}
                      />
                      
                      {/* Número mejorado */}
                      <div 
                        className={`
                          text-4xl sm:text-5xl lg:text-6xl font-black text-white relative z-20
                          transform transition-all duration-700
                          ${isActive ? 'scale-100 rotate-0' : 'scale-75 rotate-180'}
                        `}
                        style={{
                          textShadow: `0 0 20px ${rule.color}, 0 0 40px ${rule.color}50`
                        }}
                      >
                        {rule.id}
                      </div>
                      
                      {/* Icono flotante mejorado */}
                      <div 
                        className={`
                          absolute -top-2 -right-2 sm:top-0 sm:right-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 
                          rounded-full flex items-center justify-center shadow-xl border-2 border-white/30
                          transform transition-all duration-500
                          ${isActive ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}
                        `}
                        style={{ 
                          backgroundColor: rule.color,
                          boxShadow: `0 0 20px ${rule.color}50`
                        }}
                      >
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                      </div>

                      {/* Partículas orbitales mejoradas */}
                      <div className="absolute inset-0">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className={`
                              absolute w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-2.5 lg:h-2.5 rounded-full
                              animate-ping opacity-70
                            `}
                            style={{
                              backgroundColor: rule.color,
                              top: `${30 + Math.sin(i * 60 * Math.PI / 180) * 35}%`,
                              left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 40}%`,
                              animationDelay: `${i * 200}ms`,
                              boxShadow: `0 0 10px ${rule.color}`
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Anillo exterior pulsante */}
                      <div 
                        className={`
                          absolute inset-0 rounded-full border-2 opacity-50
                          ${isActive ? 'animate-pulse' : ''}
                        `}
                        style={{ borderColor: rule.color }}
                      />
                    </div>
                  </div>

                  {/* Lado inferior en móvil / derecho en desktop - Contenido mejorado */}
                  <div className="relative lg:col-span-2 w-full">
                    <div 
                      className={`
                        relative p-5 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl backdrop-blur-md border border-white/30 overflow-hidden
                        bg-gradient-to-br from-white/20 via-white/10 to-white/5 shadow-2xl
                        transform transition-all duration-1000
                        ${isActive ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-80 scale-95'}
                      `}
                    >
                      {/* Fondo decorativo de la tarjeta */}
                      <div 
                        className="absolute inset-0 rounded-2xl lg:rounded-3xl opacity-10"
                        style={{
                          background: `linear-gradient(135deg, ${rule.color}20, transparent, ${rule.color}10)`
                        }}
                      />
                      
                      {/* Brillo superior */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                      
                      {/* Título mejorado */}
                      <h3 
                        className={`
                          text-lg sm:text-xl lg:text-2xl font-black mb-3 sm:mb-4 leading-tight text-white text-center lg:text-left relative z-10
                          transform transition-all duration-700
                          ${isActive ? 'translate-x-0' : 'translate-x-4'}
                        `}
                      >
                        {rule.title}
                      </h3>

                      {/* Separador decorativo */}
                      <div 
                        className={`
                          h-1 rounded-full mb-3 sm:mb-4 transition-all duration-1000 relative z-10
                          ${isActive ? 'w-16 sm:w-20' : 'w-0'}
                        `}
                        style={{ 
                          background: `linear-gradient(90deg, ${rule.color}, ${rule.color}80, transparent)` 
                        }}
                      />

                      {/* Descripción mejorada */}
                      <div 
                        className={`
                          text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed relative z-10 text-center lg:text-left
                          transform transition-all duration-700 delay-200
                          ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-70'}
                        `}
                      >
                        <p className="font-medium">{rule.description}</p>
                      </div>

                      {/* Efectos decorativos mejorados */}
                      <div 
                        className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full opacity-20 blur-xl"
                        style={{ backgroundColor: rule.color }}
                      />
                      <div 
                        className="absolute -bottom-2 -left-2 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full opacity-15 blur-lg"
                        style={{ backgroundColor: rule.color }}
                      />
                      
                      {/* Partículas flotantes en la tarjeta */}
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`
                              absolute w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full
                              animate-pulse opacity-40
                            `}
                            style={{
                              backgroundColor: rule.color,
                              top: `${20 + i * 25}%`,
                              right: `${10 + i * 15}%`,
                              animationDelay: `${i * 500}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navegación compacta y responsiva - oculta en móvil */}
        <div className="hidden sm:flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
          <button
            onClick={() => setActiveStep(prev => prev > 0 ? prev - 1 : surveyRules.length - 1)}
            className="px-4 sm:px-6 py-2 bg-white/20 text-white rounded-full font-semibold text-xs sm:text-sm hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setActiveStep(prev => (prev + 1) % surveyRules.length)}
            className="px-4 sm:px-6 py-2 bg-gradient-to-r from-[#de2487] to-[#04cfaf] text-white rounded-full font-semibold text-xs sm:text-sm hover:shadow-lg transition-all duration-300"
          >
            Siguiente →
          </button>
        </div>
      </div>

      

      {/* Estilos CSS adicionales */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  )
}
