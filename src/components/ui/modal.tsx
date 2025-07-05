'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
}

export default function Modal({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  maxWidth = 'xl' 
}: ModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isMounted) {
    return null;
  }

  if (!isOpen) {
    return null;
  }

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl'
  };

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div 
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      />
      
      <div className={`relative bg-white rounded-2xl shadow-2xl ${maxWidthClasses[maxWidth]} w-full max-h-[90vh] overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300`}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          {title && (
            <h2 className="text-xl font-bold text-gray-900">
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
