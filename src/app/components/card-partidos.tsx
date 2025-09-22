"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

// Solo los partidos finalistas de segunda vuelta
const partidosFinalistasSegundaVuelta = [
  {
    id: "libre",
    sigla: "LIBRE",
    nombre: "Alianza Libertad y Democracia",
    imagenes: {
      logo: "/binomios/fri/logo.png"
    },
    colores: {
      primary: "#ff0000"
    },
    programas: "https://drive.google.com/file/d/1WVEWSo9589x8u9lirA6mEMBhcFTghSeR/view?usp=sharing"
  },
  {
    id: "pdc",
    sigla: "PDC",
    nombre: "Partido Demócrata Cristiano",
    imagenes: {
      logo: "/binomios/pdc/logo.png"
    },
    colores: {
      primary: "#f83728"
    },
    programas: "https://drive.google.com/file/d/1cWprXiEIzPt2546SYGp5iQbWxe_qi-Jo/view?usp=sharing"
  }
];

export function CardPartidos() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Título de la sección */}
      <div className="text-center mb-12">
        <div className="h-2 rounded-full overflow-hidden flex shadow-lg mx-auto max-w-md mb-8 animate-pulse">
          <div className="flex-1 bg-gradient-to-r from-[#de2488] to-[#00cfaf]"></div>
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold font-round text-black mb-4">
          PARTIDOS POLÍTICOS Y ALIANZAS
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
          Explora las propuestas de los partidos que llegaron a la segunda vuelta
        </p>
      </div>

      {/* Grid de partidos - 2 columnas para finalistas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {partidosFinalistasSegundaVuelta.map((partido) => (
          <Card
            key={partido.id}
            className="group relative overflow-hidden rounded-3xl border-2 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
            style={{
              backgroundColor: partido.colores?.primary + "10" || "#f8f9fa",
              borderColor: partido.colores?.primary + "40" || "#dee2e6",
            }}
          >
            {/* Overlay de color de fondo */}
            <div
              className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-300"
              style={{
                backgroundColor: partido.colores?.primary || "#6c757d",
              }}
            />

            {/* Efectos decorativos */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

            <CardContent className="p-8 relative z-10 flex flex-col items-center text-center h-full">
              {/* Logo del partido */}
              <div className="relative w-40 h-40 mb-6 rounded-full overflow-hidden bg-white shadow-xl group-hover:shadow-2xl transition-all duration-300 ring-4 ring-white/50">
                <Image
                  src={partido.imagenes.logo}
                  alt={`Logo ${partido.sigla}`}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 160px, 160px"
                />
              </div>

              {/* Información del partido */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 
                    className="text-3xl font-bold mb-4 leading-tight group-hover:scale-[1.02] transition-transform duration-300"
                    style={{ color: partido.colores?.primary || "#495057" }}
                  >
                    {partido.sigla}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                    {partido.nombre}
                  </p>
                </div>

                {/* Botón de programa de gobierno */}
                <Button
                  size="lg"
                  className="w-full text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl text-base group/btn py-4"
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
                  <ExternalLink className="h-5 w-5 mr-2 transition-transform group-hover/btn:scale-110" />
                  Programa de Gobierno
                </Button>
              </div>

              {/* Línea decorativa inferior */}
              <div className="flex justify-center mt-6">
                <div
                  className="h-1 w-12 rounded-full transition-all duration-500 group-hover:w-16"
                  style={{
                    backgroundColor: partido.colores?.primary || "#6c757d",
                  }}
                />
              </div>
            </CardContent>

            {/* Efecto de borde animado */}
            <div
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none border-2"
              style={{
                borderColor: partido.colores?.primary || "#6c757d",
              }}
            />
          </Card>
        ))}
      </div>

      {/* Nota informativa actualizada */}
      <div className="mt-12 text-center">
        <p className="text-base text-gray-600 max-w-2xl mx-auto">
          Los programas de gobierno son documentos oficiales presentados por cada partido político ante el Órgano Electoral Plurinacional (OEP) para la segunda vuelta electoral.
        </p>
      </div>
    </div>
  );
}
