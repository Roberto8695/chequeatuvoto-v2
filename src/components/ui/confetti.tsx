"use client"

import { useEffect, useState } from 'react'

interface ConfettiPiece {
  id: number
  x: number
  y: number
  color: string
  size: number
  speedX: number
  speedY: number
  rotation: number
  rotationSpeed: number
}

interface ConfettiProps {
  active: boolean
  duration?: number
  particleCount?: number
}

export default function Confetti({ active, duration = 3000, particleCount = 50 }: ConfettiProps) {
  const [particles, setParticles] = useState<ConfettiPiece[]>([])
  const [isVisible, setIsVisible] = useState(false)

  // Colores de Bolivia: rojo, amarillo, verde
  const colors = ['#dc2626', '#fbbf24', '#16a34a', '#dc2626', '#fbbf24', '#16a34a']

  useEffect(() => {
    if (active) {
      setIsVisible(true)
      
      // Crear partículas de confeti
      const newParticles: ConfettiPiece[] = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        speedX: (Math.random() - 0.5) * 4,
        speedY: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      }))

      setParticles(newParticles)

      // Animar partículas
      const animateParticles = () => {
        setParticles(prev => 
          prev.map(particle => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            rotation: particle.rotation + particle.rotationSpeed,
            speedY: particle.speedY + 0.1 // Gravedad
          })).filter(particle => particle.y < window.innerHeight + 20)
        )
      }

      const animationId = setInterval(animateParticles, 16)

      // Limpiar después de la duración especificada
      const timeout = setTimeout(() => {
        setIsVisible(false)
        setParticles([])
        clearInterval(animationId)
      }, duration)

      return () => {
        clearInterval(animationId)
        clearTimeout(timeout)
      }
    }
  }, [active, duration, particleCount])

  if (!isVisible || particles.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
            borderRadius: Math.random() > 0.5 ? '50%' : '2px',
            opacity: 0.8,
            transition: 'opacity 0.3s ease-out'
          }}
        />
      ))}
    </div>
  )
}