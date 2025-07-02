"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Calendario Electoral", href: "/#timeline" },
  { name: "Candidaturas", href: "/#parties" },
  { name: "Quienes somos", href: "/about" },
  { name: "TSE", href: "https://www.oep.org.bo/" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-screen-lg px-2 sm:px-6 lg:px-6">
        <div className="flex h-18 items-center justify-between py-2">          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group">
            <Image
              src="/logo3.svg"
              alt="Chequea tu Voto Logo"
              width={120}
              height={32}
              className="h-auto w-[150px] object-contain transition-transform duration-300 group-hover:scale-105"
              priority
            />            {/* Underline con colores de Bolivia */}
            <div className="flex w-[120px] h-[5px] -mt-3 rounded-full overflow-hidden shadow-md border border-gray-200/50">
              <div className="flex-1 bg-red-600"></div>
              <div className="flex-1 bg-yellow-500"></div>
              <div className="flex-1 bg-green-600"></div>
            </div>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">{isMenuOpen ? "Close main menu" : "Open main menu"}</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="space-y-1 px-4 pb-3 pt-2 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

