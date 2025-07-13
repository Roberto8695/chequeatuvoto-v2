'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { User } from 'lucide-react';
import { getPartidoBySlug, PartidoPolitico } from '@/data/partidos-politicos';
import { perfilesCandidatos, PerfilCandidato } from '@/data/perfiles-candidatos';
import { Badge } from '@/components/ui/badge';
import Modal from '@/components/ui/modal';
import BiografiaCandidato from '@/components/biografia-candidato';

interface SectionCandidatosProps {
  slug: string;
}

export default function SectionCandidatos({ slug }: SectionCandidatosProps) {
  const searchParams = useSearchParams();
  const [partido, setPartido] = useState<PartidoPolitico | null>(null);
  const [perfiles, setPerfiles] = useState<{ presidente: PerfilCandidato | null, vicepresidente: PerfilCandidato | null }>({
    presidente: null,
    vicepresidente: null
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    candidato: PerfilCandidato | null;
    tipo: 'presidente' | 'vicepresidente' | null;
  }>({
    isOpen: false,
    candidato: null,
    tipo: null
  });

  useEffect(() => {
    const partidoData = getPartidoBySlug(slug);
    if (partidoData) {
      setPartido(partidoData);
      
      // Buscar perfiles de candidatos
      const perfilPartido = perfilesCandidatos.find(p => p.partido.slug === slug);
      if (perfilPartido) {
        setPerfiles({
          presidente: perfilPartido.presidente,
          vicepresidente: perfilPartido.vicepresidente
        });
      }
    }
    setIsLoading(false);
    
    // Animar entrada después de cargar
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [slug]);

  // Efecto para manejar la navegación hacia atrás
  useEffect(() => {
    const fromParties = searchParams.get('from') === 'parties';
    
    // Marcar que esta página viene de parties
    if (fromParties) {
      localStorage.setItem('candidatePageFromParties', 'true');
      localStorage.setItem('currentCandidatePage', window.location.href);
    }

    const handleVisibilityChange = () => {
      // Cuando la página se vuelve visible después de estar oculta,
      // verificar si debe ir a parties
      if (document.visibilityState === 'visible') {
        const shouldGoToParties = localStorage.getItem('shouldReturnToParties');
        if (shouldGoToParties) {
          localStorage.removeItem('shouldReturnToParties');
          localStorage.removeItem('candidatePageFromParties');
          localStorage.removeItem('currentCandidatePage');
          window.location.href = '/#parties';
        }
      }
    };

    const handlePageHide = () => {
      // Cuando la página se oculta (navegación hacia atrás en móvil),
      // marcar que debe ir a parties si viene de allí
      const fromPartiesStored = localStorage.getItem('candidatePageFromParties');
      if (fromPartiesStored === 'true') {
        localStorage.setItem('shouldReturnToParties', 'true');
      }
    };

    const handlePopState = () => {
      // Para navegación con botón atrás del navegador
      const fromPartiesStored = localStorage.getItem('candidatePageFromParties');
      if (fromPartiesStored === 'true') {
        localStorage.removeItem('candidatePageFromParties');
        localStorage.removeItem('currentCandidatePage');
        window.location.href = '/#parties';
      }
    };

    // Eventos para diferentes tipos de navegación
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [searchParams]);

  // Efecto de limpieza al desmontar el componente
  useEffect(() => {
    return () => {
      // Limpiar localStorage cuando el componente se desmonte normalmente
      const currentPage = localStorage.getItem('currentCandidatePage');
      if (currentPage === window.location.href) {
        localStorage.removeItem('candidatePageFromParties');
        localStorage.removeItem('currentCandidatePage');
      }
    };
  }, []);

  const openModal = (candidato: PerfilCandidato, tipo: 'presidente' | 'vicepresidente') => {
    setModalState({
      isOpen: true,
      candidato,
      tipo
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      candidato: null,
      tipo: null
    });
  };

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
      className="min-h-screen relative overflow-hidden flex flex-col pt-2 xs:pt-15 sm:pt-18 lg:pt-0"
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
      <div className={`relative z-10 container mx-auto px-4 py-2 flex-1 flex flex-col justify-center transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Header con nombre del partido - optimizado para móvil */}
        <div className={`text-center mb-2 sm:mb-3 md:mb-4 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg mb-1 px-2">
            {partido.sigla}
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-white/90 max-w-4xl mx-auto leading-relaxed px-3 sm:px-4">
            {partido.nombre}
          </p>
        </div>

        {/* Fila principal: Layout móvil vertical optimizado */}
        <div className={`max-w-full mx-auto transition-all duration-1000 delay-400 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Layout móvil: vertical centrado */}
          <div className="sm:hidden flex flex-col items-center space-y-3">
            {/* Presidente - arriba */}
            <div className="group text-center">
              <div className="relative">
                {/* Foto del presidente optimizada para móvil */}
                <div className="relative w-36 h-48 xs:w-40 xs:h-52 mx-auto overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 rounded-2xl"></div>
                  <Image
                    src={partido.imagenes.presidente}
                    alt={partido.presidente}
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/logo3.svg'; // Fallback mejorado
                    }}
                  />
                  
                  {/* Nombre del presidente y badge dentro de la imagen */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 z-20 rounded-b-2xl">
                    <h2 className="text-sm xs:text-base font-bold text-white mb-1 drop-shadow-lg leading-tight">
                      {partido.presidente}
                    </h2>
                    
                    <div className="flex flex-col items-center space-y-1">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0 text-xs font-bold px-2 xs:px-3 py-1 shadow-xl animate-pulse">
                        PRESIDENTE
                      </Badge>
                      
                      {/* Botón de biografía optimizado */}
                      {perfiles.presidente && (
                        <button
                          onClick={() => openModal(perfiles.presidente!, 'presidente')}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-2 xs:px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-1 border-2 border-white/30"
                        >
                          <User className="w-3 h-3" />
                          <span>Ver Perfil</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo del partido - centro */}
            <div className="group text-center">
              <div className="relative w-32 h-40 xs:w-36 xs:h-44 mx-auto overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 rounded-2xl bg-white/20 backdrop-blur-sm">
                <Image
                  src={partido.imagenes.logo}
                  alt={`Logo ${partido.nombre}`}
                  fill
                  className="object-contain p-3 xs:p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/logo3.svg'; // Fallback mejorado
                  }}
                />
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Vicepresidente - abajo */}
            <div className="group text-center">
              <div className="relative">
                {/* Foto del vicepresidente optimizada para móvil */}
                <div className="relative w-36 h-48 xs:w-40 xs:h-52 mx-auto overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                  <Image
                    src={partido.imagenes.vicepresidente}
                    alt={partido.vicepresidente}
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/logo3.svg'; // Fallback mejorado
                    }}
                  />
                  
                  {/* Nombre del vicepresidente y badge dentro de la imagen */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 z-20">
                    <h2 className="text-sm xs:text-base font-bold text-white mb-1 drop-shadow-lg leading-tight">
                      {partido.vicepresidente}
                    </h2>
                    
                    <div className="flex flex-col items-center space-y-1">
                      <Badge className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-0 text-xs font-bold px-2 xs:px-3 py-1 shadow-xl animate-pulse">
                        VICEPRESIDENTE
                      </Badge>
                      
                      {/* Botón de biografía optimizado */}
                      {perfiles.vicepresidente && (
                        <button
                          onClick={() => openModal(perfiles.vicepresidente!, 'vicepresidente')}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-2 xs:px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-1 border-2 border-white/30"
                        >
                          <User className="w-3 h-3" />
                          <span>Ver Perfil</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Layout desktop: horizontal (grid de 3 columnas) */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6 items-end px-4 lg:px-0">
            {/* Presidente - desktop */}
            <div className="group text-center">
              <div className="relative">
                {/* Foto del presidente para desktop */}
                <div className="relative w-44 h-60 md:w-48 md:h-64 lg:w-64 lg:h-96 mx-auto overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10 rounded-2xl"></div>
                  <Image
                    src={partido.imagenes.presidente}
                    alt={partido.presidente}
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/logo3.svg'; // Fallback mejorado
                    }}
                  />
                  
                  {/* Nombre del presidente y badge dentro de la imagen - desktop */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-20 rounded-b-2xl">
                    <h2 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg leading-tight">
                      {partido.presidente}
                    </h2>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0 text-sm font-bold px-4 py-2 shadow-xl animate-pulse">
                        PRESIDENTE
                      </Badge>
                      
                      {/* Botón de biografía para desktop */}
                      {perfiles.presidente && (
                        <button
                          onClick={() => openModal(perfiles.presidente!, 'presidente')}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2 border-2 border-white/30"
                        >
                          <User className="w-4 h-4" />
                          <span>Ver Perfil</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo del partido - centro - desktop */}
            <div className="group text-center">
              <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-90 mx-auto overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 rounded-2xl bg-white/20 backdrop-blur-sm">
                <Image
                  src={partido.imagenes.logo}
                  alt={`Logo ${partido.nombre}`}
                  fill
                  className="object-contain p-6 md:p-8"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/logo3.svg'; // Fallback mejorado
                  }}
                />
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
              </div>
            </div>

            {/* Vicepresidente - desktop */}
            <div className="group text-center">
              <div className="relative">
                {/* Foto del vicepresidente para desktop */}
                <div className="relative w-44 h-60 md:w-48 md:h-64 lg:w-64 lg:h-96 mx-auto overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                  <Image
                    src={partido.imagenes.vicepresidente}
                    alt={partido.vicepresidente}
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/logo3.svg'; // Fallback mejorado
                    }}
                  />
                  
                  {/* Nombre del vicepresidente y badge dentro de la imagen - desktop */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 z-20">
                    <h2 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg leading-tight">
                      {partido.vicepresidente}
                    </h2>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <Badge className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-0 text-sm font-bold px-4 py-2 shadow-xl animate-pulse">
                        VICEPRESIDENTE
                      </Badge>
                      
                      {/* Botón de biografía para desktop */}
                      {perfiles.vicepresidente && (
                        <button
                          onClick={() => openModal(perfiles.vicepresidente!, 'vicepresidente')}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2 border-2 border-white/30"
                        >
                          <User className="w-4 h-4" />
                          <span>Ver Perfil</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Información adicional - muy compacta */}
        {(partido.descripcion || partido.sitioWeb) && (
          <div className={`text-center mt-2 transition-all duration-1000 delay-600 transform ${
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

      {/* Botón de regreso - más llamativo y con texto "Volver atrás" */}
      <div className="absolute top-16 xs:top-17 sm:top-20 lg:top-22 left-4 sm:left-8 z-20">
        <button
          onClick={() => {
            window.location.href = '/#parties';
          }}
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white font-bold px-4 py-2 sm:px-5 sm:py-3 rounded-full shadow-2xl border-2 border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-3xl"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-sm sm:text-base drop-shadow-lg">Volver atrás</span>
        </button>
      </div>
      
      {/* Modal de biografía */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.candidato ? `Biografía de ${modalState.candidato.nombre}` : ''}
        maxWidth="4xl"
      >
        {modalState.candidato && (
          <BiografiaCandidato
            candidato={modalState.candidato}
            partidoColor={partido?.colores?.primary}
          />
        )}
      </Modal>
    </div>
  );
}