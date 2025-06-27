"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { ArrowLeft, Send, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      })
  
      if (res.ok) {
        setFormStatus("success")
        setFormState({ name: "", email: "", message: "" })
      } else {
        setFormStatus("error")
      }
    }
    catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("error")
    }
  }
  const resetForm = () => {
    setFormStatus("idle")
    if (formStatus === "error") {
      // Keep the form data if there was an error
    } else {
      setFormState({ name: "", email: "", message: "" })
    }
  }

  return (
    <>
      <main className="py-16 px-4 sm:px-8 min-h-screen bg-gradient-to-b from-background to-gray-50/50">
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
            <h1 className="text-4xl font-bold mb-4 font-round">BUZON DE SUGERENCIAS</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tu opinión es importante para nosotros. Déjanos tus comentarios, sugerencias o preguntas y te
              responderemos a la brevedad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-3">
              <Card className="overflow-hidden border-foreground/10 shadow-lg">
                <CardContent className="p-0">
                  <div className="bg-primary text-primary-foreground p-6">
                    <h2 className="text-2xl font-semibold">Envíanos un mensaje</h2>
                    <p className="mt-2 text-primary-foreground/80">
                      Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                    </p>
                  </div>

                  <div className="p-6">
                    <AnimatePresence mode="wait">
                      {formStatus === "idle" || formStatus === "submitting" || formStatus === "error" ? (
                        <motion.form
                          key="form"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="space-y-4"
                          onSubmit={handleSubmit}
                          ref={formRef}
                        >
                          {formStatus === "error" && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start">
                              <AlertCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium">Error al enviar el mensaje</p>
                                <p className="text-sm">Por favor intenta nuevamente en unos momentos.</p>
                              </div>
                            </div>
                          )}

                          <div className="grid gap-2">
                            <label htmlFor="name" className="text-sm font-medium">
                              Nombre
                            </label>
                            <input
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Tu nombre"
                              required
                            />
                          </div>

                          <div className="grid gap-2">
                            <label htmlFor="email" className="text-sm font-medium">
                              Correo electrónico
                            </label>
                            <input
                              id="email"
                              name="email"
                              type="email"
                              value={formState.email}
                              onChange={handleChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="tu@email.com"
                              required
                            />
                          </div>

                          <div className="grid gap-2">
                            <label htmlFor="message" className="text-sm font-medium">
                              Mensaje
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formState.message}
                              onChange={handleChange}
                              className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Escribe tu mensaje aquí..."
                              required
                            />
                          </div>

                          <Button type="submit" className="w-full group" disabled={formStatus === "submitting"}>
                            {formStatus === "submitting" ? (
                              <>
                                <svg
                                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                >
                                  <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  ></circle>
                                  <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                  ></path>
                                </svg>
                                Enviando...
                              </>
                            ) : (
                              <>
                                <span>Enviar mensaje</span>
                                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </Button>
                        </motion.form>
                      ) : (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="text-center py-8"
                        >
                          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h3>
                          <p className="text-gray-600 mb-6">
                            Gracias por contactarnos. Hemos recibido tu mensaje y te responderemos a la brevedad.
                          </p>
                          <Button onClick={resetForm}>Enviar otro mensaje</Button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Card className="h-full border-foreground/10">
                <CardContent className="p-6 h-full flex flex-col">
                  <h2 className="text-xl font-semibold mb-4">Información de contacto</h2>

                  <div className="space-y-6 flex-grow">
                    <div>
                      <h3 className="font-medium mb-2">Dirección</h3>
                      <p className="text-gray-600">La Paz, Bolivia</p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-2">Correo electrónico</h3>
                      <p className="text-gray-600">presente.bolivia@gmail.com
                      </p>
                      <p className="text-gray-600">natiaparicioj@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

