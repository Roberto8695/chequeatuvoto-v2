
import fs from 'fs'
import path from 'path'

// Tamaño del icono
export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/svg+xml'

// Generar el icono
export default function Icon() {
  // Leer el archivo SVG
  const svgPath = path.join(process.cwd(), 'public', 'logo3.svg')
  const svgContent = fs.readFileSync(svgPath, 'utf8')
  
  return new Response(svgContent, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  })
}
