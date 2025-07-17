import React from "react";
import { PropuestasGrid } from "@/components/propuestas/PropuestasGrid";
import { proposalsData, SubPlan } from "@/data/proposals";

export default function EjemploPropuestasPage() {
  // Tomamos un ejemplo de propuestas (por ejemplo, exportaciones)
  const propuestasExportaciones = proposalsData.find(
    plan => plan.id === "economia"
  )?.subplans.find(
    (subplan: SubPlan) => subplan.id === "exportaciones"
  );

  if (!propuestasExportaciones) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <p className="text-white text-xl">No se encontraron propuestas</p>
      </div>
    );
  }

  return (
    <PropuestasGrid
      propuestas={propuestasExportaciones.propuestas}
      title="Propuestas para Exportaciones"
      subtitle="Descubre las propuestas de los diferentes partidos políticos para fomentar las exportaciones bolivianas"
    />
  );
}
