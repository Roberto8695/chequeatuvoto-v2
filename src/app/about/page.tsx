"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Instagram, Facebook, Youtube } from "lucide-react"
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
    name: "Chequea Bolivia",
    image: "/imagenes2/IMAGENES PAGINA WEB/chequea.png",
    imageAlt: "Chequea Bolivia",
    objectFit: "contain",
    links: [
      { platform: "Instagram", url: "https://www.instagram.com/chequeabolivia/", icon: Instagram },
      { platform: "TikTok", url: "https://www.tiktok.com/@chequeabolivia", icon: TikTok },
      { platform: "Facebook", url: "https://www.facebook.com/ChequeaBolivia", icon: Facebook },
      { platform: "Youtube", url: "https://www.youtube.com/@chequeabolivia547", icon: Youtube },
    ],
  },
  {
    name: "La Aparicio",
    image: "/imagenes2/IMAGENES PAGINA WEB/natalia aparicio.jpg",
    imageAlt: "La Aparicio",
    links: [
      { platform: "Instagram", url: "https://www.instagram.com/la.aparicioooo/", icon: Instagram },
      { platform: "TikTok", url: "https://www.tiktok.com/@la.apariciooo", icon: TikTok },
      { platform: "Youtube", url: "https://www.youtube.com/@la.apariciooo", icon: Youtube },
    ],
  },
  {
    name: "Presente Bolivia",
    image: "/imagenes2/IMAGENES PAGINA WEB/presente.png",
    imageAlt: "Presente Bolivia",
    links: [
      { platform: "Instagram", url: "https://www.instagram.com/presente.bo/", icon: Instagram },
      { platform: "TikTok", url: "https://www.tiktok.com/@presente.bo", icon: TikTok },
      { platform: "Youtube", url: "https://www.youtube.com/@PresenteBolivia", icon: Youtube },
    ],
  },
  
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      // Scroll handler can be used for future animations if needed
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
              ¿Quiénes somos?

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
            <button
              className={`px-4 py-2 font-medium text-sm transition-colors relative ${
                activeTab === "policy" ? "text-primary" : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab("policy")}
            >
              Política
              {activeTab === "policy" && (
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
                      Chequea Tu Voto es una campaña apartidista y sin fines de lucro que busca ayudarte a tomar decisiones informadas en tiempos electorales. Aquí encontrarás información verificada sobre candidatos, sus propuestas, sus trayectorias, así como herramientas para identificar y evitar la desinformación. También ponemos a tu disposición datos clave del proceso electoral como el calendario, las normas vigentes y otros recursos útiles.

                    </p>
                    <p className="text-lg">
                      Esta campaña nació como una propuesta de Natalia y Gabriel (miembro de Presente.bo) durante un bootcamp de sensibilización y capacitación realizado en Cochabamba, donde participaron 28 creadores de contenido comprometidos con frenar la desinformación en contextos electorales. Hoy, en alianza con ellos, impulsamos esta segunda versión de Chequea Tu Voto, ahora con un alcance más amplio, dirigido a toda la ciudadanía, porque creemos que votar es importante, pero votar informados lo es aún más.

                    </p>
                    <p className="text-lg">En un mundo donde la información circula velozmente —y no siempre de forma confiable—, esta página se convierte en una herramienta para ejercer tu derecho al voto con libertad y conciencia.
                    </p>
                     <p className="text-lg">
                      Esperamos que esta plataforma te sea útil
                    </p>
                  </div>
                </CardContent>
              </Card>

              
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
                            <Image
                              src={org.image || "/placeholder.svg"}
                              alt={org.imageAlt}
                              fill
                              className="object-contain"
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

              
            </motion.div>
          )}

          {activeTab === "policy" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">Política de corrección de datos</h2>
                  <div className="space-y-4">
                    <p className="text-lg leading-relaxed">
                      En este portal web asumimos con responsabilidad el compromiso de brindar información verificada y precisa. En caso de detectarse algún error nos comprometemos a revisar la información de forma inmediata, corregirla con transparencia y dejar constancia de la rectificación para mantener la confianza y el rigor informativo que nos caracteriza.
                    </p>
                    <p className="text-lg leading-relaxed">
                      Si nuestros usuarios, hombres y mujeres, consideran que alguna de nuestras publicaciones tiene errores o es incompleta, pueden contactarnos a través de nuestras redes sociales o la línea de WhatsApp <a  href="https://wa.me/59178370590" target="_blank" rel="noopener noreferrer"><span className="font-semibold text-red text-primary">78370590</span></a>. El único requisito que exigimos es que el usuario se identifique plenamente.
                    </p>
                  </div>
                </CardContent>
              </Card>
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