"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isErrorPage, setIsErrorPage] = useState(false);
  
  const isPropuestasPage = pathname?.startsWith('/propuestas');
  
  // Detección de páginas 404
  const is404Page = pathname === '/404' || 
                    pathname?.includes('/not-found') || 
                    pathname?.includes('404');

  // Verificar si el contenido es una página de error usando el DOM
  useEffect(() => {
    const checkForErrorPage = () => {
      // Buscar la clase específica que agregamos a las páginas 404
      const errorPageElement = document.querySelector('.error-404-page');
      setIsErrorPage(!!errorPageElement);
    };

    // Verificar después del renderizado
    const timer = setTimeout(checkForErrorPage, 50);
    
    // También verificar en cambios de ruta
    checkForErrorPage();

    return () => clearTimeout(timer);
  }, [children, pathname]);

  // Verificar si algún hijo contiene el componente NotFound
  const hasNotFoundComponent = React.Children.toArray(children).some((child: React.ReactNode) => {
    // Verificar si el child es un ReactElement
    if (React.isValidElement(child)) {
      const childType = child.type as { displayName?: string; name?: string } | string;
      
      if (typeof childType === 'object' && childType !== null) {
        return childType.displayName === 'NotFound' || childType.name === 'NotFound';
      }
    }
    
    // Verificar en el string representation
    const childString = child?.toString() || '';
    return childString.includes('NotFound') || childString.includes('404');
  });

  // Si es página de propuestas, 404, o página de error, renderizar sin layout
  if (isPropuestasPage || is404Page || hasNotFoundComponent || isErrorPage) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
