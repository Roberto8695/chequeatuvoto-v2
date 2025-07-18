"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, FileText } from "lucide-react";
import Image from "next/image";
import { Partido } from "@/data/proposals";

interface PropuestaModalProps {
  isOpen: boolean;
  onClose: () => void;
  partido: Partido;
  propuesta: string | null;
}

export function PropuestaModal({ isOpen, onClose, partido, propuesta }: PropuestaModalProps) {
  return (
    <AnimatePresence initial={false} mode="wait">
      {isOpen && (
        <motion.div key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div key="content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-white/10">
            <div className="flex items-center">
              <div className="w-12 h-12  mr-3 relative overflow-hidden">
                <Image
                  src={partido.logo}
                  alt={partido.shortName}
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">
                  {partido.shortName}
                </h2>
                <p className="text-sm text-white/80">
                  {partido.name}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Candidatos */}
            

            {/* Propuesta */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Propuestas
              </h3>
              
              {propuesta ? (
                <div className="bg-slate-800/50 rounded-lg p-4 border border-white/10">
                  <p className="text-white/90 leading-relaxed">
                    {propuesta}
                  </p>
                </div>
              ) : (
                <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-white/10">
                  <FileText className="w-12 h-12 mx-auto text-white/40 mb-2" />
                  <p className="text-white/60 font-medium">
                    No hay propuesta disponible
                  </p>
                  <p className="text-white/40 text-sm mt-1">
                    Este partido no ha presentado propuestas para este tema
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
    </AnimatePresence>
  );
}

export default PropuestaModal;
