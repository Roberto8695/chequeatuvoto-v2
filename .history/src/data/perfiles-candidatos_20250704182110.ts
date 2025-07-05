// Tipos de datos para los perfiles de candidatos
export interface PerfilCandidato {
  nombre: string;
  cargo: "presidente" | "vicepresidente";
  fechaNacimiento: string;
  lugarNacimiento: string;
  profesion: string;
  edad?: number;
  educacion: string[];
  experienciaLaboral: string[];
  carreraPolitica: string[];
  partidosAnteriores: string[];
  logrosDestacados?: string[];
  controversias?: string[];
  situacionLegal?: string;
}

export interface BinomioCandidatos {
  partido: {
    nombre: string;
    sigla: string;
    slug: string;
  };
  presidente: PerfilCandidato;
  vicepresidente: PerfilCandidato;
  estado: "habilitado" | "inhabilitado" | "pendiente";
  observaciones?: string;
}

// Datos de los perfiles de candidatos por partido
export const perfilesCandidatos: BinomioCandidatos[] = [
  {
    partido: {
      nombre: "Alianza Popular",
      sigla: "ALIANZA POPULAR",
      slug: "alianza-popular"
    },
    presidente: {
      nombre: "Andrónico Rodríguez Ledezma",
      cargo: "presidente",
      fechaNacimiento: "11 de noviembre de 1988",
      lugarNacimiento: "Cochabamba",
      profesion: "Politólogo",
      edad: 36,
      educacion: [
        "Licenciatura en Ciencias Políticas - Universidad Mayor de San Simón (UMSS)",
        "Maestría en Seguridad, Defensa y Desarrollo - Escuela de Altos Estudios Nacionales (EAEN)",
        "Diplomado en Gestión Política y Democracia Intercultural - UMSS",
        "Diplomado en Educación Superior - Universidad Pública de El Alto (UPEA)"
      ],
      experienciaLaboral: [
        "Secretario en organizaciones juveniles del movimiento cocalero (2012)",
        "Vicepresidente de las Seis Federaciones del Trópico de Cochabamba (2018-2023)",
        "Senador por Cochabamba (2020)",
        "Presidente del Senado (2020-2025)"
      ],
      carreraPolitica: [
        "Inicio en el sindicalismo cocalero a los 23 años",
        "Elegido vicepresidente de federaciones cocaleras (2018)",
        "Ratificado por unanimidad en el cargo sindical (2021, 2023)",
        "Asumió la Presidencia del Senado, ratificado en cinco ocasiones"
      ],
      partidosAnteriores: [
        "Movimiento Al Socialismo (gestiones de Evo Morales y Luis Arce)"
      ],
      logrosDestacados: [
        "Se graduó en Ciencias Políticas a los 23 años",
        "Liderazgo consolidado en el movimiento cocalero",
        "Presidente del Senado con múltiples ratificaciones"
      ]
    },
    vicepresidente: {
      nombre: "Mariana Prado Noya",
      cargo: "vicepresidente",
      fechaNacimiento: "20 de abril de 1982",
      lugarNacimiento: "La Paz",
      profesion: "Administradora de Empresas",
      edad: 43,
      educacion: [
        "Colegio Calvert de La Paz",
        "Universidad Católica Boliviana",
        "Universidad Complutense de Madrid",
        "Universidad de La Sorbona de París"
      ],
      experienciaLaboral: [
        "Asesora del Ministerio de Obras Públicas (2009)",
        "Presidenta del directorio de Boliviana de Aviación (BoA) (2010-2012)",
        "Asesora estadista en hidrocarburos y energía - Vicepresidencia (2012)",
        "Jefa de gabinete de Álvaro García Linera (2012-2014)",
        "Ministra de Planificación (2017)"
      ],
      carreraPolitica: [
        "Experiencia en altos cargos del gobierno del MAS",
        "Cercana colaboradora de Álvaro García Linera",
        "Ministra durante la gestión de Evo Morales"
      ],
      partidosAnteriores: [
        "Movimiento Al Socialismo (gestiones de Evo Morales y Luis Arce)"
      ],
      logrosDestacados: [
        "Formación académica internacional de élite",
        "Experiencia en empresas estatales estratégicas",
        "Gestión ministerial en planificación nacional"
      ]
    },
    estado: "habilitado"
  },
  {
    partido: {
      nombre: "Autonomías para Bolivia - Súmate",
      sigla: "APB-SUMATE",
      slug: "apb-sumate"
    },
    presidente: {
      nombre: "Manfred Armando Antonio Reyes Villa Bacigalupi",
      cargo: "presidente",
      fechaNacimiento: "19 de abril de 1955",
      lugarNacimiento: "La Paz",
      profesion: "Militar en retiro y empresario",
      edad: 70,
      educacion: [
        "Colegio Israelita de La Paz",
        "Colegio Militar de Ejército (1973)",
        "Especialización en Asuntos Militares"
      ],
      experienciaLaboral: [
        "Capitán de Ejército (hasta 1986)",
        "Agregado Militar en Brasil y Estados Unidos",
        "Docente en Asuntos de Especialización Militar",
        "Vicepresidente de Crawford Internacional en Silver Spring, EE.UU."
      ],
      carreraPolitica: [
        "Vicepresidente del Concejo Municipal de Cochabamba (1992)",
        "Alcalde de Cochabamba (1993-2000, cuatro periodos consecutivos)",
        "Candidato presidencial (2000)",
        "Primer Prefecto de Cochabamba elegido democráticamente (2005)",
        "Candidato presidencial (2009) - segundo lugar",
        "Alcalde de Cochabamba (2021-presente) - quinta vez"
      ],
      partidosAnteriores: [
        "Acción Democrática Nacionalista (ADN)",
        "Movimiento Bolivia Libre (MBL)",
        "Nueva Fuerza Republicana (NFR)",
        "Movimiento Nacionalista Revolucionario (MNR)"
      ],
      logrosDestacados: [
        "Único alcalde en ganar cinco veces Cochabamba",
        "Segundo lugar en elecciones presidenciales 2009",
        "Experiencia militar y empresarial internacional",
        "Victoria en 2021 con 55.63% del voto"
      ]
    },
    vicepresidente: {
      nombre: "Juan Carlos Medrano Gonzales",
      cargo: "vicepresidente",
      fechaNacimiento: "24 de junio de 1983",
      lugarNacimiento: "Santa Cruz",
      profesion: "Abogado",
      edad: 41,
      educacion: [
        "Formación jurídica (detalles por confirmar)"
      ],
      experienciaLaboral: [
        "Concejal de Santa Cruz de la Sierra",
        "Jefe de Santa Cruz Autónoma y Ordenada (SAO)"
      ],
      carreraPolitica: [
        "Elegido concejal por Comunidad Autonómica",
        "Líder de la agrupación ciudadana SAO",
        "Crítico de la gestión del alcalde Jhonny Fernández",
        "Precandidato a alcalde de Santa Cruz (anunciado en nov. 2024)"
      ],
      partidosAnteriores: [
        "Santa Cruz Autónoma y Ordenada (SAO)"
      ]
    },
    estado: "habilitado"
  },
  {
    partido: {
      nombre: "Frente Revolucionario de Izquierda",
      sigla: "FRI",
      slug: "fri"
    },
    presidente: {
      nombre: "Jorge Fernando Tuto Quiroga Ramirez",
      cargo: "presidente",
      fechaNacimiento: "5 de mayo de 1960",
      lugarNacimiento: "Cochabamba",
      profesion: "Ingeniero Industrial",
      edad: 65,
      educacion: [
        "Ingeniería Industrial - Universidad Texas A&M, Estados Unidos",
        "MBA - Universidad de St. Edwards, Texas",
        "Académico en Woodrow Wilson Center, Washington D.C."
      ],
      experienciaLaboral: [
        "Trabajó para IBM en Estados Unidos",
        "Investigador en Woodrow Wilson Center"
      ],
      carreraPolitica: [
        "Subsecretario de Inversión Pública (1989) - gobierno de Jaime Paz Zamora",
        "Ministro de Finanzas (1992)",
        "Director de campaña electoral ADN (1993)",
        "Subjefe Nacional ADN (1995)",
        "Vicepresidente de Bolivia (1997-2001) - gobierno de Hugo Banzer",
        "Presidente de Bolivia (2001-2002)",
        "Candidato presidencial (2005, 2014, 2020, 2025)"
      ],
      partidosAnteriores: [
        "MIR", "ADN", "PODEMOS", "Partido Demócrata Cristiano (PDC)"
      ],
      logrosDestacados: [
        "Vicepresidente más joven de Bolivia (37 años)",
        "Presidente de Bolivia (2001-2002)",
        "Experiencia internacional en sector privado y académico",
        "Múltiples candidaturas presidenciales"
      ]
    },
    vicepresidente: {
      nombre: "Juan Pablo Velasco Dalence",
      cargo: "vicepresidente",
      fechaNacimiento: "9 de abril de 1987",
      lugarNacimiento: "Santa Cruz",
      profesion: "Empresario del sector tecnológico",
      edad: 38,
      educacion: [
        "Formación en tecnología y gestión empresarial",
        "Experiencia internacional en sector tecnológico"
      ],
      experienciaLaboral: [
        "Cadete administrativo en ASG (empresa estadounidense de software)",
        "Contract Support Officer en Huawei (3 años)",
        "Consultor SAP en Chevron (4 años) - Buenos Aires",
        "Cofundador de Netcomidas.com (2013) - primera plataforma de delivery online de Bolivia",
        "Venta de Netcomidas.com a PedidosYa por 1.2 millones USD (2017)",
        "Fundador de MOBI Latam (empresa de energía limpia y micromovilidad)",
        "Primer empleado de Yango en Latinoamérica (2022)"
      ],
      carreraPolitica: [
        "Debut político con Jorge Quiroga en 2025"
      ],
      partidosAnteriores: [],
      logrosDestacados: [
        "Pionero del e-commerce en Bolivia",
        "Exitosa venta empresarial millonaria",
        "Proyección de 250 millones USD en GMV anualizado (2025)",
        "Expansión de Yango a nuevas ciudades bolivianas"
      ]
    },
    estado: "habilitado"
  },
  {
    partido: {
      nombre: "Movimiento al Socialismo - Instrumento Político por la Soberanía de los Pueblos",
      sigla: "MAS-IPSP",
      slug: "mas-ipsp"
    },
    presidente: {
      nombre: "Carlos Eduardo Del Castillo Del Carpio",
      cargo: "presidente",
      fechaNacimiento: "27 de diciembre de 1988",
      lugarNacimiento: "Santa Cruz",
      profesion: "Abogado",
      edad: 36,
      educacion: [
        "Bachiller - Colegio Cáritas (2006)",
        "Licenciatura en Derecho - Universidad Gabriel René Moreno, Santa Cruz",
        "Maestría en Derecho Tributario y Financiero - Escuela Superior de Leyes",
        "Candidato a Doctor en Derecho Constitucional - UMSA",
        "Diplomado en Educación Superior e Interculturalidad - UMSA",
        "Diplomado en Derechos Económicos, Sociales y Culturales - Universidad de Buenos Aires"
      ],
      experienciaLaboral: [
        "Oficial mayor de la Cámara de Senadores",
        "Asesor y secretario técnico - Comisión de Justicia Plural",
        "Asesor legal - Dirección de Migración Santa Cruz",
        "Abogado en Impuestos Nacionales y Ministerio Público",
        "Ministro de Gobierno (2020-presente)"
      ],
      carreraPolitica: [
        "Diversos cargos durante la gestión de Evo Morales",
        "Ministro de Gobierno en la gestión de Luis Arce (2020-presente)"
      ],
      partidosAnteriores: [],
      logrosDestacados: [
        "Ministro más joven del gabinete de Luis Arce",
        "Sólida formación jurídica especializada",
        "Experiencia en múltiples instituciones del Estado"
      ]
    },
    vicepresidente: {
      nombre: "Esteban Milán Berna Ramos",
      cargo: "vicepresidente",
      fechaNacimiento: "13 de noviembre de 1980",
      lugarNacimiento: "La Paz",
      profesion: "Dirigente y agricultor",
      edad: 44,
      educacion: [
        "Formación en liderazgo sindical y agricultura",
        "Capacitación en gestión pública y desarrollo productivo"
      ],
      experienciaLaboral: [
        "Dirigente de la Confederación Sindical Única de Trabajadores Campesinos de Bolivia",
        "Responsable de Monitoreo y Gestión de Conflictos Sociales (2023)",
        "Coordinación con Movimientos Sociales - Ministerio de Desarrollo Productivo"
      ],
      carreraPolitica: [
        "Liderazgo sindical desde la gestión de Evo Morales",
        "Cargo en el Ministerio de Desarrollo Productivo (2023)"
      ],
      partidosAnteriores: [],
      logrosDestacados: [
        "Líder consolidado del movimiento campesino",
        "Experiencia en gestión de conflictos sociales"
      ]
    },
    estado: "habilitado"
  },
  {
    partido: {
      nombre: "Movimiento de Regeneración Nacional",
      sigla: "MORENA",
      slug: "morena"
    },
    presidente: {
      nombre: "Mónica Eva Copa Murga",
      cargo: "presidente",
      fechaNacimiento: "3 de enero de 1987",
      lugarNacimiento: "El Alto",
      profesion: "Egresada de Trabajo Social",
      edad: 38,
      educacion: [
        "Trabajo Social - Universidad Pública de El Alto (UPEA)",
        "Secretaria Ejecutiva del Centro de Estudiantes",
        "Delegada Titular del Congreso Nacional del CEUB",
        "Secretaria General de la FUL - UPEA"
      ],
      experienciaLaboral: [
        "Trabajadora social en programas municipales",
        "Gestión administrativa en instituciones públicas",
        "Coordinadora de programas sociales en El Alto"
      ],
      carreraPolitica: [
        "Senadora por La Paz (2015-2020)",
        "Presidenta del Senado (2019-2020)",
        "Alcaldesa de El Alto (2021-presente)"
      ],
      partidosAnteriores: [
        "Movimiento Al Socialismo (MAS)"
      ],
      logrosDestacados: [
        "Primera mujer presidenta del Senado de Bolivia",
        "Alcaldesa de la segunda ciudad más poblada de Bolivia",
        "Liderazgo juvenil y universitario"
      ]
    },
    vicepresidente: {
      nombre: "Jorge Guillermo Richter Ramírez",
      cargo: "vicepresidente",
      fechaNacimiento: "24 de octubre de 1968",
      lugarNacimiento: "Cochabamba",
      profesion: "Politólogo",
      edad: 56,
      educacion: [
        "Colegio La Salle",
        "Ciencias Políticas - Universidad de Córdoba, Argentina"
      ],
      experienciaLaboral: [
        "Escritor, columnista y analista político",
        "Asesor de diversas instituciones",
        "Vocero presidencial de Luis Arce (2020-2024)",
        "Colaborador de Wálter Chávez en El Juguete Rabioso (2001)"
      ],
      carreraPolitica: [
        "Más de 10 años como operador político del MAS",
        "Vocero presidencial (2020-2024)"
      ],
      partidosAnteriores: [
        "Movimiento Al Socialismo (MAS)"
      ],
      controversias: [
        "Enfrentó el exilio de su padre, dirigente universitario"
      ],
      logrosDestacados: [
        "Experiencia como vocero presidencial",
        "Amplia trayectoria como analista político"
      ]
    },
    estado: "habilitado"
  },
  {
    partido: {
      nombre: "Partido Demócrata Cristiano",
      sigla: "PDC",
      slug: "pdc"
    },
    presidente: {
      nombre: "Rodrigo Paz Pereira",
      cargo: "presidente",
      fechaNacimiento: "22 de septiembre de 1967",
      lugarNacimiento: "Santiago de Compostela, Galicia, España",
      profesion: "Economista y Relacionista Internacional",
      edad: 57,
      educacion: [
        "Economía y Relaciones Internacionales",
        "Maestría en Gestión Política - American University, Estados Unidos"
      ],
      carreraPolitica: [
        "Líder de la agrupación ciudadana UNIR",
        "Diputado por MIR (2002)",
        "Candidato con PODEMOS (2005)",
        "Presidente del Concejo Municipal de Tarija (2013)",
        "Alcalde de Tarija (2015)",
        "Senador por Comunidad Ciudadana (2020)"
      ],
      partidosAnteriores: [
        "MIR", "PODEMOS", "Comunidad Ciudadana", "UNIR", "Primero la Gente"
      ],
      logrosDestacados: [
        "Hijo del expresidente Jaime Paz Zamora",
        "Experiencia ejecutiva y legislativa",
        "Formación internacional en gestión política"
      ]
    },
    vicepresidente: {
      nombre: "Edmand Lara Montaño",
      cargo: "vicepresidente",
      fechaNacimiento: "10 de octubre de 1985",
      lugarNacimiento: "Cochabamba (Punata)",
      profesion: "Abogado y excapitán de la Policía Boliviana",
      edad: 39,
      experienciaLaboral: [
        "Casi 15 años de servicio en la Policía Boliviana",
        "Egresado de la academia policial (2007)"
      ],
      controversias: [
        "Denunció corrupción en la Policía Boliviana",
        "Arrestado por el coronel Erick Holguín (dic. 2023)",
        "Dado de baja definitiva de la Policía (2024)",
        "Denunció al coronel Jhonny Ortuño por cobros ilegales (oct. 2022)"
      ],
      carreraPolitica: [
        "Presentó proyecto político 'Nuevas Ideas con Libertad' (2024)",
        "Proclamado candidato presidencial (luego vicepresidencial)"
      ],
      partidosAnteriores: [
        "Proyecto político Nuevas Ideas con Libertad"
      ],
      situacionLegal: "Dado de baja de la Policía por faltas graves (2024)"
    },
    estado: "habilitado"
  },
  {
    partido: {
      nombre: "Frente Para la Victoria",
      sigla: "FP",
      slug: "fp"
    },
    presidente: {
      nombre: "Max Jhonny Fernández Saucedo",
      cargo: "presidente",
      fechaNacimiento: "21 de marzo de 1964",
      lugarNacimiento: "Santa Cruz",
      profesion: "Técnico en Electrónica",
      edad: 61,
      experienciaLaboral: [
        "Heredó acciones de Cervecería Boliviana Nacional (1995)",
        "Vendió acciones a Quilmes Industrial S.A.",
        "Presidente ejecutivo de CBN (hasta 2002)",
        "Jefe de barrio La Cuchilla, Club Hípico Santa Cruz"
      ],
      carreraPolitica: [
        "Concejal municipal (1989-1991)",
        "Alcalde de Santa Cruz (1996-2000, reelecto en 2000)",
        "Jefe nacional del partido UCS (desde 1996)",
        "Candidato presidencial (2002)",
        "Candidato a primer concejal (2015)",
        "Alcalde de Santa Cruz (2021-2026) con 35.41% de votos"
      ],
      partidosAnteriores: [
        "Unidad Cívica Solidaridad (UCS)", "ADN", "MIR"
      ],
      logrosDestacados: [
        "Múltiples periodos como alcalde de Santa Cruz",
        "Liderazgo de UCS por casi 30 años",
        "Experiencia empresarial en sector cervecero"
      ]
    },
    vicepresidente: {
      nombre: "Felipe Quispe Laura",
      cargo: "vicepresidente",
      fechaNacimiento: "Información no disponible",
      lugarNacimiento: "Información no disponible",
      profesion: "Información no disponible",
      situacionLegal: "Inhabilitado por el TSE"
    },
    estado: "inhabilitado",
    observaciones: "El candidato a vicepresidente Felipe Quispe Laura fue inhabilitado por el Tribunal Supremo Electoral"
  },
  {
    partido: {
      nombre: "Unidad Nacional",
      sigla: "UN",
      slug: "un"
    },
    presidente: {
      nombre: "Samuel Jorge Doria Medina Auza",
      cargo: "presidente",
      fechaNacimiento: "4 de diciembre de 1958",
      lugarNacimiento: "La Paz",
      profesion: "Economista",
      edad: 66,
      educacion: [
        "Economía en Bolivia y Estados Unidos",
        "Maestría en Finanzas Públicas - London School of Economics"
      ],
      experienciaLaboral: [
        "Lideró SOBOCE durante 27 años",
        "Constructor de Green Tower (uno de los edificios más modernos de Bolivia)"
      ],
      carreraPolitica: [
        "Ministro de Planeamiento (1991) - gobierno de Jaime Paz Zamora",
        "Candidato a vicepresidente por MIR (1997)",
        "Candidato presidencial con Unidad Nacional (2005, 2009, 2014)",
        "Aspirante a vicepresidente con Jeanine Áñez (2020)",
        "Candidato presidencial (2025)"
      ],
      partidosAnteriores: [
        "MIR", "Unidad Nacional", "Consenso Popular", "Unidad Demócrata", "Juntos"
      ],
      logrosDestacados: [
        "Exitoso empresario del cemento",
        "Múltiples candidaturas presidenciales",
        "Experiencia ministerial y empresarial"
      ]
    },
    vicepresidente: {
      nombre: "José Luis Lupo Flores",
      cargo: "vicepresidente",
      fechaNacimiento: "23 de agosto de 1961",
      lugarNacimiento: "Vallegrande, Santa Cruz",
      profesion: "Economista",
      edad: 63,
      educacion: [
        "Economía - Universidad Nacional Autónoma de México (UNAM)",
        "Maestría en Economía Internacional - Universidad de Boulder, Colorado"
      ],
      experienciaLaboral: [
        "Trabajó en el Banco Interamericano de Desarrollo"
      ],
      carreraPolitica: [
        "Director del Instituto Nacional de Estadística (1991-1993)",
        "Ministro de Informaciones - gobierno de Jaime Paz Zamora",
        "Ministro de Desarrollo Económico (1999) - gobierno de Hugo Bánzer",
        "Ministro de la Presidencia (2001-2002) - gobierno de Jorge Quiroga",
        "Ministro de Gobierno (2002)"
      ],
      partidosAnteriores: [
        "MIR", "ADN"
      ],
      logrosDestacados: [
        "Amplia experiencia ministerial",
        "Formación económica internacional",
        "Experiencia en organismos internacionales"
      ]
    },
    estado: "habilitado"
  },
  {
    partido: {
      nombre: "Nueva Generación Política",
      sigla: "NGP",
      slug: "ngp"
    },
    presidente: {
      nombre: "No confirmado",
      cargo: "presidente",
      fechaNacimiento: "No disponible",
      lugarNacimiento: "No disponible",
      profesion: "No disponible"
    },
    vicepresidente: {
      nombre: "No confirmado",
      cargo: "vicepresidente",
      fechaNacimiento: "No disponible",
      lugarNacimiento: "No disponible",
      profesion: "No disponible"
    },
    estado: "pendiente",
    observaciones: "No hay candidatura confirmada aún y no hay perfiles disponibles"
  },
  {
    partido: {
      nombre: "Acción Democrática Nacionalista",
      sigla: "ADN",
      slug: "adn"
    },
    presidente: {
      nombre: "Paulo César Rodríguez Folster",
      cargo: "presidente",
      fechaNacimiento: "No disponible",
      lugarNacimiento: "No disponible",
      profesion: "No disponible",
      situacionLegal: "Inhabilitado por el TSE"
    },
    vicepresidente: {
      nombre: "Antonio Víctor Isaac Saravia Tapia",
      cargo: "vicepresidente",
      fechaNacimiento: "28 de marzo de 1973",
      lugarNacimiento: "La Paz",
      profesion: "Economista",
      edad: 52,
      educacion: [
        "Licenciatura en Economía - Universidad Católica Boliviana",
        "Dos maestrías en Economía - Universidad Estatal de Arizona",
        "Maestría en Economía y Políticas Públicas - Universidad de Georgetown",
        "Doctorado en Economía - Universidad Estatal de Arizona"
      ],
      experienciaLaboral: [
        "Profesor de Economía - Universidad Mercer",
        "Director del Centro para el Estudio de la Economía y la Libertad - Universidad Mercer",
        "Consultor en Deloitte & Touche",
        "Consultor del Consejo Económico de Dubái",
        "Consultor del Instituto Latinoamericano de Desarrollo y Estudios Sociales - Chile",
        "Cargos académicos en universidades de EE.UU., Emiratos Árabes Unidos y Colombia"
      ],
      carreraPolitica: [
        "Líder del Partido Liberal Boliviano (creado en nov. 2024)"
      ],
      logrosDestacados: [
        "Amplia formación académica internacional",
        "20 años de experiencia docente internacional",
        "Más de 15 cursos diferentes y 100 sesiones lectivas impartidas",
        "Especialista en macroeconomía y economía institucional"
      ]
    },
    estado: "inhabilitado",
    observaciones: "El candidato a presidente Paulo César Rodríguez Folster fue inhabilitado por el TSE"
  }
];

// Funciones auxiliares para trabajar con los datos
export const getPerfilByPartidoSlug = (slug: string): BinomioCandidatos | undefined => {
  return perfilesCandidatos.find(binomio => binomio.partido.slug === slug);
};

export const getPerfilByPartidoSigla = (sigla: string): BinomioCandidatos | undefined => {
  return perfilesCandidatos.find(binomio => binomio.partido.sigla === sigla);
};

export const getCandidatosHabilitados = (): BinomioCandidatos[] => {
  return perfilesCandidatos.filter(binomio => binomio.estado === "habilitado");
};

export const getCandidatosInhabilitados = (): BinomioCandidatos[] => {
  return perfilesCandidatos.filter(binomio => binomio.estado === "inhabilitado");
};

export const getCandidatosPendientes = (): BinomioCandidatos[] => {
  return perfilesCandidatos.filter(binomio => binomio.estado === "pendiente");
};

// Obtener candidatos por rango de edad
export const getCandidatosByEdad = (edadMin: number, edadMax: number): PerfilCandidato[] => {
  const candidatos: PerfilCandidato[] = [];
  
  perfilesCandidatos.forEach(binomio => {
    if (binomio.presidente.edad && binomio.presidente.edad >= edadMin && binomio.presidente.edad <= edadMax) {
      candidatos.push(binomio.presidente);
    }
    if (binomio.vicepresidente.edad && binomio.vicepresidente.edad >= edadMin && binomio.vicepresidente.edad <= edadMax) {
      candidatos.push(binomio.vicepresidente);
    }
  });
  
  return candidatos;
};

// Estadísticas básicas
export const getEstadisticasCandidatos = () => {
  const total = perfilesCandidatos.length;
  const habilitados = getCandidatosHabilitados().length;
  const inhabilitados = getCandidatosInhabilitados().length;
  const pendientes = getCandidatosPendientes().length;
  
  return {
    total,
    habilitados,
    inhabilitados,
    pendientes,
    porcentajeHabilitados: (habilitados / total) * 100,
    porcentajeInhabilitados: (inhabilitados / total) * 100
  };
};
