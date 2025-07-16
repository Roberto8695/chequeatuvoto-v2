"use client";

import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import Image from "next/image";
import { Partido } from "@/data/proposals";
import { partidosPoliticos } from "@/data/partidos-politicos";

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
  // Función auxiliar para obtener las imágenes de candidatos
  const getPartidoImages = (partidoId: string) => {
    const partidoCompleto = partidosPoliticos.find(p => p.slug === partidoId);
    return partidoCompleto?.imagenes || null;
  };

  const images = getPartidoImages(partido.id);

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
              <p className="text-white text-xs font-medium">Presidente</p>
              <p className="text-white/80 text-xs">{partido.president}</p>
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
              <p className="text-white text-xs font-medium">Vicepresidente</p>
              <p className="text-white/80 text-xs">{partido.vicepresident}</p>
            </div>
          </div>
        </div>

        {/* Proposal */}
        <div className="flex-1">
          <h4 className="text-white text-sm font-medium mb-2">Propuesta:</h4>
          {propuesta ? (
            <p className="text-white/90 text-xs leading-relaxed line-clamp-4">
              {propuesta}
            </p>
          ) : (
            <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-white/10">
              <p className="text-white/60 text-xs font-medium">
                No hay propuesta disponible
              </p>
            </div>
          )}
        </div>
      </div>

      
    </div>
  );
}

export default PartidoPropuestaCard;
