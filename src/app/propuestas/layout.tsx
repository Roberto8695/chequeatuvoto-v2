import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Propuestas de Gobierno - Chequea tu Voto',
  description: 'Explora las propuestas de gobierno organizadas por ejes temáticos. Compara las posiciones de los candidatos en temas clave.',
  keywords: ['propuestas', 'gobierno', 'candidatos', 'elecciones', 'bolivia'],
}

export default function PropuestasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
