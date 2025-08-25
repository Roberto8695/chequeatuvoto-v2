"use client";

import Image from 'next/image';
import Link from 'next/link';
import { User } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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
    vicepresidente: "Edman Lara",
    color: "#f83728",
    gradiente: "from-red-500 via-orange-600 to-red-700",
    imagenPresidente: "/binomios/pdc/presidente.png",
    imagenVicepresidente: "/binomios/pdc/vicepresidente.png",
    slug: "pdc"
  }
];

export default function CandidatosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <div className="relative pt-20 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-[#de2488]/20 to-[#00cfaf]/20"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            SEGUNDA VUELTA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto px-4">
            Conoce a los candidatos finalistas que competirán en la segunda vuelta electoral
          </p>
        </div>
      </div>

      {/* Contenedor principal de candidatos */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {finalistasSegundaVuelta.map((candidato) => (
            <div
              key={candidato.partido}
              className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br ${candidato.gradiente}`}
            >
              {/* Efectos decorativos */}
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              
              <div className="relative z-10 p-8">
                {/* Header del partido */}
                <div className="text-center mb-8">
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">
                    {candidato.partido}
                  </h2>
                  <p className="text-lg text-white/90 font-medium">
                    {candidato.nombreCompleto}
                  </p>
                </div>

                {/* Grid de candidatos */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Presidente */}
                  <div className="text-center group">
                    <div className="relative mb-4">
                      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
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
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg leading-tight">
                            {candidato.presidente}
                          </h3>
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black border-0 text-sm font-bold px-3 py-1 shadow-xl">
                            PRESIDENTE
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vicepresidente */}
                  <div className="text-center group">
                    <div className="relative mb-4">
                      <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
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
                        <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 drop-shadow-lg leading-tight">
                            {candidato.vicepresidente}
                          </h3>
                          <Badge className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white border-0 text-sm font-bold px-3 py-1 shadow-xl">
                            VICEPRESIDENTE
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón para ver más detalles */}
                <div className="text-center mt-8">
                  <Link
                    href={`/candidatos/${candidato.slug}`}
                    className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-xl border-2 border-white/30"
                  >
                    <User className="w-5 h-5" />
                    <span>Ver Perfil Completo</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Quieres conocer más?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Explora el análisis comparativo de propuestas y conoce en detalle las biografías de cada candidato
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/analisis-comparativo"
              className="bg-gradient-to-r from-[#de2488] to-[#00cfaf] text-white font-bold px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Ver Análisis Comparativo
            </Link>
            <Link
              href="/#parties"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 border-2 border-white/30"
            >
              Ver Todos los Partidos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
