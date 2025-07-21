"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { proposalsData, Plan } from "@/data/proposals";

interface LampDemoProps {
  onPlanClick?: (plan: Plan) => void;
}

// Mapeo de imágenes de fondo para cada eje
const backgroundImages = {
  "reactivacion-economica": "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)",
  "energia-hidrocarburos": "linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(251, 191, 36, 0.1) 100%)",
  "bosques-crisis-ambiental": "linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(22, 163, 74, 0.1) 100%)",
  "transformacion-educativa": "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)",
  "justicia": "linear-gradient(135deg, rgba(168, 85, 247, 0.2) 0%, rgba(147, 51, 234, 0.1) 100%)",
  "salud": "linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(219, 39, 119, 0.1) 100%)"
};

export function LampDemo({ onPlanClick }: LampDemoProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % proposalsData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + proposalsData.length) % proposalsData.length);
  };

  return (
    <LampContainer>
      <div className="flex flex-col items-center justify-center py-4 md:py-8">
        <motion.h2
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-2 md:py-4 bg-clip-text text-center text-3xl md:text-4xl lg:text-6xl font-medium tracking-tight text-white mb-6 md:mb-8"
        >
         EJES PRINCIPALES
        </motion.h2>

        {/* Tarjetas de ejes principales */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.6,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full max-w-7xl mx-auto px-3 md:px-6"
        >
          {/* Vista de slider para móviles */}
          <div className="block md:hidden">
            <div className="relative">
              {/* Botones de navegación */}
              <div className="flex justify-center mb-4 space-x-4">
                <button
                  onClick={prevSlide}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  ←
                </button>
                <span className="text-white/70 text-sm flex items-center">
                  {currentSlide + 1} / {proposalsData.length}
                </span>
                <button
                  onClick={nextSlide}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                >
                  →
                </button>
              </div>

              {/* Slider */}
              <div className="overflow-hidden">
                <motion.div
                  className="flex"
                  animate={{ x: -currentSlide * 100 + "%" }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {proposalsData.map((plan, index) => (
                    <div key={plan.id} className="w-full flex-shrink-0 px-2">
                      <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        onClick={() => onPlanClick?.(plan)}
                        className="relative overflow-hidden bg-white/10 backdrop-blur-md rounded-xl p-4 cursor-pointer group border border-white/20 hover:border-white/40 transition-all duration-300 h-60 mx-auto max-w-sm"
                        style={{
                          background: backgroundImages[plan.id as keyof typeof backgroundImages] || "rgba(255, 255, 255, 0.1)"
                        }}
                      >
                        {/* Overlay con patrón */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-50" />
                        
                        {/* Contenido de la tarjeta */}
                        <div className="relative z-10 h-full flex flex-col justify-between text-center">
                          <div className="flex-1 flex flex-col justify-center items-center">
                            <motion.div 
                              className="text-4xl mb-3"
                              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                              transition={{ duration: 0.5 }}
                            >
                              {plan.icon}
                            </motion.div>
                            
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-tight px-1">
                              {plan.name}
                            </h3>
                          </div>
                          
                          <div className="space-y-1">
                            <div className="text-white/70 text-sm font-medium">
                              {plan.subplans.length} sub-ejes disponibles
                            </div>

                            <div className="text-white/50 text-xs">
                              {plan.subplans.reduce((acc, subplan) => acc + subplan.propuestas.length, 0)} propuestas totales
                            </div>

                            {/* Indicador de acción */}
                            <div className="pt-1">
                              <div className="bg-white/20 text-white text-xs px-3 py-1 rounded-full inline-block group-hover:bg-white/30 transition-colors">
                                Explorar →
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Efecto de brillo en hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                      </motion.div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Indicadores de puntos */}
              <div className="flex justify-center mt-4 space-x-2">
                {proposalsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Vista de grid para desktop */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {proposalsData.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.0, }}
                  onClick={() => onPlanClick?.(plan)}
                  className="relative overflow-hidden bg-white/10 backdrop-blur-md rounded-xl p-4 cursor-pointer group border border-white/20 hover:border-white/40 transition-all duration-300 w-full max-w-sm h-56"
                  style={{
                    background: backgroundImages[plan.id as keyof typeof backgroundImages] || "rgba(255, 255, 255, 0.1)"
                  }}
                >
                  {/* Overlay con patrón */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10 opacity-50" />
                  
                  {/* Contenido de la tarjeta */}
                  <div className="relative z-10 h-full flex flex-col justify-between text-center">
                    <div className="flex-1 flex flex-col justify-center items-center">
                      <motion.div 
                        className="text-4xl mb-3"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {plan.icon}
                      </motion.div>
                      
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors leading-tight px-1">
                        {plan.name}
                      </h3>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-white/70 text-sm font-medium">
                        {plan.subplans.length} sub-ejes disponibles
                      </div>

                      <div className="text-white/50 text-xs">
                        {plan.subplans.reduce((acc, subplan) => acc + subplan.propuestas.length, 0)} propuestas totales
                      </div>

                      {/* Indicador de acción */}
                      <div className="pt-1">
                        <div className="bg-white/20 text-white text-xs px-3 py-1 rounded-full inline-block group-hover:bg-white/30 transition-colors">
                          Explorar →
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </LampContainer>
  );
}
