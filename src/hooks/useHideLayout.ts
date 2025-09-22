import { useEffect } from 'react';

export function useHideLayout() {
  useEffect(() => {
    // Agregar clase al body para identificar páginas de error
    document.body.classList.add('error-page-active');
    
    // Ocultar elementos de navegación existentes
    const hideElements = () => {
      const elementsToHide = document.querySelectorAll('nav, header, footer');
      elementsToHide.forEach(element => {
        if (!element.closest('.error-404-page')) {
          (element as HTMLElement).style.display = 'none';
        }
      });
    };

    // Ejecutar inmediatamente y después de un delay para asegurar
    hideElements();
    const timer = setTimeout(hideElements, 100);

    // Limpiar al desmontar
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('error-page-active');
      
      // Restaurar elementos ocultos
      const elementsToShow = document.querySelectorAll('nav, header, footer');
      elementsToShow.forEach(element => {
        (element as HTMLElement).style.display = '';
      });
    };
  }, []);
}