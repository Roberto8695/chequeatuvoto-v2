"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SubPlan, partidos, Partido } from "@/data/proposals";
import { PartidoPropuestaCard } from "./propuestas/PartidoPropuestaCard";

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  subPlan: SubPlan | null;
}

interface PartidoConPropuesta {
  partidoId: string;
  propuesta: string | null;
  partido?: Partido;
}

export function ProposalModal({ isOpen, onClose, subPlan }: ProposalModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!subPlan) return null;

  const getPartidoById = (id: string) => {
    return partidos.find(p => p.id === id);
  };

  const partidosConPropuestas: PartidoConPropuesta[] = subPlan.propuestas.map(propuesta => {
    const partido = getPartidoById(propuesta.partidoId);
    return {
      ...propuesta,
      partido
    };
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-black dark:bg-gray-900 rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-white dark:text-white">
                {subPlan.name}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-white dark:text-white hover:text-black" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {isMobile ? (
                // Mobile: Carousel view
                <MobileCarousel partidosConPropuestas={partidosConPropuestas} />
              ) : (
                // Desktop: 3-column grid
                <DesktopGrid partidosConPropuestas={partidosConPropuestas} />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DesktopGrid({ partidosConPropuestas }: { partidosConPropuestas: PartidoConPropuesta[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {partidosConPropuestas.map((item, index) => (
        <motion.div
          key={item.partidoId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="h-full"
        >
          {item.partido && (
            <PartidoPropuestaCard
              partido={item.partido}
              propuesta={item.propuesta}
              className="h-full max-w-none"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}

function MobileCarousel({ partidosConPropuestas }: { partidosConPropuestas: PartidoConPropuesta[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % partidosConPropuestas.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + partidosConPropuestas.length) % partidosConPropuestas.length);
  };

  const currentItem = partidosConPropuestas[currentIndex];

  return (
    <div className="relative">
      {/* Indicators */}
      <div className="flex justify-center mb-4">
        <div className="flex space-x-2">
          {partidosConPropuestas.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-blue-600"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current Card */}
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="flex justify-center"
      >
        {currentItem.partido && (
          <PartidoPropuestaCard
            partido={currentItem.partido}
            propuesta={currentItem.propuesta}
            className="w-full max-w-sm"
          />
        )}
      </motion.div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          disabled={partidosConPropuestas.length <= 1}
        >
          Anterior
        </button>
        
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {currentIndex + 1} de {partidosConPropuestas.length}
        </span>
        
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          disabled={partidosConPropuestas.length <= 1}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
