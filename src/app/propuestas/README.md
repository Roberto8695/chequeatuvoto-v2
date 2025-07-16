# Página de Propuestas - Componentes

## Descripción

La página de propuestas es un sistema interactivo y responsive que permite navegar por los ejes principales de gobierno, sus sub-ejes y propuestas específicas. Está optimizada para dispositivos móviles y desktop.

## Características

### 🎨 Diseño Responsive
- **Desktop**: Grid de 3 columnas para ejes principales, 2 columnas para sub-ejes
- **Tablet**: Grid de 2 columnas adaptativo
- **Mobile**: Grid de 1 columna con navegación optimizada

### 🔄 Navegación Intuitiva
- **Breadcrumb**: Navegación visual en desktop y mobile
- **Botón Flotante (FAB)**: Navegación rápida en mobile
- **Animaciones**: Transiciones suaves entre vistas

### 📱 Optimización Mobile
- **Touch-friendly**: Botones y tarjetas optimizadas para touch
- **Breadcrumb móvil**: Navegación horizontal scrolleable
- **FAB**: Botones flotantes para volver y ir al inicio

## Componentes

### 1. PropuestaCard
Tarjeta reutilizable con tres variantes:
- `primary`: Para ejes principales (azul)
- `secondary`: Para sub-ejes (verde)  
- `proposal`: Para propuestas (púrpura)

### 2. MobileBreadcrumb
Navegación breadcrumb optimizada para mobile con scroll horizontal.

### 3. FloatingActionButton
Botones flotantes para navegación rápida en mobile.

## Estructura de Datos

```typescript
interface Plan {
  id: string;
  name: string;
  icon: string;
  subplans: SubPlan[];
  position: Position;
}

interface SubPlan {
  id: string;
  name: string;
  proposals: Proposal[];
  position: Position;
}

interface Proposal {
  id: string;
  text: string;
  candidateResponses: CandidateResponse;
  position?: Position;
}
```

## Ejes Implementados

1. **REACTIVACIÓN ECONÓMICA Y ROL DEL ESTADO** 💰
   - 8 sub-ejes: Exportaciones, Bonos, Banca, etc.

2. **ENERGÍA E HIDROCARBUROS** ⚡
   - 2 sub-ejes: Combustible, Generación Energética

3. **BOSQUES Y CRISIS AMBIENTAL** 🌳
   - 3 sub-ejes: Incendios, Preservación, Pueblos Indígenas

4. **TRANSFORMACIÓN EDUCATIVA** 📚
   - 3 sub-ejes: Infraestructura, Contenido, Programas

5. **JUSTICIA** ⚖️
   - 6 sub-ejes: Reforma Judicial, Independencia, Corrupción, etc.

6. **SALUD** 🏥
   - 3 sub-ejes: Sistema, Digitalización, Descentralización

## Uso

```tsx
import PropuestasPage from '@/app/propuestas/page';

// La página se usa directamente como ruta
// /propuestas - Muestra todos los ejes principales
// Navegación por click en las tarjetas
```

## Tecnologías Usadas

- **React 18**: Componentes funcionales con hooks
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utility-first
- **Framer Motion**: Animaciones y transiciones
- **Next.js 13+**: App Router y "use client"

## Responsividad

### Desktop (lg+)
- Grid 3 columnas para ejes principales
- Header con breadcrumb completo
- Hover effects y transiciones suaves

### Tablet (md)
- Grid 2 columnas adaptativo
- Breadcrumb parcial
- Touch-friendly

### Mobile (sm)
- Grid 1 columna
- Breadcrumb móvil scrolleable
- FAB para navegación rápida
- Gestos touch optimizados

## Personalización

### Colores
- Primary: `blue-600` (ejes principales)
- Secondary: `green-600` (sub-ejes)
- Accent: `purple-600` (propuestas)

### Animaciones
- Entrada: `opacity + translateY`
- Duración: `0.3s` con `easeInOut`
- Delay escalonado: `0.1s` por elemento

### Espaciado
- Padding: `p-6` para tarjetas
- Margin: `mb-4` para secciones
- Gap: `gap-6` para grids
