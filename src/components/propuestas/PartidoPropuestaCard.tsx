"use client";

import React, { useState, useEffect } from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Partido } from "@/data/proposals";
import { partidosPoliticos } from "@/data/partidos-politicos";
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

  // Función auxiliar para obtener las imágenes de candidatos
  const getPartidoImages = (partidoId: string) => {
    const partidoCompleto = partidosPoliticos.find(p => p.slug === partidoId);
    return partidoCompleto?.imagenes || null;
  };

  const images = getPartidoImages(partido.id);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`border border-white/20 dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg ${className}`}>
      {/* Corner Icons */}
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

      {/* Evervault Card with Party Logo */}
      <div className="relative">
        <EvervaultCard 
          imageSrc={partido.logo} 
          imageAlt={`Logo ${partido.shortName}`}
          customColor={partido.color}
          customText={partido.shortName}
        />
      </div>

      {/* Party Information */}
      <div className="flex-1 mt-4 w-full">
        {/* Party Name */}
        <h2 className="dark:text-white text-white text-lg font-semibold mb-2">
          {partido.shortName}
        </h2>
        
        {/* Full Party Name */}
        <h3 className="dark:text-white/80 text-white/80 text-sm font-light mb-3">
          {partido.name}
        </h3>

        {/* Candidates */}
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 rounded-full mr-2 relative overflow-hidden bg-slate-700">
              <Image
                src={images?.presidente || "/placeholder-candidate.png"}
                alt={partido.president}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Presidente</p>
              <p className="text-white/80 text-sm">{partido.president}</p>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full mr-2 relative overflow-hidden bg-slate-700">
              <Image
                src={images?.vicepresidente || "/placeholder-candidate.png"}
                alt={partido.vicepresident}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-white text-sm font-medium">Vicepresidente</p>
              <p className="text-white/80 text-sm">{partido.vicepresident}</p>
            </div>
          </div>
        </div>

        {/* Proposal */}
        <div className="flex-1">
          <h4 className="text-white text-sm font-medium mb-2">Propuesta:</h4>
          
          {isMobile ? (
            // Vista móvil: Solo botón
            <button
              onClick={handleOpenModal}
              className={`w-full px-4 py-3 rounded-lg font-medium transition-colors ${
                propuesta 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-slate-700 hover:bg-slate-600 text-white/80'
              }`}
            >
              <div className="flex items-center justify-center">
                <Eye className="w-4 h-4 mr-2" />
                {propuesta ? 'Ver propuesta' : 'No hay propuestas disponibles'}
              </div>
            </button>
          ) : (
            // Vista desktop: Mostrar propuesta completa
            propuesta ? (
              <p className="text-white/90 text-xs leading-relaxed line-clamp-4">
                {propuesta}
              </p>
            ) : (
              <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-white/10">
                <p className="text-white/60 text-xs font-medium">
                  No hay propuesta disponible
                </p>
              </div>
            )
          )}
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
