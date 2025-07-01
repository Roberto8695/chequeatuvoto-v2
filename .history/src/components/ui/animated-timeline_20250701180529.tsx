"use client"

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react'

interface TimelineEvent {
  date: string
  title: string
  description: string
}

interface AnimatedTimelineProps {
  events: TimelineEvent[]
}

export default function AnimatedTimeline({ events }: AnimatedTimelineProps) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(events.length).fill(false))
  const [lineProgress, setLineProgress] = useState(0)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
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

  useEffect(() => {
    const handleScroll = () => {
      if (!lineRef.current) return

      const rect = lineRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height

      const progress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      ))

      setLineProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const getEventStatus = (index: number) => {
    const eventDateStr = events[index].date
    
    if (eventDateStr.includes('abril') || eventDateStr.includes('mayo') || eventDateStr.includes('junio')) {
      return 'completed'
    } else if (eventDateStr.includes('agosto')) {
      return 'upcoming'
    } else {
      return 'future'
    }
  }

  const isElectionDay = (index: number) => {
    return events[index].date.includes('17 de agosto')
  }

  const getEventIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-white" />
      case 'upcoming':
        return <AlertCircle className="h-6 w-6 text-white" />
      default:
        return <Clock className="h-6 w-6 text-white" />
    }
  }
  const getEventColors = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          bg: 'bg-gradient-to-br from-[#de2488]/10 to-[#de2488]/5',
          border: 'border-[#de2488]/30',
          dot: 'bg-gradient-to-br from-[#de2488] to-[#de2488]/80',
          shadow: 'shadow-[#de2488]/20'
        }
      case 'upcoming':
        return {
          bg: 'bg-gradient-to-br from-[#00cfaf]/10 to-[#00cfaf]/5',
          border: 'border-[#00cfaf]/30',
          dot: 'bg-gradient-to-br from-[#00cfaf] to-[#00cfaf]/80',
          shadow: 'shadow-[#00cfaf]/20'
        }
      default:
        return {
          bg: 'bg-gradient-to-br from-[#de2488]/8 via-white to-[#00cfaf]/8',
          border: 'border-[#de2488]/25',
          dot: 'bg-gradient-to-br from-[#de2488] via-[#00cfaf] to-[#de2488]',
          shadow: 'shadow-[#de2488]/15'        }
    }
  }
  return (
    <div id='timeline' className="w-full max-w-6xl mx-auto px-4">      {/* Estilos CSS para la animación de vibración */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes vibrateWithPause {
            0% { transform: translate(0); }
            5% { transform: translate(-2px, 2px); }
            10% { transform: translate(-2px, -2px); }
            15% { transform: translate(2px, 2px); }
            20% { transform: translate(2px, -2px); }
            25% { transform: translate(0); }
            100% { transform: translate(0); }
          }
          .vibrate {
            animation: vibrateWithPause 2s ease-in-out infinite;
          }
        `
      }} />{/* Header */}
      <div className="text-center mb-20">
        <div className="h-2 rounded-full overflow-hidden flex shadow-lg mx-auto max-w-md mb-8 animate-pulse">
          <div className="flex-1 bg-gradient-to-r from-[#de2488] to-[#00cfaf]"></div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4 animate-fade-in">
          CALENDARIO ELECTORAL 2025
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-delay font-medium">
          Fechas importantes para las elecciones presidenciales y legislativas
        </p>
      </div>
      
      {/* Timeline Container */}
      <div className="relative pt-8">        {/* Línea central para desktop */}
        <div 
          ref={lineRef}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-[#de2488]/20 to-[#00cfaf]/20 rounded-full overflow-hidden hidden lg:block"
          style={{ 
            height: 'calc(100% - 32px)',
            top: '32px'
          }}
        >
          <div 
            className="w-full bg-gradient-to-b from-[#de2488] via-[#00cfaf] to-[#de2488] rounded-full transition-all duration-1000 ease-out"
            style={{ 
              height: `${lineProgress * 100}%`,
              boxShadow: '0 0 20px rgba(222, 36, 136, 0.3)'
            }}
          />
        </div>

        {/* Línea izquierda para móvil */}
        <div 
          className="absolute left-8 w-1 bg-gradient-to-b from-[#de2488]/20 to-[#00cfaf]/20 rounded-full overflow-hidden lg:hidden"
          style={{ 
            height: 'calc(100% - 32px)',
            top: '32px'
          }}
        >
          <div 
            className="w-full bg-gradient-to-b from-[#de2488] via-[#00cfaf] to-[#de2488] rounded-full transition-all duration-1000 ease-out"
            style={{ 
              height: `${lineProgress * 100}%`,
              boxShadow: '0 0 20px rgba(222, 36, 136, 0.3)'
            }}
          />
        </div>{/* Eventos */}
        <div className="space-y-16 lg:space-y-24 pt-8">
          {events.map((event, index) => {
            const status = getEventStatus(index)
            const colors = getEventColors(status)
            const isVisible = visibleItems[index]
            const isLeft = index % 2 === 0

            return (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                data-index={index}
                className={`relative ${
                  isVisible 
                    ? 'animate-slide-in-up opacity-100' 
                    : 'opacity-0 translate-y-8'
                } transition-all duration-700 ease-out`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                  minHeight: '140px'
                }}
              >                {/* Layout móvil */}
                <div className="flex items-center lg:hidden">                  {/* Punto móvil */}
                  <div className="flex-shrink-0 relative z-10 ml-2">
                    <div 
                      className={`
                        w-12 h-12 ${colors.dot} rounded-full 
                        flex items-center justify-center
                        shadow-lg border-3 border-white
                        transition-all duration-500
                        ${isVisible ? 'scale-100' : 'scale-0'}
                      `}
                      style={{ 
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="w-5 h-5">
                        {getEventIcon(status)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Tarjeta móvil */}
                  <div className="ml-6 flex-1">                    {isElectionDay(index) ? (
                      // Diseño especial para el día de elecciones - móvil
                      <div className="relative vibrate">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#de2488] via-[#00cfaf] to-[#de2488] rounded-2xl blur opacity-75"></div>
                        <Card 
                          className={`
                            relative bg-white
                            border-2 border-transparent bg-clip-padding
                            shadow-2xl hover:shadow-3xl
                            transition-all duration-500
                            ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                            hover:-translate-y-2 transform
                            overflow-hidden
                          `}
                          style={{ 
                            transitionDelay: `${index * 200}ms`
                          }}
                        >
                          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#de2488] via-[#00cfaf] to-[#de2488]"></div>
                          <CardContent className="p-5 relative">
                            <div className="flex items-center mb-3">
                              <Calendar className="h-4 w-4 text-black mr-2" />
                              <time className="text-sm font-bold text-black uppercase tracking-wide">
                                {event.date}
                              </time>
                            </div>
                            <h3 className="text-xl font-black text-black mb-3">
                              🗳️ {event.title.toUpperCase()}
                            </h3>
                            <p className="text-black text-sm font-medium leading-relaxed">
                              {event.description}
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center">
                                <span className="text-xs font-bold text-black uppercase">
                                  ¡TU VOTO CUENTA!
                                </span>
                              </div>
                              <div className="text-2xl">🎯</div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ) : (
                      // Diseño normal para otros eventos
                      <Card 
                        className={`
                          ${colors.bg} ${colors.border} border-2 
                          shadow-xl hover:shadow-2xl
                          transition-all duration-500
                          ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                          hover:-translate-y-1
                        `}
                        style={{ 
                          transitionDelay: `${index * 200}ms`
                        }}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-center mb-3">
                            <Calendar className="h-4 w-4 text-gray-600 mr-2" />
                            <time className="text-sm font-semibold text-gray-600 uppercase">
                              {event.date}
                            </time>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-700 text-sm">
                            {event.description}
                          </p>
                          <div className="mt-3 flex items-center">
                            <div className={`w-2 h-2 ${colors.dot} rounded-full mr-2`} />
                            <span className="text-xs font-medium text-gray-600 uppercase">
                              {status === 'completed' ? 'Completado' : 
                               status === 'upcoming' ? 'Próximo' : 'Futuro'}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>                {/* Layout desktop */}
                <div className="hidden lg:flex lg:items-center lg:justify-center lg:relative">                  {/* Punto central */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div 
                      className={`
                        w-16 h-16 ${colors.dot} rounded-full 
                        flex items-center justify-center
                        shadow-xl border-4 border-white
                        transition-all duration-500
                        ${isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}
                      `}
                      style={{ 
                        transitionDelay: `${index * 100}ms`
                      }}
                    >
                      {isElectionDay(index) ? (
                        <div className="text-2xl">🗳️</div>
                      ) : (
                        getEventIcon(status)
                      )}
                    </div>
                  </div>                  {/* Conector */}
                  <div 
                    className={`
                      absolute w-16 h-0.5 ${colors.dot} z-10
                      transition-all duration-700
                      ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                      ${isLeft ? 'right-1/2 mr-8' : 'left-1/2 ml-8'}
                    `}
                    style={{ 
                      transitionDelay: `${index * 250}ms`,
                      transformOrigin: isLeft ? 'right center' : 'left center'
                    }}
                  />

                  {/* Tarjeta */}
                  <div className={`
                    w-80 absolute z-10
                    ${isLeft 
                      ? 'right-1/2 mr-24 text-right' 
                      : 'left-1/2 ml-24 text-left'
                    }
                  `}>                    {isElectionDay(index) ? (
                      // Diseño especial para el día de elecciones - desktop
                      <div className="relative vibrate">
                        <div className="absolute -inset-2 bg-gradient-to-r from-[#de2488] via-[#00cfaf] to-[#de2488] rounded-3xl blur-lg opacity-60"></div>
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#de2488]/50 via-[#00cfaf]/50 to-[#de2488]/50 rounded-2xl blur opacity-50"></div>
                        <Card 
                          className={`
                            relative bg-white
                            border-2 border-transparent bg-clip-padding
                            shadow-2xl hover:shadow-3xl
                            transition-all duration-500
                            ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                            hover:-translate-y-3 transform
                            overflow-hidden
                            backdrop-blur-sm
                          `}
                          style={{ 
                            transitionDelay: `${index * 200}ms`
                          }}
                        >
                          {/* Barra superior */}
                          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#de2488] via-[#00cfaf] to-[#de2488]"></div>

                          <CardContent className="p-8 relative">
                            <div className={`flex items-center mb-4 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                              {isLeft ? (
                                <>
                                  <time className="text-lg font-black text-black uppercase mr-3 tracking-wide">
                                    {event.date}
                                  </time>
                                  <Calendar className="h-6 w-6 text-black" />
                                </>
                              ) : (
                                <>
                                  <Calendar className="h-6 w-6 text-black mr-3" />
                                  <time className="text-lg font-black text-black uppercase tracking-wide">
                                    {event.date}
                                  </time>
                                </>
                              )}
                            </div>
                            
                            <h3 className="text-2xl font-black text-black mb-4 leading-tight">
                              🗳️ {event.title.toUpperCase()}
                            </h3>
                            
                            <p className="text-black leading-relaxed font-semibold text-lg mb-4">
                              {event.description}
                            </p>
                            
                            {/* Elementos adicionales para el día especial */}
                            <div className="bg-gray-100 rounded-xl p-4 mb-4 border border-gray-200">
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-bold text-black uppercase tracking-wide">
                                  ¡Tu voto es tu voz! 📢
                                </span>
                                <div className="text-2xl">🎯</div>
                              </div>
                            </div>
                            
                            <div className={`flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
                              {isLeft ? (
                                <>
                                  <span className="text-sm font-black text-black uppercase mr-3">
                                    ¡EL MOMENTO ES AHORA!
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="text-sm font-black text-black uppercase">
                                    ¡EL MOMENTO ES AHORA!
                                  </span>
                                </>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ) : (
                      // Diseño normal para otros eventos
                      <Card 
                        className={`
                          ${colors.bg} ${colors.border} border-2 
                          shadow-xl hover:shadow-2xl
                          transition-all duration-500
                          ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
                          hover:-translate-y-2
                          group
                        `}
                        style={{ 
                          transitionDelay: `${index * 200}ms`
                        }}
                      >
                        <CardContent className="p-6">
                          <div className={`flex items-center mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                            {isLeft ? (
                              <>
                                <time className="text-sm font-semibold text-gray-600 uppercase mr-2">
                                  {event.date}
                                </time>
                                <Calendar className="h-5 w-5 text-gray-600" />
                              </>
                            ) : (
                              <>
                                <Calendar className="h-5 w-5 text-gray-600 mr-2" />
                                <time className="text-sm font-semibold text-gray-600 uppercase">
                                  {event.date}
                                </time>
                              </>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-gray-700 leading-relaxed">
                            {event.description}
                          </p>
                          
                          <div className={`mt-4 flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
                            {isLeft ? (
                              <>
                                <span className="text-xs font-medium text-gray-600 uppercase mr-2">
                                  {status === 'completed' ? 'Ejecutado' : 
                                   status === 'upcoming' ? 'Próximo' : 'Por Ejecutar'}
                                </span>
                                <div className={`w-2 h-2 ${colors.dot} rounded-full`} />
                              </>
                            ) : (
                              <>
                                <div className={`w-2 h-2 ${colors.dot} rounded-full mr-2`} />
                                <span className="text-xs font-medium text-gray-600 uppercase">
                                  {status === 'completed' ? 'Ejecutado' : 
                                   status === 'upcoming' ? 'Próximo' : 'Futuro'}
                                </span>
                              </>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>        {/* Indicador de progreso */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-[#de2488]/5 via-white to-[#00cfaf]/5 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-[#de2488]/20">
            <div className="w-3 h-3 bg-gradient-to-r from-[#de2488] to-[#00cfaf] rounded-full mr-3 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-[#de2488] to-[#00cfaf] bg-clip-text text-transparent">
              Progreso del cronograma electoral
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
