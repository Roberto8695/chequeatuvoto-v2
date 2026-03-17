# Actualizaciones Nuevas - Candidaturas Subnacionales

Este documento resume unicamente los cambios nuevos realizados en esta etapa, indicando que se agrego, donde esta y como funciona.

## 1) Nuevas paginas por departamento

Se crearon paginas dedicadas para candidaturas subnacionales por departamento:

- `src/app/candidaturas-subnacionales/cochabamba/page.tsx`
- `src/app/candidaturas-subnacionales/la-paz/page.tsx`
- `src/app/candidaturas-subnacionales/santa-cruz/page.tsx`

### Como funciona

- Cada pagina usa el mismo lenguaje visual del proyecto (gradiente institucional, encabezado, contenedor central).
- Cada pagina reutiliza su componente existente de candidatos:
  - Cochabamba -> `CandidatosCochabamba`
  - La Paz -> `CandidatosLaPaz`
  - Santa Cruz -> `CandidatosSantaCruz`

## 2) Navegacion del header conectada a las nuevas paginas

Se actualizo el dropdown "Candidaturas Subnacionales" para que navegue a rutas reales por departamento.

Archivo modificado:

- `src/app/components/navbar.tsx`

### Como funciona

- Desktop y mobile apuntan a:
  - `/candidaturas-subnacionales/la-paz`
  - `/candidaturas-subnacionales/cochabamba`
  - `/candidaturas-subnacionales/santa-cruz`
- Al hacer click en mobile, se cierra el menu y submenu correctamente.

## 3) Se quitaron los bloques de candidaturas de la Home

Se removieron las tres secciones de candidatos por departamento de la pagina principal para evitar duplicacion con las nuevas paginas.

Archivo modificado:

- `src/app/page.tsx`

### Como funciona

- La Home ya no renderiza:
  - Candidatos Cochabamba
  - Candidatos Santa Cruz
  - Candidatos La Paz
- El acceso principal ahora es desde el dropdown del header.

## 4) Integracion de imagenes en tarjetas de candidatos

Se agregaron imagenes sobre el nombre en las tarjetas de candidatos.

Archivos modificados:

- `src/components/ui/candidatos-cochabamba.tsx`
- `src/components/ui/candidatos-la-paz.tsx`
- `src/components/ui/candidatos-santa-cruz.tsx`

### Como funciona

- Las imagenes se cargan desde `public/candidaturas_c/...`.
- La ruta se arma con el nombre del candidato y extension `.webp`.
- Se uso `object-contain` para mostrar la imagen completa (sin recorte).

Patron de ruta usado:

- `cochabamba/alcaldia|gorbernacion/{NOMBRE}.webp`
- `la_paz/alcaldia|gorbernacion/{NOMBRE}.webp`
- `santa cruz/alcaldia|gorbernacion/{NOMBRE}.webp`

## 5) Candidatos agregados desde archivos de imagen que no estaban listados

Se agregaron nombres nuevos que tenian archivo de imagen pero no estaban en los arrays del frontend.

Archivos modificados:

- `src/components/ui/candidatos-cochabamba.tsx`
- `src/components/ui/candidatos-la-paz.tsx`
- `src/components/ui/candidatos-santa-cruz.tsx`

### Como funciona

- Para estos nuevos registros se dejo `partido: ""` para completar manualmente despues.
- Con esto, ya aparecen en pantalla y pueden vincularse a su imagen correspondiente.

## 6) Correccion de errores de estructura/sintaxis

Se corrigieron errores en La Paz y Santa Cruz causados por objetos mal ubicados (fuera de arrays o dentro de JSX).

Archivos corregidos:

- `src/components/ui/candidatos-la-paz.tsx`
- `src/components/ui/candidatos-santa-cruz.tsx`

### Como funciona

- Los objetos de candidatos quedaron en sus arrays correctos.
- JSX limpio y compilacion sin errores en ambos archivos.

---

## Resumen rapido de impacto

- Se paso de un esquema centralizado en Home a paginas dedicadas por departamento.
- La navegacion del header ahora apunta a esas paginas.
- Las tarjetas de candidatos ahora muestran imagen completa encima del nombre.
- Se incorporaron candidatos faltantes detectados desde carpetas de imagen.
- Se dejaron partidos vacios solo en nuevos nombres para completar despues.
