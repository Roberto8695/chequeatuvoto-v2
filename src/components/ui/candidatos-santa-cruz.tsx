"use client"

import Image from "next/image"

type Candidato = {
  nombre: string
  partido: string
  propuestas?: string
}

const candidatosGobernacion: Candidato[] = [
 /**  {
    nombre: "CHI HYUN CHUNG",
    partido: "MOVIMIENTO TERCER SISTEMA"
  },
  {
    nombre: "BRANKO GORAN MARINKOVIC JOVICEVIC",
    partido: "MOVIMIENTO DEMOCRATA SOCIAL"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-DEMOCRATAS-DEPARTAMENTAL.pdf"
  },
  {
    nombre: "EDUARDO PEREIRA ALCOCER",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS DEPARTAMENTAL SANTA CRUZ"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-ALIANZA-UNIDOS-POR-LOS-PUEBLOS-DEPARTAMENTAL-SANTA-CRUZ.pdf"
  },
  {
    nombre: "GUIDO EDUARDO NAYAR PARADA",
    partido: "PRIMERO SANTA CRUZ"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-DEPARTAMENTO-DE-SANTA-CRUZ-APS.pdf"
  },
  
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2025/12/PG-DEPARTAMENTO-DE-SANTA-CRUZ-LIBRE.pdf"
  },
  {
    nombre: "JULIO CESAR TORREZ TAPIA",
    partido: "NUEVA GENERACION PATRIOTICA"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2025/12/PG-NGP-DEPARTAMENTAL-SANTA-CRUZ-.pdf"
  },
  {
    nombre: "LUIS FERNANDO CAMACHO VACA",
    partido: "ALIANZA CREEMOS PATRIA"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-ALIANZA-CREEMOS-PATRIA-DEPARTAMENTO-DE-SANTA-CRUZ.pdf"
  },
  {
    nombre: "MAURICIO QUEZADA MOSTAJO",
    partido: "PARTIDO DEMOCRATA CRISTIANO"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2025/12/PG-PDC-DEPARTAMENTAL-SANTA-CRUZ.pdf"
  },
  {
    nombre: "MIGUEL CADIMA CASTRO",
    partido: "ALIANZA TRABAJO, OBRAS, DESARROLLO INTEGRAL, OPORTUNIDADES Y SEGURIDAD"
  },
  
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-AC-SC-PARA-TODOS-DEPARTAMENTO-DE-SANTA-CRUZ.pdf"
  },
  {
    nombre: "VLADIMIR ARIEL PENA VIRHUEZ",
    partido: "FUERZA Y ESPERANZA"
  }*/
 {
    nombre: "OTTO ANDRES RITTER MENDEZ",
    partido: "SANTA CRUZ PARA TODOS"}
,{
    nombre: "JUAN PABLO VELASCO DALENCE",
    partido: "LIBERTAD Y REPUBLICA"
,}
]
/** 
const candidatosAlcaldia: Candidato[] = [
  {
    nombre: "ALFREDO SOLARES GARRADO",
    partido: "ALIANZA PATRIA UNIDOS"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-ALIANZA-PATRIA-MUNICIPIO-DE-SANTA-CRUZ-DE-LA-SIERRA-.pdf"
  },
  {
    nombre: "ANGELICA SOSA ARREAZA",
    partido: "SANTA CRUZ PARA TODOS"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-AC-SC-PARA-TODOS-MUNI-DE-SANTA-CRUZ-DE-LA-SIERRA.pdf"
  },
  {
    nombre: "CARLOS ALBERTO SUBIRANA SUAREZ",
    partido: "ALIANZA DEPARTAMENTAL TODOS"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-ALIANZA-DEPARTAMENTAL-TODOS.pdf"
  },
  {
    nombre: "CARLOS MANUEL SAAVEDRA SAAVEDRA",
    partido: "V O S"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-MUNI-MUNICIPIO-DE-SANTA-CRUZ-DE-LA-SIERRA-VOS.pdf"
  },
  {
    nombre: "FELIX ENRIQUE OROS RIVERO",
    partido: "MOVIMIENTO TERCER SISTEMA"
  },
  {
    nombre: "GOMER PADILLA JARO",
    partido: "ALIANZA SOLIDARIA POPULAR"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/ASIP-SANTA-CRUZ-DE-LA-SIERRA-PLAN-DE-GOBIERNO.pdf"
  },
  {
    nombre: "INGRID ROSARIO SCHAMISSEDDINE SOMOZA",
    partido: "UNION, DEMOCRACIA Y OPORTUNIDAD SOCIAL"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-AGRUPACION-UNIDOS-MUNI-DE-SANTA-CRUZ-DE-LA-SIERRA-.pdf"
  },
  {
    nombre: "JOSE GARY ANEZ SANCHEZ",
    partido: "PRIMERO SANTA CRUZ"
  },
  {
    nombre: "ORLANDO PENA BALDERRAMA",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS"
  },
  {
    nombre: "OSCAR VARGAS ORTIZ",
    partido: "SEGURIDAD, ORDEN Y LIBERTAD"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-AGRUPACION-CIUDADANA-SOL-MUNI-DE-SANTA-CRUZ-DE-LA-SIERRA.pdf"
  },
  {
    nombre: "PAOLA LORENA CRONEMBOLD LANGUIDEY",
    partido: "NGP MUNI DE SANTA CRUZ DE LA SIERRA"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2025/12/PG-NGP-MUNI-DE-SANTA-CRUZ-DE-LA-SIERRA.pdf"
  },
  {
    nombre: "RAFAEL QUINTEROS MONTAÑO",
    partido: "PDC"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2025/12/PG-PDC-MUNI-DE-SANTA-CRUZ-DE-LA-SIERRA.pdf"
  },
  {
    nombre: "RUBEN FEDERICO MORON ENCINAS",
    partido: "FRENTE DE UNIDAD NACIONAL"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2025/12/PG-UN-MUNI-DE-SANTA-CRUZ-DE-LA-SIERRA-.pdf"
  },
  {
    nombre: "SOO HYUN CHUNG",
    partido: "FUERZA Y ESPERANZA"
,
    propuestas: "https://santacruz.oep.org.bo/wp-content/uploads/2026/01/PG-FUERZA-Y-ESPERANZA-MUNI-DE-SANTA-CRUZ-DE-LA-SIERRA.pdf"
  },
]
*/
export default function CandidatosSantaCruz() {
  return (
    <section id="candidatos-santa-cruz" className="w-full max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <div className="mx-auto mb-4 h-1 w-32 rounded-full bg-[#7ad9a8]"></div>
        <h2 className="text-3xl font-bold text-black">Candidatos Santa Cruz</h2>
        <p className="mt-2 text-gray-600">
          Gobernacion de Santa Cruz
        </p>
      </header>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Candidatos a la gobernacion de Santa Cruz
          </h3>

    
          <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidatosGobernacion.map((candidato) => (
              <article
                key={candidato.nombre}
                className="rounded-xl border border-[#bdecd3] bg-[#e7fbf1] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg border border-[#bdecd3] bg-white">
                  <Image
                    src={`/candidaturas_c/santa cruz/gorbernacion/${candidato.nombre}.webp`}
                    alt={candidato.nombre}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <h4 className="text-sm font-bold text-center text-black uppercase leading-snug">
                  {candidato.nombre}
                </h4>
                <p className="mt-3 text-sm font-medium text-center text-gray-700">
                  {candidato.partido}
                </p>
                {candidato.propuestas && (
                  <div className="mt-4 flex justify-center">
                    <a
                      href={candidato.propuestas}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#00cfaf] px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#00ab90] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00cfaf] focus:ring-offset-2"
                    >
                      Ver Propuestas
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
 {/*  
        <div>
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Candidatos a la alcaldia de Santa Cruz
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidatosAlcaldia.map((candidato) => (
              <article
                key={candidato.nombre}
                className="rounded-xl border border-[#bdecd3] bg-[#e7fbf1] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg border border-[#bdecd3] bg-white">
                  <Image
                    src={`/candidaturas_c/santa cruz/alcaldia/${candidato.nombre}.webp`}
                    alt={candidato.nombre}
                    fill
                    className="object-contain p-1"
                  />
                </div>
                <h4 className="text-sm font-bold text-center text-black uppercase leading-snug">
                  {candidato.nombre}
                </h4>
                <p className="mt-3 text-sm font-medium text-center text-gray-700">
                  {candidato.partido}
                </p>
                {candidato.propuestas && (
                  <div className="mt-4 flex justify-center">
                    <a
                      href={candidato.propuestas}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#00cfaf] px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#00ab90] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#00cfaf] focus:ring-offset-2"
                    >
                      Ver Propuestas
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
