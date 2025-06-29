"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Instagram, Facebook, Youtube, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

// Custom TikTok icon since it's not in Lucide
const TikTok = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-tiktok"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const socialLinks = [
  {
    name: "La Aparicio",
    image: "/imagenes2/IMAGENES PAGINA WEB/natalia aparicio.jpg",
    imageAlt: "La Aparicio",
    links: [
      { platform: "Instagram", url: "https://www.instagram.com/la.aparicioooo/", icon: Instagram },
      { platform: "TikTok", url: "https://www.tiktok.com/@la.apariciooo", icon: TikTok },
      { platform: "Youtube", url: "https://www.youtube.com/@PresenteBolivia", icon: Youtube },
    ],
  },
  {
    name: "Presente Bolivia",
    image: "/imagenes2/IMAGENES PAGINA WEB/presente.png",
    imageAlt: "Presente Bolivia",
    links: [
      { platform: "Instagram", url: "https://www.instagram.com/presente.bo/", icon: Instagram },
      { platform: "TikTok", url: "https://www.tiktok.com/@presente.bo", icon: TikTok },
      { platform: "Youtube", url: "https://www.youtube.com/@la.apariciooo", icon: Youtube },
    ],
  },
  {
    name: "Chequea Bolivia)",
    image: "/imagenes2/IMAGENES PAGINA WEB/chequea Bolivia.png",
    imageAlt: "Chequea Bolivia",
    links: [
      { platform: "Instagram", url: "https://www.instagram.com/chequeabolivia/", icon: Instagram },
      { platform: "Facebook", url: "https://www.facebook.com/ChequeaBolivia", icon: Facebook },
    ],
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <main className="py-16 px-4 sm:px-8 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Volver al inicio
              </Button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4 font-round">QUIENES SOMOS</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce más sobre nuestra iniciativa apartidista para informar a la ciudadanía
            </p>
          </motion.div>

          <div className="flex border-b mb-8">
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                activeTab === "about" ? "text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("about")}
            >
              Nuestra Misión
              {activeTab === "about" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                ></motion.div>
              )}
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                activeTab === "contact" ? "text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              Contacto
              {activeTab === "contact" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                ></motion.div>
              )}
            </button>
          </div>

          {activeTab === "about" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <p className="text-lg">
                      Somos una iniciativa apartidista sin fines lucrativos que busca brindar a la población información
                      verificada de los candidatos, sus propuestas políticas, sus historiales. También herramientas para
                      no caer en la desinformación, y por supuesto, información básica electoral como el calendario
                      electoral y el marco normativo para las elecciones.
                    </p>
                    <p className="text-lg">
                      Creemos en el derecho de cada ciudadano y ciudadana a tomar decisiones informadas y sin
                      manipulaciones. Entendemos que en nuestro mundo digital donde la información fluye a gran
                      velocidad, <span className="font-semibold">Chequea Tu Voto</span> es una herramienta importante
                      para ejercer este derecho.
                    </p>
                    <p className="text-lg">Esperamos que esta página sea de utilidad, por favor dejen sus comentarios y sugerencias.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  style={{
                    y: typeof window !== "undefined" ? (window.innerWidth > 768 ? scrollY * 0.1 : scrollY * 0.03) : 0,
                    rotate: typeof window !== "undefined" ? (window.innerWidth > 768 ? scrollY * 0.02 : 0) : 0,
                  }}
                >
                  <Card className="h-full transform transition-transform hover:scale-105 hover:shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Nuestra Visión</h3>
                      <p>
                        Aspiramos a una Bolivia donde cada ciudadano pueda ejercer su derecho al voto con pleno
                        conocimiento y libertad, sin manipulaciones ni desinformación.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  style={{
                    y: typeof window !== "undefined" ? (window.innerWidth > 768 ? scrollY * -0.1 : scrollY * -0.03) : 0,
                    rotate: typeof window !== "undefined" ? (window.innerWidth > 768 ? scrollY * -0.02 : 0) : 0,
                  }}
                >
                  <Card className="h-full transform transition-transform hover:scale-105 hover:shadow-lg mt-8 md:mt-0 sm:mt-10">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-3">Nuestros Valores</h3>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Transparencia</li>
                        <li>Imparcialidad</li>
                        <li>Rigor informativo</li>
                        <li>Compromiso democrático</li>
                        <li>Servicio a la ciudadanía</li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-semibold mb-6">Contactos:</h2>

              <div className="space-y-6">
                {socialLinks.map((org, index) => (
                  <motion.div
                    key={org.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                          {/* Left side - Organization and social icons */}
                          <div className="p-6">
                            <h3 className="text-xl font-semibold mb-4">{org.name}</h3>
                            <div className="flex flex-wrap gap-3 mb-4">
                              {org.links.map((link) => {
                                const Icon = link.icon
                                return (
                                  <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10 transition-colors group"
                                    title={`${org.name} - ${link.platform}`}
                                  >
                                    <Icon className="h-6 w-6 text-gray-600 group-hover:text-primary group-hover:scale-110 transition-transform" />
                                  </a>
                                )
                              })}
                            </div>
                            <p className="text-gray-600 text-sm">
                              Síguenos en nuestras redes sociales para estar al día con la información electoral.
                            </p>
                          </div>

                          {/* Right side - Image */}
                          <div className="bg-gray-100 h-[200px] min-h-[250px] relative">
                            <img
                              src={org.image || "/placeholder.svg"}
                              alt={org.imageAlt}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                              <div className="p-4 text-white">
                                <p className="font-medium">{org.name}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Link href="/contact">
                  <Button className="group">
                    <span>Ir al Buzón de Sugerencias</span>
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </>
  )
}

AboutPage.meta = {
  title: "Quiénes Somos - Chequea Tu Voto",
  description: "Conoce más sobre nuestra iniciativa apartidista para informar a la ciudadanía.",
}