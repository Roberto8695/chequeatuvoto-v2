"use client";

import React, { useState } from "react";
import { TrendingUp, TrendingDown, Award, BarChart3 } from "lucide-react";

interface TablaData {
  alianza: string;
  indiceEconomico1: number;
  indiceEconomico2: number;
  ratioGreenRed: string;
}

const datosTabla: TablaData[] = [
  {
    alianza: "UNIDAD",
    indiceEconomico1: 6,
    indiceEconomico2: 6,
    ratioGreenRed: "24:5"
  },
  {
    alianza: "LIBERTAD Y PROGRESO ADN",
    indiceEconomico1: 3.9,
    indiceEconomico2: 3,
    ratioGreenRed: "24:2"
  },
  {
    alianza: "LA FUERZA DEL PUEBLO",
    indiceEconomico1: 3.1,
    indiceEconomico2: 3,
    ratioGreenRed: "17:7"
  },
  {
    alianza: "PDC",
    indiceEconomico1: 3.9,
    indiceEconomico2: 3,
    ratioGreenRed: "12:5"
  },
  {
    alianza: "APB-SÚMATE",
    indiceEconomico1: 4.3,
    indiceEconomico2: 4,
    ratioGreenRed: "23:5"
  },
  {
    alianza: "MAS-IPSP",
    indiceEconomico1: 2.6,
    indiceEconomico2: 4,
    ratioGreenRed: "12:0"
  },
  {
    alianza: "ALIANZA POPULAR",
    indiceEconomico1: 3.8,
    indiceEconomico2: 3,
    ratioGreenRed: "24:2"
  },
  {
    alianza: "MORENA",
    indiceEconomico1: 4,
    indiceEconomico2: 4,
    ratioGreenRed: "9:1"
  },
  {
    alianza: "LIBERTAD Y DEMOCRACIA (LIBRE)",
    indiceEconomico1: 6.33,
    indiceEconomico2: 5,
    ratioGreenRed: "6:3"
  }
];

export function TablaGeneralCTV() {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof TablaData | null;
    direction: 'asc' | 'desc';
  }>({ key: null, direction: 'asc' });

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
        const aValue = a[sortConfig.key!];
        const bValue = b[sortConfig.key!];
        
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
    if (score >= 5) return "text-green-400";
    if (score >= 4) return "text-yellow-400";
    if (score >= 3) return "text-orange-400";
    return "text-red-400";
  };

  const getScoreBg = (score: number) => {
    if (score >= 5) return "bg-green-500/20 border-green-500/30";
    if (score >= 4) return "bg-yellow-500/20 border-yellow-500/30";
    if (score >= 3) return "bg-orange-500/20 border-orange-500/30";
    return "bg-red-500/20 border-red-500/30";
  };

  const parseRatio = (ratio: string) => {
    const [green, red] = ratio.split(':').map(Number);
    return { green, red, total: green + red };
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-round">
            ANÁLISIS COMPARATIVO        </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Índices económicos y ratios de transparencia por alianza política
        </p>
      </div>

      {/* Tabla */}
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 shadow-2xl border border-gray-200 dark:border-slate-700">
        {/* Fondo animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        
        {/* Partículas decorativas */}
        <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-6 left-6 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>

        <div className="relative z-10 overflow-x-auto">
          <table className="w-full">
            {/* Header de la tabla */}
            <thead>
              <tr className="bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-b border-gray-200 dark:border-slate-600">
                <th 
                  className="px-6 py-4 text-left cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  onClick={() => handleSort('alianza')}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      Alianza/Partido
                    </span>
                    {sortConfig.key === 'alianza' && (
                      sortConfig.direction === 'asc' ? 
                        <TrendingUp className="w-4 h-4 text-blue-500" /> : 
                        <TrendingDown className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                </th>
                
                <th 
                  className="px-6 py-4 text-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  onClick={() => handleSort('indiceEconomico1')}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      Índice Económico
                    </span>
                    {sortConfig.key === 'indiceEconomico1' && (
                      sortConfig.direction === 'asc' ? 
                        <TrendingUp className="w-4 h-4 text-blue-500" /> : 
                        <TrendingDown className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                </th>
                
                <th 
                  className="px-6 py-4 text-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors duration-200"
                  onClick={() => handleSort('indiceEconomico2')}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                      Índice Económico 2
                    </span>
                    {sortConfig.key === 'indiceEconomico2' && (
                      sortConfig.direction === 'asc' ? 
                        <TrendingUp className="w-4 h-4 text-blue-500" /> : 
                        <TrendingDown className="w-4 h-4 text-blue-500" />
                    )}
                  </div>
                </th>
                
                <th className="px-6 py-4 text-center">
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    Ratio Greenflags:Redflags
                  </span>
                </th>
              </tr>
            </thead>
            
            {/* Cuerpo de la tabla */}
            <tbody>
              {sortedData.map((row, index) => {
                const ratio = parseRatio(row.ratioGreenRed);
                const greenPercentage = (ratio.green / ratio.total) * 100;
                
                return (
                  <tr 
                    key={index}
                    className="border-b border-gray-200 dark:border-slate-700 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 dark:hover:from-slate-800/50 dark:hover:to-slate-700/50 transition-all duration-300 group"
                  >
                    {/* Alianza/Partido */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                        <span className="font-medium text-gray-900 dark:text-white text-sm sm:text-base group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {row.alianza}
                        </span>
                      </div>
                    </td>
                    
                    {/* Índice Económico 1 */}
                    <td className="px-6 py-4 text-center">
                      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border ${getScoreBg(row.indiceEconomico1)} backdrop-blur-sm`}>
                        <span className={`font-bold text-lg ${getScoreColor(row.indiceEconomico1)}`}>
                          {row.indiceEconomico1}
                        </span>
                        {row.indiceEconomico1 >= 5 && <Award className="w-4 h-4 text-yellow-500" />}
                      </div>
                    </td>
                    
                    {/* Índice Económico 2 */}
                    <td className="px-6 py-4 text-center">
                      <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-lg border ${getScoreBg(row.indiceEconomico2)} backdrop-blur-sm`}>
                        <span className={`font-bold text-lg ${getScoreColor(row.indiceEconomico2)}`}>
                          {row.indiceEconomico2}
                        </span>
                        {row.indiceEconomico2 >= 5 && <Award className="w-4 h-4 text-yellow-500" />}
                      </div>
                    </td>
                    
                    {/* Ratio */}
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <span className="font-mono font-bold text-gray-900 dark:text-white text-sm sm:text-base">
                          {row.ratioGreenRed}
                        </span>
                        <div className="flex-1 max-w-24 h-2 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-400 to-green-500 transition-all duration-700 ease-out"
                            style={{ width: `${greenPercentage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {greenPercentage.toFixed(0)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        
        {/* Footer */}
        <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 border-t border-gray-200 dark:border-slate-600">
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <span>Datos actualizados: Julio 2025</span>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Greenflags</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span>Redflags</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablaGeneralCTV;
