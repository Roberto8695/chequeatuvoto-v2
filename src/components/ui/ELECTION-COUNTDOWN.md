# Election Countdown - Documentación de Ajustes

## Archivo: `election-countdown.tsx`

### Descripción
Componente de cuenta regresiva para las elecciones subnacionales del 22 de marzo de 2026. Muestra días, horas, minutos y segundos restantes en tiempo real.

---

## Historial de Cambios

### 1. Creación Inicial (Versión Simple)
**Fecha:** 4 de marzo, 2026

**Características iniciales:**
- Contador básico con 4 columnas (días, horas, minutos, segundos)
- Diseño minimalista con colores suaves
- Fondo glassmorphism con `backdrop-blur-md`
- Colores: gradientes sutiles de `#de2488` y `#00cfaf`
- Tamaño de números: `text-2xl`
- Sin efectos hover especiales

---

### 2. Rediseño Visual Llamativo (Versión Final)
**Fecha:** 4 de marzo, 2026

**Mejoras implementadas:**

#### Estructura Visual
- **Fondo mejorado:** Gradiente de `from-[#de2488]/20 via-white/90 to-[#00cfaf]/20`
- **Elementos decorativos animados:**
  - Círculos difuminados en esquinas con efecto `blur-2xl`
  - Hover con escala 150% (`group-hover:scale-150`)
  - 3 puntos pulsantes en esquina superior derecha

#### Header
- Icono de calendario en caja con gradiente rosa
- Icono de reloj en caja con gradiente teal, con animación `animate-pulse`
- Título en mayúsculas con tracking amplio
- Fecha "22 de Marzo, 2026" debajo del título

#### Contador (Grid de 4 columnas)
- **Números grandes:** `text-4xl` con `font-black`
- **Efecto de profundidad:** Números con sombra duplicada usando `absolute` overlay con blur
- **Cajas alternadas:**
  - Días: Gradiente rosa `from-[#de2488]/95 to-[#de2488]/85`
  - Horas: Gradiente teal `from-[#00cfaf]/95 to-[#007e6a]/85`
  - Minutos: Gradiente rosa
  - Segundos: Gradiente teal con `animate-pulse`
- **Efectos hover:** Cada caja tiene:
  - `transform scale-105` al hacer hover
  - Sombra exterior con blur que aumenta opacidad
  - Transición suave de 300ms

#### Footer
- Línea decorativa con texto "Día de votación subnacional"
- Iconos `Sparkles` de lucide-react en colores rosa y teal

---

## Integración

### Ubicación en Hero Section
**Archivo:** `src/components/ui/hero-section.tsx`

**Posición:** Después de los badges y antes del mapa de Bolivia
```tsx
<div className="flex flex-wrap gap-3">
  {/* 3 badges */}
</div>

<ElectionCountdown />
```

**Reemplazó:** Las 2 tarjetas de información (Participación y Observación) que fueron removidas

---

## Ajustes Relacionados - Mapa de Bolivia

### Archivo: `map-bolivia.tsx`

#### Primera versión (colores básicos)
- Departamentos clicables: `#00cfaf` (teal original)
- Hover: `#de2488` (rosa)

#### Segunda versión (color más suave) - VERSIÓN ACTUAL
- Departamentos clicables: `#7ee8d8` (teal más claro y suave)
- Hover: `#de2488` (rosa, sin cambios)
- Resto de departamentos: `#c5e5ff` (azul clarito)

**Mejoras visuales en departamentos clicables:**
- Bordes más gruesos: `stroke-width: 1.8`
- Drop shadow: `drop-shadow(0 2px 4px rgba(0, 207, 175, 0.3))`
- Hover con zoom: `transform: scale(1.02)`
- Drop shadow en hover aumentado

---

## Colores de Línea Gráfica Utilizados

| Color | Hex | Uso |
|-------|-----|-----|
| Rosa primario | `#de2488` | Días, minutos, hover, iconos |
| Teal primario | `#00cfaf` / `#007e6a` | Horas, segundos, iconos |
| Teal claro | `#7ee8d8` | Mapa (departamentos clicables) |
| Blanco | `#ffffff` | Texto sobre fondos de color |
| Slate | `#0f172a` - `#64748b` | Textos y labels |

---

## Dependencias

- **React hooks:** `useState`, `useEffect`
- **Iconos:** `lucide-react` (Calendar, Clock, Sparkles)
- **Estilos:** Tailwind CSS con clases personalizadas

---

## Notas de Implementación

1. **Timezone:** El countdown usa `'2026-03-22T00:00:00-04:00'` (hora de Bolivia)
2. **Loading state:** Skeleton con animación pulse mientras monta el componente
3. **Actualización:** `setInterval` cada 1000ms (1 segundo)
4. **Cleanup:** `clearInterval` en el return del useEffect
5. **Responsive:** Grid de 4 columnas que se adapta automáticamente
