"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
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
  

  // Detectar si es dispositivo móvil
  useEffect(() => {
   

  
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 ${className}`}>
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Partículas decorativas */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
      
      
      <div className="relative z-10 p-6 h-full flex flex-col">
        {/* Header con logo y candidatos */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo del partido */}
          <div className="relative flex-shrink-0">
            <div 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl p-3 shadow-lg transition-transform duration-300 group-hover:scale-105 bg-white/90 backdrop-blur-sm"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image
                  src={partido.logo}
                  alt={`Logo ${partido.shortName}`}
                  width={60}
                  height={60}
                  className="object-contain filter drop-shadow-sm"
                />
              </div>
            </div>
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
              style={{ backgroundColor: partido.color || '#3B82F6' }}
            ></div>
          </div>
          
          {/* Candidatos a la derecha */}
          <div className="flex-1 min-w-0 space-y-1 -mt-1">
            {/* Presidente */}
            <div>
              <span className="text-xs font-semibold text-yellow-300 uppercase tracking-wider">
                Presidente
              </span>
              <p className="text-sm font-medium text-white leading-tight">
                {partido.president}
              </p>
            </div>

            {/* Vicepresidente */}
            <div>
              <span className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
                Vicepresidente
              </span>
              <p className="text-sm font-medium text-white leading-tight">
                {partido.vicepresident}
              </p>
            </div>
          </div>
        </div>

        {/* Nombre del partido */}
        <div className="mb-4">
          <h2 className="text-lg sm:text-xl font-bold text-white mb-1">
            {partido.shortName}
          </h2>
          
        </div>

        {/* Propuesta */}
        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Propuesta
            </h4>
          </div>
          
          <div className="flex-1 flex flex-col justify-between">
            {propuesta ? (
              <>
                {/* Vista móvil: Botón */}
                <div className="sm:hidden">
                  <button
                    onClick={handleOpenModal}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      Ver propuesta completa
                    </div>
                  </button>
                </div>

                {/* Vista desktop: Texto */}
                <div className="hidden sm:block">
                  <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10 backdrop-blur-sm mb-3">
                    <p className="text-white/90 text-xs leading-relaxed line-clamp-3">
                      {propuesta}
                    </p>
                  </div>
                  <button
                    onClick={handleOpenModal}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 text-sm"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Eye className="w-4 h-4" />
                      Ver completa
                    </div>
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-slate-800/30 rounded-lg p-4 border border-white/5 backdrop-blur-sm text-center">
                <div className="text-white/40 mb-2">
                  <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <p className="text-white/60 text-xs font-medium">
                  Propuesta no disponible
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Información próximamente
                </p>
              </div>
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