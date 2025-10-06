"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Calendario Electoral", href: "/#timeline" },
  { name: "Candidaturas", href: "/#parties" },
  { name: "Evaluación Técnica", href: "/analisis-comparativo" },
  { name: "Quienes somos", href: "/about" },
  { name: "TSE", href: "https://www.oep.org.bo/" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Efecto para cerrar el menú con la tecla Escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    // Agregar el event listener cuando el menú está abierto
    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscapeKey)
      // Prevenir scroll del body cuando el menú está abierto
      document.body.style.overflow = 'hidden'
    } else {
      // Restaurar scroll del body cuando el menú se cierra
      document.body.style.overflow = 'unset'
    }

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleLinkClick = (href: string) => {
    setIsMenuOpen(false);
    
    // Si es un enlace externo, dejarlo funcionar normalmente
    if (href.startsWith('http')) {
      return;
    }
    
    // Si es un enlace con hash (anchor), hacer scroll suave
    if (href.startsWith('/#')) {
      setTimeout(() => {
        const targetId = href.substring(2); // Remover '/#'
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' 
          });
        }
      }, 300); // Aumenté el delay para dar tiempo al menú a cerrarse
    }
  };

  return (    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between py-5">          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group">
            <Image
              src="/logo3.svg"
              alt="Chequea tu Voto Logo"
              width={110}
              height={32}
              className="h-auto w-[140px] object-contain transition-transform duration-300 -mt-4 group-hover:scale-105"
              priority
            />            {/* Underline con colores de Bolivia */}
            <div className="flex w-[120px] h-[5px] -mt-7 rounded-full overflow-hidden shadow-md border border-gray-200/50">
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-yellow-500"></div>
              <div className="flex-1 bg-green-600"></div>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => handleLinkClick(item.href)}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Cheki-Bot Button */}
            <Link
              href="https://chekibot.chequeabolivia.bo/"
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#de2488] to-[#00cfaf] text-white font-semibold rounded-md hover:from-purple-700 hover:to-blue-700 transition-all duration-600 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Image
                src="/images/cheki.jpg"
                alt="Cheki Bot"
                width={28}
                height={28}
                className="rounded-full object-cover"
              />
              <span className="text-sm">Cheki-Bot</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200 ease-in-out"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
              <div className="relative w-6 h-6">
                <X 
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
                  }`} 
                  aria-hidden="true" 
                />
                <Menu 
                  className={`absolute inset-0 h-6 w-6 transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
                  }`} 
                  aria-hidden="true" 
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        } md:hidden fixed inset-0 z-40 bg-black/20 backdrop-blur-sm transition-all duration-300 ease-in-out`} 
        onClick={() => setIsMenuOpen(false)}
        onTouchStart={() => setIsMenuOpen(false)}
      />
      
      {/* Mobile Menu */}
      <div className={`${
        isMenuOpen ? "translate-y-0 opacity-100 visible" : "-translate-y-full opacity-0 invisible"
      } md:hidden absolute top-full left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90 border-b border-border/40 shadow-lg transform transition-all duration-300 ease-in-out`}>
        <div 
          className="space-y-1 px-4 pb-6 pt-4 sm:px-6"
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-all duration-200 ease-in-out transform ${
                isMenuOpen 
                  ? "translate-x-0 opacity-100" 
                  : "translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms"
              }}
              onClick={() => handleLinkClick(item.href)}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.name}
            </Link>
          ))}
          
          {/* Cheki-Bot Button - Mobile */}
          <Link
            href="#"
            className={`flex items-center gap-3 mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg transform ${
              isMenuOpen 
                ? "translate-x-0 opacity-100" 
                : "translate-x-4 opacity-0"
            }`}
            style={{
              transitionDelay: isMenuOpen ? `${navItems.length * 50}ms` : "0ms"
            }}
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/images/cheki.jpg"
              alt="Cheki Bot"
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span>Cheki-Bot</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

