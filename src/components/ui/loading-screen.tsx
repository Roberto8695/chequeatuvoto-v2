"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Dar un poco más de tiempo para la animación de salida
      setTimeout(() => {
        onLoadingComplete();
      }, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Logo con animación de pulso */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#de2488] to-[#00cfaf] rounded-full animate-ping opacity-30"></div>
          <div className="relative bg-white rounded-full p-4 shadow-2xl">
            <Image
              src="/logo3.svg"
              alt="Chequea tu Voto Logo"
              width={120}
              height={120}
              className="animate-pulse"
              priority
            />
          </div>
        </div>

        {/* Texto de carga */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-[#de2488] to-[#00cfaf] bg-clip-text text-transparent">
            Chequea tu Voto
          </h2>
          <p className="text-gray-600 animate-pulse">
            Cargando...
          </p>
        </div>

        {/* Barra de progreso animada */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#de2488] to-[#00cfaf] rounded-full animate-pulse"
            style={{
              animation: 'loadingBar 2.5s ease-in-out forwards'
            }}
          ></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
