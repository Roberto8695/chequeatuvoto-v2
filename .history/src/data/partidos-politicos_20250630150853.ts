// Tipos de datos para los partidos políticos
export interface PartidoPolitico {
  id: string;
  slug: string;
  nombre: string;
  sigla: string;
  presidente: string;
  vicepresidente: string;
  imagenes: {
    logo: string;
    presidente: string;
    vicepresidente: string;
    binomio?: string; // Imagen opcional del binomio juntos
  };
  colores?: {
    primary: string;
    secondary: string;
  };
  descripcion?: string;
  sitioWeb?: string;
}

// Datos de los partidos políticos
export const partidosPoliticos: PartidoPolitico[] = [
  {
    id: "1",
    slug: "alianza-popular",
    nombre: "Alianza Popular",
    sigla: "ALIANZA POPULAR",
    presidente: "Andronico Rodríguez",
    vicepresidente: "Mariana Prado",
    imagenes: {
      logo: "/binomios/mas/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/mas/presidente.png",
      vicepresidente: "/binomios/mas/vicepresidente.png",
    },
    colores: {
      primary: "#173983",
      secondary: "#ffffff",
    },
  },
  {
    id: "2",
    slug: "apb-sumate",
    nombre: "Autonomías para Bolivia - Súmate",
    sigla: "APB-SUMATE",
    presidente: "Manfred Reyes Villa",
    vicepresidente: "Juan Carlos Medrano",
    imagenes: {
      logo: "/binomios/mas/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/mas/presidente.png",
      vicepresidente: "/binomios/mas/vicepresidente.png",
    },
    colores: {
      primary: "#ff1616",
      secondary: "#ffffff",
    },
  },
  {
    id: "3",
    slug: "fri",
    nombre: "Frente Revolucionario de Izquierda",
    sigla: "FRI",
    presidente: "Jorge Tuto Quiroga",
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/binomios/mas/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/mas/presidente.png",
      vicepresidente: "/binomios/mas/vicepresidente.png",
    },
    colores: {
      primary: "#ff0000",
      secondary: "#05387a",
    },
  },
  {
    id: "4",
    slug: "mas-ipsp",
    nombre: "Movimiento al Socialismo - Instrumento Político por la Soberanía de los Pueblos",
    sigla: "MAS-IPSP",
    presidente: "Eduardo Del Castillo",
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/binomios/mas/logo.png",
      presidente: "/binomios/mas/presidente.png",
      vicepresidente: "/binomios/mas/vicepresidente.png",
    },
    colores: {
      primary: "#1E40AF",
      secondary: "#FEF3C7",
    },
  },
  {
    id: "5",
    slug: "morena",
    nombre: "Movimiento de Regeneración Nacional",
    sigla: "MORENA",
    presidente: "Eva Copa",
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/binomios/mas/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/mas/presidente.png",
      vicepresidente: "/binomios/mas/vicepresidente.png",
    },
    colores: {
      primary: "#7C2D12",
      secondary: "#FEF3C7",
    },
  },
  {
    id: "6",
    slug: "pdc",
    nombre: "Partido Demócrata Cristiano",
    sigla: "PDC",
    presidente: "Rodrigo Paz Pereira",
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/binomios/mas/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/mas/presidente.png",
      vicepresidente: "/binomios/mas/vicepresidente.png",
    },
    colores: {
      primary: "#059669",
      secondary: "#FFFFFF",
    },
  },
  {
    id: "7",
    slug: "ucs",
    nombre: "Unidad Cívica Solidaridad",
    sigla: "UCS",
    presidente: "Jhonny Fernández",
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/binomios/mas/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/mas/presidente.png",
      vicepresidente: "/binomios/mas/vicepresidente.png",
    },
    colores: {
      primary: "#7C3AED",
      secondary: "#FFFFFF",
    },
  },
  {
    id: "8",
    slug: "un",
    nombre: "Unidad Nacional",
    sigla: "UN",
    presidente: "Samuel Doria Medina",
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/binomios/mas/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/mas/presidente.png",
      vicepresidente: "/binomios/mas/vicepresidente.png",
    },
    colores: {
      primary: "#EA580C",
      secondary: "#FFFFFF",
    },
  },
  {
    id: "9",
    slug: "ngp",
    nombre: "Nueva Generación Política",
    sigla: "NGP",
    presidente: "Jaime Dunn",
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/binomios/mas/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/mas/presidente.png",
      vicepresidente: "/binomios/mas/vicepresidente.png",
    },
    colores: {
      primary: "#0891B2",
      secondary: "#FFFFFF",
    },
  },
  {
    id: "10",
    slug: "adn",
    nombre: "Acción Democrática Nacionalista",
    sigla: "ADN",
    presidente: "A confirmar",
    vicepresidente: "A confirmar",
    imagenes: {
      logo: "/binomios/adn/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/adn/presidente.png",
      vicepresidente: "/binomios/adn/vicepresidente.png",
    },
    colores: {
      primary: "#991B1B",
      secondary: "#FFFFFF",
    },
  },
];

// Funciones auxiliares para trabajar con los datos
export const getPartidoBySlug = (slug: string): PartidoPolitico | undefined => {
  return partidosPoliticos.find(partido => partido.slug === slug);
};

export const getPartidoBySigla = (sigla: string): PartidoPolitico | undefined => {
  return partidosPoliticos.find(partido => partido.sigla === sigla);
};

export const getPartidoById = (id: string): PartidoPolitico | undefined => {
  return partidosPoliticos.find(partido => partido.id === id);
};

// Exportar solo los datos necesarios para las cards
export const candidatosParaCards = partidosPoliticos.map(partido => ({
  title: partido.presidente,
  team: partido.sigla,
  src: partido.imagenes.presidente,
  slug: partido.slug,
  partido: partido.nombre,
}));