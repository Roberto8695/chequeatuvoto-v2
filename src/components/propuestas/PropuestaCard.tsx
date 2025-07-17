"use client";

import React from "react";
import { motion } from "framer-motion";

interface PropuestaCardProps {
  title: string;
  description?: string;
  icon?: string;
  count?: number;
  countLabel?: string;
  onClick?: () => void;
  index?: number;
  variant?: "primary" | "secondary" | "proposal";
  children?: React.ReactNode;
}

export const PropuestaCard: React.FC<PropuestaCardProps> = ({
  title,
  description,
  icon,
  count,
  countLabel,
  onClick,
  index = 0,
  variant = "primary",
  children
}) => {
  const baseClasses = "bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-200";
  
  const variantClasses = {
    primary: "hover:border-blue-300",
    secondary: "hover:border-green-300", 
    proposal: "hover:border-purple-300"
  };

  const iconColors = {
    primary: "group-hover:text-blue-600",
    secondary: "group-hover:text-green-600",
    proposal: "group-hover:text-purple-600"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${onClick ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          {icon && (
            <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
              {icon}
            </div>
          )}
          {count !== undefined && (
            <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
              {count} {countLabel}
            </div>
          )}
        </div>
        
        <h3 className={`text-xl font-semibold text-gray-900 mb-3 transition-colors ${iconColors[variant]}`}>
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3">
            {description}
          </p>
        )}

        {children}
      </div>
    </motion.div>
  );
};

export default PropuestaCard;
