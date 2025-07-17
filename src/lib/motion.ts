// Archivo centralizado para exportaciones de framer-motion
// Esto ayuda a evitar problemas con "export *" en client boundaries

"use client";

import { 
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
  type MotionValue
} from "framer-motion";

export {
  motion,
  AnimatePresence,
  useMotionValue,
  useMotionTemplate,
  type MotionValue
};

// Re-exportar componentes motion comunes
export const MotionDiv = motion.div;
export const MotionButton = motion.button;
export const MotionSection = motion.section;
export const MotionSpan = motion.span;
export const MotionArticle = motion.article;
