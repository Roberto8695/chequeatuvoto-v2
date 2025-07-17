# Componentes de Propuestas con Evervault

Este documento explica cómo usar los componentes dinámicos creados para mostrar propuestas de partidos políticos con efectos evervault.

## Componentes Disponibles

### 1. `PartidoPropuestaCard`

Un componente que muestra una tarjeta individual de un partido político con su propuesta, usando efectos evervault.

**Ubicación:** `src/components/propuestas/PartidoPropuestaCard.tsx`

**Props:**
- `partido`: Objeto del tipo `Partido` con información del partido
- `propuesta`: String con la propuesta del partido (puede ser null)
- `className`: Clases CSS adicionales (opcional)

**Ejemplo de uso:**
```tsx
import { PartidoPropuestaCard } from "@/components/propuestas/PartidoPropuestaCard";
import { partidos } from "@/data/proposals";

const partido = partidos[0];
const propuesta = "Esta es una propuesta de ejemplo";

<PartidoPropuestaCard
  partido={partido}
  propuesta={propuesta}
  className="w-full max-w-sm"
/>
```

### 2. `PropuestasGrid`

Un componente que muestra una cuadrícula de propuestas de múltiples partidos políticos.

**Ubicación:** `src/components/propuestas/PropuestasGrid.tsx`

**Props:**
- `propuestas`: Array de objetos con `partidoId` y `propuesta`
- `title`: Título de la sección (opcional)
- `subtitle`: Subtítulo de la sección (opcional)
- `className`: Clases CSS adicionales (opcional)

**Ejemplo de uso:**
```tsx
import { PropuestasGrid } from "@/components/propuestas/PropuestasGrid";

const propuestas = [
  { partidoId: "mas-ipsp", propuesta: "Propuesta del MAS" },
  { partidoId: "apb-sumate", propuesta: "Propuesta de APB" },
  // ... más propuestas
];

<PropuestasGrid
  propuestas={propuestas}
  title="Propuestas Económicas"
  subtitle="Comparación de propuestas económicas de todos los partidos"
/>
```

### 3. `ProposalModal`

Modal actualizado que usa `PartidoPropuestaCard` para mostrar propuestas de manera responsiva.

**Ubicación:** `src/components/proposal-modal.tsx`

**Características:**
- Vista de cuadrícula en escritorio (3 columnas)
- Vista de carrusel en móvil
- Usa `PartidoPropuestaCard` para cada partido
- Animaciones suaves con Framer Motion

### 4. `EvervaultCardDemo`

Página de demostración que muestra diferentes usos de los componentes.

**Ubicación:** `src/app/components/evervault.tsx`

**Incluye:**
- Ejemplo de componente individual
- Ejemplo del componente original
- Grid de múltiples partidos

## Estructura de Datos

### Tipo `Partido`
```typescript
interface Partido {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  color: string;
  president: string;
  vicepresident: string;
}
```

### Tipo `PropuestaPartido`
```typescript
interface PropuestaPartido {
  partidoId: string;
  propuesta: string | null;
}
```

## Características Clave

### 1. **Efectos Evervault**
- Animaciones suaves al hacer hover
- Efectos de partículas dinámicas
- Colores personalizados por partido

### 2. **Datos Dinámicos**
- Se integra con `partidos-politicos.ts` para obtener datos reales
- Logos y colores de partidos reales
- Imágenes de candidatos incluidas

### 3. **Diseño Responsivo**
- Cuadrícula adaptable en escritorio
- Carrusel en dispositivos móviles
- Optimizado para diferentes tamaños de pantalla

### 4. **Animaciones**
- Transiciones suaves con Framer Motion
- Efectos de entrada escalonados
- Animaciones de hover interactivas

## Páginas de Ejemplo

### 1. `/ejemplo-propuestas`
Página que muestra un ejemplo completo de `PropuestasGrid` con propuestas de exportaciones.

### 2. Página de Evervault Demo
Accesible desde `/components/evervault`, muestra diferentes implementaciones.

## Instalación y Uso

1. **Importar los componentes:**
```tsx
import { PartidoPropuestaCard } from "@/components/propuestas/PartidoPropuestaCard";
import { PropuestasGrid } from "@/components/propuestas/PropuestasGrid";
```

2. **Usar con datos reales:**
```tsx
import { partidos, proposalsData } from "@/data/proposals";

// Obtener propuestas de un tema específico
const propuestasEconomia = proposalsData.find(plan => plan.id === "economia");
const exportaciones = propuestasEconomia?.subplans.find(sub => sub.id === "exportaciones");

// Usar en el componente
<PropuestasGrid
  propuestas={exportaciones?.propuestas || []}
  title="Propuestas de Exportaciones"
/>
```

## Personalización

### Colores
Los colores se toman automáticamente de los datos de los partidos en `partidos-politicos.ts`.

### Estilos
Se puede personalizar usando las clases de Tailwind CSS mediante la prop `className`.

### Animaciones
Las animaciones se pueden ajustar modificando las configuraciones de Framer Motion en cada componente.

## Notas Técnicas

- Los componentes están optimizados para Next.js 13+ con App Router
- Usa TypeScript para type safety
- Integrado con Tailwind CSS para estilos
- Animaciones con Framer Motion
- Imágenes optimizadas con Next.js Image

## Troubleshooting

### Errores comunes:
1. **Imágenes no se cargan**: Verificar que las rutas en `partidos-politicos.ts` sean correctas
2. **Tipos TypeScript**: Asegurar que los tipos `Partido` y `PropuestaPartido` estén correctamente importados
3. **Animaciones no funcionan**: Verificar que Framer Motion esté instalado y configurado

### Debugging:
- Usar React DevTools para inspeccionar props
- Verificar la consola para errores de importación
- Comprobar que los datos de partidos estén correctamente mapeados
