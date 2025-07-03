// Tipos de datos para los partidos políticos
export interface PartidoPolitico {
  id: string;
  slug: string;
  nombre: string;
  sigla: string;
  programas: string;
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
    programas: "Programa de Gobierno de Alianza Popular",
    presidente: "Andrónico Rodríguez Ledezma",
    vicepresidente: "Mariana Prado Noya",
    imagenes: {
      logo: "/binomios/alianza-popular/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/alianza-popular/presidente.png",
      vicepresidente: "/binomios/alianza-popular/vicepresidente.png",
    },
    colores: {
      primary: "#56a6d9",
      secondary: "#477b29",
    },
  },
  {
    id: "2",
    slug: "apb-sumate",
    nombre: "Autonomías para Bolivia - Súmate",
    sigla: "APB-SUMATE",
    programas: "Programa de Gobierno de Autonomías para Bolivia - Súmate",
    presidente: "Manfred Reyes Villa",
    vicepresidente: "Juan Carlos Medrano",
    imagenes: {
      logo: "/binomios/apb/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/apb/presidente.png",
      vicepresidente: "/binomios/apb/vicepresidente.png",
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
    programas: "Programa de Gobierno del Frente Revolucionario de Izquierda",
    presidente: "Jorge Tuto Quiroga",
    vicepresidente: "Juan Pablo Velasco",
    imagenes: {
      logo: "/binomios/fri/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/fri/presidente.png",
      vicepresidente: "/binomios/fri/vicepresidente.png",
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
    programas: "Programa de Gobierno del MAS-IPSP",
    presidente: "Eduardo Del Castillo",
    vicepresidente: "Milan Berna",
    imagenes: {
      logo: "/binomios/mas/logo.png",
      presidente: "/binomios/mas/presidente.png",
      vicepresidente: "/binomios/mas/vicepresidente.png",
    },
    colores: {
      primary: "#173983",
      secondary: "#ffffff",
    },
  },
  {
    id: "5",
    slug: "morena",
    nombre: "Movimiento de Regeneración Nacional",
    sigla: "MORENA",
    programas: "Programa de Gobierno del Movimiento de Regeneración Nacional",
    presidente: "Eva Copa",
    vicepresidente: "Jorge Richter",
    imagenes: {
      logo: "/binomios/morena/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/morena/presidente.png",
      vicepresidente: "/binomios/morena/vicepresidente.png",
    },
    colores: {
      primary: "#676767",
      secondary: "#ff5900",
    },
  },
  {
    id: "6",
    slug: "pdc",
    nombre: "Partido Demócrata Cristiano",
    sigla: "PDC",
    presidente: "Rodrigo Paz Pereira",
    vicepresidente: "Edman Lara",
    imagenes: {
      logo: "/binomios/pdc/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/pdc/presidente.png",
      vicepresidente: "/binomios/pdc/vicepresidente.png",
    },
    colores: {
      primary: "#f83728",
      secondary: "#005e4a",
    },
  },
  {
    id: "7",
    slug: "fp",
    nombre: "Frente Para la Victoria",
    sigla: "FP",
    presidente: "Jhonny Fernández",
    vicepresidente: "Felipe Quispe",
    imagenes: {
      logo: "/binomios/ucs/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/ucs/presidente.png",
      vicepresidente: "/binomios/ucs/vicepresidente.png",
    },
    colores: {
      primary: "#d19d03",
      secondary: "#01a8ec",
    },
  },
  {
    id: "8",
    slug: "un",
    nombre: "Unidad Nacional",
    sigla: "UN",
    presidente: "Samuel Doria Medina",
    vicepresidente: "José Luis Lupo",
    imagenes: {
      logo: "/binomios/un/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/un/presidente.png",
      vicepresidente: "/binomios/un/vicepresidente.png",
    },
    colores: {
      primary: "#ffdf00",
      secondary: "#ffdf00",
    },
  },
  {
    id: "9",
    slug: "ngp",
    nombre: "Nueva Generación Política",
    sigla: "NGP",
    presidente: "Jaime Dunn",
    vicepresidente: "Edgar Uriona",
    imagenes: {
      logo: "/binomios/ngp/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/ngp/presidente.png",
      vicepresidente: "/binomios/ngp/vicepresidente.png",
    },
    colores: {
      primary: "#fb9c1c",
      secondary: "#01bef2",
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
      primary: "#ff030f",
      secondary: "#000000",
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