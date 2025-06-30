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
      logo: "/imagenes2/IMAGENES PAGINA WEB/logo-alianza-popular.png",
      presidente: "/imagenes2/IMAGENES PAGINA WEB/andronico rodriguez.jpeg",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg", // Placeholder
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
    presidente: "Manfred Reyes Villa",
    vicepresidente: "Juan Carlos Medrano",
    imagenes: {
      logo: "/imagenes2/IMAGENES PAGINA WEB/Mesa de trabajo 1-2.png",
      presidente: "/imagenes2/IMAGENES PAGINA WEB/manfred reyes villa.png",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg", // Placeholder
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
      logo: "/imagenes2/IMAGENES PAGINA WEB/Mesa de trabajo 1-3.png",
      presidente: "/imagenes2/IMAGENES PAGINA WEB/tutito.jpg",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg", // Placeholder
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
      logo: "/imagenes2/IMAGENES PAGINA WEB/MAS.png",
      presidente: "/imagenes2/IMAGENES PAGINA WEB/eduardo-del-castillo.jpg",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg", // Placeholder
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
    presidente: "Eva Copa",
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/imagenes2/IMAGENES PAGINA WEB/Mesa de trabajo 1-4.png",
      presidente: "/imagenes2/IMAGENES PAGINA WEB/eva-copa.jpg",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg", // Placeholder
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
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/imagenes2/IMAGENES PAGINA WEB/mesa_de_trabajo1.png",
      presidente: "/imagenes2/IMAGENES PAGINA WEB/rodrigo-paz.jpg",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg", // Placeholder
    },
    colores: {
      primary: "#f83728",
      secondary: "#005e4a",
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
      logo: "/imagenes2/IMAGENES PAGINA WEB/mesa_de_trabajo1.png", // Reutilizar logo similar
      presidente: "/imagenes2/IMAGENES PAGINA WEB/jhonny-fernandez.jpg",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg", // Placeholder
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
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/imagenes2/IMAGENES PAGINA WEB/mesa_de_trabajo1.png", // Reutilizar logo similar
      presidente: "/imagenes2/IMAGENES PAGINA WEB/samuel-doria-medina.jpg",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg", // Placeholder
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
    vicepresidente: "Por confirmar",
    imagenes: {
      logo: "/imagenes2/IMAGENES PAGINA WEB/mesa_de_trabajo1.png", // Reutilizar logo similar
      presidente: "/imagenes2/IMAGENES PAGINA WEB/jaime-dunn.jpg",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg", // Placeholder
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
      logo: "/imagenes2/IMAGENES PAGINA WEB/mesa_de_trabajo1.png", // Reutilizar logo similar
      presidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg",
      vicepresidente: "/imagenes2/IMAGENES PAGINA WEB/proximamente-extra.jpg",
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