"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Vote,
  History,
  UserCheck,
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
    name: "¿Cuál es la diferencia entre los dos binomios que compiten en esta segunda vuelta?",
    description:
      "Revisa las principales diferencias en sus propuestas, experiencia, valores y liderazgo. Conoce qué representan para el país y qué cambios quieren impulsar.",
    moreInfo:
      "En 2025 no solo elegiremos al próximo Presidente y Vicepresidente de Bolivia. También decidiremos quiénes nos representarán en la Asamblea Legislativa Plurinacional. Serán 130 diputadas y diputados y 36 senadoras y senadores que tendrán en sus manos la creación, modificación y aprobación de leyes que afectarán directamente nuestra vida cotidiana. Los candidatos varían según tu departamento y tu provincia. Cada voto cuenta y es importante, porque durante los próximos cinco años, estas autoridades influirán en decisiones clave sobre nuestra economía, salud, educación, seguridad y justicia.",

    risks: [
      "Pienso que la política no me afecta y por eso no es importante informarse.",
      "Voto porque es obligatorio y para poder hacer transacciones bancarias.",
      "Pienso a menudo que mi voto no hará la diferencia.",
      "Pienso que tengo que votar por alguien que solo solucione lo urgente.",
    ],
    myrisk: [
      "El OEP no brinda información digerible ni en medios de comunicación abiertos.",
    ],
    icon: Vote,
    image: "/imagenes2/IMAGENES PAGINA WEB/bg-1.webp",
    color: "bg-blue-50",
  },
  {
    name: "¿Cuál es el impacto tangible (positivos y negativos) de las propuestas de cada binomio en mi región o sector?",
    description:
      "Observa proyectos vinculados a áreas como salud, educación, empleo o infraestructura en tu departamento o provincia. Analiza si son viables técnicamente, si el financiamiento está asegurado o si ya hay experiencias similares.",
    moreInfo:
      "Observa proyectos vinculados a áreas como salud, educación, empleo o infraestructura en tu departamento o provincia. Analiza si son viables técnicamente, si el financiamiento está asegurado o si ya hay experiencias similares.",

    risks: [
      "Solo conozco a uno o algunos candidatos.",
      "Usé solo un medio para informarme.",
      "Algún candidato tiene procesos por corrupción o malversación.",
      "Ha cambiado de partido de manera oportunista.",
    ],
    myrisk: [
      "Algún miembro del binomio tiene un proceso o más en su contra por corrupción, malversación de fondos, violencia o nepotismo.",
      "Algún miembro del binomio ha cambiado de partido o postura de manera oportunista durante su carrera política.",
    ],
    icon: History,
    image: "/imagenes2/IMAGENES PAGINA WEB/candidatos-bg.webp",
    color: "bg-amber-50",
  },
  {
    name: "¿Son transparentes y confiables las promesas y el historial de estos candidatos?",
    description:
      "Verifica si sus programas y antecedentes fueron fiscalizados (por el TSE, la prensa independiente o plataformas de transparencia como ChequeaBolivia), si han cumplido compromisos previos o enfrentan cuestionamientos documentados.",
    moreInfo:
      "Verifica si sus programas y antecedentes fueron fiscalizados (por el TSE, la prensa independiente o plataformas de transparencia como ChequeaBolivia), si han cumplido compromisos previos o enfrentan cuestionamientos documentados.",
    risks: [
      "Me informo de las propuestas solo en redes sociales y de solo contenido que me hace sentir cómodo o cómoda. ",
    ],
    myrisk: [
      "Todas sus propuestas están dirigidas a atender solo temas urgentes.",
      "Sus propuestas son sumamente densas y tienen contradicciones importantes. ",
      "Su discurso está basado principalmente en el ataque a otro candidato, partido, ideología o gestión gubernamental.",
    ],
    icon: FileCheck,
    image: "/imagenes2/IMAGENES PAGINA WEB/bg-3.webp",
    color: "bg-purple-50",
  },
  {
    name: "¿Cómo mi voto contribuye al equilibrio democrático y al fortalecimiento institucional?",
    moreInfo:
      "Reflexiona más allá del binomio: cómo influye una victoria en términos de control legislativo, gobernabilidad, diálogo interinstitucional y continuidad de políticas públicas en todo el país.",
    description:
      "Reflexiona más allá del binomio: cómo influye una victoria en términos de control legislativo, gobernabilidad, diálogo interinstitucional y continuidad de políticas públicas en todo el país.",
    risks: [
      "No saber quien es el representante parlamentario de mi circunscripcion.",
    ],
    myrisk: [
      "Nunca se involucró en temas políticos o sociales antes en tu localidad, ciudad o región y da la impresión que está buscando solo una pega o trabajo.",
      "Cuando hablan en prensa o cualquier otro medio solo repiten el mismo discurso que el Presidente o Vicepresidente de su partido o alianza política. ",
      "Solo existe información suya en forma de propaganda política.",
    ],
    icon: UserCheck,
    image: "/imagenes2/IMAGENES PAGINA WEB/parlamentario.webp",
    color: "bg-green-50",
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