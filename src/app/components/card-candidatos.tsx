'use client';

import Image from 'next/image';

import { User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import Modal from '@/components/ui/modal';
import BiografiaCandidato from '@/components/biografia-candidato';
import { perfilesCandidatos, PerfilCandidato } from '@/data/perfiles-candidatos';

// Datos de los finalistas de segunda vuelta
const finalistasSegundaVuelta = [
  {
    partido: "LIBRE",
    nombreCompleto: "Alianza Libertad y Democracia",
    presidente: "Jorge Tuto Quiroga",
    vicepresidente: "Juan Pablo Velasco",
    color: "#ff0000",
    gradiente: "from-red-600 via-red-700 to-red-800",
    imagenPresidente: "/binomios/fri/presidente.png",
    imagenVicepresidente: "/binomios/fri/vicepresidente.png",
    slug: "libre"
  },
  {
    partido: "PDC",
    nombreCompleto: "Partido Demócrata Cristiano",
    presidente: "Rodrigo Paz Pereira",
    vicepresidente: "Edman Lara Montaño",
    color: "#f83728",
    gradiente: "from-red-500 via-orange-600 to-red-700",
    imagenPresidente: "/binomios/pdc/presidente.png",
    imagenVicepresidente: "/binomios/pdc/vicepresidente.png",
    slug: "pdc"
  }
];

export function CardCandidatos() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    candidato: PerfilCandidato | null;
    tipo: 'presidente' | 'vicepresidente' | null;
    partidoSlug: string | null;
  }>({
    isOpen: false,
    candidato: null,
    tipo: null,
    partidoSlug: null
  });

  const openModal = (candidato: PerfilCandidato, tipo: 'presidente' | 'vicepresidente', partidoSlug: string) => {
    setModalState({
      isOpen: true,
      candidato,
      tipo,
      partidoSlug
    });
  };

  const closeModal = () => {
    setModalState({
      isOpen: false,
      candidato: null,
      tipo: null,
      partidoSlug: null
    });
  };

  // Función para obtener el perfil del candidato
  const getPerfilCandidato = (partidoSlug: string, tipo: 'presidente' | 'vicepresidente'): PerfilCandidato | null => {
    const perfilPartido = perfilesCandidatos.find(p => p.partido.slug === partidoSlug);
    if (perfilPartido) {
      return tipo === 'presidente' ? perfilPartido.presidente : perfilPartido.vicepresidente;
    }
    return null;
  };

  // Función para obtener el color del partido
  const getPartidoColor = (partidoSlug: string): string => {
    const candidato = finalistasSegundaVuelta.find(c => c.slug === partidoSlug);
    return candidato?.color || '#3B82F6';
  };

  return (
    <div className="w-full">


      {/* Contenedor principal de candidatos */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {finalistasSegundaVuelta.map((candidato) => (
            <div
              key={candidato.partido}
              className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 ${
                candidato.partido === 'PDC' 
                  ? 'bg-cover bg-center bg-no-repeat' 
                  : `bg-gradient-to-br ${candidato.gradiente}`
              }`}
              style={candidato.partido === 'PDC' ? {
                backgroundImage: 'url(/images/pdc-bg.png)'
              } : {}}
            >
              {/* Efectos decorativos */}
              <div className={`absolute inset-0 ${candidato.partido === 'PDC' ? 'bg-black/30' : 'bg-black/20'}`}></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 p-6 md:p-8">
                {/* Header del partido */}
                <div className="text-center mb-8">
                  <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                    {candidato.partido}
                  </h4>
                  <p className="text-base md:text-lg text-white/90 font-medium">
                    {candidato.nombreCompleto}
                  </p>
                </div>

                {/* Grid de candidatos */}
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  {/* Presidente */}
                  <div className="text-center group">
                    <div className="relative mb-4">
                      <div className="relative w-full h-56 md:h-72 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                        <Image
                          src={candidato.imagenPresidente}
                          alt={candidato.presidente}
                          fill
                          className="object-cover object-top"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/logo3.svg';
                          }}
                        />
                        
                        {/* Overlay con información */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                          <h5 className="text-sm md:text-lg font-bold text-white mb-2 drop-shadow-lg leading-tight">
                            {candidato.presidente}
                          </h5>
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0 text-xs md:text-sm font-bold px-2 md:px-3 py-1 shadow-xl mb-2">
                            PRESIDENTE
                          </Badge>
                          <div>
                            <button
                              onClick={() => {
                                const perfil = getPerfilCandidato(candidato.slug, 'presidente');
                                if (perfil) {
                                  openModal(perfil, 'presidente', candidato.slug);
                                }
                              }}
                              className="inline-flex items-center space-x-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-2 md:px-3 py-1 md:py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-xl border border-white/30 text-xs md:text-sm"
                            >
                              <User className="w-3 h-3 md:w-4 md:h-4" />
                              <span>Ver Perfil</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vicepresidente */}
                  <div className="text-center group">
                    <div className="relative mb-4">
                      <div className="relative w-full h-56 md:h-72 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                        <Image
                          src={candidato.imagenVicepresidente}
                          alt={candidato.vicepresidente}
                          fill
                          className="object-cover object-top"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/logo3.svg';
                          }}
                        />
                        
                        {/* Overlay con información */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                          <h5 className="text-sm md:text-lg font-bold text-white mb-2 drop-shadow-lg leading-tight">
                            {candidato.vicepresidente}
                          </h5>
                          <Badge className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-0 text-xs md:text-sm font-bold px-2 md:px-3 py-1 shadow-xl mb-2">
                            VICEPRESIDENTE
                          </Badge>
                          <div>
                            <button
                              onClick={() => {
                                const perfil = getPerfilCandidato(candidato.slug, 'vicepresidente');
                                if (perfil) {
                                  openModal(perfil, 'vicepresidente', candidato.slug);
                                }
                              }}
                              className="inline-flex items-center space-x-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-2 md:px-3 py-1 md:py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-xl border border-white/30 text-xs md:text-sm"
                            >
                              <User className="w-3 h-3 md:w-4 md:h-4" />
                              <span>Ver Perfil</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de biografía */}
      <Modal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.candidato ? `Biografía de ${modalState.candidato.nombre}` : ''}
        maxWidth="4xl"
      >
        {modalState.candidato && modalState.partidoSlug && (
          <BiografiaCandidato
            candidato={modalState.candidato}
            partidoColor={getPartidoColor(modalState.partidoSlug)}
          />
        )}
      </Modal>

      
    </div>
  );
}
