"use client"

import Image from "next/image"

type Candidato = {
  nombre: string
  partido: string
}

const candidatosGobernacion: Candidato[] = [
  {
    nombre: "CHI HYUN CHUNG",
    partido: "MOVIMIENTO TERCER SISTEMA"
  },
  {
    nombre: "BRANKO GORAN MARINKOVIC JOVICEVIC",
    partido: "MOVIMIENTO DEMOCRATA SOCIAL"
  },
  {
    nombre: "EDUARDO PEREIRA ALCOCER",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS DEPARTAMENTAL SANTA CRUZ"
  },
  {
    nombre: "GUIDO EDUARDO NAYAR PARADA",
    partido: "PRIMERO SANTA CRUZ"
  },
  {
    nombre: "JUAN PABLO VELASCO DALENCE",
    partido: "LIBERTAD Y REPUBLICA"
  },
  {
    nombre: "JULIO CESAR TORREZ TAPIA",
    partido: "NUEVA GENERACION PATRIOTICA"
  },
  {
    nombre: "LUIS FERNANDO CAMACHO VACA",
    partido: "ALIANZA CREEMOS PATRIA"
  },
  {
    nombre: "MAURICIO QUEZADA MOSTAJO",
    partido: "PARTIDO DEMOCRATA CRISTIANO"
  },
  {
    nombre: "MIGUEL CADIMA CASTRO",
    partido: "ALIANZA TRABAJO, OBRAS, DESARROLLO INTEGRAL, OPORTUNIDADES Y SEGURIDAD"
  },
  {
    nombre: "OTTO ANDRES RITTER MENDEZ",
    partido: "SANTA CRUZ PARA TODOS"
  },
  {
    nombre: "VLADIMIR ARIEL PENA VIRHUEZ",
    partido: "FUERZA Y ESPERANZA"
  }
]

const candidatosAlcaldia: Candidato[] = [
  {
    nombre: "ALFREDO SOLARES GARRADO",
    partido: "ALIANZA PATRIA UNIDOS"
  },
  {
    nombre: "ANGELICA SOSA ARREAZA",
    partido: "SANTA CRUZ PARA TODOS"
  },
  {
    nombre: "CARLOS ALBERTO SUBIRANA SUAREZ",
    partido: "ALIANZA DEPARTAMENTAL TODOS"
  },
  {
    nombre: "CARLOS MANUEL SAAVEDRA SAAVEDRA",
    partido: "V O S"
  },
  {
    nombre: "FELIX ENRIQUE OROS RIVERO",
    partido: "MOVIMIENTO TERCER SISTEMA"
  },
  {
    nombre: "GOMER PADILLA JARO",
    partido: "ALIANZA SOLIDARIA POPULAR"
  },
  {
    nombre: "INGRID ROSARIO SCHAMISSEDDINE SOMOZA",
    partido: "UNION, DEMOCRACIA Y OPORTUNIDAD SOCIAL"
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
  },
  {
    nombre: "PAOLA LORENA CRONEMBOLD LANGUIDEY",
    partido: "NGP MUNI DE SANTA CRUZ DE LA SIERRA"
  },
  {
    nombre: "RAFAEL QUINTEROS MONTAÑO",
    partido: "PDC"
  },
  {
    nombre: "RUBEN FEDERICO MORON ENCINAS",
    partido: "FRENTE DE UNIDAD NACIONAL"
  },
  {
    nombre: "SOO HYUN CHUNG",
    partido: "FUERZA Y ESPERANZA"
  },
]

export default function CandidatosSantaCruz() {
  return (
    <section id="candidatos-santa-cruz" className="w-full max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <div className="mx-auto mb-4 h-1 w-32 rounded-full bg-[#7ad9a8]"></div>
        <h2 className="text-3xl font-bold text-black">Candidatos Santa Cruz</h2>
        <p className="mt-2 text-gray-600">
          Gobernacion y alcaldia con enfoque en nombre y partido politico.
        </p>
      </header>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Candidatos a la gobernacion de Santa Cruz
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                <h4 className="text-sm font-bold text-black uppercase leading-snug">
                  {candidato.nombre}
                </h4>
                <p className="mt-3 text-sm font-medium text-gray-700">
                  {candidato.partido}
                </p>
              </article>
            ))}
          </div>
        </div>

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
                <h4 className="text-sm font-bold text-black uppercase leading-snug">
                  {candidato.nombre}
                </h4>
                <p className="mt-3 text-sm font-medium text-gray-700">
                  {candidato.partido}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
