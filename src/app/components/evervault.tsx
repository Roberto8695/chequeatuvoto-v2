import React from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { PartidoPropuestaCard } from "@/components/propuestas/PartidoPropuestaCard";
import { partidos } from "@/data/proposals";

export function EvervaultCardDemo() {
  // Usamos el primer partido como ejemplo
  const partidoEjemplo = partidos[0];
  const propuestaEjemplo = "Esta es una propuesta de ejemplo para mostrar cómo funciona el componente dinámico con los datos reales del partido político.";

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-12">
          Tarjetas de Propuestas con Evervault
        </h1>
        
        {/* Ejemplo con PartidoPropuestaCard */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Componente Dinámico con Datos Reales
          </h2>
          <div className="flex justify-center">
            <PartidoPropuestaCard
              partido={partidoEjemplo}
              propuesta={propuestaEjemplo}
            />
          </div>
        </div>

        {/* Ejemplo original */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Componente Original de Evervault
          </h2>
          <div className="flex justify-center">
            <div className="border border-white dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem] bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg">
              <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-white" />
              <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-white" />
              <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-white" />
              <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-white" />

              <EvervaultCard 
                imageSrc="/binomios/apb/logo.png" 
                imageAlt="Logo Sumate" 
              />

              <h2 className="dark:text-white text-white mt-4 text-sm font-light">
                Hover over this card to reveal an awesome effect. Running out of copy
                here.
              </h2>
              <p className="text-sm border font-light dark:border-white/[0.2] border-white rounded-full mt-4 text-white dark:text-white px-2 py-0.5">
                Watch me hover
              </p>
            </div>
          </div>
        </div>

        {/* Grid de múltiples partidos */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-8 text-center">
            Grid de Múltiples Partidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partidos.slice(0, 6).map((partido, index) => (
              <PartidoPropuestaCard
                key={partido.id}
                partido={partido}
                propuesta={`Propuesta ${index + 1}: Esta es una propuesta de ejemplo para ${partido.shortName} que muestra cómo se ve el contenido dinámico en las tarjetas.`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
