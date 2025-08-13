'use client';

import { useState } from 'react';
import { User, BookOpen, Calendar, MapPin, GraduationCap, Briefcase, Flag, Award, AlertTriangle, Scale, Heart } from 'lucide-react';
import { PerfilCandidato } from '@/data/perfiles-candidatos';
import { Badge } from '@/components/ui/badge';

interface BiografiaCandidatoProps {
  candidato: PerfilCandidato;
  partidoColor?: string;
}

export default function BiografiaCandidato({ candidato, partidoColor = '#3B82F6' }: BiografiaCandidatoProps) {
  const [activeTab, setActiveTab] = useState<'general' | 'educacion' | 'experiencia' | 'politica'>('general');

  const tabStyle = (isActive: boolean) => ({
    backgroundColor: isActive ? partidoColor : 'transparent',
    color: isActive ? 'white' : partidoColor,
    borderColor: partidoColor,
  });

  const iconStyle = { color: partidoColor };

  return (
    <div className="space-y-6">
      {/* Header con información básica */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <User className="w-6 h-6" style={iconStyle} />
          <h1 className="text-2xl font-bold text-gray-900">{candidato.nombre}</h1>
        </div>
        
        <div className="flex items-center justify-center">
          <Badge 
            className="px-4 py-2 text-sm font-semibold uppercase tracking-wide"
            style={{ backgroundColor: partidoColor, color: 'white' }}
          >
            {candidato.cargo}
          </Badge>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{candidato.fechaNacimiento}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{candidato.lugarNacimiento}</span>
          </div>
          {candidato.edad && (
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{candidato.edad} años</span>
            </div>
          )}
        </div>

        <div className="text-center">
          <span className="text-lg font-medium text-gray-800">{candidato.profesion}</span>
        </div>
      </div>

      {/* Tabs de navegación */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('general')}
          className="px-4 py-2 rounded-t-lg border-b-2 font-medium transition-all duration-200"
          style={tabStyle(activeTab === 'general')}
        >
          <BookOpen className="w-4 h-4 inline mr-2" />
          General
        </button>
        <button
          onClick={() => setActiveTab('educacion')}
          className="px-4 py-2 rounded-t-lg border-b-2 font-medium transition-all duration-200"
          style={tabStyle(activeTab === 'educacion')}
        >
          <GraduationCap className="w-4 h-4 inline mr-2" />
          Educación
        </button>
        <button
          onClick={() => setActiveTab('experiencia')}
          className="px-4 py-2 rounded-t-lg border-b-2 font-medium transition-all duration-200"
          style={tabStyle(activeTab === 'experiencia')}
        >
          <Briefcase className="w-4 h-4 inline mr-2" />
          Experiencia
        </button>
        <button
          onClick={() => setActiveTab('politica')}
          className="px-4 py-2 rounded-t-lg border-b-2 font-medium transition-all duration-200"
          style={tabStyle(activeTab === 'politica')}
        >
          <Flag className="w-4 h-4 inline mr-2" />
          Política
        </button>
      </div>

      {/* Contenido de las tabs */}
      <div className="space-y-6">
        {activeTab === 'general' && (
          <div className="space-y-4">
            {candidato.logrosDestacados && candidato.logrosDestacados.length > 0 && (
              <div>
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-3">
                  <Award className="w-5 h-5" style={iconStyle} />
                  <span>Logros Destacados</span>
                </h3>
                <ul className="space-y-2">
                  {candidato.logrosDestacados.map((logro, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: partidoColor }}></span>
                      <span className="text-gray-700">{logro}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {candidato.controversias && candidato.controversias.length > 0 && (
              <div>
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                  <span>Controversias</span>
                </h3>
                <ul className="space-y-2">
                  {candidato.controversias.map((controversia, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="w-2 h-2 rounded-full bg-amber-600 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700">{controversia}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {candidato.situacionLegal && (
              <div>
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-3">
                  <Scale className="w-5 h-5 text-red-600" />
                  <span>Situación Legal</span>
                </h3>
                <p className="text-gray-700 bg-red-50 p-3 rounded-lg border border-red-200">
                  {candidato.situacionLegal}
                </p>
              </div>
            )}

            {candidato.religion && (
              <div>
                <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-3">
                  <Heart className="w-5 h-5 text-purple-600" />
                  <span>Religión</span>
                </h3>
                <p className="text-gray-700 bg-purple-50 p-3 rounded-lg border border-purple-200">
                  {candidato.religion}
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'educacion' && (
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-4">
              <GraduationCap className="w-5 h-5" style={iconStyle} />
              <span>Formación Académica</span>
            </h3>
            <ul className="space-y-3">
              {candidato.educacion.map((estudio, index) => (
                <li key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: partidoColor }}></span>
                  <span className="text-gray-700">{estudio}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'experiencia' && (
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-4">
              <Briefcase className="w-5 h-5" style={iconStyle} />
              <span>Experiencia Laboral</span>
            </h3>
            <ul className="space-y-3">
              {candidato.experienciaLaboral.map((trabajo, index) => (
                <li key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: partidoColor }}></span>
                  <span className="text-gray-700">{trabajo}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'politica' && (
          <div className="space-y-4">
            <div>
              <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-4">
                <Flag className="w-5 h-5" style={iconStyle} />
                <span>Carrera Política</span>
              </h3>
              <ul className="space-y-3">
                {candidato.carreraPolitica.map((cargo, index) => (
                  <li key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: partidoColor }}></span>
                    <span className="text-gray-700">{cargo}</span>
                  </li>
                ))}
              </ul>
            </div>

            {candidato.partidosAnteriores && candidato.partidosAnteriores.length > 0 && (
              <div>
                <h4 className="text-md font-semibold text-gray-900 mb-3">Partidos Anteriores</h4>
                <div className="flex flex-wrap gap-2">
                  {candidato.partidosAnteriores.map((partido, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {partido}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
