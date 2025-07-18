"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Eye} from "lucide-react";
import { Partido } from "@/data/proposals";
import { PropuestaModal } from "./PropuestaModal";

interface PartidoPropuestaCardProps {
  partido: Partido;
  propuesta: string | null;
  className?: string;
}

export function PartidoPropuestaCard({ 
  partido, 
  propuesta, 
  className = "" 
}: PartidoPropuestaCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`group relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-3xl hover:scale-[1.02] overflow-hidden ${className}`}>
      {/* Fondo decorativo con gradiente del color del partido */}
      <div 
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${partido.color}20 0%, transparent 70%)`
        }}
      />
      
      {/* Borde superior con color del partido */}
      <div 
        className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
        style={{ backgroundColor: partido.color }}
      />

      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header con Logo y Candidatos */}
        <div className="flex items-start mb-4">
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm p-2 ring-2 ring-white/20 group-hover:ring-white/30 transition-all duration-300">
              <Image
                src={partido.logo}
                alt={`Logo ${partido.shortName}`}
                width={48}
                height={48}
                className="w-full h-full object-contain"
              />
            </div>
            {/* Indicator dot */}
            <div 
              className="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-slate-900"
              style={{ backgroundColor: partido.color }}
            />
          </div>
          
          {/* Candidatos al lado del logo */}
          <div className="ml-4 flex-1">
            <div className="space-y-2">
              <div>
                <p className="text-xs font-medium text-white/70 uppercase tracking-wider">
                  Presidente
                </p>
                <p className="text-xs font-semibold text-white">
                  {partido.president}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-white/70 uppercase tracking-wider">
                  Vicepresidente
                </p>
                <p className="text-xs font-semibold text-white">
                  {partido.vicepresident}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nombre del Partido */}
        <div className="mb-4 text-left">
          <h2 className="text-xl font-bold text-white mb-1 group-hover:text-white/90 transition-colors">
            {partido.shortName}
          </h2>
          <p className="text-white/60 text-xs font-medium">
            {partido.name}
          </p>
        </div>

        {/* Propuestas */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center mb-3">
            <div className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: partido.color }} />
            <h4 className="text-white text-sm font-semibold uppercase tracking-wider">
              Propuestas
            </h4>
          </div>
          
          <div className="flex-1 flex flex-col justify-end">
            {isMobile ? (
              // Vista móvil: Solo botón
              <button
                onClick={handleOpenModal}
                className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02] ${
                  propuesta 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg' 
                    : 'bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-white/80 shadow-lg'
                }`}
              >
                <div className="flex items-center justify-center">
                  <Eye className="w-4 h-4 mr-2" />
                  {propuesta ? 'Ver propuesta completa' : 'No hay propuestas disponibles'}
                </div>
              </button>
            ) : (
              // Vista desktop: Mostrar propuesta completa
              propuesta ? (
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 backdrop-blur-sm">
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-4">
                    {propuesta}
                  </p>
                  <div className="mt-2 flex justify-end">
                    <button
                      onClick={handleOpenModal}
                      className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Ver completa →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20 text-center">
                  <p className="text-red-400 text-sm font-medium">
                    No hay propuesta disponible
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* Modal para propuestas */}
      <PropuestaModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        partido={partido}
        propuesta={propuesta}
      />
    </div>
  );
}

export default PartidoPropuestaCard;
