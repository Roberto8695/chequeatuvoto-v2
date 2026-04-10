"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Vote, History, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    name: "¿El candidato promete cosas que realmente puede cumplir?",
    description:
      "Es importante saber si los candidatos no están haciendo promesas vacías simplemente no factibles.",
    moreInfo:
      "Una ciudadanía informada fortalece la democracia. Es lógico que en una segunda vuelta electoral nos dejemos arrastrar por nuestras emociones, pero es muy importante analizar las propuestas para saber cómo gobernaría el próximo binomio en temas como la economía, la justicia y o la seguridad. Más allá de la propaganda, vale la pena evaluar los planes de gobierno.",

    risks: [

      "Sé poco o nada sobre las propuestas de los candidatos.",

      "Me informo de las propuestas solo en redes sociales y solo de contenido que me hace sentir cómodo o cómoda.",

      "Me quedo solo con lo que vi de los candidatos en las entrevistas y me niego a debatir.",

      "Baso mis decisiones en superficialidades y no en propuestas concretas; me influye más un video gracioso o que alguien me caiga bien que las propuestas.",

      "Apoyo propuestas sin preguntarme cómo se implementarían en la práctica.",

      "Creo en promesas que ofrecen soluciones inmediatas a problemas complejos.",

      "No comparo propuestas entre candidatos antes de tomar una decisión.",

    ],
    myrisk: [

      "Promete cielo, mar y tierra sin un sustento real.",

      "No tiene propuestas o estas son mínimas, dedicándose mayormente a atacar a otros.",

      "No explica con claridad cómo se llegará a cumplir lo que propone.",

      "Se basa en datos cuestionables o falsos al momento de presentar sus propuestas.",

      "Muestra desconocimiento sobre sus competencias, mezclando atribuciones del órgano central con las locales.",

      "Cambia sus propuestas constantemente y estas no figuran en su plan de gobierno.",

      "Demuestra que no sabe qué es lo que está escrito en su propio plan de gobierno.",

      "Evita responder preguntas concretas sobre sus propuestas y recurre a generalidades.",

      "Promete resultados inmediatos para problemas estructurales que son complejos.",

      "Presenta un plan de gobierno que es excesivamente genérico.",

      "Apela más a las emociones de la gente que a presentar soluciones concretas.",

    ],
    icon: Vote,
    image: "/images/1.jpg",
    color: "bg-blue-50",
  },
  {
    name: "¿Comprendo en qué consisten las Elecciones Subnacionales?",
    description:
      "Son elecciones en las que elegimos autoridades departamentales y municipales.",
    moreInfo:
      "En estas elecciones se elige principalmente a gobernadores, alcaldes y asambleístas departamentales y concejales municipales. Cada uno cumple funciones distintas: Los gobernadores administran y gestionan el departamento; los alcaldes están a cargo de las alcadías  y los asambleístas y concejales fiscalizan, deliberan y aprueban normas en sus respectivos niveles. Por eso es importante entender qué hace cada cargo antes de evaluar las propuestas.",

    risks: [
      "Pienso que se trata de nuevas elecciones, cuyos resultados cambiarán toda la estructura política. No es importante volver a votar porque ya participé en las elecciones del 17 de agosto. Pienso a menudo que mi voto no hará la diferencia. Pienso que tengo que votar por alguien que solo solucione lo urgente.",

      "Pienso que mi voto no hará la diferencia.",

      "Me da igual quién gane y elijo mi voto al azar.",

      "Solo voy a votar por evitar sanciones, sin haberme informado previamente.",

      "Pienso de antemano que habrá fraude sin tener evidencia alguna de ello.",

      "No comprendo mínimamente la diferencia entre los cargos que se van a elegir.",

      "No verifico la información antes de compartir denuncias sobre el proceso electoral.",
    ],
    myrisk: [],
    icon: History,
    image: "/Nuevos/img4.webp",
    color: "bg-amber-50",
  },
  {
    name: "¿Conozco las candidaturas?",
    description:
      "En estas elecciones habrá numerosas candidaturas, es imprescindible conocer a quienes postulan y revisar sus antecedentes y trayectoria política.",
    moreInfo:
      "Es importante conocer el historial político de los postulantes habilitados para las Elecciones Subnacioanles. Saber si se trata de la primera vez que están en la arena política, si transitaron por otros partidos o si enfrentan denuncias de corrupción en gestiones anteriores ocupando cargos electivos.",
    risks: [
      "No conozco realmente a los candidatos que se postulan.",

      "Conozco a los candidatos únicamente por lo que he leído o visto en las redes sociales.",

      "Hice seguimiento solo a mi candidato favorito y lo que digan los demás no me importa.",

      "Doy por cierta cualquier información sobre un candidato sin contrastarla con otras fuentes.",

      "Idealizo a un candidato y dejo de evaluar críticamente lo que propone.",
      
    ],
    myrisk: [

      "Se niega a ser cuestionado por su pasado político o por denuncias de corrupción en su contra.",

      "Tiene procesos abiertos por denuncias de corrupción o malversación de fondos.",

      "No tiene una identidad política definida y ha cambiado de partido solo por conveniencia.",

      "Evita rendir cuentas sobre lo que hizo en su gestión pasada.",

      "Cambia de partido con frecuencia sin explicar las razones reales de esos cambios.",

      "Nunca asume sus propios errores, prefiriendo culpar a otros.",

      "Cambia su discurso según el público al que se dirige para quedar bien con todos.",

      "Utiliza discursos de odio o estigmatiza a determinados grupos de la sociedad.",

      "Normaliza la violencia verbal o desacredita a la prensa cuando se siente cuestionado.",

      "Rodea su campaña de información falsa o manipulada y no se molesta en corregirla.",

      "Incumple las normas de campaña o las reglas de financiamiento electoral.",

      "Difunde desinformación sobre el proceso electoral sin presentar ninguna evidencia.",

      "Pone en duda los resultados antes de que exista información oficial o pruebas verificables.",

    ],
    icon: FileCheck,
    image: "/images/3.avif",
    color: "bg-purple-50",
  },
];

const timelineEvents = [
  {
    date: "30 de marzo de 2026",
    title: "Convocatoria a Segunda Vuelta",
    description:
      "Convocatoria a Segunda Vuelta Electoral por el Tribunal Supremo Electoral.",
  },
  {
    date: " 31 de marzo de 2026",
    title: "Sorteo público para la selección",
    description:
      "Sorteo público para la selección de Jurados Electorales de mesas de sufragio por los Tribu- nales Electorales Departamentales.",
  },
  {
    date: "31 de marzo de 2026",
    title: "Sorteo de ubicación de las franjas",
    description:
      "Sorteo de ubicación de las franjas y aprobación del diseño de la papeleta de sufragio por los Tribunales Electorales Departamentales",
  },
  {
    date: " 31 de marzo de 2026",
    title: "Difusión o publicación de estudios",
    description:
      "Difusión o publicación de estudios de opinión en materia electoral (encuestas).",
  },
  {
    date: "15 de abril de 2026",
    title: "Publicación del lugar donde se realizará el cómputo departamental",
    description:
      "Publicación del lugar donde se realizará el cómputo departamental, por los Tribunales Elec- torales Departamentales, en el portal WEB del OEP.",
  },
  {
    date: "17 de abril de 2026",
    title: "Prohibición a los medios de comunicación",
    description:
      "Prohibición a los medios de comunicación sobre la difusión de contenidos que puedan fa- vorecer, perjudicar o dar trato preferencial a alguna organización política o candidatura; o difundir programas que puedan influir en las preferencias electorales.",
  },
  
  
  {
    date: "19 de abril de 2026",
    title:
      "Elección de autoridades políticas departamentales, regionales y municipales 2026",
   
  
    diasAntesYDespuesDeLaVotacion: "0 días antes de la votación",
    fechaDesde: "domingo, 19 de abril de 2026",
    fechaHasta: "domingo, 19 de abril de 2026",
    duracion: "1 Días",
    referenciaNormativa: "CPE. Art. 156 y Art. 166. Ley N° 026. Art. 94 - I.",
  },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  // Precargar componentes en el fondo durante el loading
  useEffect(() => {
    // Simular precarga de componentes pesados
    const preloadComponents = async () => {
      // Dar tiempo para que React monte los componentes en el fondo
      await new Promise((resolve) => setTimeout(resolve, 100));
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
                behavior: "smooth",
                block: "start",
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
    window.addEventListener("hashchange", handleScrollToSection);

    // Escuchar navegación hacia atrás/adelante
    window.addEventListener("popstate", handlePopState);

    // Ejecutar al cargar la página si ya hay un hash
    handleScrollToSection();

    return () => {
      window.removeEventListener("hashchange", handleScrollToSection);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Precargar componentes en el fondo mientras se muestra el loading */}
      {isLoading && (
        <div
          style={{
            position: "absolute",
            left: "-9999px",
            top: "-9999px",
            visibility: "hidden",
          }}
        >
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
              <div id="timeline" className="mt-16 sm:mt-20">
                <AnimatedTimeline events={timelineEvents} />
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


