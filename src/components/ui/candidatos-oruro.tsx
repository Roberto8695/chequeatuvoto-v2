"use client"

import Image from "next/image"

type Candidato = {
	nombre: string
	partido: string
	imagen: string
}

const candidatosGobernacion: Candidato[] = [
	{
		nombre: "Édgar Sánchez",
		partido: "Agrupación Jacha",
		imagen: "/candidaturas_c/segunda_vuelta/Édgar Sánchez.webp"
	},
	{
		nombre: "Óscar Chambi Callapa",
		partido: "Alianza Patria Oruro",
		imagen: "/candidaturas_c/segunda_vuelta/Óscar Chambi Callapa.webp"
	}
]

export default function CandidatosOruro() {
	return (
		<section id="candidatos-oruro" className="w-full max-w-6xl mx-auto px-4 py-12">
			<header className="text-center mb-10">
				<div className="mx-auto mb-4 h-1 w-32 rounded-full bg-[#87c7ff]"></div>
				<h2 className="text-3xl font-bold text-black">Candidatos Oruro</h2>
				<p className="mt-2 text-gray-600">Segunda vuelta para gobernación: nombre y organización política.</p>
			</header>

			<div>
				<h3 className="text-2xl font-semibold text-black mb-6 text-center">
					Candidatos a la gobernación de Oruro
				</h3>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
					{candidatosGobernacion.map((candidato) => (
						<article
							key={candidato.nombre}
							className="rounded-xl border border-[#bfe3ff] bg-[#e9f6ff] p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1"
						>
							<div className="relative mb-3 h-44 w-full overflow-hidden rounded-lg border border-[#bfe3ff] bg-white">
								<Image
									src={candidato.imagen}
									alt={candidato.nombre}
									fill
									className="object-contain p-1"
								/>
							</div>
							<h4 className="text-sm font-bold text-center text-black uppercase leading-snug">
								{candidato.nombre}
							</h4>
							<p className="mt-3 text-sm font-medium text-center text-gray-700">{candidato.partido}</p>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
