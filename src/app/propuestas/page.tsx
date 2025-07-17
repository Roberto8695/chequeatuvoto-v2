"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { proposalsData, Plan, SubPlan } from "@/data/proposals";
import { ProposalModal } from "@/components/proposal-modal";

// Componentes de íconos personalizados
const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              {selectedPlan && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={handleBack}
                  className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                  <span>Volver</span>
                </motion.button>
              )}
              <h1 className="text-2xl font-bold text-gray-900">
                Propuestas de Gobierno
              </h1>
            </div>
            
            {/* Breadcrumb */}
            <div className="hidden md:flex items-center space-x-2 text-sm text-gray-500">
              <span>Propuestas</span>
              {selectedPlan && (
                <>
                  <ChevronRightIcon className="h-4 w-4" />
                  <span>{selectedPlan.name}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {!selectedPlan && (
            <motion.div
              key="main-plans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ejes Principales de Gobierno
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explora las principales áreas de propuestas gubernamentales. 
                  Selecciona un eje para ver los sub-ejes y propuestas específicas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {proposalsData.map((plan, index) => (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handlePlanClick(plan)}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-200"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                          {plan.icon}
                        </div>
                        <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                          {plan.subplans.length} sub-ejes
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {plan.name}
                      </h3>
                      
                      <div className="space-y-2 mb-4">
                        {plan.subplans.slice(0, 3).map((subplan) => (
                          <div key={subplan.id} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-gray-600 truncate">
                              {subplan.name}
                            </span>
                          </div>
                        ))}
                        {plan.subplans.length > 3 && (
                          <div className="text-sm text-gray-500 pl-4">
                            +{plan.subplans.length - 3} más...
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                          {plan.subplans.reduce((acc, subplan) => acc + subplan.propuestas.length, 0)} propuestas
                        </div>
                        <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {selectedPlan && (
            <motion.div
              key="sub-plans"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">{selectedPlan.icon}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedPlan.name}
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Explora los sub-ejes específicos de este eje principal. 
                  Cada sub-eje contiene propuestas detalladas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedPlan.subplans.map((subplan, index) => (
                  <motion.div
                    key={subplan.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleSubPlanClick(subplan)}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-200"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                            {subplan.name}
                          </h3>
                        </div>
                        <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full ml-4">
                          {subplan.propuestas.length} propuestas
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {subplan.propuestas.slice(0, 2).map((propuesta) => (
                          <div key={propuesta.partidoId} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2"></div>
                            <span className="text-sm text-gray-600">
                              {propuesta.propuesta ? propuesta.propuesta.substring(0, 100) + '...' : 'Sin propuesta'}
                            </span>
                          </div>
                        ))}
                        {subplan.propuestas.length > 2 && (
                          <div className="text-sm text-gray-500 pl-4">
                            +{subplan.propuestas.length - 2} partidos más...
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                        <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-green-500 transition-colors" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Modal */}
      <ProposalModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        subPlan={modalSubPlan}
      />
    </div>
  );
}
