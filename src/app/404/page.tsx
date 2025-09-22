'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Home, ArrowLeft, AlertTriangle, Vote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useHideLayout } from '@/hooks/useHideLayout';
import Image from 'next/image';

function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Hook para ocultar navbar y footer
  useHideLayout();

  // Función de redirección usando useCallback
  const handleAutoRedirect = useCallback(() => {
    setIsRedirecting(true);
    // Usar setTimeout para evitar el error de setState durante el render
    setTimeout(() => {
      router.push('/');
    }, 0);
  }, [router]);

  // Countdown automático para redirección
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleAutoRedirect();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [handleAutoRedirect]);

  const handleGoHome = useCallback(() => {
    setIsRedirecting(true);
    setTimeout(() => {
      router.push('/');
    }, 0);
  }, [router]);

  const handleGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return (
    <div className="error-404-page h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Efectos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-20 w-16 h-16 bg-purple-200/30 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-200/30 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 right-1/3 w-14 h-14 bg-indigo-200/30 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center h-full">
        {/* Logo de la aplicación - más compacto */}
        <div className="mb-6">
          <div className="relative w-16 h-16 mx-auto mb-2">
            <Image
              src="/logo3.svg"
              alt="Chequea tu voto"
              fill
              className="object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/logo.png';
              }}
            />
          </div>
          <h1 className="text-xl font-bold text-gray-800 font-secondary">
            Chequea tu voto
          </h1>
        </div>

        {/* Contenedor principal del error - más compacto */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20 w-full max-w-3xl">
          {/* Icono de error - más compacto */}
          <div className="relative mb-4">
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-red-100 to-orange-100 rounded-full flex items-center justify-center shadow-lg">
              <AlertTriangle className="w-12 h-12 text-red-500" />
            </div>
            {/* Efectos decorativos alrededor del icono */}
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full opacity-70 animate-ping"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-blue-300 rounded-full opacity-70 animate-pulse delay-500"></div>
          </div>

          {/* Título del error - más compacto */}
          <h1 className="text-5xl sm:text-6xl font-bold text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text mb-3">
            404
          </h1>

          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 font-secondary">
            ¡Ups! Página no encontrada
          </h2>

          <p className="text-base text-gray-600 mb-6 max-w-xl mx-auto leading-relaxed">
            La página que estás buscando no existe o ha sido movida. 
            No te preocupes, puedes regresar al inicio para continuar informándote sobre los candidatos y el proceso electoral.
          </p>

          {/* Contador de redirección - más compacto */}
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full border border-blue-200">
              <Vote className="w-4 h-4 text-blue-600" />
              <span className="text-blue-800 font-medium text-sm">
                {isRedirecting ? (
                  "Redirigiendo..."
                ) : (
                  <>Redirección automática en <span className="font-bold text-blue-600">{countdown}</span>s</>
                )}
              </span>
            </div>
          </div>

          {/* Botones de acción - más compactos */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6">
            <Button
              onClick={handleGoHome}
              disabled={isRedirecting}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white font-bold px-6 py-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center space-x-2 text-base min-w-[160px]"
            >
              <Home className="w-4 h-4" />
              <span>{isRedirecting ? 'Redirigiendo...' : 'Ir al Inicio'}</span>
            </Button>

            <Button
              onClick={handleGoBack}
              disabled={isRedirecting}
              variant="outline"
              className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 font-bold px-6 py-2 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 flex items-center space-x-2 text-base min-w-[160px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver Atrás</span>
            </Button>
          </div>

          {/* Enlaces útiles - más compactos */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-base font-semibold text-gray-800 mb-3">
              ¿Buscabas información sobre...?
            </h3>
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              <button
                onClick={() => setTimeout(() => router.push('/#parties'), 0)}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors duration-200 text-xs font-medium"
              >
                Candidatos
              </button>
              <button
                onClick={() => setTimeout(() => router.push('/#timeline'), 0)}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors duration-200 text-xs font-medium"
              >
                Cronograma Electoral
              </button>
              <button
                onClick={() => setTimeout(() => router.push('/#fake-news'), 0)}
                className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full hover:bg-pink-200 transition-colors duration-200 text-xs font-medium"
              >
                Noticias Falsas
              </button>
              <button
                onClick={() => setTimeout(() => router.push('/#political-parties'), 0)}
                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full hover:bg-indigo-200 transition-colors duration-200 text-xs font-medium"
              >
                Partidos Políticos
              </button>
            </div>

            {/* Mensaje motivacional - más compacto */}
            <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
              <div className="flex items-center justify-center space-x-2 mb-1">
                <Vote className="w-4 h-4 text-green-600" />
                <h4 className="font-bold text-green-800 text-sm">Tu voto es importante</h4>
              </div>
              <p className="text-green-700 text-xs">
                Mantente informado sobre el proceso electoral. La democracia se fortalece con ciudadanos bien informados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Añadir displayName para mejor detección
NotFound.displayName = 'NotFound';

export default NotFound;
