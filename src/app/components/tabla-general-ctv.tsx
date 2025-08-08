"use client";

import React, { useState } from "react";
import { TrendingUp, TrendingDown, Award, Info, FileText, Scale, DollarSign, HelpCircle } from "lucide-react";

interface TablaData {
  alianza: string;
  analisisEconomico: number; // Escala 1-10
  analisisJuridico: {
    greenFlags: number;
    redFlags: number;
  };
  colorPartido?: string; // Color del partido para personalización
}

const datosTabla: TablaData[] = [
  {
    alianza: "UNIDAD",
    analisisEconomico: 6,
    analisisJuridico: { greenFlags: 24, redFlags: 5 },
    colorPartido: "#003b69"
  },
  {
    alianza: "LIBERTAD Y PROGRESO ADN",
    analisisEconomico: 3.45,
    analisisJuridico: { greenFlags: 24, redFlags: 2 },
    colorPartido: "#ff030f"
  },
  {
    alianza: "LA FUERZA DEL PUEBLO",
    analisisEconomico: 3.1,
    analisisJuridico: { greenFlags: 17, redFlags: 7 },
    colorPartido: "#d19d03"
  },
  {
    alianza: "PDC",
    analisisEconomico: 3.9,
    analisisJuridico: { greenFlags: 12, redFlags: 5 },
    colorPartido: "#f83728"
  },
  {
    alianza: "APB-SÚMATE",
    analisisEconomico: 4.3,
    analisisJuridico: { greenFlags: 23, redFlags: 5 },
    colorPartido: "#ff1616"
  },
  {
    alianza: "MAS-IPSP",
    analisisEconomico: 2.6,
    analisisJuridico: { greenFlags: 12, redFlags: 0 },
    colorPartido: "#173983"
  },
  {
    alianza: "ALIANZA POPULAR",
    analisisEconomico: 3.8,
    analisisJuridico: { greenFlags: 24, redFlags: 2 },
    colorPartido: "#56a6d9"
  },
  {
    alianza: "MORENA",
    analisisEconomico: 4,
    analisisJuridico: { greenFlags: 9, redFlags: 1 },
    colorPartido: "#676767"
  },
  {
    alianza: "LIBERTAD Y DEMOCRACIA (LIBRE)",
    analisisEconomico: 6.33,
    analisisJuridico: { greenFlags: 6, redFlags: 3 },
    colorPartido: "#ff0000"
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

  const getScoreColor = (score: number) => {
    if (score >= 5) return "text-[#00cfaf]";
    return "text-[#de2488]";
  };

  const getScoreBg = (score: number) => {
    if (score >= 5) return "bg-[#00cfaf]/10 border-[#00cfaf]/30";
    return "bg-[#de2488]/10 border-[#de2488]/30";
  };

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

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Análisis Comparativo
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Índices económicos y ratios de transparencia por alianza política
        </p>
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
                        <Tooltip content="Escala del 1-10 basada en viabilidad y fundamentos de propuestas económicas" id="economic-tooltip">
                          <div className="flex items-center gap-1 text-xs text-gray-500 mt-1 cursor-help">
                            <HelpCircle className="w-3 h-3" />
                            <span>escala 1-10</span>
                          </div>
                        </Tooltip>
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
                  const totalFlags = row.analisisJuridico.greenFlags + row.analisisJuridico.redFlags;
                  const greenPercentage = totalFlags > 0 ? (row.analisisJuridico.greenFlags / totalFlags) * 100 : 0;
                  
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
                          {/* Valor numérico */}
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 ${getScoreBg(row.analisisEconomico)} backdrop-blur-sm shadow-lg`}>
                            <span className={`font-bold text-xl ${getScoreColor(row.analisisEconomico)}`}>
                              {row.analisisEconomico}
                            </span>
                            {row.analisisEconomico >= 5 && <Award className="w-5 h-5 text-yellow-500" />}
                          </div>
                          
                          {/* Escala visual 1-10 */}
                          <div className="flex items-center gap-2 w-full max-w-xs">
                            <span className="text-sm font-medium text-gray-500">1</span>
                            <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                              <div 
                                className={`h-full bg-gradient-to-r ${getProgressColor(row.analisisEconomico)} transition-all duration-700 ease-out relative`}
                                style={{ width: `${(row.analisisEconomico / 10) * 100}%` }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                              </div>
                            </div>
                            <span className="text-sm font-medium text-gray-500">10</span>
                          </div>
                          
                          {/* Botón VER RESULTADOS */}
                          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-md border border-gray-300">
                            VER RESULTADOS
                          </button>
                        </div>
                      </td>
                      
                      {/* Análisis Jurídico */}
                      <td className="px-6 py-6">
                        <div className="flex flex-col items-center space-y-4">
                          {/* Números principales */}
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2 px-3 py-2 bg-[#00cfaf]/10 rounded-lg border border-[#00cfaf]/30">
                              <div className="w-3 h-3 bg-[#00cfaf] rounded-full"></div>
                              <span className="font-bold text-[#00cfaf] text-lg">{row.analisisJuridico.greenFlags}</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 bg-[#de2488]/10 rounded-lg border border-[#de2488]/30">
                              <div className="w-3 h-3 bg-[#de2488] rounded-full"></div>
                              <span className="font-bold text-[#de2488] text-lg">{row.analisisJuridico.redFlags}</span>
                            </div>
                          </div>
                          
                          {/* Barra de progreso */}
                          <div className="w-full max-w-32 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                            <div 
                              className="h-full bg-gradient-to-r from-[#00cfaf] to-[#00cfaf]/80 transition-all duration-700 ease-out"
                              style={{ width: `${greenPercentage}%` }}
                            ></div>
                          </div>
                          
                          {/* Botón RESULTADOS */}
                          <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-all duration-300 hover:shadow-md border border-gray-300">
                            VER RESULTADOS
                          </button>
                        </div>
                      </td>
                      
                      {/* Botón Análisis Completo */}
                      <td className="px-6 py-6 text-center">
                        <button className="px-6 py-3 bg-gradient-to-r from-[#de2488] to-[#00cfaf] text-white font-bold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm">
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
      
      {/* Nota explicativa */}
      <div className="mt-8 p-6 bg-gradient-to-r from-[#de2488]/5 to-[#00cfaf]/5 rounded-2xl border border-gray-200">
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
          <div className="text-sm text-gray-700 leading-relaxed">
            <p className="font-semibold mb-2">Metodología de análisis:</p>
            <p>
              <strong>Análisis Económico:</strong> Evaluación de la viabilidad, fundamentación y coherencia de las propuestas económicas en una escala del 1 al 10.
              <br />
              <strong>Análisis Jurídico:</strong> Revisión de antecedentes legales, procesos pendientes y trayectoria jurídica de los candidatos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablaGeneralCTV;
