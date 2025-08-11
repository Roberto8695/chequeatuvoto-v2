"use client";

import React, { useState } from "react";
import { DollarSign, Scale, Users, X, Award, BookOpen, MapPin, Briefcase } from "lucide-react";

interface Analista {
  nombre: string;
  especialidad: string;
  icono: React.ReactNode;
  color: string;
  biografia: string;
  logros: string[];
  ubicacion?: string;
  cargo?: string;
}

const analistas: Analista[] = [
  {
    nombre: "Gonzalo Colque",
    especialidad: "Analista Económico",
    icono: <DollarSign className="w-5 h-5" />,
    color: "#00cfaf",
    ubicacion: "Santa Cruz",
    cargo: "Investigador Principal - Fundación TIERRA",
    biografia: "Es economista graduado de la (UMSA). Completó sus estudios de posgrado en los Países Bajos, en el International Institute of Social Studies de Erasmus University Rotterdam. Obtuvo su título de maestría con la tesis \"Land Appropriation on the Frontier: Changes in and Struggles for Access to Land in Bolivia\".",
    logros: [
      "Reconocimiento por \"Defensa de la Libertad de Expresión y los Derechos Humanos\" (2015)",
      "Premio a la mejor \"columna de opinión\" - Asociación de Periodistas de La Paz (2023)",
      "Ex Director Ejecutivo de Fundación TIERRA",
      "Autor y coautor de varias publicaciones, libros y artículos académicos internacionales",
      "Especialista en investigación agraria, ambiental y socioeconómica"
    ]
  },
  {
    nombre: "Carlos Augusto Aranda Herrera", 
    especialidad: "Analista Económico",
    icono: <DollarSign className="w-5 h-5" />,
    color: "#00cfaf",
    ubicacion: "Santa Cruz",
    cargo: "Economista Investigador - POPULI",
    biografia: "Economista Investigador en el Centro de Políticas Públicas para la Libertad (POPULI). Se desempeñó como Auxiliar de Cátedra en la Universidad Autónoma Gabriel René Moreno (UAGRM) y Docente de Cátedra Invitado de Microeconomía e Introducción a la Economía.",
    logros: [
      "Diplomado en Programación y Políticas Financieras - Fondo Monetario Internacional",
      "Asesor Económico de la Cámara de Exportadores de Santa Cruz (CADEX)",
      "Miembro de la Red de Investigadores del Fraser Institute de Canadá en Bolivia", 
      "Analista económico en Radio Deber (Dinero 360) y Radio Marítima (Portafolio)",
      "Docente Universitario en UAGRM"
    ]
  },
  {
    nombre: "Juan Reynaldo Salinas Goytia",
    especialidad: "Analista Jurídico",
    icono: <Scale className="w-5 h-5" />,
    color: "#de2488",
    cargo: "Profesor Universitario - UPB",
    biografia: "Abogado y candidato doctoral en Derecho por la Universidad Complutense de Madrid (UCM) con línea investigativa en Derecho Constitucional. Obtuvo un Máster en Derecho Parlamentario, Elecciones y Estudios Legislativos, y otro Máster en Teoría Política y Cultura Democrática por la misma universidad.",
    logros: [
      "Candidato doctoral en Derecho - Universidad Complutense de Madrid",
      "Máster en Derecho Parlamentario, Elecciones y Estudios Legislativos",
      "Máster en Teoría Política y Cultura Democrática",
      "Profesor de Derecho Internacional Público, Derecho Empresarial y Constitucional - UPB",
      "Amicus curiae ante la Corte Interamericana de DD.HH. sobre reelección presidencial",
      "Especialista en democracia, populismo, autoritarismo y sistemas electorales"
    ]
  },
  {
    nombre: "Amilcar Raul Zenteno Barrientos",
    especialidad: "Analista Político", 
    icono: <Users className="w-5 h-5" />,
    color: "#6366f1",
    ubicacion: "Cochabamba",
    cargo: "Licenciado en Ciencias Políticas - Creador de Contenidos",
    biografia: "Licenciado en Ciencias Políticas (UMSS), Profesor de Historia, Fotógrafo. Diplomado en Educación Superior y Diplomado en Artes Audiovisuales.",
    logros: [
      "Corte Departamental de Cochabamba (Área de Educación Cívica y Ciudadana)",
      "Mancomunidad de Municipios de la Cuenca del Caine",
      "Proyectos de fortalecimiento de la democracia",
      "Creador de contenidos especializados",
      "Diplomado en Educación Superior",
      "Diplomado en Artes Audiovisuales"
    ]
  }
];

export function AnalistasInfo() {
  const [analistaSeleccionado, setAnalistaSeleccionado] = useState<Analista | null>(null);

  const abrirModal = (analista: Analista) => {
    setAnalistaSeleccionado(analista);
  };

  const cerrarModal = () => {
    setAnalistaSeleccionado(null);
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 mb-8">
        {/* Header */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold font-round bg-gradient-to-r from-[#000000] to-[#000000] bg-clip-text text-transparent mb-2">
            Equipo de Análisis
          </h3>
          <p className="text-gray-600 text-sm">
            Profesionales especializados que realizaron la evaluación integral
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Haz clic en cualquier analista para conocer más detalles
          </p>
        </div>

        {/* Grid de analistas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {analistas.map((analista, index) => (
            <div
              key={index}
              onClick={() => abrirModal(analista)}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 p-4 hover:shadow-md hover:border-gray-300 transition-all duration-300 cursor-pointer hover:scale-105"
            >
              {/* Ícono y especialidad */}
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="p-2 rounded-lg shadow-sm"
                  style={{ backgroundColor: `${analista.color}15`, color: analista.color }}
                >
                  {analista.icono}
                </div>
                <span 
                  className="text-xs font-bold uppercase tracking-wide"
                  style={{ color: analista.color }}
                >
                  {analista.especialidad}
                </span>
              </div>

              {/* Nombre del analista */}
              <h4 className="font-bold text-gray-900 text-sm leading-tight group-hover:text-[#de2488] transition-colors duration-300">
                {analista.nombre}
              </h4>
              
              {/* Indicador de click */}
              <p className="text-xs text-gray-400 mt-2 group-hover:text-gray-600">
                Click para ver más →
              </p>
            </div>
          ))}
        </div>

        {/* Línea decorativa */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          
        </div>
      </div>

      {/* Modal */}
      {analistaSeleccionado && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={cerrarModal}
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header del Modal */}
            <div className="bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div 
                    className="p-3 rounded-xl shadow-sm"
                    style={{ 
                      backgroundColor: `${analistaSeleccionado.color}15`, 
                      color: analistaSeleccionado.color 
                    }}
                  >
                    {analistaSeleccionado.icono}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {analistaSeleccionado.nombre}
                    </h2>
                    <p 
                      className="text-sm font-semibold uppercase tracking-wide"
                      style={{ color: analistaSeleccionado.color }}
                    >
                      {analistaSeleccionado.especialidad}
                    </p>
                  </div>
                </div>
                <button
                  onClick={cerrarModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6">
              {/* Información básica */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                {analistaSeleccionado.cargo && (
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <Briefcase className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{analistaSeleccionado.cargo}</span>
                  </div>
                )}
                {analistaSeleccionado.ubicacion && (
                  <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <MapPin className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700">{analistaSeleccionado.ubicacion}</span>
                  </div>
                )}
              </div>

              {/* Biografía */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <BookOpen className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-bold text-gray-900">Biografía</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {analistaSeleccionado.biografia}
                </p>
              </div>

              {/* Logros y Experiencia */}
              <div className="pb-2">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg font-bold text-gray-900">Logros y Experiencia</h3>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                  {analistaSeleccionado.logros.map((logro, index) => (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-2 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200"
                    >
                      <div 
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: analistaSeleccionado.color }}
                      ></div>
                      <p className="text-sm text-gray-700">{logro}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AnalistasInfo;
