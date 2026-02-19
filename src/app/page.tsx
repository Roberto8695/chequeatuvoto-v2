"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Vote, History, FileCheck } from "lucide-react";
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
import CandidatosLaPaz from "@/components/ui/candidatos-la-paz";

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
    image: "/Nuevos/img2.webp",
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
    image: "/Nuevos/img3.webp",
    color: "bg-purple-50",
  },
];

const timelineEvents = [
  {
    date: "20 de noviembre de 2025",
    title: "Convocatoria Electoral Subnacional",
    description:
      "Convocatoria a la Elección de Autoridades Políticas Departamentales, Regionales y Municipales (Elecciones Subnacionales 2026) por el Tribunal Supremo Electoral.",
  },
  {
    date: "21 de noviembre de 2025",
    title: "Registro de Entidades para Encuestas",
    description:
      "Registro y habilitación de empresas, medios de comunicación, instituciones académicas y cualquier otra entidad que realice y/o difunda estudios de opinión en materia electoral (encuestas, boca de urna o conteos rápidos) ante los tribunales electorales departamentales.",
  },
  {
    date: "4 de diciembre de 2025",
    title: "Empadronamiento Biométrico Masivo",
    description:
      "Inicio del proceso de empadronamiento biométrico masivo para las Elecciones Subnacionales 2026. Los ciudadanos podrán actualizar y registrar sus datos biométricos en los puntos habilitados.",
  },
  {
    date: "12 de diciembre de 2025",
    title: "Registro de Alianzas Políticas",
    description:
      "Solicitud de registro de alianzas políticas ante el Tribunal Supremo Electoral o los tribunales electorales departamentales para su participación en las Elecciones Subnacionales 2026.",
  },
  {
    date: "17 de diciembre de 2025",
    title: "Inscripción de Candidaturas",
    description:
      "Inscripción de candidaturas de las organizaciones políticas y alianzas, y presentación de documentos habilitantes ante los tribunales electorales departamentales.",
  },
  {
    date: "21 de diciembre de 2025",
    title: "Publicación de Entidades Habilitadas",
    description:
      "Publicación de la lista de empresas especializadas de opinión pública, medios de comunicación, instituciones académicas y cualquier otra entidad habilitada por los tribunales electorales departamentales para realizar estudios de opinión en materia electoral.",
  },
  {
    date: "9 de enero de 2026",
    title: "Publicación de Candidaturas Habilitadas",
    description:
      "Publicación de la lista de candidaturas habilitadas de las organizaciones políticas y/o alianzas, por los tribunales electorales departamentales en el portal web oficial.",
  },
  {
    date: "10 de febrero de 2026",
    title: "Publicación de Medios Autorizados",
    description:
      "Publicación de la lista de medios habilitados para la difusión de propaganda electoral, por el Tribunal Supremo Electoral y tribunales electorales departamentales.",
  },
  {
    date: "20 de febrero de 2026",
    title: "Difusión de la propaganda electoral en medios de comunicación masivos",
    description:
      "",
    diasAntesYDespuesDeLaVotacion: "30 días antes de la votación",
    fechaDesde: "viernes, 20 de febrero de 2026",
    fechaHasta: "miércoles, 18 de marzo de 2026",
    duracion: "27 Días",
    referenciaNormativa: "Ley N° 026. Art. 116 b).",
  },
  {
    date: "1 de marzo de 2026",
    title:
      "Conformación de la directiva de mesas de sufragio y capacitación a Jurados Electorales",
    description:
      "",
    diasAntesYDespuesDeLaVotacion: "21 días antes de la votación",
    fechaDesde: "domingo, 1 de marzo de 2026",
    fechaHasta: "domingo, 22 de marzo de 2026",
    duracion: "22 Días",
    referenciaNormativa: "Ley N° 018. Art. 56 Par. III",
  },
  {
    date: "15 de marzo de 2026",
    title:
      "Publicación y difusión de mesas de sufragio (recintos y asientos electorales)",
    description:
      "",
    diasAntesYDespuesDeLaVotacion: "7 días antes de la votación",
    fechaDesde: "domingo, 15 de marzo de 2026",
    fechaHasta: "domingo, 15 de marzo de 2026",
    duracion: "1 Días",
    referenciaNormativa: "Ley N° 018. Art. 38 Num. 13.",
  },
  {
    date: "20 de marzo de 2026",
    title:
      "Prohibición a los medios de comunicación sobre difusión de contenidos",
    description:
      "",
    diasAntesYDespuesDeLaVotacion: "2 días antes de la votación",
    fechaDesde: "viernes, 20 de marzo de 2026",
    fechaHasta: "domingo, 22 de marzo de 2026",
    duracion: "3 Días",
    referenciaNormativa: "Ley N° 026. Art. 122.",
  },
  {
    date: "22 de marzo de 2026",
    title:
      "Elección de autoridades políticas departamentales, regionales y municipales 2026",
    description:
      "Elección de Autoridades Políticas Departamentales, Regionales y Municipales (Elecciones Subnacionales 2026).",
    diasAntesYDespuesDeLaVotacion: "0 días antes de la votación",
    fechaDesde: "domingo, 22 de marzo de 2026",
    fechaHasta: "domingo, 22 de marzo de 2026",
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

              {/* Timeline Section */}
              <div id="timeline" className="mt-16 sm:mt-20">
                <AnimatedTimeline events={timelineEvents} />
              </div>

              <div id="parties" className="mt-16 sm:mt-20">
                <h2 className="text-3xl font-bold mb-6 text-center font-round">
                 CANDIDATURAS SUBNACIONALES 2026
                </h2>

                <h3 className="text-base mb-6 text-center">
                  Conoce a los candidatos que competirán en las elecciones departamentales, regionales y municipales
                </h3>
                <CardCandidatos />
              </div>

              <div id="candidatos-la-paz" className="mt-16 sm:mt-20">
                <CandidatosLaPaz />
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


