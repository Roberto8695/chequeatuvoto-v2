import { useState } from "react"
import Image from "next/image"
import {
  Building,
  Award,
  Flag,
  Users2,
} from "lucide-react" // Importar los iconos de lucide-react
import { ChevronDown, ChevronUp, Filter } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
const bloques = [
  {
    id: "unidad-opositora",
    name: "Bloque de Unidad Opositora",
    image: "/imagenes2/IMAGENES PAGINA WEB/bloque_unidad_opositora.jpg",
    description:
      "Este bloque es una alianza de políticos que han ocupado cargos públicos en el pasado. A excepción de Luis Fernando Camacho quien antes de ser candidato en 2019 y 2020, ocupó el cargo de Presidente del Comité Cívico Pro Santa Cruz.",
    actores: ["Samuel Doria Medina", "Jorge Tuto Quiroga Ramírez", "Amparo Ballivián Cuellar"],
    color: "bg-orange-100",
    icon: Building,
    tags: ["Oposición", "Centro-derecha", "Alianza"],
  },
  {
    id: "liberal-libertario",
    name: "Bloque Liberal-libertario",
    image: "/imagenes2/IMAGENES PAGINA WEB/Branko.png",
    description:
      "En este bloque se encuentra caracterizado por tener alianzas independientes pero que comparten el discurso ideológico liberal-libertario. Se trata de precandidatos independientes pero que comparten el discurso ideológico liberal-libertario.",
    actores: ["Branko Marinkovic", "Jaime Dunn", "José Carlos Sánchez Berzaín"],
    color: "bg-amber-100",
    icon: Award,
    tags: ["Liberal", "Libertario", "Independiente"],
  },
  {
    id: "evista",
    name: "Bloque Evista",
    image: "/imagenes2/IMAGENES PAGINA WEB/MAS.png",
    description:
      "Este bloque está dirigido por Evo Morales quien a la fecha se encuentra inhabilitado en conformidad con el Auto Constitucional 0063/2024 emitido por Tribunal Constitucional cuando aún los magistrados de este tribunal no se encontraban auto prorrogados.",
    actores: ["Evo Morales", "Andrónico Rodríguez"],
    color: "bg-purple-100",
    icon: Flag,
    tags: ["Izquierda", "Indigenista", "MAS"],
  },
  {
    id: "mas-ipsp",
    name: "Bloque MAS-IPSP",
    image: "/imagenes2/IMAGENES PAGINA WEB/mas ipsp.webp",
    description:
      "Este bloque está encabezado por la directiva renovada del partido político MAS-IPSP y el presidente Luis Arce Catacora. Aún no se ha definido un binomio para las elecciones, pero seguro se va a participar.",
    actores: ["Luis Arce Catacora"],
    color: "bg-blue-100",
    icon: Flag,
    tags: ["Oficialismo", "Izquierda", "MAS"],
  },
  {
    id: "independiente",
    name: "Bloque Independiente",
    image: "/imagenes2/IMAGENES PAGINA WEB/manfred.png",
    description:
      "En este bloque no existen alianzas ni un horizonte ideológico en común. Existen varios actores y actoras pero muchos de ellos aún no han cobrado relevancia política.",
    actores: ["Manfred Reyes Villa", "Chi Hyung Chung", "Rodrigo Paz"],
    color: "bg-green-100",
    icon: Users2,
    tags: ["Independiente", "Diverso", "Sin alianza"],
  },
]

export default function BloquesPreelectorales() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [expandedBloque, setExpandedBloque] = useState<string | null>(null)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => setSearchTerm(e.target.value)
  const handleFilterChange = (tag: string): void => setActiveFilter(activeFilter === tag ? null : tag)

  const toggleBloque = (id: string): void => setExpandedBloque(expandedBloque === id ? null : id)

  const allTags = [...new Set(bloques.flatMap((b) => b.tags))]

  const filteredBloques = bloques.filter(
    (bloque) =>
      bloque.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!activeFilter || bloque.tags.includes(activeFilter))
  )

  return (
    <div id="bloques-preelectorales" className="mt-16 sm:mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center font-round">BLOQUES PREELECTORALES</h2>
      <div className="mb-6 text-center max-w-3xl mx-auto">
        <p className="text-lg text-gray-600">
          Aclaramos que no todos los actores políticos mencionados han confirmado su precandidatura o están
          legalmente habilitados, sin embargo, este es un panorama general del escenario preelectoral hasta marzo
          del 2025.
        </p>
      </div>

      <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between items-center">
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Buscar bloques o actores..."
            className="pl-10 pr-4 py-2 border rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Filter className="h-5 w-5" />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          <span className="flex items-center text-sm font-medium text-gray-600 mr-2">
            <Filter className="h-4 w-4 mr-1" /> Filtrar por:
          </span>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant={activeFilter === tag ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleFilterChange(tag)}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredBloques.length > 0 ? (
          filteredBloques.map((bloque) => (
            <div
              key={bloque.id}
              className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                expandedBloque === bloque.id ? "shadow-lg" : "shadow"
              }`}
            >
              <div
                className={`${bloque.color} p-4 flex items-center justify-between cursor-pointer`}
                onClick={() => toggleBloque(bloque.id)}
              >
                <div className="flex items-center">
                  <div className="bg-white/80 p-2 rounded-full mr-3">
                    <bloque.icon className="h-6 w-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold">{bloque.name}</h3>
                </div>
                <div className="flex items-center">
                  <div className="hidden sm:flex gap-2 mr-4">
                    {bloque.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {expandedBloque === bloque.id ? (
                    <ChevronUp className="h-6 w-6 text-gray-700" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-700" />
                  )}
                </div>
              </div>

              {expandedBloque === bloque.id && (
                <div className="p-6 bg-white">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <div className="aspect-video relative rounded-lg overflow-hidden border">
                        {bloque.image && typeof bloque.image === "string" ? (
                          <Image
                            src={bloque.image || "/placeholder.svg"}
                            alt={bloque.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                            <p className="text-gray-600 font-semibold text-base">{bloque.name}</p>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 sm:hidden">
                        {bloque.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="md:w-2/3">
                      <div className="prose max-w-none">
                        <p className="text-lg mb-6">{bloque.description}</p>

                        <h4 className="text-xl font-semibold mb-3">Actores políticos principales:</h4>
                        <ul className="space-y-2">
                          {bloque.actores.map((actor, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gray-700 flex-shrink-0 mr-3 mt-2.5"></span>
                              <span className="text-lg">{actor}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-600">No se encontraron bloques que coincidan con tu búsqueda.</p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchTerm("")
                setActiveFilter(null)
              }}
            >
              Mostrar todos los bloques
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}


