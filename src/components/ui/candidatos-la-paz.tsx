"use client"

type Candidato = {
  nombre: string
  partido: string
}

const candidatosGobernacion: Candidato[] = [
  {
    nombre: "AUGUSTO SATURNINO OBLITAS GARCIA",
    partido: "ALIANZA SOCIAL PATRIOTICA"
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
  },
  {
    nombre: "FIDEL CHURA CHAVEZ",
    partido: "FRENTE REVOLUCIONARIO DE IZQUIERDA"
  },
  {
    nombre: "GERMAN ANTONIO RIVEROS PILCO",
    partido: "INNOVACION HUMANA"
  },
  {
    nombre: "INGVAR ELLEFSEN DOTZAUER",
    partido: "SOMOS LA PAZ"
  },
  {
    nombre: "LEOPOLDO RICHARD CHUI TORREZ",
    partido: "JUNTOS AL LLAMADO DE LOS PUEBLOS"
  },
  {
    nombre: "LUIS ANTONIO REVILLA HERRERO",
    partido: "ALIANZA PATRIA SOL"
  },
  {
    nombre: "ORLANDO CALLISAYA COPANA",
    partido: "PARTIDO DEMOCRATA CRISTIANO"
  },
  {
    nombre: "RENE YAHUASI CALAMANI",
    partido: "NUEVA GENERACION PATRIOTICA"
  },
  {
    nombre: "RICHARD ANDRES GOMEZ VELA",
    partido: "VENCEREMOS"
  },
  {
    nombre: "SANTOS QUISPE QUISPE",
    partido: "UNION POR EL CAMBIO"
  }
]

const candidatosAlcaldiaLaPaz: Candidato[] = [
  {
    nombre: "CARLOS EDUARDO PALENQUE MONROY",
    partido: "LIBERTAD Y REPUBLICA"
  },
  {
    nombre: "CARLOS NEMO RIVERO AUZA",
    partido: "ALIANZA PATRIA LA PAZ"
  },
  {
    nombre: "CESAR LUIS DOCKWEILER SUAREZ",
    partido: "INNOVACION HUMANA"
  },
  {
    nombre: "FERNANDO HENRRY VALENCIA AGUILERA",
    partido: "VAMOS INTEGRANDO EL DESARROLLO AUTONOMICO"
  },
  {
    nombre: "FRANCISCO XAVIER ITURRALDE TORRICO",
    partido: "ALIANZA SOCIAL PATRIOTICA"
  },
  {
    nombre: "HERNAN IVAN ARIAS DURAN",
    partido: "SUMA POR EL BIEN COMUN"
  },
  {
    nombre: "HERNAN RODRIGO RIVERA NAVA",
    partido: "NUEVA GENERACION PATRIOTICA"
  },
  {
    nombre: "ISAAC FELIPE FERNANDEZ CANO",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS"
  },
  {
    nombre: "JHONNY DARIO PLATA CHALAR",
    partido: "JUNTOS AL LLAMADO DE LOS PUEBLOS"
  },
  {
    nombre: "JORGE DULON FERNANDEZ",
    partido: "MOVIMIENTO TERCER SISTEMA"
  },
  {
    nombre: "LUIS EDUARDO SILES PEREZ",
    partido: "UNION POR EL CAMBIO"
  },
  {
    nombre: "MIGUEL ANTONIO ROCA SANCHEZ",
    partido: "SOMOS LA PAZ"
  },
  {
    nombre: "OSCAR MANUEL SOGLIANO HELGUERO",
    partido: "AUTONOMIA PARA BOLIVIA SUMATE"
  },
  {
    nombre: "RAUL DAZA QUIROGA",
    partido: "FRENTE REVOLUCIONARIO DE IZQUIERDA"
  },
  {
    nombre: "RICARDO ELOY CUEVAS VERA",
    partido: "MOVIMIENTO POR LA SOBERANIA"
  },
  {
    nombre: "WALDO ALBARRACIN SANCHEZ",
    partido: "VENCEREMOS"
  }
]

const candidatosAlcaldiaElAlto: Candidato[] = [
  {
    nombre: "DAVID BRAULIO VARGAS FLORES",
    partido: "MOVIMIENTO TERCER SISTEMA"
  },
  {
    nombre: "DAVID FREDDY MAMANI SILVESTRE",
    partido: "INNOVACION HUMANA"
  },
  {
    nombre: "ELISER NEMESIO ROCA TANCARA",
    partido: "UNION POR EL CAMBIO"
  },
  {
    nombre: "ESTEBAN ALFREDO PATI PARI",
    partido: "NUEVA GENERACION PATRIOTICA"
  },
  {
    nombre: "GABRIEL SEVERO MAMANI ORTIZ",
    partido: "PARTIDO DEMOCRATA CRISTIANO"
  },
  {
    nombre: "OSCAR CHIRINOS ALANOCA",
    partido: "MOVIMIENTO POR LA SOBERANIA"
  },
  {
    nombre: "OSCAR ELIAS CHOQUE",
    partido: "FRENTE REVOLUCIONARIO DE IZQUIERDA"
  },
  {
    nombre: "OSCAR ZENON HUANCA SILVA",
    partido: "VENCEREMOS"
  },
  {
    nombre: "PABLO CALLIZAYA AJAHUANA",
    partido: "MOVIMIENTO NACIONALISTA REVOLUCIONARIO"
  },
  {
    nombre: "SIMON SERGIO CHOQUE SINANI",
    partido: "ALIANZA UNIDOS POR LOS PUEBLOS"
  },
  {
    nombre: "SIMON WILMER GALVEZ JIMENEZ",
    partido: "LIBERTAD Y REPUBLICA"
  },
  {
    nombre: "TAHUICHI TAHUICHI QUISPE",
    partido: "JUNTOS AL LLAMADO DE LOS PUEBLOS"
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
            Candidatos a la alcaldia de La Paz
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidatosAlcaldiaLaPaz.map((candidato) => (
              <article
                key={candidato.nombre}
                className="rounded-xl border border-[#ffe4a6] bg-[#fff6d5] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
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
            Candidatos a la alcaldia de El Alto
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {candidatosAlcaldiaElAlto.map((candidato) => (
              <article
                key={candidato.nombre}
                className="rounded-xl border border-[#ffe4a6] bg-[#fff6d5] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
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
