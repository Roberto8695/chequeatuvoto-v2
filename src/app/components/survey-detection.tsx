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
    <div className="w-full max-w-7xl mx-auto px-4 py-8 relative overflow-hidden min-h-screen">
      {/* Background dinámico con formas animadas - más compacto */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 -z-10"></div>
      <div className="absolute inset-0 opacity-20 -z-10">
        <div className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-[#de2487] to-[#04cfaf] rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-20 right-10 w-48 h-48 bg-gradient-to-r from-[#04cfaf] to-yellow-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-48 h-48 bg-gradient-to-r from-pink-400 to-[#de2487] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Header compacto */}
      <div className="text-center mb-8 relative">
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="text-5xl animate-pulse">📊</div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#de2487] rounded-full animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#04cfaf] rounded-full animate-bounce"></div>
          </div>
        </div>
        
        <div className="relative">
          <h2 className="text-3xl lg:text-4xl font-black mb-4 relative">
            <span className="text-white/90">¿Cómo reconocer</span><br/>
            <span className="bg-gradient-to-r from-[#de2487] via-yellow-400 to-[#04cfaf] bg-clip-text text-transparent">
              ENCUESTAS FALSAS?
            </span>
          </h2>
          
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            ¡Descubre las señales de alerta y protégete de la manipulación electoral!
          </p>
        </div>
      </div>

      {/* Diseño de pasos compacto e interactivo */}
      <div className="relative">
        {/* Indicadores de pasos más pequeños */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-3">
            {surveyRules.map((rule, index) => (
              <button
                key={rule.id}
                onClick={() => setActiveStep(index)}
                className={`
                  w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm
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

        {/* Contenido principal más compacto */}
        <div className="relative h-[400px]">
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
                {/* Layout compacto responsive */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center h-full">
                  {/* Lado izquierdo - Visual compacto */}
                  <div className="relative lg:col-span-1">
                    {/* Círculo principal más pequeño */}
                    <div 
                      className={`
                        w-48 h-48 mx-auto rounded-full flex items-center justify-center relative
                        transform transition-all duration-1000
                        ${isActive ? 'scale-100 rotate-0' : 'scale-75 rotate-45'}
                        shadow-xl
                      `}
                      style={{
                        background: `conic-gradient(from 0deg, ${rule.color}20, ${rule.color}, ${rule.color}40, ${rule.color})`
                      }}
                    >
                      {/* Número más pequeño */}
                      <div 
                        className={`
                          text-6xl font-black text-white relative z-10
                          transform transition-all duration-700
                          ${isActive ? 'scale-100 rotate-0' : 'scale-75 rotate-180'}
                        `}
                      >
                        {rule.id}
                      </div>
                      
                      {/* Icono flotante más pequeño */}
                      <div 
                        className={`
                          absolute top-2 right-2 w-12 h-12 rounded-full flex items-center justify-center
                          transform transition-all duration-500
                          ${isActive ? 'scale-100 rotate-0' : 'scale-0 rotate-90'}
                        `}
                        style={{ backgroundColor: rule.color }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>

                      {/* Menos partículas para ser más limpio */}
                      <div className="absolute inset-0">
                        {[...Array(4)].map((_, i) => (
                          <div
                            key={i}
                            className={`
                              absolute w-2 h-2 rounded-full
                              animate-ping opacity-60
                            `}
                            style={{
                              backgroundColor: rule.color,
                              top: `${30 + Math.sin(i * 90 * Math.PI / 180) * 80}px`,
                              left: `${96 + Math.cos(i * 90 * Math.PI / 180) * 80}px`,
                              animationDelay: `${i * 300}ms`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Lado derecho - Contenido compacto */}
                  <div className="relative lg:col-span-2">
                    <div 
                      className={`
                        p-6 rounded-2xl backdrop-blur-sm border-2 relative overflow-hidden
                        transform transition-all duration-1000
                        ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'}
                      `}
                      style={{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderColor: rule.color
                      }}
                    >
                      {/* Título más compacto */}
                      <h3 
                        className={`
                          text-xl lg:text-2xl font-black mb-3 leading-tight text-white
                          transform transition-all duration-700
                          ${isActive ? 'translate-x-0' : 'translate-x-4'}
                        `}
                      >
                        {rule.title}
                      </h3>

                      {/* Descripción más compacta */}
                      <div 
                        className={`
                          text-sm lg:text-base text-white/90 leading-relaxed relative
                          transform transition-all duration-700 delay-200
                          ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-70'}
                        `}
                      >
                        <p>{rule.description}</p>
                        
                        {/* Línea decorativa */}
                        <div 
                          className={`
                            h-0.5 rounded-full mt-3 transition-all duration-1000
                            ${isActive ? 'w-full' : 'w-0'}
                          `}
                          style={{ backgroundColor: rule.color }}
                        />
                      </div>

                      {/* Efectos de fondo más pequeños */}
                      <div 
                        className="absolute -top-2 -right-2 w-12 h-12 rounded-full opacity-20"
                        style={{ backgroundColor: rule.color }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navegación más compacta */}
        <div className="flex justify-center mt-6 space-x-3">
          <button
            onClick={() => setActiveStep(prev => prev > 0 ? prev - 1 : surveyRules.length - 1)}
            className="px-6 py-2 bg-white/20 text-white rounded-full font-semibold text-sm hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
          >
            ← Anterior
          </button>
          <button
            onClick={() => setActiveStep(prev => (prev + 1) % surveyRules.length)}
            className="px-6 py-2 bg-gradient-to-r from-[#de2487] to-[#04cfaf] text-white rounded-full font-semibold text-sm hover:shadow-lg transition-all duration-300"
          >
            Siguiente →
          </button>
        </div>
      </div>

      {/* Sección final compacta */}
      <div className="mt-8 text-center relative">
        <div className="relative p-6 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
          {/* Background sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#de2487]/10 via-transparent to-[#04cfaf]/10"></div>
          
          {/* Contenido compacto */}
          <div className="relative z-10">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <div className="text-3xl">🔍</div>
              <div className="text-3xl">⚠️</div>
              <div className="text-3xl">✅</div>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
              ¡VERIFICA ANTES DE CREER!
            </h3>
            
            <p className="text-sm lg:text-base text-white/90 max-w-3xl mx-auto leading-relaxed mb-6">
              No permitas que la desinformación influya en tu voto. 
              <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                TÚ TIENES EL PODER
              </span> de verificar la verdad.
            </p>

            {/* Botones compactos */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-3 bg-gradient-to-r from-[#de2487] to-pink-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                🛡️ VERIFICAR AHORA
              </button>
              
              <button className="px-6 py-3 bg-gradient-to-r from-[#04cfaf] to-teal-600 text-white rounded-full font-bold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                📢 REPORTAR FRAUDE
              </button>
            </div>
          </div>
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
