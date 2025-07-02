'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getPartidoBySlug, PartidoPolitico } from '@/data/partidos-politicos';
import { Badge } from '@/components/ui/badge';

interface SectionCandidatosProps {
  slug: string;
}

export default function SectionCandidatos({ slug }: SectionCandidatosProps) {
  const [partido, setPartido] = useState<PartidoPolitico | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const partidoData = getPartidoBySlug(slug);
    if (partidoData) {
      setPartido(partidoData);
    }
    setIsLoading(false);
    
    // Animar entrada después de cargar
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!partido) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Partido no encontrado</h1>
          <p className="text-gray-600">El partido político solicitado no existe.</p>
        </div>
      </div>
    );
  }

  const gradientStyle = {
    background: `linear-gradient(135deg, ${partido.colores?.primary || '#3B82F6'} 0%, ${partido.colores?.secondary || '#1E40AF'} 100%)`,
  };

  return (
    <div 
      className="h-screen relative  overflow-hidden flex flex-col"
      style={gradientStyle}
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10"></div>
      
      {/* Formas decorativas animadas */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
      <div className="absolute top-1/4 right-20 w-16 h-16 bg-white/15 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/25 rounded-full animate-pulse delay-700"></div>
      
      {/* Contenido principal */}
      <div className={`relative -mt-3 z-10 container mx-auto px-4 py-4 flex-1 flex flex-col justify-center transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Header con nombre del partido */}
        <div className={`text-center mb-4 sm:mb-6 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-1">
            {partido.sigla}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-4xl mx-auto leading-relaxed px-4">
            {partido.nombre}
          </p>
        </div>

        {/* Fila principal: Presidente, Logo, Vicepresidente */}
        <div className={`max-w-full mx-auto transition-all duration-1000 delay-400 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-end px-4 sm:px-0">
            
            {/* Presidente */}
            <div className="group text-center order-2 sm:order-1">
              <div className="relative">
              {/* Foto del presidente sin marco circular */}
              <div className="relative w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 lg:w-64 lg:h-96 mx-auto overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                <Image
                src={partido.imagenes.presidente}
                alt={partido.presidente}
                fill
                className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/public/logo.svg'; // Fallback
                }}
                />
                
                {/* Nombre del presidente y badge dentro de la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">
                  {partido.presidente}
                </h2>
                
                <div className="flex justify-center">
                  <Badge className="bg-white/30 backdrop-blur-sm text-white border-0 text-xs sm:text-sm font-bold px-3 py-1 shadow-lg">
                  PRESIDENTE
                  </Badge>
                </div>
                </div>
              </div>
              </div>
            </div>

            {/* Logo del partido - centro - más grande */}
            <div className="group text-center order-1 sm:order-2">
              <div className="relative w-52 h-68 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-90 mx-auto overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 rounded-2xl bg-white/20 backdrop-blur-sm">
                <Image
                  src={partido.imagenes.logo}
                  alt={`Logo ${partido.nombre}`}
                  fill
                  className="object-contain p-4 sm:p-6 md:p-8"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/public/logo.svg'; // Fallback
                  }}
                />
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Vicepresidente */}
            <div className="group text-center order-3 sm:order-3">
              <div className="relative">
              {/* Foto del vicepresidente sin marco circular */}
              <div className="relative w-40 h-56 sm:w-44 sm:h-60 md:w-48 md:h-64 lg:w-64 lg:h-96 mx-auto overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10"></div>
                <Image
                src={partido.imagenes.vicepresidente}
                alt={partido.vicepresidente}
                fill
                className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/public/logo.svg'; // Fallback
                }}
                />
                
                {/* Nombre del vicepresidente y badge dentro de la imagen */}
                <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg">
                  {partido.vicepresidente}
                </h2>
                
                <div className="flex justify-center">
                  <Badge className="bg-white/30 backdrop-blur-sm text-white border-0 text-xs sm:text-sm font-bold px-3 py-1 shadow-lg">
                  VICEPRESIDENTE
                  </Badge>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional - muy compacta */}
        {(partido.descripcion || partido.sitioWeb) && (
          <div className={`text-center mt-3 transition-all duration-1000 delay-600 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {partido.descripcion && (
              <p className="text-white/80 text-xs max-w-xl mx-auto mb-2 leading-relaxed">
                {partido.descripcion}
              </p>
            )}
            {partido.sitioWeb && (
              <a
                href={partido.sitioWeb}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-medium px-3 py-1 rounded-full transition-all duration-300 hover:scale-105 shadow-lg text-xs"
              >
                <span>Sitio web</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Botón de regreso */}
      <div className="absolute top-8 left-8 z-20">
        <button
          onClick={() => window.history.back()}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}