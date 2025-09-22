'use client';

import { useState } from 'react';
import { User, BookOpen, Calendar, MapPin, GraduationCap, Briefcase, Building, Vote, Gavel, Award, AlertTriangle, Scale, Heart } from 'lucide-react';
import { PerfilCandidato } from '@/data/perfiles-candidatos';
import { Badge } from '@/components/ui/badge';

interface BiografiaCandidatoProps {
  candidato: PerfilCandidato;
  partidoColor?: string;
}

export default function BiografiaCandidato({ candidato, partidoColor = '#3B82F6' }: BiografiaCandidatoProps) {
  const [activeTab, setActiveTab] = useState<'general' | 'educacion' | 'experiencia' | 'cargos' | 'postulaciones' | 'casos'>('general');

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
          onClick={() => setActiveTab('cargos')}
          className="px-4 py-2 rounded-t-lg border-b-2 font-medium transition-all duration-200"
          style={tabStyle(activeTab === 'cargos')}
        >
          <Building className="w-4 h-4 inline mr-2" />
          Cargos Públicos
        </button>
        <button
          onClick={() => setActiveTab('postulaciones')}
          className="px-4 py-2 rounded-t-lg border-b-2 font-medium transition-all duration-200"
          style={tabStyle(activeTab === 'postulaciones')}
        >
          <Vote className="w-4 h-4 inline mr-2" />
          Postulaciones
        </button>
        <button
          onClick={() => setActiveTab('casos')}
          className="px-4 py-2 rounded-t-lg border-b-2 font-medium transition-all duration-200"
          style={tabStyle(activeTab === 'casos')}
        >
          <Gavel className="w-4 h-4 inline mr-2" />
          Casos Judiciales
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

        {activeTab === 'cargos' && candidato.cargosPublicos && candidato.cargosPublicos.length > 0 && (
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-4">
              <Building className="w-5 h-5" style={iconStyle} />
              <span>Cargos Públicos</span>
            </h3>
            <div className="space-y-3">
              {candidato.cargosPublicos.map((cargo, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-blue-800">{cargo.cargo}</span>
                    <Badge variant="outline" className="text-blue-600 border-blue-300">
                      {cargo.año}
                    </Badge>
                  </div>
                  {cargo.detalle && (
                    <p className="text-sm text-blue-700">{cargo.detalle}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'cargos' && (!candidato.cargosPublicos || candidato.cargosPublicos.length === 0) && (
          <div className="text-center py-8">
            <Building className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">Sin cargos públicos registrados</h3>
            <p className="text-gray-500">Este candidato no tiene cargos públicos registrados en el sistema.</p>
          </div>
        )}

        {activeTab === 'postulaciones' && candidato.postulaciones && candidato.postulaciones.length > 0 && (
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-4">
              <Vote className="w-5 h-5" style={iconStyle} />
              <span>Postulaciones Electorales</span>
            </h3>
            <div className="space-y-3">
              {candidato.postulaciones.map((postulacion, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-semibold text-purple-800">{postulacion.cargo}</span>
                      <Badge variant="outline" className="text-purple-600 border-purple-300">
                        {postulacion.partido}
                      </Badge>
                    </div>
                    <span className="text-sm text-purple-600 font-medium">{postulacion.año}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-purple-700">Resultado:</span>
                    <Badge 
                      className={`text-xs ${
                        postulacion.resultado.toLowerCase().includes('electo') 
                          ? 'bg-green-100 text-green-800 border-green-300' 
                          : postulacion.resultado.toLowerCase().includes('no electo')
                          ? 'bg-red-100 text-red-800 border-red-300'
                          : 'bg-yellow-100 text-yellow-800 border-yellow-300'
                      }`}
                      variant="outline"
                    >
                      {postulacion.resultado}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'postulaciones' && (!candidato.postulaciones || candidato.postulaciones.length === 0) && (
          <div className="text-center py-8">
            <Vote className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">Sin postulaciones registradas</h3>
            <p className="text-gray-500">Este candidato no tiene postulaciones electorales registradas en el sistema.</p>
          </div>
        )}

        {activeTab === 'casos' && candidato.casosJudiciales && candidato.casosJudiciales.length > 0 && (
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-900 mb-4">
              <Gavel className="w-5 h-5 text-red-600" />
              <span>Casos Judiciales</span>
            </h3>
            <div className="space-y-4">
              {candidato.casosJudiciales.map((caso, index) => (
                <div key={index} className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-red-800">{caso.tipo}</h4>
                    <Badge variant="outline" className="text-red-600 border-red-300">
                      {caso.año}
                    </Badge>
                  </div>
                  <p className="text-red-700 mb-3">{caso.descripcion}</p>
                  <div className="flex items-center space-x-2">
                    <Scale className="w-4 h-4 text-red-600" />
                    <span className="text-sm font-medium text-red-800">Estado:</span>
                    <span className="text-sm text-red-700">{caso.estado}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'casos' && (!candidato.casosJudiciales || candidato.casosJudiciales.length === 0) && (
          <div className="text-center py-8">
            <Gavel className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-600 mb-2">Sin casos judiciales registrados</h3>
            <p className="text-gray-500">Este candidato no tiene casos judiciales en el registro actual.</p>
          </div>
        )}
      </div>
    </div>
  );
}
