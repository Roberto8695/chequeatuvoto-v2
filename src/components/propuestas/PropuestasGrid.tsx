import React from "react";
import { motion } from "framer-motion";
import { PartidoPropuestaCard } from "./PartidoPropuestaCard";
import { partidos } from "@/data/proposals";

interface PropuestasGridProps {
  propuestas: {
    partidoId: string;
    propuesta: string | null;
  }[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function PropuestasGrid({ 
  propuestas, 
  title, 
  subtitle, 
  className = "" 
}: PropuestasGridProps) {
  const getPartidoById = (id: string) => {
    return partidos.find(p => p.id === id);
  };

  const partidosConPropuestas = propuestas.map(propuesta => {
    const partido = getPartidoById(propuesta.partidoId);
    return {
      ...propuesta,
      partido
    };
  }).filter(item => item.partido); // Filtramos solo los partidos válidos

  return (
    <div className={`min-h-screen bg-slate-900 p-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {title && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Grid de propuestas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {partidosConPropuestas.map((item, index) => (
            <motion.div
              key={item.partidoId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PartidoPropuestaCard
                partido={item.partido!}
                propuesta={item.propuesta}
                className="h-full max-w-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Mensaje cuando no hay propuestas */}
        {partidosConPropuestas.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center py-16"
          >
            <div className="bg-slate-800 rounded-lg p-8 max-w-md mx-auto border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                No hay propuestas disponibles
              </h3>
              <p className="text-white/80">
                Aún no se han cargado propuestas para este tema.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default PropuestasGrid;
