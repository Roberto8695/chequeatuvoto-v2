import React from "react";
import { motion } from "framer-motion";

interface FloatingActionButtonProps {
  onBack?: () => void;
  showBack?: boolean;
  onHome?: () => void;
  showHome?: boolean;
}

const HomeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const ArrowLeftIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({
  onBack,
  showBack = false,
  onHome,
  showHome = false
}) => {
  if (!showBack && !showHome) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {showBack && onBack && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onBack}
          className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
        >
          <ArrowLeftIcon className="h-6 w-6" />
        </motion.button>
      )}
      
      {showHome && onHome && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={onHome}
          className="w-14 h-14 bg-gray-600 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors flex items-center justify-center"
        >
          <HomeIcon className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
};

export default FloatingActionButton;
