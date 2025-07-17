"use client";

import React from "react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}

interface MobileBreadcrumbProps {
  items: BreadcrumbItem[];
}

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export const MobileBreadcrumb: React.FC<MobileBreadcrumbProps> = ({ items }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="md:hidden bg-gray-50 px-4 py-2 border-b border-gray-200"
    >
      <div className="flex items-center space-x-2 text-sm text-gray-600 overflow-x-auto">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <ChevronRightIcon className="h-4 w-4 flex-shrink-0" />}
            <span 
              className={`whitespace-nowrap ${
                item.onClick ? 'text-blue-600 cursor-pointer' : 'text-gray-900'
              }`}
              onClick={item.onClick}
            >
              {item.label}
            </span>
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

export default MobileBreadcrumb;
