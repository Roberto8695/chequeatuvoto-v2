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
      className="min-h-screen relative overflow-hidden"
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
      <div className={`relative z-10 container mx-auto px-4 py-16 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Header con logo y nombre del partido */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-col items-center space-y-6">
            {/* Logo del partido */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/20 backdrop-blur-sm p-4 shadow-2xl hover:scale-110 transition-transform duration-300">
              <Image
                src={partido.imagenes.logo}
                alt={`Logo ${partido.nombre}`}
                fill
                className="object-contain p-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/public/logo.svg'; // Fallback
                }}
              />
            </div>
            
            {/* Nombre y sigla */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                {partido.sigla}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {partido.nombre}
              </p>
            </div>
          </div>
        </div>

        {/* Binomio presidencial */}
        <div className={`max-w-6xl mx-auto transition-all duration-1000 delay-400 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid md:grid-cols-2 gap-8 md:gap-16">
            
            {/* Presidente */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-semibold px-4 py-2">
                    PRESIDENTE
                  </Badge>
                  
                  {/* Foto del presidente */}
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/30 group-hover:ring-white/50 transition-all duration-300">
                    <Image
                      src={partido.imagenes.presidente}
                      alt={partido.presidente}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/public/logo.svg'; // Fallback
                      }}
                    />
                  </div>
                  
                  {/* Nombre del presidente */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {partido.presidente}
                  </h2>
                  <p className="text-white/80 text-lg">
                    Candidato a Presidente
                  </p>
                </div>
              </div>
            </div>

            {/* Vicepresidente */}
            <div className="group">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-center">
                  <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm font-semibold px-4 py-2">
                    VICEPRESIDENTE
                  </Badge>
                  
                  {/* Foto del vicepresidente */}
                  <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/30 group-hover:ring-white/50 transition-all duration-300">
                    <Image
                      src={partido.imagenes.vicepresidente}
                      alt={partido.vicepresidente}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/public/logo.svg'; // Fallback
                      }}
                    />
                  </div>
                  
                  {/* Nombre del vicepresidente */}
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {partido.vicepresidente}
                  </h2>
                  <p className="text-white/80 text-lg">
                    Candidato a Vicepresidente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional */}
        {partido.descripcion && (
          <div className={`max-w-4xl mx-auto mt-16 transition-all duration-1000 delay-600 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">
                Acerca del Partido
              </h3>
              <p className="text-white/90 text-center leading-relaxed text-lg">
                {partido.descripcion}
              </p>
            </div>
          </div>
        )}

        {/* Sitio web */}
        {partido.sitioWeb && (
          <div className={`text-center mt-12 transition-all duration-1000 delay-800 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <a
              href={partido.sitioWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Visitar sitio web oficial</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
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