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
    programas: "https://www.oep.org.bo/wp-content/uploads/2025/05/PROGRAMA-DE-GOBIERNO-ALIANZA-POPULAR.pdf",
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
    slug: "adn",
    nombre: "Acción Democrática Nacionalista",
    sigla: "ADN",
    programas: "https://www.oep.org.bo/wp-content/uploads/2025/05/PROGRAMA-DE-GOBIERNO-LIBERTAD-Y-PROGRESO-ADN.pdf ",
    presidente: "A confirmar",
    vicepresidente: "Antonio Saravia",
    imagenes: {
      logo: "/binomios/adn/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/adn/presidente.webp",
      vicepresidente: "/binomios/adn/vicepresidente.webp",
    },
    colores: {
      primary: "#ff030f",
      secondary: "#000000",
    },
  },
  {
    id: "3",
    slug: "apb-sumate",
    nombre: "Autonomías para Bolivia - Súmate",
    sigla: "APB-SUMATE",
    programas: "https://www.oep.org.bo/wp-content/uploads/2025/05/PROGRAMA-DE-GOBIERNO-APB-SUMATE.pdf",
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
    id: "4",
    slug: "proximamente",
    nombre: "Nueva Generación Política",
    sigla: "NGP",
    programas: "/candidatos/not-found",
    presidente: "Pendiente",
    vicepresidente: "Pendiente",
    imagenes: {
      logo: "/binomios/ngp/logo.png", // Agrega cuando tengas el logo
      presidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg",
    },
    colores: {
      primary: "#fb9c1c",
      secondary: "#01bef2",
    },
  },
  {
    id: "5",
    slug: "fri",
    nombre: "Frente Revolucionario de Izquierda",
    sigla: "FRI",
    programas: "https://www.oep.org.bo/wp-content/uploads/2025/05/PROGRAMA-DE-GOBIERNO-ALIANZA-LIBERTAD-Y-DEMOCRACIA.pdf",
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
    id: "6",
    slug: "fp",
    nombre: "Frente Para la Victoria",
    sigla: "FP",
    programas: "https://www.oep.org.bo/wp-content/uploads/2025/06/PROGRAMA-DE-GOBIERNO-ALIANZA-LA-FUERZA-DEL-PUEBLO-1.pdf",
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
    id: "7",
    slug: "mas-ipsp",
    nombre: "Movimiento al Socialismo ",
    sigla: "MAS-IPSP",
    programas: "https://www.oep.org.bo/wp-content/uploads/2025/05/PROGRAMA-DE-GOBIERNO-MAS-IPSP.pdf",
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
    id: "8",
    slug: "morena",
    nombre: "Movimiento de Regeneración Nacional",
    sigla: "MORENA",
    programas: "https://www.oep.org.bo/wp-content/uploads/2025/05/PROGRAMA-DE-GOBIERNO-MORENA.pdf",
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
    id: "9",
    slug: "un",
    nombre: "Unidad Nacional",
    sigla: "UN",
    programas: "https://www.oep.org.bo/wp-content/uploads/2025/05/PROGRAMA-DE-GOBIERNO-ALIANZA-UNIDAD.pdf",
    presidente: "Samuel Doria Medina",
    vicepresidente: "José Luis Lupo",
    imagenes: {
      logo: "/binomios/un/logo.png", // Agrega cuando tengas el logo
      presidente: "/binomios/un/presidente.png",
      vicepresidente: "/binomios/un/vicepresidente.png",
    },
    colores: {
      primary: "#003b69",
      secondary: "#ffdf00",
    },
  },
  {
    id: "10",
    slug: "pdc",
    nombre: "Partido Demócrata Cristiano",
    sigla: "PDC",
    programas: "https://www.oep.org.bo/wp-content/uploads/2025/05/PROGRAMA-DE-GOBIERNO-PARTIDO-DEMOCRATA-CRISTIANO.pdf",
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