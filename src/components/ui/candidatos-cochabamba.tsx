"use client"

type Candidato = {
  nombre: string
  partido: string
}

const candidatosAlcaldia: Candidato[] = [
  {
    nombre: "CARLOS ALFREDO ZAVALETA PANIAGUA",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS"
  },
  {
    nombre: "FRANCISCO JAVIER BELLOTT MONTALVO",
    partido: "SOLUCIONES CON TODOS"
  },
  {
    nombre: "JAIME ADUANA QUINTANA",
    partido: "FRENTE AMPLIO PATRIOTICO"
  },
  {
    nombre: "JOSE CARLOS SANCHEZ VERAZAIN",
    partido: "NUEVA GENERACION PATRIOTICA"
  },
  {
    nombre: "MANFRED ARMANDO ANTONIO REYES VILLA BACIGALUPI",
    partido: "AUTONOMIA PARA BOLIVIA SUMATE"
  },
  {
    nombre: "RAMON OSCAR DAZA SALAMANCA",
    partido: "ALIANZA PATRIA UNIDOS"
  },
  {
    nombre: "ROCIO ALEJANDRA MOLINA TRAVESI",
    partido: "UNIDOS"
  },
  {
    nombre: "RONALD ANTONIO UNZUETA QUIROGA",
    partido: "MOVIMIENTO TERCER SISTEMA"
  }
]

const candidatosGobernacion: Candidato[] = [
  {
    nombre: "ALEJANDRO MOSTAJO RUEDA",
    partido: "MOVIMIENTO TERCER SISTEMA"
  },
  {
    nombre: "ESTHER SORIA GONZALES",
    partido: "UNIDOS"
  },
  {
    nombre: "JUAN ROBERTH FLORES ENCINAS",
    partido: "LIBERTAD Y REPUBLICA"
  },
  {
    nombre: "MARIO ENRIQUE SEVERICH BUSTAMANTE",
    partido: "SOLUCIONES CON TODOS"
  },
  {
    nombre: "RUTH ALINA PERALTA CALVIMONTES",
    partido: "FRENTE REVOLUCIONARIO DE IZQUIERDA"
  },
  {
    nombre: "SERGIO OLIVER RODRIGUEZ MERCADO",
    partido: "AUTONOMIA PARA BOLIVIA SUMATE"
  },
  {
    nombre: "WILFREDO ROLANDO MORALES ZEBALLOS",
    partido: "ALIANZA PATRIA UNIDOS"
  },
  {
    nombre: "LEONARDO LOZA",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS"
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
            Candidatos a la gobernacion de Cochabamba
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidatosGobernacion.map((candidato) => (
              <article
                key={candidato.nombre}
                className="rounded-xl border border-[#bfe3ff] bg-[#e9f6ff] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
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
