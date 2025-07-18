import { partidosPoliticos } from './partidos-politicos';

// Interfaces para partidos políticos y propuestas
export interface Position {
  x: number;
  y: number;
}

export interface Partido {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  color: string;
  president: string;
  vicepresident: string;
}

export interface PropuestaPartido {
  partidoId: string;
  propuesta: string | null; // null si no tiene propuesta
}

export interface SubPlan {
  id: string;
  name: string;
  propuestas: PropuestaPartido[];
  position: Position;
}

export interface Plan {
  id: string;
  name: string;
  icon: string;
  subplans: SubPlan[];
  position: Position;
}

// Mapear los datos de partidos políticos para usar en las propuestas
export const partidos: Partido[] = partidosPoliticos
  .sort((a, b) => parseInt(a.id) - parseInt(b.id)) // Ordenar por id numérico
  .map(partido => ({
    id: partido.slug,
    name: partido.nombre,
    shortName: partido.sigla,
    logo: partido.imagenes.logo,
    color: partido.colores?.primary || "#666666",
    president: partido.presidente,
    vicepresident: partido.vicepresidente
  }));

// Datos basados en el archivo EJE.txt - Estructura de propuestas por partidos
export const proposalsData: Plan[] = [
  {
    id: "reactivacion-economica",
    name: "REACTIVACIÓN ECONÓMICA Y ROL DEL ESTADO",
    icon: "💰",
    position: { x: 200, y: 150 },
    subplans: [
      {
        id: "exportaciones",
        name: "Exportaciones (Gas, Litio, Minería, Comercio, Turismo, Metalurgia)",
        position: { x: 150, y: 300 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Incrementar la producción de gas natural mediante inversión en exploración y desarrollo de nuevos campos gasíferos."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Diversificar las exportaciones energéticas incluyendo energías renovables y establecer nuevos mercados."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Promover la inversión privada en el sector energético para aumentar la producción y exportación."
          },
          {
            partidoId: "fp",
            propuesta: null
          },
          {
            partidoId: "libre",
            propuesta: "Renegociar contratos de exportación para obtener mejores precios y condiciones."
          },
          {
            partidoId: "pdc",
            propuesta: null
          },
          {
            partidoId: "morena",
            propuesta: "Crear un fondo soberano con las ganancias de exportación de gas para futuras generaciones."
          },
          {
            partidoId: "adn",
            propuesta: null
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Establecer nuevos mercados internacionales para la exportación de gas natural."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      },
      {
        id: "bonos",
        name: "Bonos",
        position: { x: 250, y: 300 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Mantener y ampliar los bonos sociales existentes, incluyendo Juancito Pinto y Juana Azurduy."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Revisar y focalizar los bonos sociales para mayor eficiencia y cobertura."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Reformar el sistema de bonos para incluir incentivos al empleo y productividad."
          },
          {
            partidoId: "fp",
            propuesta: "Crear nuevos bonos dirigidos a sectores vulnerables y emprendedores."
          },
          {
            partidoId: "libre",
            propuesta: null
          },
          {
            partidoId: "pdc",
            propuesta: "Establecer un bono universal básico para todos los ciudadanos bolivianos."
          },
          {
            partidoId: "morena",
            propuesta: null
          },
          {
            partidoId: "adn",
            propuesta: "Implementar bonos condicionados a la participación en programas de capacitación."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Crear bonos de apoyo a la educación y salud familiar."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      },
      {
        id: "banca",
        name: "Banca",
        position: { x: 350, y: 300 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Fortalecer la banca estatal y promover el acceso al crédito para sectores productivos."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Modernizar el sistema financiero y mejorar la supervisión bancaria."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Promover la competencia en el sector financiero y reducir tasas de interés."
          },
          {
            partidoId: "fp",
            propuesta: "Crear banca especializada para sectores específicos como agricultura y turismo."
          },
          {
            partidoId: "libre",
            propuesta: "Desarrollar servicios financieros digitales e inclusión financiera."
          },
          {
            partidoId: "pdc",
            propuesta: null
          },
          {
            partidoId: "morena",
            propuesta: "Establecer bancos comunitarios para el desarrollo local."
          },
          {
            partidoId: "adn",
            propuesta: null
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Crear líneas de crédito especiales para emprendedores jóvenes."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      },
      {
        id: "expansion-agropecuaria",
        name: "Expansión agropecuaria (Desarrollo agrícola - Agroexpansión)",
        position: { x: 450, y: 300 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Ampliar la frontera agrícola con tecnología y riego para aumentar la producción."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Promover la agricultura sustentable y el desarrollo de cadenas productivas."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Incentivar la inversión privada en el agro y la agroindustria."
          },
          {
            partidoId: "fp",
            propuesta: "Crear centros de investigación agrícola y transferencia tecnológica."
          },
          {
            partidoId: "libre",
            propuesta: "Desarrollar agricultura orgánica y mercados de exportación especializados."
          },
          {
            partidoId: "pdc",
            propuesta: "Establecer seguros agrícolas y programas de protección al productor."
          },
          {
            partidoId: "morena",
            propuesta: null
          },
          {
            partidoId: "adn",
            propuesta: "Promover cooperativas agrícolas y asociatividad productiva."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Implementar programas de mecanización agrícola para pequeños productores."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      }
    ]
  },
  {
    id: "energia-hidrocarburos",
    name: "ENERGÍA E HIDROCARBUROS",
    icon: "⚡",
    position: { x: 400, y: 150 },
    subplans: [
      {
        id: "combustible",
        name: "Política sobre abastecimiento de combustible – Subvención combustibles",
        position: { x: 300, y: 300 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Mantener la subvención a los combustibles y garantizar el abastecimiento interno."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Revisar gradualmente las subvenciones y promover eficiencia energética."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Reducir las subvenciones y liberar precios del combustible paulatinamente."
          },
          {
            partidoId: "fp",
            propuesta: "Focalizar subvenciones en sectores productivos y transporte público."
          },
          {
            partidoId: "libre",
            propuesta: null
          },
          {
            partidoId: "pdc",
            propuesta: "Crear un fondo de estabilización de precios de combustibles."
          },
          {
            partidoId: "morena",
            propuesta: "Promover combustibles alternativos y reducir dependencia de hidrocarburos."
          },
          {
            partidoId: "adn",
            propuesta: null
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Garantizar el abastecimiento de combustibles a precios justos."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      },
      {
        id: "generacion-energetica",
        name: "Generación Energética (Fuentes de energía)",
        position: { x: 500, y: 300 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Desarrollar proyectos hidroeléctricos y promover energías renovables."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Diversificar la matriz energética con énfasis en energías limpias."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Promover inversión privada en energías renovables y eficiencia energética."
          },
          {
            partidoId: "fp",
            propuesta: "Crear un plan nacional de energías renovables con participación regional."
          },
          {
            partidoId: "libre",
            propuesta: "Desarrollar energía solar y eólica en regiones con potencial."
          },
          {
            partidoId: "pdc",
            propuesta: null
          },
          {
            partidoId: "morena",
            propuesta: "Promover energías comunitarias y distribución descentralizada."
          },
          {
            partidoId: "adn",
            propuesta: "Establecer incentivos fiscales para energías alternativas."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Impulsar proyectos de energía renovable en comunidades rurales."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      }
    ]
  },
  {
    id: "medio-ambiente",
    name: "BOSQUES Y CRISIS AMBIENTAL - MEDIO AMBIENTE",
    icon: "🌳",
    position: { x: 600, y: 150 },
    subplans: [
      {
        id: "incendios-bosques",
        name: "Incendios y depredación de bosques (Desarrollo de los bosques)",
        position: { x: 500, y: 300 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Fortalecer el sistema de prevención y control de incendios forestales."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Crear un sistema integrado de monitoreo y alerta temprana de incendios."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Promover la participación privada en la prevención y control de incendios."
          },
          {
            partidoId: "fp",
            propuesta: "Establecer brigadas comunitarias de prevención de incendios."
          },
          {
            partidoId: "libre",
            propuesta: "Desarrollar tecnología satelital para monitoreo forestal."
          },
          {
            partidoId: "pdc",
            propuesta: null
          },
          {
            partidoId: "morena",
            propuesta: "Crear programas de reforestación y restauración ecológica."
          },
          {
            partidoId: "adn",
            propuesta: "Implementar sanciones severas por quemas ilegales."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Establecer sistemas de vigilancia forestal comunitaria."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      },
      {
        id: "preservacion-bosques",
        name: "Preservación de bosques - Protección ecosistemas",
        position: { x: 600, y: 300 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Ampliar las áreas protegidas y fortalecer su gestión."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Crear corredores biológicos y promover conservación privada."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Promover ecoturismo y aprovechamiento sostenible de bosques."
          },
          {
            partidoId: "fp",
            propuesta: "Establecer programas de pago por servicios ambientales."
          },
          {
            partidoId: "libre",
            propuesta: null
          },
          {
            partidoId: "pdc",
            propuesta: "Crear un fondo nacional para la conservación forestal."
          },
          {
            partidoId: "morena",
            propuesta: "Promover manejo forestal comunitario y sostenible."
          },
          {
            partidoId: "adn",
            propuesta: "Desarrollar programas de educación ambiental."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Implementar programas de conservación con participación comunitaria."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      }
    ]
  },
  {
    id: "transformacion-educativa",
    name: "TRANSFORMACIÓN EDUCATIVA",
    icon: "📚",
    position: { x: 800, y: 150 },
    subplans: [
      {
        id: "infraestructura-educativa",
        name: "Infraestructura y tecnología educativa",
        position: { x: 700, y: 300 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Construir más unidades educativas y dotar de tecnología a las escuelas."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Modernizar la infraestructura educativa con enfoque tecnológico."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Promover alianzas público-privadas para mejorar infraestructura educativa."
          },
          {
            partidoId: "fp",
            propuesta: "Crear centros educativos modelo con tecnología avanzada."
          },
          {
            partidoId: "libre",
            propuesta: "Desarrollar educación virtual y plataformas digitales."
          },
          {
            partidoId: "pdc",
            propuesta: null
          },
          {
            partidoId: "morena",
            propuesta: "Promover educación comunitaria y centros de aprendizaje local."
          },
          {
            partidoId: "adn",
            propuesta: "Establecer programas de mantenimiento y equipamiento escolar."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Construir infraestructura educativa en zonas rurales."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      },
      {
        id: "contenido-educativo",
        name: "Contenido educativo",
        position: { x: 800, y: 300 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Actualizar contenidos educativos con enfoque descolonizador y productivo."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Desarrollar currículos flexibles adaptados a la realidad regional."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Promover educación bilingüe y multiculturalidad."
          },
          {
            partidoId: "fp",
            propuesta: "Crear contenidos educativos innovadores y actualizados."
          },
          {
            partidoId: "libre",
            propuesta: "Desarrollar educación en valores y ciudadanía."
          },
          {
            partidoId: "pdc",
            propuesta: "Establecer educación técnica y vocacional desde temprana edad."
          },
          {
            partidoId: "morena",
            propuesta: null
          },
          {
            partidoId: "adn",
            propuesta: "Promover educación intercultural y derechos humanos."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Implementar educación práctica y orientada al trabajo."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      }
    ]
  },
  {
    id: "justicia",
    name: "JUSTICIA - ¿Justicia o Impunidad? El País Decide",
    icon: "⚖️",
    position: { x: 200, y: 350 },
    subplans: [
      {
        id: "reforma-judicial",
        name: "Reforma judicial",
        position: { x: 100, y: 500 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Fortalecer la independencia judicial y mejorar la administración de justicia."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Reformar integralmente el sistema judicial para garantizar independencia."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Promover la elección de magistrados por méritos y capacidad."
          },
          {
            partidoId: "fp",
            propuesta: "Crear un consejo de la magistratura independiente."
          },
          {
            partidoId: "libre",
            propuesta: "Establecer un sistema de justicia más ágil y transparente."
          },
          {
            partidoId: "pdc",
            propuesta: null
          },
          {
            partidoId: "morena",
            propuesta: "Promover justicia comunitaria y resolución pacífica de conflictos."
          },
          {
            partidoId: "adn",
            propuesta: "Implementar un sistema de evaluación continua de magistrados."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Crear un sistema judicial más accesible para todos los ciudadanos."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      },
      {
        id: "corrupcion",
        name: "Corrupción",
        position: { x: 500, y: 500 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Fortalecer las instituciones anticorrupción y promover transparencia."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Crear un sistema integral de prevención y combate a la corrupción."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Establecer un ministerio público especializado en corrupción."
          },
          {
            partidoId: "fp",
            propuesta: "Promover la participación ciudadana en el control social."
          },
          {
            partidoId: "libre",
            propuesta: "Crear tribunales especializados en corrupción."
          },
          {
            partidoId: "pdc",
            propuesta: "Implementar sistemas digitales para prevenir corrupción."
          },
          {
            partidoId: "morena",
            propuesta: null
          },
          {
            partidoId: "adn",
            propuesta: "Establecer protección para denunciantes de corrupción."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Crear un sistema de control ciudadano permanente."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      }
    ]
  },
  {
    id: "salud",
    name: "SALUD",
    icon: "🏥",
    position: { x: 400, y: 350 },
    subplans: [
      {
        id: "sistema-salud",
        name: "Sistema de salud (acceso y cobertura, salud laboral)",
        position: { x: 300, y: 500 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Fortalecer el sistema público de salud y ampliar cobertura universal."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Crear un sistema integrado de salud público-privado."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Promover seguros de salud y mejorar calidad de atención."
          },
          {
            partidoId: "fp",
            propuesta: "Establecer centros de salud especializados por regiones."
          },
          {
            partidoId: "libre",
            propuesta: "Desarrollar telemedicina y salud digital."
          },
          {
            partidoId: "pdc",
            propuesta: null
          },
          {
            partidoId: "morena",
            propuesta: "Promover medicina tradicional y salud comunitaria."
          },
          {
            partidoId: "adn",
            propuesta: "Crear programas de prevención y promoción de la salud."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Ampliar la cobertura de salud a comunidades rurales."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      },
      {
        id: "digitalizacion-salud",
        name: "Digitalización de la salud",
        position: { x: 400, y: 500 },
        propuestas: [
          {
            partidoId: "mas-ipsp",
            propuesta: "Implementar historia clínica digital y telemedicina."
          },
          {
            partidoId: "alianza-unidad",
            propuesta: "Crear plataformas digitales para gestión de salud."
          },
          {
            partidoId: "apb-sumate",
            propuesta: "Promover aplicaciones móviles para salud y bienestar."
          },
          {
            partidoId: "fp",
            propuesta: "Establecer sistemas de inteligencia artificial en salud."
          },
          {
            partidoId: "libre",
            propuesta: null
          },
          {
            partidoId: "pdc",
            propuesta: "Crear bases de datos integradas de salud."
          },
          {
            partidoId: "morena",
            propuesta: "Desarrollar tecnología apropiada para salud rural."
          },
          {
            partidoId: "adn",
            propuesta: "Implementar sistemas de monitoreo epidemiológico digital."
          },
          {
            partidoId: "alianza-popular",
            propuesta: "Crear sistemas de telemedicina para zonas rurales."
          },
          {
            partidoId: "proximamente",
            propuesta: null
          }
        ]
      }
    ]
  }
];

export default proposalsData;
