"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Vote,
  History,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardCandidatos } from "./components/card-candidatos";
import { CardPartidos } from "./components/card-partidos";
import ContentFakeNews from "./components/content-fake";
import AvoidSharingSection from "./components/avoid-sharing";
import SurveyDetectionSection from "./components/survey-detection";
import HeroSection from "@/components/ui/hero-section";
import FeaturesGrid from "@/components/ui/features-grid";
import AnimatedTimeline from "@/components/ui/animated-timeline";
import LoadingScreen from "@/components/ui/loading-screen";

const features = [
  {
    name: "¿Las promesas de los candidatos son factibles y están bien fundamentadas?",
    description:
      "Es importante saber si los candidatos no están haciendo promesas vacías simplemente no factibles.",
    moreInfo:
      "Una ciudadanía informada fortalece la democracia. Es lógico que en una segunda vuelta electoral nos dejemos arrastrar por nuestras emociones, pero es muy importante analizar las propuestas para saber cómo gobernaría el próximo binomio en temas como la economía, la justicia y o la seguridad. Más allá de la propaganda, vale la pena evaluar los planes de gobierno.",

    risks: [
      "Me informo de las propuestas solo en redes sociales y de solo contenido que me hace sentir cómodo o cómoda.",
      "Me quedo solo con lo que vi de los candidatos en las entrevistas y me niego a debatirlas.",
    ],
    myrisk: [
      "Su discurso está basado principalmente en el ataque a otro candidato, partido, ideología o gestión gubernamental.",
      "Sus propuestas son inviables porque prometen demasiado y no saben cómo las ejecutarán.",
      "Sus propuestas implican sólo la acción del nivel ejecutivo (presidente y vicepresidente) o necesitarán de otras instancias (Asamblea) para que puedan ejecutarlas.",
    ],
    icon: Vote,
    image: "/Nuevos/img2.webp",
    color: "bg-blue-50",
  },
  {
    name: "¿Comprendo cómo funciona la segunda vuelta electoral?",
    description:
      "Es la primera vez que Bolivia celebrará una segunda vuelta electoral.",
    moreInfo:
      "La segunda vuelta electoral se celebra en Bolivia si ninguno de los candidatos obtuvo más del 50% de los votos válidos emitidos en la primera vuelta; o un mínimo del 40% de los votos válidos emitidos, con una diferencia de al menos 10% en relación a la segunda candidatura más votada.",

    risks: [
      "Pienso que se trata de nuevas elecciones, cuyos resultados cambiarán toda la estructura política.",
      "No es importante volver a votar porque ya participé en las elecciones del 17 de agosto.",
      "Pienso a menudo que mi voto no hará la diferencia.",
      "Pienso que tengo que votar por alguien que solo solucione lo urgente.",
    ],
    myrisk: [
      "Tienen discursos polarizantes que llaman a la violencia o que fomentan el discurso de odio.",
    ],
    icon: History,
    image: "/Nuevos/img4.webp",
    color: "bg-amber-50",
  },
  {
    name: "¿Conozco a los dos binomios presidenciales y sus historiales políticos?",
    description:
      "Es imprescindible conocer a los candidatos de los dos frentes y sus historiales políticos.",
    moreInfo:
      "Es importante conocer el historial político de los dos binomios que están habilitados para la segunda vuelta electoral. Saber si se trata de la primera vez que están en la arena política, si transitaron por otros partidos o si enfrentan denuncias de corrupción en gestiones anteriores ocupando cargos electivos.",
    risks: [
      "Solo conozco a los candidatos por lo que he leído o visto en las redes sociales.",
      "He hecho seguimiento a mi binomio favorito, lo demás no me importa.",
      "Algún candidato tiene procesos abiertos por denuncias de corrupción o malversación de fondos.",
      "No tiene una identidad política, ha cambiado de partido en función a su conveniencia.",
    ],
    myrisk: [
      "Los candidatos se niegan a ser cuestionados por su pasado político o por denuncias de corrupción en su contra.",
    ],
    icon: FileCheck,
    image: "/Nuevos/img3.webp",
    color: "bg-purple-50",
  },
];

const timelineEvents = [
  {
    date: "31 de agosto",
    title: "Convocatoria a Segunda Vuelta",
    description:
      "Convocatoria a Segunda Vuelta por el Tribunal Supremo Electoral.",
    
  },
  {
    date: "31 de agosto",
    title: "Difusión o publicación de estudios",
    description:
      "Difusión o publicación de estudios de opinión en materia electoral (encuestas). (segunda vuelta).",
    
  },
  {
    date: "31 de agosto",
    title: "Difusión de propaganda electoral",
    description:
      "Difusión de propaganda electoral en actos públicos de campaña y en medios de comunicación. (segunda vuelta).",
    
  },
  {
    date: "3 de septiembre",
    title: "Sorteo de ubicación de las franjas",
    description:
      "Sorteo de ubicación de las franjas y aprobación del diseño de la papeleta de sufragio por el Tribunal Supremo Electoral. (segunda vuelta).",
    
  },
  {
    date: "19 de septiembre",
    title: "Sorteo público para la selección de Jurados Electorales",
    description:
      "Sorteo público para la selección de Jurados Electorales de mesas de sufragio por los Tribunales Electorales Departamentales y por el Tribunal Supremo Electoral para las mesas de sufragio en el exterior. (segunda vuelta).",
    
  },
  {
    date: "20 de septiembre",
    title: "Notificación a los jurados",
    description:
      "Notificación a los jurados de mesa de sufragio designados por los Tribunales Electorales Departamentales para voto nacional y notificación de jurados de las mesas de sufragio designados por el Tribunal Supremo Electoral para voto en el exterior. (segunda vuelta).",
    
  },
  {
    date: "21 de septiembre",
    title: "Publicación en medios de prensa escrita y portal web del OEP",
    description:
      "Publicación en medios de prensa escrita y portal web del OEP de la nómina de los jurados de mesas de sufragio, por parte de los Tribunales Electorales Departamentales. Para el voto en el exterior, el Tribunal Supremo Electoral publicará la lista de jurados de mesa en el portal web del OEP. (segunda vuelta).",
    
  },
  {
    date: "22 de septiembre",
    title: "Presentación de excusas para el ejercicio",
    description: "Presentación de excusas para el ejercicio de la labor de jurados de mesas de sufragio ante los Tribunales Electorales Departamentales y ante los Representantes Notarios para voto en el exterior. (segunda vuelta).",
    
  },
  {
    date: "29 de septiembre",
    title: "Conformación de la directiva de mesas de sufragio",
    description: "Conformación de la directiva de mesas de sufragio y capacitación a Jurados Electorales. (segunda vuelta).",
  },
  {
    date: "15 de octubre",
    title: "Publicación del lugar donde se realizará el cómputo departamental",
    description: "Publicación del lugar donde se realizará el cómputo departamental (por los Tribunales Electorales Departamentales) y el cómputo del voto en el exterior (por el Tribunal Supremo Electoral) en el portal WEB del OEP. (segunda vuelta).",
  },
  {
    date: "17 de octubre",
    title: "Prohibición a los medios de comunicación",
    description: "Prohibición a los medios de comunicación sobre la difusión de contenidos que puedan favorecer, perjudicar o dar trato preferencial a alguna organización política o candidatura; o difundir programas que puedan influir en las preferencias electorales",
  },
  {
    date: "19 de octubre",
    title: "Segunda vuelta",
    description:
      "Segunda vuelta presidencial en caso de que ningún candidato logre mayoría absoluta.",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Precargar componentes en el fondo durante el loading
  useEffect(() => {
    // Simular precarga de componentes pesados
    const preloadComponents = async () => {
      // Dar tiempo para que React monte los componentes en el fondo
      await new Promise(resolve => setTimeout(resolve, 100));
    };

    preloadComponents();
  }, []);

  // Efecto para manejar el scroll automático cuando hay un hash en la URL
  useEffect(() => {
    const handleScrollToSection = () => {
      // Solo ejecutar después de que termine el loading
      if (!isLoading) {
        const hash = window.location.hash;
        if (hash) {
          // Pequeño delay para asegurar que los componentes están renderizados
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
              });
            }
          }, 100);
        }
      }
    };

    const handlePopState = () => {
      // Manejar navegación hacia atrás/adelante
      handleScrollToSection();
    };

    // Escuchar cambios en el hash
    window.addEventListener('hashchange', handleScrollToSection);
    
    // Escuchar navegación hacia atrás/adelante
    window.addEventListener('popstate', handlePopState);
    
    // Ejecutar al cargar la página si ya hay un hash
    handleScrollToSection();

    return () => {
      window.removeEventListener('hashchange', handleScrollToSection);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Precargar componentes en el fondo mientras se muestra el loading */}
      {isLoading && (
        <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', visibility: 'hidden' }}>
          <HeroSection />
          <div className="max-w-screen-xl mx-auto">
            <FeaturesGrid features={features} />
            <AnimatedTimeline events={timelineEvents} />
            <CardPartidos />
            <ContentFakeNews />
            <AvoidSharingSection />
            <SurveyDetectionSection />
          </div>
        </div>
      )}

      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}

      {/* Contenido principal */}
      {!isLoading && (
        <>
          {/* Hero Section */}
          <HeroSection />

          <main className="py-16 px-4 sm:px-8">
            <div className="max-w-screen-xl mx-auto">
              {/* Features Grid Section */}
              <div className="mt-16">
                <FeaturesGrid features={features} />
              </div>
              
              
              <div id="timeline" className="mt-32 sm:mt-20">
                <AnimatedTimeline events={timelineEvents} />
              </div>
              
              <div id="parties" className="mt-16 sm:mt-20">
                <h2 className="text-3xl font-bold mb-6 text-center font-round">
                  FINALISTAS SEGUNDA VUELTA
                </h2>
               
                <h3 className="text-base mb-6 text-center">
                  Conoce a los candidatos finalistas que competirán en la segunda vuelta electoral del 19 de octubre
                </h3>
                <CardCandidatos/>
              </div>
              
              {/* Sección de Partidos Políticos */}
              <div id="political-parties" className="mt-32 sm:mt-20">
                <CardPartidos />
              </div>
              
              {/* Sección de Identificación de Noticias Falsas */}
              <div id="fake-news" className="mt-32 sm:mt-20">
                <ContentFakeNews />
              </div>
              
              {/* Sección de Evitar Compartir */}
              <div id="avoid-sharing" className="mt-32 sm:mt-20">
                <AvoidSharingSection />
              </div>
              
              {/* Sección de Detección de Encuestas Falsas */}
              <div id="survey-detection" className="mt-32 sm:mt-20">
                <SurveyDetectionSection />
              </div>
              
              <div className="mt-16 text-center">
                <Button
                  className="bg-gray-900 hover:bg-gray-950 text-white font-bold py-3 px-6 sm:py-4 sm:px-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-base sm:text-xl w-full sm:w-auto"
                  onClick={() =>
                    window.open(" https://chequeabolivia.bo/ ", "_blank")
                  }
                >
                  Fortalecimiento de la integridad de la información
                </Button>
                <p className="mt-6 text-base text-gray-600">
                  Únete a nuestra campaña para combatir las noticias falsas y la
                  desinformación electoral
                </p>
              </div>
              
              
            </div>
          </main>
        </>
      )}
    </>
  );
}