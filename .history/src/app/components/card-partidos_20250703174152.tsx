"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { partidosPoliticos } from "@/data/partidos-politicos";
import Image from "next/image";

export function CardPartidos() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <div className="h-2 rounded-full overflow-hidden flex shadow-lg mx-auto max-w-md mb-8 animate-pulse">
          <div className="flex-1 bg-gradient-to-r from-[#de2488] to-[#00cfaf]"></div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
          PARTIDOS POLÍTICOS Y ALIANZAS
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
          Conoce los programas de gobierno de todos los partidos políticos, agrupaciones ciudadanas y organizaciones
        </p>
      </div>

      {/* Grid de partidos - 5 columnas en desktop, responsive en móvil */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {partidosPoliticos.map((partido) => (
          <Card
            key={partido.id}
            className="group relative overflow-hidden rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
            style={{
              backgroundColor: partido.colores?.primary + "10" || "#f8f9fa",
              borderColor: partido.colores?.primary + "40" || "#dee2e6",
            }}
          >
            {/* Overlay de color de fondo más sutil */}
            <div
              className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
              style={{
                backgroundColor: partido.colores?.primary || "#6c757d",
              }}
            />

            <CardContent className="p-6 relative z-10 flex flex-col items-center text-center h-full">
              {/* Logo del partido */}
              <div className="relative w-28 h-28 mb-4 rounded-full overflow-hidden bg-white shadow-md group-hover:shadow-lg transition-shadow duration-300">
                <Image
                  src={partido.imagenes.logo}
                  alt={`Logo ${partido.sigla}`}
                  fill
                  className="object-contain p-3 group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 112px, 112px"
                />
              </div>

              {/* Información del partido */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    className="text-lg font-bold mb-2 leading-tight group-hover:scale-[1.02] transition-transform duration-300"
                    style={{ color: partido.colores?.primary || "#495057" }}
                  >
                    {partido.sigla}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-tight min-h-[2.5rem] line-clamp-2">
                    {partido.nombre}
                  </p>
                </div>

                {/* Botón de programa de gobierno */}
                <Button
                  size="sm"
                  className="w-full text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg text-xs group/btn"
                  style={{
                    backgroundColor: partido.colores?.primary || "#6c757d",
                    borderColor: partido.colores?.primary || "#6c757d",
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    if (partido.colores?.primary) {
                      // Crear un color más oscuro para el hover
                      const color = partido.colores.primary;
                      const darkColor = color + "dd"; // Agregar opacidad para oscurecer
                      target.style.backgroundColor = darkColor;
                    }
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    if (partido.colores?.primary) {
                      target.style.backgroundColor = partido.colores.primary;
                    }
                  }}
                  onClick={() => window.open(partido.programas, "_blank", "noopener,noreferrer")}
                >
                  <ExternalLink className="h-3 w-3 mr-1 transition-transform group-hover/btn:scale-110" />
                  Programa de Gobierno
                </Button>
              </div>

              {/* Línea decorativa inferior */}
              <div className="flex justify-center mt-4">
                <div
                  className="h-0.5 w-8 rounded-full transition-all duration-500 group-hover:w-12"
                  style={{
                    backgroundColor: partido.colores?.primary || "#6c757d",
                  }}
                />
              </div>
            </CardContent>

            {/* Efecto de borde animado */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none border-2"
              style={{
                borderColor: partido.colores?.primary || "#6c757d",
              }}
            />
          </Card>
        ))}
      </div>

      {/* Nota informativa */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">
          Los programas de gobierno son documentos oficiales presentados por cada partido político ante el Órgano Electoral Plurinacional (OEP).
        </p>
      </div>
    </div>
  );
}
