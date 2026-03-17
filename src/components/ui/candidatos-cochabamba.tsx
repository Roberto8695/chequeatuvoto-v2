"use client"

import Image from "next/image"

type Candidato = {
  nombre: string
  partido: string
  imagen?: string
  propuestas?: string
}

const candidatosAlcaldia: Candidato[] = [
  {
    nombre: "CARLOS ALFREDO ZAVALETA PANIAGUA",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS",
    imagen: "/candidaturas_c/cochabamba/alcaldia/CARLOS ALFREDO ZAVALETA PANIAGUA.webp",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PLAN-DE-GOBIERNO-ALIANZA-UNIDOS-POR-LOS-PUEBLOS.pdf"
  },
  {
    nombre: "FRANCISCO JAVIER BELLOTT MONTALVO",
    partido: "SOLUCIONES CON TODOS",
    imagen: "/candidaturas_c/cochabamba/alcaldia/FRANCISCO JAVIER BELLOTT MONTALVO.webp",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-DE-GOBIERNO-SOLUCIONES-CON-TODOS.pdf"
  },
  {
    nombre: "CRISTIAN TASTACA AQUINO",
    partido: "PARTIDO DEMOCRATA CRISTIANO",
    imagen: "/candidaturas_c/cochabamba/alcaldia/CRISTIAN TASTACA AQUINO.webp",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-DE-GOBIERNO-PDC.pdf"
  },
  {
    nombre: "GIOVANN ARZABE GARCIA",
    partido: "LIBRE",
    imagen: "/candidaturas_c/cochabamba/alcaldia/GIOVANN ARZABE GARCIA.webp",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMAS-DE-GOBIERNO-LIBRE.pdf"
  },
  {
    nombre: "JHON GUALBERT MENDOZA GARCIA",
    partido: "FRI",
    imagen: "/candidaturas_c/cochabamba/alcaldia/JHON GUALBERT MENDOZA GARCIA.webp",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2026/01/PROGRAMA-DE-GOBIERNO-FRI.pdf"
  },
 
  {
    nombre: "JOSE CARLOS SANCHEZ VERAZAIN",
    partido: "NUEVA GENERACION PATRIOTICA",
    imagen: "/candidaturas_c/cochabamba/alcaldia/JOSE CARLOS SANCHEZ VERAZAIN.webp",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-DE-GOBIERNO-NGP.pdf"
  },
  {
    nombre: "MANFRED ARMANDO ANTONIO REYES VILLA BACIGALUPI",
    partido: "AUTONOMIA PARA BOLIVIA SUMATE",
    imagen: "/candidaturas_c/cochabamba/alcaldia/MANFRED ARMANDO ANTONIO REYES VILLA BACIGALUPI.webp",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-DE-GOBIERNO-SUMATE.pdf"
  },
  {
    nombre: "RAMON OSCAR DAZA SALAMANCA",
    partido: "ALIANZA PATRIA UNIDOS",
    imagen: "/candidaturas_c/cochabamba/alcaldia/RAMON OSCAR DAZA SALAMANCA.webp",
    propuestas: "http://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMAS-DE-GOBIERNO-ALIANZA-PATRIA.pdf"
  },
  {
    nombre: "ROCIO ALEJANDRA MOLINA TRAVESI",
    partido: "UNIDOS",
    imagen: "/candidaturas_c/cochabamba/alcaldia/ROCIO ALEJANDRA MOLINA TRAVESI.webp",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-DE-GOBIERNO-UNIDOS.pdf"
  },
  {
    nombre: "RONALD ANTONIO UNZUETA QUIROGA",
    partido: "MOVIMIENTO TERCER SISTEMA",
    imagen: "/candidaturas_c/cochabamba/alcaldia/RONALD ANTONIO UNZUETA QUIROGA.webp",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-MOVIMIENTO-TERCER-SISTEMA.pdf"
  }
]

const candidatosGobernacion: Candidato[] = [
  {
    nombre: "ALEJANDRO MOSTAJO RUEDA",
    partido: "MOVIMIENTO TERCER SISTEMA",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-MOVIMIENTO-TERCER-SISTEMA.pdf"
  },
  {
    nombre: "ESTHER SORIA GONZALES",
    partido: "UNIDOS",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-DE-GOBIERNO-UNIDOS.pdf"
  },
  {
    nombre: "JHON ARIEL RIOJA GUZMAN",
    partido: "NGP",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-DE-GOBIERNO-NGP.pdf"
  },
  {
    nombre: "JUAN ROBERTH FLORES ENCINAS",
    partido: "LIBERTAD Y REPUBLICA",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMAS-DE-GOBIERNO-LIBRE.pdf"
  },
  {
    nombre: "MARIO ENRIQUE SEVERICH BUSTAMANTE",
    partido: "SOLUCIONES CON TODOS",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-DE-GOBIERNO-SOLUCIONES-CON-TODOS.pdf"
  },
  {
    nombre: "RUTH ALINA PERALTA CALVIMONTES",
    partido: "FRENTE REVOLUCIONARIO DE IZQUIERDA",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2026/01/PROGRAMA-DE-GOBIERNO-FRI.pdf"
  },
  {
    nombre: "SERGIO OLIVER RODRIGUEZ MERCADO",
    partido: "AUTONOMIA PARA BOLIVIA SUMATE",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMA-DE-GOBIERNO-SUMATE.pdf"
  },
  {
    nombre: "WILFREDO ROLANDO MORALES ZEBALLOS",
    partido: "ALIANZA PATRIA UNIDOS",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PROGRAMAS-DE-GOBIERNO-ALIANZA-PATRIA.pdf"
  },
  {
    nombre: "LEONARDO LOZA",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS",
    propuestas: "https://cochabamba.oep.org.bo/wp-content/uploads/2025/12/PLAN-DE-GOBIERNO-ALIANZA-UNIDOS-POR-LOS-PUEBLOS.pdf"
  }
]

export default function CandidatosCochabamba() {
  return (
    <section id="candidatos-cochabamba" className="w-full max-w-6xl mx-auto px-4 py-12">
      <header className="text-center mb-10">
        <div className="mx-auto mb-4 h-1 w-32 rounded-full bg-[#87c7ff]"></div>
        <h2 className="text-3xl font-bold text-black">Candidatos Cochabamba</h2>
        <p className="mt-2 text-gray-600">
          Alcaldia y gobernacion con enfoque en nombre y partido politico.
        </p>
      </header>

      <div className="space-y-12">
        <div>
          <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Candidatos a la alcaldia de Cochabamba
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidatosAlcaldia.map((candidato) => (
              <article
                key={candidato.nombre}
                className="rounded-xl border border-[#bfe3ff] bg-[#e9f6ff] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg border border-[#bfe3ff] bg-white">
                  {candidato.imagen ? (
                    <Image
                      src={candidato.imagen}
                      alt={candidato.nombre}
                      fill
                      className="object-contain p-1"
                    />
                  ) : null}
                </div>
                <h4 className="text-sm text-center font-bold text-black uppercase leading-snug">
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
            Candidatos a la gobernacion de Cochabamba
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidatosGobernacion.map((candidato) => (
              <article
                key={candidato.nombre}
                className="rounded-xl border border-[#bfe3ff] bg-[#e9f6ff] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg border border-[#bfe3ff] bg-white">
                  <Image
                    src={`/candidaturas_c/cochabamba/gorbernacion/${candidato.nombre}.webp`}
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
