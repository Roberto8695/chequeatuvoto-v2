"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Users,
  MessageSquare,
  Vote,
  History,
  UserCheck,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardCandidatos } from "./components/card-candidatos";
import HeroSection from "@/components/ui/hero-section";
import FeaturesGrid from "@/components/ui/features-grid";
import AnimatedTimeline from "@/components/ui/animated-timeline";
import LoadingScreen from "@/components/ui/loading-screen";
import Link from "next/link";

const features = [
  {
    name: "¿Sé para qué son estas elecciones? ¿Entiendo la importancia de mi voto?",
    description:
      "Este 2025 elegiremos al Presidente, Vicepresidente y representantes de la Asamblea Legislativa Plurinacional.",
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
    image: "/imagenes2/IMAGENES PAGINA WEB/bg-1.jpg",
    color: "bg-blue-50",
  },
  {
    name: "¿Conozco a TODOS los binomios presidenciales? ¿Conozco sus historiales políticos?",
    description:
      "Es imprescindible conocer a todos los candidatos y sus historiales políticos.",
    moreInfo:
      "Muchos candidatos y candidatas tienen un pasado que no necesariamente los define actualmente, sin embargo, si nos puede dar ciertas luces del comportamiento político. Algunos han pasado de partido en partido según su conveniencia o interés, otros han sido procesados o están siendo procesados penalmente, otros han creado grandes fortunas a través de ilícitos. Saber esta información nos puede ayudar a tener una idea de si lo que prometen tiene coherencia con lo que hacen, hicieron o harán y su discurso de cara a la gente.",

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
    image: "/imagenes2/IMAGENES PAGINA WEB/candidatos-bg.png",
    color: "bg-amber-50",
  },
  {
    name: "¿Las propuestas de los candidatos son realistas y están bien fundamentadas?",
    description:
      "Es importante saber si las propuestas son factibles y tienen fundamentos sólidos.",
    moreInfo:
      "Una ciudadanía informada fortalece la democracia. Muchas veces votamos por intuición o 'al tink'azo', pero es clave ir más allá: entender qué se propone y, sobre todo, cómo se piensa lograr. Analizar la lógica y viabilidad de las propuestas ayuda a imaginar cómo gobernarían en temas como trabajo, salud, educación, justicia y seguridad. Más allá de la propaganda, vale la pena evaluar perfiles, antecedentes y planes concretos.",
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
    name: "¿Conozco a los candidatos a parlamentarios que representarán mi departamento y provincia?",
    moreInfo:
      "Los parlamentarios que son los miembros de la Asamblea Legislativa Plurinacional, o sea diputados y senadores son usualmente líderes más o menos cercanos a nosotros. Es fundamental intentar indagar en su historial político, informarse no solo con propaganda creada por ellos mismos. ",
    description:
      "Es clave investigar sus antecedentes y evitar votar solo por propaganda.",
    risks: [
      "No saber quien es el representante parlamentario de mi circunscripcion.",
    ],
    myrisk: [
      "Nunca se involucró en temas políticos o sociales antes en tu localidad, ciudad o región y da la impresión que está buscando solo una pega o trabajo.",
      "Cuando hablan en prensa o cualquier otro medio solo repiten el mismo discurso que el Presidente o Vicepresidente de su partido o alianza política. ",
      "Solo existe información suya en forma de propaganda política.",
    ],
    icon: UserCheck,
    image: "/imagenes2/IMAGENES PAGINA WEB/parlamentario.png",
    color: "bg-green-50",
  },
];

const timelineEvents = [
  {
    date: "3 de abril",
    title: "Convocatoria a Elecciones Generales",
    description:
      "Convocatoria realizada por el Tribunal Supremo Electoral para las elecciones generales de 2025.",
  },
  {
    date: "18 de abril al 7 de mayo",
    title: "Empadronamiento biométrico masivo",
    description:
      "Periodo en el que los ciudadanos pueden registrarse en el padrón electoral biométrico.",
  },
  {
    date: "18 de abril",
    title: "Último día para registro de alianzas",
    description:
      "Fecha límite para que las alianzas políticas soliciten su registro ante el TSE.",
  },
  {
    date: "9 al 19 de mayo",
    title: "Presentación del programa de gobierno",
    description:
      "Periodo para que partidos y alianzas presenten su programa ante el Tribunal Supremo Electoral.",
  },
  {
    date: "14 al 19 de mayo",
    title: "Inscripción de candidaturas",
    description:
      "Inscripción oficial de candidaturas y entrega de documentos habilitantes ante el TSE.",
  },
  {
    date: "19 de mayo",
    title: "Renuncia a cargos públicos",
    description:
      "Fecha límite para que los candidatos renuncien a cargos públicos y lo comuniquen al TSE.",
  },
  {
    date: "25 de mayo",
    title: "Publicación de programas de gobierno",
    description:
      "Los programas presentados se publican en los portales del TSE y TEDs.",
  },
  {
    date: "6 de junio",
    title: "Publicación de candidaturas habilitadas",
    description: "El TSE publica la lista oficial de candidaturas habilitadas.",
  },
  {
    date: "13 de julio",
    title: "Publicación de candidaturas con sustitución",
    description: "El TSE publica las candidaturas modificadas por renuncia.",
  },
  {
    date: "17 de agosto",
    title: "Elecciones generales",
    description: "Día oficial para las elecciones generales 2025.",
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
              <div className="mt-12 flex flex-wrap justify-center gap-6">
                <Link href="/about">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-lg px-8 py-6"
                  >
                    <div className="absolute inset-0 bg-gray-800/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-md"></div>
                    <Users className="mr-3 h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                    <span className="relative z-10">Quiénes Somos</span>
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="group relative overflow-hidden border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white text-lg px-8 py-6"
                  >
                    <div className="absolute inset-0 bg-gray-800/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-md"></div>
                    <MessageSquare className="mr-3 h-6 w-6 transition-transform group-hover:scale-110 duration-300" />
                    <span className="relative z-10">Buzón de Sugerencias</span>
                  </Button>
                </Link>
              </div>
              
              <div id="timeline" className="mt-32 sm:mt-20">
                <AnimatedTimeline events={timelineEvents} />
              </div>
              
              <div id="parties" className="mt-16 sm:mt-20">
                <h2 className="text-3xl font-bold mb-6 text-center font-round">
                  CANDIDATOS
                </h2>
                <h3 className="text-base mb-6 text-center">
                  Este espacio se llenará a medida que se oficialicen los candidatos
                  y candidatas.
                </h3>
                <h3 className="text-base mb-6 text-center">
                  Aquí encontrarás información sobre procesos penales, denuncias
                  contra ellos y ellas, y su recorrido político en general.
                </h3>
                <CardCandidatos/>
              </div>
              
              <div id="parties" className="mt-16 sm:mt-20">
                <h2 className="text-3xl font-bold mb-6 text-center font-round">
                  PARTIDOS POLÍTICOS, AGRUPACIONES CIUDADANAS Y ORGANIZACIONES DE
                  NACIONES Y PUEBLOS IOC
                </h2>
                <h3 className="text-base mb-6 text-center">
                  Este espacio se llenará a medida que se oficialicen las
                  candidaturas.
                </h3>
                <h3 className="text-base mb-6 text-center">
                  Aquí encontrarás información sistematizada sobre sus propuestas de
                  gobierno.
                </h3>
              </div>
              
              <div className="mt-16 text-center">
                <Button
                  className="bg-gray-900 hover:bg-gray-950 text-white font-bold py-4 px-10 rounded-lg shadow-lg transform transition-transform hover:scale-105 text-xl"
                  onClick={() =>
                    window.open(" https://chequeabolivia.bo/ ", "_blank")
                  }
                >
                  Lucha contra la desinformación
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
