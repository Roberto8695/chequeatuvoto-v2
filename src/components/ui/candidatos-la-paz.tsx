"use client"

import Image from "next/image"

type Candidato = {
  nombre: string
  partido: string
  propuestas?: string
}

const candidatosGobernacion: Candidato[] = [
  {
    nombre: "AUGUSTO SATURNINO OBLITAS GARCIA",
    partido: "ALIANZA SOCIAL PATRIOTICA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/ALIANZA-PATRIA-SOL-DEPARTAMENTO-DE-LA-PAZ.pdf"
  },
  {
    nombre: "CLEMENTE GUTIERREZ MAMANI",
    partido: "MOVIMIENTO POR LA SOBERANIA"
  },
  {
    nombre: "DEMETRIO VILLCA ORDONEZ",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS"
  },
  {
    nombre: "FELIX PATZI PACO",
    partido: "MOVIMIENTO TERCER SISTEMA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/MNR.pdf"
  },
  {
    nombre: "FIDEL CHURA CHAVEZ",
    partido: "FRENTE REVOLUCIONARIO DE IZQUIERDA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/programa-de-Gobierno-Departamental-la-paz-fri.pdf"
  },
  {
    nombre: "FLAVIO EUDALDO MERLO MAYDANA",
    partido: "SUMATE"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/SUMATE.pdf"
  },
  {
    nombre: "GERMAN ANTONIO RIVEROS PILCO",
    partido: "INNOVACION HUMANA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/INNOVACION-HUMANA-DEPARTAMENTO-DE-LA-PAZ.pdf"
  },
  {
    nombre: "INGVAR ELLEFSEN DOTZAUER",
    partido: "SOMOS LA PAZ"
  },
  {
    nombre: "KURT EMMIL REINTSCH SAN MARTIN",
    partido: "LIBRE"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/LIBRE.pdf"
  },
  {
    nombre: "LEOPOLDO RICHARD CHUI TORREZ",
    partido: "JUNTOS AL LLAMADO DE LOS PUEBLOS"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/JALLALA.pdf"
  },
  {
    nombre: "LUIS ANTONIO REVILLA HERRERO",
    partido: "ALIANZA PATRIA SOL"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/ALIANZA-PATRIA-SOL-DEPARTAMENTO-DE-LA-PAZ.pdf"
  },
  {
    nombre: "ORLANDO CALLISAYA COPANA",
    partido: "PARTIDO DEMOCRATA CRISTIANO"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/PARTIDO-DEMOCRATA-CRISTIANO-DEPARTAMENTO-DE-LA-PAZ.pdf"
  },
  {
    nombre: "RENE YAHUASI CALAMANI",
    partido: "NUEVA GENERACION PATRIOTICA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/NUEVA-GENERACION-PATRIOTICA-DEPARTAMENTO-DE-LA-PAZ.pdf"
  },
  {
    nombre: "RICHARD ANDRES GOMEZ VELA",
    partido: "VENCEREMOS"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/VENCEREMOS.pdf"
  },
  {
    nombre: "SANTOS QUISPE QUISPE",
    partido: "UNION POR EL CAMBIO"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/PLAN-DE-GOBIERNO-GOBERNACION-FINAL.pdf"
  },
  {
    nombre: "YOSMAR ESPEJO VELA",
    partido: "SUMA POR EL BIEN COMUN"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/SUMA-POR-EL-BIEN-COMUN-DEPARTAMENTO-DE-LA-PAZ.pdf"
  }
]

const candidatosAlcaldiaLaPaz: Candidato[] = [
  {
    nombre: "CARLOS EDUARDO PALENQUE MONROY",
    partido: "LIBERTAD Y REPUBLICA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/LIBRE.pdf"
  },
  {
    nombre: "CARLOS NEMO RIVERO AUZA",
    partido: "ALIANZA PATRIA LA PAZ"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/ALIANZA-PATRIA-SOL-DEPARTAMENTO-DE-LA-PAZ.pdf"
  },
  {
    nombre: "CESAR LUIS DOCKWEILER SUAREZ",
    partido: "INNOVACION HUMANA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/INNOVACION-HUMANA-DEPARTAMENTO-DE-LA-PAZ.pdf"
  },
  {
    nombre: "EYNAR IVAN VISCARRA ANAVI",
    partido: "SUMA POR EL BIEN COMUN"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/SUMA-POR-EL-BIEN-COMUN-GAM-DE-EL-ALTO.pdf"
  },
  {
    nombre: "FERNANDO HENRRY VALENCIA AGUILERA",
    partido: "VAMOS INTEGRANDO EL DESARROLLO AUTONOMICO"
  },
  
  {
    nombre: "HERNAN IVAN ARIAS DURAN",
    partido: "SUMA POR EL BIEN COMUN"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/SUMA-POR-EL-BIEN-COMUN-DEPARTAMENTO-DE-LA-PAZ.pdf"
  },
  {
    nombre: "HERNAN RODRIGO RIVERA NAVA",
    partido: "NUEVA GENERACION PATRIOTICA"
  },
  {
    nombre: "ISAAC FELIPE FERNANDEZ CANO",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/ALIANZA-UNIDOS-POR-LOS-PUEBLOS-DEPARTAMENTO-DE-LA-PAZ-2.pdf"
  },
  {
    nombre: "JHONNY DARIO PLATA CHALAR",
    partido: "JUNTOS AL LLAMADO DE LOS PUEBLOS"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/JALLALA.pdf"
  },
  {
    nombre: "JORGE DULON FERNANDEZ",
    partido: "MOVIMIENTO TERCER SISTEMA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/MTS.pdf"
  },
  {
    nombre: "FRANCISCO JAVIER TARQUI DE TORREZ",
    partido: "SUMATE"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/SUMATE.pdf"
  },
  {
    nombre: "LUIS EDUARDO SILES PEREZ",
    partido: "UNION POR EL CAMBIO"
  },
  {
    nombre: "MARIO SILVA COYA",
    partido: "PARTIDO DEMOCRATA CRISTIANO GAM DE NUESTRA SENORA DE LA PAZ"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/PARTIDO-DEMOCRATA-CRISTIANO-GAM-DE-NUESTRA-SENORA-DE-LA-PAZ.pdf"
  },
  {
    nombre: "MIGUEL ANTONIO ROCA SANCHEZ",
    partido: "SOMOS LA PAZ"
  },
  {
    nombre: "NESTOR YUJRA QUISPE",
    partido: "PATRIA SOL"
  },
  {
    nombre: "OSCAR MANUEL SOGLIANO HELGUERO",
    partido: "AUTONOMIA PARA BOLIVIA SUMATE"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/SUMATE.pdf"
  },
  {
    nombre: "RAUL DAZA QUIROGA",
    partido: "FRENTE REVOLUCIONARIO DE IZQUIERDA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/programa-de-Gobierno-Departamental-la-paz-fri.pdf"
  },
  {
    nombre: "RICARDO ELOY CUEVAS VERA",
    partido: "MOVIMIENTO POR LA SOBERANIA"
  },
  {
    nombre: "RURY DANIEL BALLADARES MOLINA",
    partido: "TU ALCALDE DE CORAZON"
  },
  {
    nombre: "WALDO ALBARRACIN SANCHEZ",
    partido: "VENCEREMOS"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/VENCEREMOS.pdf"
  }
]

const candidatosAlcaldiaElAlto: Candidato[] = [
  {
    nombre: "DAVID BRAULIO VARGAS FLORES",
    partido: "MOVIMIENTO TERCER SISTEMA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/MTS.pdf"
  },
  {
    nombre: "DAVID FREDDY MAMANI SILVESTRE",
    partido: "INNOVACION HUMANA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/INNOVACION-HUMANA-GAM-DE-EL-ALTO.pdf"
  },
  {
    nombre: "ELISER NEMESIO ROCA TANCARA",
    partido: "UNION POR EL CAMBIO"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/PLAN-DE-GOBIERNO-GOBERNACION-FINAL.pdf"
  },
  {
    nombre: "ESTEBAN ALFREDO PATI PARI",
    partido: "NUEVA GENERACION PATRIOTICA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/NUEVA-GENERACION-PATRIOTICA-GAM-DE-EL-ALTO.pdf"
  },
  {
    nombre: "GABRIEL SEVERO MAMANI ORTIZ",
    partido: "PARTIDO DEMOCRATA CRISTIANO"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/PARTIDO-DEMOCRATA-CRISTIANO-GAM-DE-EL-ALTO.pdf"
  },
  {
    nombre: "OSCAR CHIRINOS ALANOCA",
    partido: "MOVIMIENTO POR LA SOBERANIA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/MOVIMIENTO-POR-LA-SOBERANIA-GAM-DE-EL-ALTO.pdf"
  },
  {
    nombre: "OSCAR ELIAS CHOQUE",
    partido: "FRENTE REVOLUCIONARIO DE IZQUIERDA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/PLAN-ESTRATEGICO-DE-GOBIERNO-MUNICIPAL-TODOS-POR-EL-ALTO-2026-2031-22-12-2025.pdf"
  },
  {
    nombre: "OSCAR ZENON HUANCA SILVA",
    partido: "VENCEREMOS"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/VENCEREMOS.pdf"
  },
  {
    nombre: "PABLO CALLIZAYA AJAHUANA",
    partido: "MOVIMIENTO NACIONALISTA REVOLUCIONARIO"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/MNR.pdf"
  },
  {
    nombre: "SIMON SERGIO CHOQUE SINANI",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS"
  },
  {
    nombre: "SIMON WILMER GALVEZ JIMENEZ",
    partido: "LIBERTAD Y REPUBLICA"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/LIBRE.pdf"
  },
  {
    nombre: "TAHUICHI TAHUICHI QUISPE",
    partido: "JUNTOS AL LLAMADO DE LOS PUEBLOS"
,
    propuestas: "https://lapaz.oep.org.bo/wp-content/uploads/2026/02/JALLALA.pdf"
  },
  {
    nombre: "WILMER OMAR PATTI TITO",
    partido: "ALIANZA SOCIAL PATRIOTICA"
  },
  {
    nombre: "YOACIR JESUS CALAMANI BARRIENTOS",
    partido: "FRENTE DE UNIDAD NACIONAL"
  }
]

export default function CandidatosLaPaz() {
  return (
    <section id="candidatos-la-paz" className="w-full max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <div className="mx-auto mb-4 h-1 w-32 rounded-full bg-[#ffe08a]"></div>
        <h2 className="text-3xl font-bold text-black">Candidatos La Paz</h2>
        <p className="mt-2 text-gray-600">
          Gobernacion y alcaldias con enfoque en nombre y partido politico.
        </p>
      </header>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Candidatos a la gobernacion de La Paz
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidatosGobernacion.map((candidato) => (
              <article
                key={candidato.nombre}
                className="rounded-xl border border-[#ffe4a6] bg-[#fff6d5] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg border border-[#ffe4a6] bg-white">
                  <Image
                    src={`/candidaturas_c/la_paz/gorbernacion/${candidato.nombre}.webp`}
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

        <div>
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Candidatos a la alcaldia de La Paz
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidatosAlcaldiaLaPaz.map((candidato) => (
              <article
                key={candidato.nombre}
                className="rounded-xl border border-[#ffe4a6] bg-[#fff6d5] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg border border-[#ffe4a6] bg-white">
                  <Image
                    src={`/candidaturas_c/la_paz/alcaldia/${candidato.nombre}.webp`}
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

        <div>
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Candidatos a la alcaldia de El Alto
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidatosAlcaldiaElAlto.map((candidato) => (
              <article
                key={candidato.nombre}
                className="rounded-xl border border-[#ffe4a6] bg-[#fff6d5] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg border border-[#ffe4a6] bg-white">
                  <Image
                    src={`/candidaturas_c/la_paz/alcaldia/${candidato.nombre}.webp`}
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
      </div>
    </section>
  )
}
