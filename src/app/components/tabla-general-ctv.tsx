"use client";

import React, { useState } from "react";
import { TrendingUp, TrendingDown, Info, FileText, Scale, DollarSign, HelpCircle } from "lucide-react";
import AnalistasInfo from "./analistas-info";

interface TablaData {
  alianza: string;
  analisisEconomico: number; // Escala 1-10
  analisisJuridico: {
    greenFlags: number;
    redFlags: number;
  };
  colorPartido?: string; // Color del partido para personalización
  enlaces: {
    completo: string;
    economico: string;
    redflag: string;
  };
}

const datosTabla: TablaData[] = [
  {
    alianza: "PDC",
    analisisEconomico: 3.45,
    analisisJuridico: { greenFlags: 12, redFlags: 5 },
    colorPartido: "#f83728",
    enlaces: {
      completo: "https://drive.google.com/file/d/1cWprXiEIzPt2546SYGp5iQbWxe_qi-Jo/view?usp=sharing",
      economico: "https://drive.google.com/file/d/1PwC-Krlb9RP8axaOKY0AE69z5GkKNqI3/view?usp=sharing",
      redflag: "https://drive.google.com/file/d/1lXVQsKmIhCb8HrxgvD296bRCrN4u2VdU/view?usp=sharing"
    }
  },
  {
    alianza: "LIBERTAD Y DEMOCRACIA (LIBRE)",
    analisisEconomico: 5.66,
    analisisJuridico: { greenFlags: 6, redFlags: 3 },
    colorPartido: "#ff0000",
    enlaces: {
      completo: "https://drive.google.com/file/d/1WVEWSo9589x8u9lirA6mEMBhcFTghSeR/view?usp=sharing",
      economico: "https://drive.google.com/file/d/1zvkgTGmPitKSEwHlj0eRoStpxYS8HZQI/view?usp=sharing",
      redflag: "https://drive.google.com/file/d/1TPuZFcEYveifPkaXmJABaITyjO-G48JH/view?usp=sharing"
    }
  }
];

export function TablaGeneralCTV() {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof TablaData | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  const handleSort = (key: keyof TablaData) => {
    let direction: 'asc' | 'desc' = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    const sortableData = [...datosTabla];
    if (sortConfig.key) {
      sortableData.sort((a, b) => {
        const aValue = sortConfig.key === 'analisisEconomico' 
          ? a.analisisEconomico 
          : sortConfig.key === 'alianza' 
            ? a.alianza 
            : a.analisisJuridico.greenFlags;
        const bValue = sortConfig.key === 'analisisEconomico' 
          ? b.analisisEconomico 
          : sortConfig.key === 'alianza' 
            ? b.alianza 
            : b.analisisJuridico.greenFlags;
        
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
        }
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          return sortConfig.direction === 'asc' 
            ? aValue.localeCompare(bValue)
            : bValue.localeCompare(aValue);
        }
        
        return 0;
      });
    }
    return sortableData;
  }, [sortConfig]);

 

  const getProgressColor = (score: number) => {
    if (score >= 5) return "from-[#00cfaf] to-[#00cfaf]/80";
    return "from-[#de2488] to-[#de2488]/80";
  };

  const Tooltip = ({ content, children, id }: { content: string; children: React.ReactNode; id: string }) => (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setShowTooltip(id)}
        onMouseLeave={() => setShowTooltip(null)}
        className="cursor-help"
      >
        {children}
      </div>
      {showTooltip === id && (
        <div className="absolute z-50 px-3 py-2 text-sm bg-gray-900 text-white rounded-lg shadow-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap animate-fade-in">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      )}
    </div>
  );

  const abrirEnlace = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-7xl mx-auto">

      {/* Vista móvil - Layout por secciones */}
      <div className="md:hidden space-y-8">
        <div className="text-center mb-6">
          
        </div>

        {sortedData.map((row, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            {/* Header del partido */}
            <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-8 rounded-full shadow-md"
                  style={{ backgroundColor: row.colorPartido || '#6b7280' }}
                ></div>
                <h3 className="font-bold text-gray-900 text-lg">{row.alianza}</h3>
              </div>
            </div>

            {/* PRIMERA SECCION - Análisis Económico */}
            <div className="p-6 border-b border-gray-200">
              <div className="text-center mb-4">
                <h4 className="text-base font-bold text-gray-700 uppercase mb-1">Primera Sección</h4>
                <h5 className="text-lg font-bold text-[#00cfaf] flex items-center justify-center gap-2">
                  <DollarSign className="w-5 h-5" />
                  ANÁLISIS ECONÓMICO
                </h5>
              </div>

              <div className="space-y-4">
                {/* Escala visual 1-10 */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500 w-4">1</span>
                  <div className="flex-1 h-8 bg-gray-200 rounded-lg overflow-hidden shadow-inner relative">
                    <div 
                      className={`h-full bg-gradient-to-r ${getProgressColor(row.analisisEconomico)} transition-all duration-700 ease-out relative`}
                      style={{ width: `${(row.analisisEconomico / 10) * 100}%` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                    </div>
                    {/* Marcador del valor */}
                    <div 
                      className="absolute top-0 h-full w-1 shadow-lg"
                      style={{ left: `${(row.analisisEconomico / 10) * 100}%`, transform: 'translateX(-50%)' }}
                    ></div>
                    {/* Texto centrado */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-black font-semibold text-sm">Puntaje del índice económico</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-500 w-6">10</span>
                </div>

                

                {/* Botón VER ANÁLISIS ECONÓMICO COMPLETO */}
                <div className="text-center">
                  <button 
                    onClick={() => abrirEnlace(row.enlaces.economico)}
                    className="px-6 py-3 bg-gradient-to-r from-[#de2488] to-[#00cfaf] hover:bg-gray-300 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-md border border-gray-300 text-xs uppercase tracking-wide"
                  >
                    Ver Análisis Económico Completo
                  </button>
                </div>
              </div>
            </div>

            {/* SEGUNDA SECCION - Análisis Jurídico */}
            <div className="p-6">
              <div className="text-center mb-4">
                <h4 className="text-base font-bold  text-gray-700 uppercase mb-1">Segunda Sección</h4>
                <h5 className="text-lg font-bold text-[#de2488] flex items-center justify-center gap-2">
                  <Scale className="w-5 h-5" />
                  ANÁLISIS JURÍDICO
                </h5>
              </div>

              <div className="space-y-4">
                {/* Barras de greenflags y redflags */}
                <div className="space-y-3">
                  {/* Barra de Greenflags */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-[#00cfaf] rounded flex items-center justify-center text-black font-bold text-sm">
                      {row.analisisJuridico.greenFlags}
                    </div>
                    <div className="flex-1 h-8 bg-gray-200 rounded-lg overflow-hidden relative">
                      <div 
                        className="h-full bg-[#00cfaf] transition-all duration-700"
                        style={{ 
                          width: `${(row.analisisJuridico.greenFlags / Math.max(row.analisisJuridico.greenFlags, row.analisisJuridico.redFlags, 10)) * 100}%` 
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-black font-semibold text-sm">Greenflags</span>
                      </div>
                    </div>
                  </div>

                  {/* Barra de Redflags */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-[#de2488] rounded flex items-center justify-center text-black font-bold text-sm">
                      {row.analisisJuridico.redFlags}
                    </div>
                    <div className="flex-1 h-8 bg-gray-200 rounded-lg overflow-hidden relative">
                      <div 
                        className="h-full bg-[#de2488] transition-all duration-700"
                        style={{ 
                          width: `${(row.analisisJuridico.redFlags / Math.max(row.analisisJuridico.greenFlags, row.analisisJuridico.redFlags, 10)) * 100}%` 
                        }}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-black font-semibold text-sm">Redflags</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Botón VER ANÁLISIS JURÍDICO COMPLETO */}
                <div className="text-center">
                  <button 
                    onClick={() => abrirEnlace(row.enlaces.redflag)}
                    className="px-6 py-3 bg-gradient-to-r from-[#de2488] to-[#00cfaf] hover:bg-gray-300 text-white font-bold rounded-lg transition-all duration-300 hover:shadow-md border border-gray-300 text-xs uppercase tracking-wide"
                  >
                    Ver Análisis Jurídico Completo
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Vista desktop - Tabla original */}
      <div className="hidden md:block">
        {/* Contenedor principal de la tabla */}
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-200">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#de2488]/3 via-white to-[#00cfaf]/3"></div>
          <div className="absolute top-6 right-6 w-3 h-3 bg-[#de2488]/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-8 left-8 w-2 h-2 bg-[#00cfaf]/20 rounded-full animate-ping"></div>

          <div className="relative z-10 overflow-x-auto">
            <table className="w-full">
              {/* Header de la tabla */}
              <thead>
                <tr className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                  <th 
                    className="px-6 py-6 text-left cursor-pointer hover:bg-gray-200 transition-all duration-300"
                    onClick={() => handleSort('alianza')}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-gray-900 text-base sm:text-lg font-round">
                        Alianza/Partido
                      </span>
                      {sortConfig.key === 'alianza' && (
                        sortConfig.direction === 'asc' ? 
                          <TrendingUp className="w-5 h-5 text-[#de2488]" /> : 
                          <TrendingDown className="w-5 h-5 text-[#de2488]" />
                      )}
                    </div>
                  </th>
                  
                  <th className="px-6 py-6 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <DollarSign className="w-5 h-5 text-[#00cfaf]" />
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-gray-900 text-base sm:text-lg font-round">
                          ANÁLISIS ECONÓMICO
                        </span>
                        
                      </div>
                    </div>
                  </th>
                  
                  <th className="px-6 py-6 text-center">
                    <div className="flex items-center justify-center gap-3">
                      <Scale className="w-5 h-5 text-[#de2488]" />
                      <div className="flex flex-col items-center">
                        <span className="font-bold text-gray-900 text-base sm:text-lg font-round">
                          ANÁLISIS JURÍDICO
                        </span>
                        <Tooltip content="Greenflags: aspectos positivos, Redflags: procesos, denuncias o señales de alerta" id="legal-tooltip">
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1 cursor-help">
                            <HelpCircle className="w-3 h-3" />
                            <span>greenflags vs redflags</span>
                          </div>
                        </Tooltip>
                      </div>
                    </div>
                  </th>
                  
                  <th className="px-6 py-6 text-center">
                    <span className="font-bold text-gray-900 text-base sm:text-lg font-round">
                      
                    </span>
                  </th>
                </tr>
              </thead>
              
              {/* Cuerpo de la tabla */}
              <tbody>
                {sortedData.map((row, index) => {
                 
                  
                  return (
                    <tr 
                      key={index}
                      className="border-b border-gray-200 hover:bg-gradient-to-r hover:from-[#de2488]/5 hover:to-[#00cfaf]/5 transition-all duration-300 group"
                    >
                      {/* Alianza/Partido */}
                      <td className="px-6 py-6">
                        <div className="flex items-center gap-4">
                          <div 
                            className="w-4 h-12 rounded-full shadow-md group-hover:scale-110 transition-transform duration-300"
                            style={{ backgroundColor: row.colorPartido || '#6b7280' }}
                          ></div>
                          <div>
                            <span className="font-bold text-gray-900 text-base sm:text-lg group-hover:text-[#de2488] transition-colors duration-300">
                              {row.alianza}
                            </span>
                          </div>
                        </div>
                      </td>
                      
                      {/* Análisis Económico */}
                      <td className="px-6 py-6">
                        <div className="flex flex-col items-center space-y-3">
                          
                          
                          
                          
                          {/* Botón VER RESULTADOS */}
                          <button 
                            onClick={() => abrirEnlace(row.enlaces.economico)}
                            className="px-4 py-2 bg-gradient-to-r from-[#de2488] to-[#00cfaf] hover:bg-gray-200 text-white text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-md border border-gray-300"
                          >
                            VER ANÁLISIS
                          </button>
                        </div>
                      </td>
                      
                      {/* Análisis Jurídico */}
                      <td className="px-6 py-6">
                        <div className="flex flex-col items-center space-y-4">
                          {/* Barras de greenflags y redflags - mismo diseño que móvil */}
                          <div className="space-y-3 w-full max-w-xs">
                            {/* Barra de Greenflags */}
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-8 bg-[#00cfaf] rounded flex items-center justify-center text-black font-bold text-sm">
                                {row.analisisJuridico.greenFlags}
                              </div>
                              <div className="flex-1 h-8 bg-gray-200 rounded-lg overflow-hidden relative">
                                <div 
                                  className="h-full bg-[#00cfaf] transition-all duration-700"
                                  style={{ 
                                    width: `${(row.analisisJuridico.greenFlags / Math.max(row.analisisJuridico.greenFlags, row.analisisJuridico.redFlags, 10)) * 100}%` 
                                  }}
                                ></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-black font-semibold text-sm">Greenflags</span>
                                </div>
                              </div>
                            </div>

                            {/* Barra de Redflags */}
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-8 bg-[#de2488] rounded flex items-center justify-center text-black font-bold text-sm">
                                {row.analisisJuridico.redFlags}
                              </div>
                              <div className="flex-1 h-8 bg-gray-200 rounded-lg overflow-hidden relative">
                                <div 
                                  className="h-full bg-[#de2488] transition-all duration-700"
                                  style={{ 
                                    width: `${(row.analisisJuridico.redFlags / Math.max(row.analisisJuridico.greenFlags, row.analisisJuridico.redFlags, 10)) * 100}%` 
                                  }}
                                ></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <span className="text-black font-semibold text-sm">Redflags</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Botón RESULTADOS */}
                          <button 
                            onClick={() => abrirEnlace(row.enlaces.redflag)}
                            className="px-4 py-2  bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-md border border-gray-300"
                          >
                            VER FLAGS
                          </button>
                        </div>
                      </td>
                      
                      {/* Botón Análisis Completo */}
                      <td className="px-6 py-6 text-center">
                        <button 
                          onClick={() => abrirEnlace(row.enlaces.completo)}
                          className="px-6 py-3 bg-gradient-to-r from-[#de2488] to-[#00cfaf] text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm"
                        >
                          ANÁLISIS COMPLETO
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          {/* Footer mejorado */}
          <div className="relative z-20 px-6 py-6 bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-200">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <Info className="w-4 h-4 text-gray-700" />
                <span className="font-bold text-black">Datos actualizados: Agosto 2025</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#00cfaf] rounded-full shadow-sm"></div>
                  <span className="font-bold text-black">Greenflags (Aspectos positivos)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#de2488] rounded-full shadow-sm"></div>
                  <span className="font-bold text-black">Redflags (Señales de alerta)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separador visual elegante entre tabla y equipo de análisis */}
      <div className="my-16 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center">
          
        </div>
      </div>
      
      {/* Información de Analistas */}
      <AnalistasInfo />
      
      {/* Separador antes de la metodología */}
      <div className="mt-12 mb-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      
      {/* Nota explicativa */}
      <div className="mt-8 p-6 bg-gradient-to-r from-[#de2488]/5 to-[#00cfaf]/5 rounded-2xl border border-gray-200">
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="font-semibold mb-2">Metodología de análisis:</p>
            <p className="text-justify">
              <strong>Análisis Económico:</strong> Evaluación de la viabilidad, fundamentación y coherencia de las propuestas económicas en una escala del 1 al 10.
              <br />
              <strong>Análisis Jurídico:</strong>  Es sobre la viabilidad legal de las propuestas económicas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );  
}

export default TablaGeneralCTV;
