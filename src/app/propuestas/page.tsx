"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plan, SubPlan } from "@/data/proposals";
import { ProposalModal } from "@/components/proposal-modal";
import { ArrowLeft } from "lucide-react";
import { LampDemo } from "../components/lamp-section-header";
// Componentes de íconos personalizados
const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default function PropuestasPage() {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSubPlan, setModalSubPlan] = useState<SubPlan | null>(null);

  const handlePlanClick = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleSubPlanClick = (subPlan: SubPlan) => {
    setModalSubPlan(subPlan);
    setModalOpen(true);
  };

  const handleBack = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br  from-slate-900 via-slate-800 to-slate-900">
      {/* Botón flotante para volver */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => window.history.back()}
        className="fixed top-6 left-6 z-50 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 border border-white/20 hover:border-white/30"
      >
        <ArrowLeft className="h-6 w-6" />
      </motion.button>

      <AnimatePresence mode="wait">
        {!selectedPlan && (
          <motion.div
            key="main-plans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {/* LampDemo con tarjetas integradas */}
            <LampDemo onPlanClick={handlePlanClick} />
          </motion.div>
        )}

        {selectedPlan && (
          <motion.div
            key="sub-plans-container"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen flex flex-col justify-center items-center p-8 py-20"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl mb-4"
              >
                {selectedPlan.icon}
              </motion.div>
              
              <motion.h2 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                {selectedPlan.name}
              </motion.h2>
              
              <motion.p 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-white/80 max-w-3xl mx-auto mb-6"
              >
                Explora los sub-ejes específicos de este tema. 
                Cada tarjeta contiene las propuestas de los diferentes partidos políticos.
              </motion.p>

              {/* Botón para volver a los ejes principales */}
              <motion.button
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onClick={handleBack}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-white/20 hover:border-white/30 flex items-center gap-2 mx-auto"
              >
                <ArrowLeft className="h-4 w-4" />
                Volver a Ejes Principales
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl w-full">
              {selectedPlan.subplans.map((subplan, index) => (
                <motion.div
                  key={subplan.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  onClick={() => handleSubPlanClick(subplan)}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-6 cursor-pointer group border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                        {subplan.name}
                      </h3>
                    </div>
                    <div className="text-sm text-white/60 bg-white/10 px-3 py-1 rounded-full ml-4">
                      {subplan.propuestas.length} propuestas
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    {subplan.propuestas.slice(0, 2).map((propuesta) => (
                      <div key={propuesta.partidoId} className="bg-white/5 rounded-lg p-3">
                        <div className="text-white/60 text-xs mb-1">
                          Partido {propuesta.partidoId}
                        </div>
                        <div className="text-white/90 text-sm leading-relaxed">
                          {propuesta.propuesta ? 
                            propuesta.propuesta.substring(0, 100) + '...' : 
                            'Sin propuesta disponible'
                          }
                        </div>
                      </div>
                    ))}
                    {subplan.propuestas.length > 2 && (
                      <div className="text-white/50 text-sm text-center py-2">
                        +{subplan.propuestas.length - 2} propuestas más...
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="text-white/60 text-sm">
                      Ver detalles completos
                    </div>
                    <ChevronRightIcon className="h-5 w-5 text-white/40 group-hover:text-green-300 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <ProposalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subPlan={modalSubPlan}
      />
    </div>
  );
}
